---

order: 15
author: zhiyu1998
title: 操作系统
category:
  - 八股文
---
# 基于面试题的一些思考

## 前言
因为这些思考可能是3.5/4 GPT生成的，不一定正确，后期会根据自己的知识增长进行一定的修改，所以酌情阅读！

## Java的native关键字
Java的native关键字用于表示一个方法的实现是由底层的本地代码（通常是C或C++）提供的，而不是Java代码实现的。因此，该方法的实现在编译时并不会被包含在生成的Java字节码中。

在使用native关键字声明一个方法时，该方法只包含方法签名，而没有方法体。例如：

```java
public native void myMethod();
```

这里的myMethod()方法只有方法签名，没有方法体。实际的方法实现将由本地代码提供。

使用native关键字可以方便地与底层系统进行交互，例如使用本地库、操作系统API或硬件。但需要注意的是，使用本地代码会牺牲一些Java语言的优势，例如跨平台性、类型安全性和自动内存管理。因此，应该仔细考虑是否真正需要使用native关键字来实现特定的功能。

### native里面的代码也是Java写吗还是C
native关键字表示一个方法的实现是由底层的本地代码提供的，而不是Java代码实现的。因此，native方法的实现通常是由C、C++或其他本地语言编写的。

在Java中，native方法的声明只是一种协议，告诉编译器该方法的实现将由外部本地代码提供。在运行时，Java虚拟机会根据方法的签名在本地库中查找对应的实现，并调用它来完成该方法的功能。

例如，如果我们有以下的native方法声明：

```java
public native void myMethod();
```
则需要在本地库中提供对应的实现，例如C语言的实现可以是：

```c
#include <stdio.h>
#include "MyClass.h"

JNIEXPORT void JNICALL Java_MyClass_myMethod(JNIEnv *env, jobject obj) {
printf("Hello, world!\n");
}
```
这个C语言函数与Java方法签名匹配，并使用了JNIEXPORT和JNICALL宏来声明它是一个本地实现。在编译和链接这个本地库时，需要使用特殊的编译器和链接器选项，以便在运行时将它与Java代码连接起来。

需要注意的是，Java和本地语言之间的交互涉及到跨语言调用，需要遵循特定的调用约定和内存管理规则，因此需要仔细编写本地代码，以确保正确性和可靠性。

### 例子Java_MyClass_myMethod我能理解为在MyClass类内的myMethod方法吗，前面的Java是必须的吗？
Java_MyClass_myMethod是一个本地方法的函数名，它的命名规则通常遵循以下格式：
```java
Java_全限定类名_方法名
```
其中，全限定类名是指该本地方法所属的Java类的完整限定名（即包名+类名），使用下划线替代了点号。如果该方法是一个实例方法，则在类名之后加上下划线和字符串1，表示该方法的第一个参数是jobject类型的实例对象。

因此，在我们的例子中，假设myMethod()方法是在MyClass类中声明的，全限定类名应该是MyClass。Java_MyClass_myMethod表示的就是MyClass.myMethod()方法的本地实现函数名。

至于前面的Java_前缀，它是必须的，因为它是一种约定，用于区分Java类的完整限定名和本地方法的函数名。这样做可以避免函数名冲突和歧义。


## 关于泛型的一些理解

### 解释下这三个T分别代表什么意思？

```java
public static <T> T copy(Class<T> clazz, Object source) {
	if (source == null) {
		return null;
	}
	T obj = null;
	try {
		obj = clazz.newInstance();
	} catch (Exception e) {
		e.printStackTrace();
		return null;
	}
	BeanUtils.copyProperties(source, obj);
	return obj;
}

```
**初步解释**：当我们声明泛型类型参数时，需要在尖括号中使用一个标识符来表示该参数。通常情况下，这个标识符是单个大写字母，通常使用T、E、K和V等。

在Java方法签名中，我们可以使用泛型类型参数来指定方法的返回类型或参数类型。例如，在`public static <T> T copy(Class<T> clazz, Object source) `方法中，`<T>`是泛型类型参数的声明部分，用于指定该方法将接受一个Class对象和一个Object对象作为参数，并返回一个与clazz参数指定的类相同类型的对象。

而第二个T则是泛型类型参数所代表的的实际类型，即在调用此方法时，T将被替换成实际的类型。在copy方法中，T的实际类型由参数clazz指定，因此方法会根据传入的clazz参数创建一个clazz类型的对象，并返回该对象。

总之，`<T>`是泛型类型参数的声明部分，用于指定方法将接受和返回什么类型，而T则是泛型类型参数所代表的实际类型。
 


### 进一步思考：如果没有`<T>`可以吗？
如果在编译器中不带`<T>`，那么就会报错：`Cannot resolve symbol 'T'`
```java
public T test(Class clazz) {
	T obj = null;
	try {
		obj = clazz.newInstance();
	} catch (Exception e) {
		e.printStackTrace();
	}
	return obj;
}
```

### `<T>`就是接收参数的类型吗
这里的接收参数指的是：`Class<T> clazz, Object source`
`<T>`不是接收参数的类型，它实际上是一种声明泛型类型参数的方式。在Java中，使用尖括号指定一个或多个泛型类型参数，并将其用于方法签名、类定义或接口定义中。

在`public static <T> T copy(Class<T> clazz, Object source)`这个方法中，`<T>`指定了一个泛型类型参数，该参数可以随意替换成具体的类型。在调用该方法时，我们需要传递一个Class`<T>`类型的clazz参数和一个Object类型的source参数。然后，根据clazz参数指定的类型创建一个新对象，并将source对象的属性值复制到新对象中。

这里的T并不是一个具体的类型，而是声明方法所接受和返回的类型参数的占位符。在调用该方法时，T会被替换成具体的类型，以告诉编译器如何解析该方法的参数和返回值类型。

### 方法中的static `<T>`中的`<T>`，与Class`<T>` clazz中的`<T>`是同一个意思吗

static `<T>`和Class`<T>`中的`<T>`并不是相同的意思。在Java中，`<T>`或其他标识符（如E、K、V等）用于声明泛型类型参数。通过使用泛型类型参数，我们可以编写更通用、可重用的代码，以处理不同类型的数据。

在`public static <T> T copy(Class<T> clazz, Object source)`方法中，`<T>`声明了一个名为T的泛型类型参数。它指示该方法将接受一个Class`<T>`类型的clazz参数，并返回一个T类型的对象。这里的`<T>`与后面的Class`<T>`是独立的定义，它们只是两个使用了相同标识符名称的不同类型声明而已。

### 为什么不能写成static T `<T>`
如果尝试将方法签名写成`static T <T>`, 则会出现语法错误，因为在Java中，使用尖括号来声明泛型类型参数，不能将其放在返回类型之前。正确的方法声明应该是 `static <T> T copy(Class<T> clazz, Object source)`，即在返回类型之前使用尖括号声明泛型类型参数T。

### static `<T>`中T声明了T的泛型类型参数，Class`<T>`才能接收一个为T类型的clazz吗
在声明`static <T> T copy(Class<T> clazz, Object source)`方法时，`<T>`是泛型类型参数的声明部分，用于指定该方法将接受一个Class对象和一个Object对象作为参数，并返回一个与clazz参数指定的类相同类型的对象。

同时，在方法的第一个参数中，clazz是一个Class`<T>`类型的参数，表示clazz参数传递的Class对象是T类型的。这里的T是在方法签名中声明的泛型类型参数，它可以在方法调用时被替换成实际的类型。因此，clazz参数将始终是一个Class对象，其类型与T相同。

通过使用泛型类型参数T，我们可以定义一个通用的方法，它能够接受不同类型的Class对象作为参数，并返回相应类型的对象。这使得我们的代码更加灵活和通用，可以处理多种类型的数据。
 
 总结
在声明泛型方法的时候，尤其返回类型是泛型的时候，需要声明`<T>`
* 第一个`<T>`
* Class`<T>`
```java
public <T> T test(Class<T> clazz) {
	T obj = null;
	try {
		obj = clazz.newInstance();
	} catch (Exception e) {
		e.printStackTrace();
	}
	return obj;
}
```
进一步说明，如果T改成其他的例如String是没有问题的，与泛型类型参数没有关系
```java
public <T> String test(Class<T> clazz) {
	T obj = null;
	try {
		obj = clazz.newInstance();
	} catch (Exception e) {
		e.printStackTrace();
	}
	return "13";
}
```
进一步说明，如果有两个泛型类型参数
* 第一个`<S, T>`是需要两种泛型类型参数
* List`<T>`说明返回的类型是T类型
* `List<S> sources` 是第一种类型
* `Supplier<T> target` 是第二种类型
```java
public static <S, T> List<T> copyListProperties(List<S> sources, Supplier<T> target, BeanCopyUtilCallBack<S, T> callBack) {
	List<T> list = new ArrayList<>(sources.size());
	for (S source : sources) {
		T t = target.get();
		copyProperties(source, t);
		list.add(t);
		if (callBack != null) {
			// 回调
			callBack.callBack(source, t);
		}
	}
	return list;
}
```