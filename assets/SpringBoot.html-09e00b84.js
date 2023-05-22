const e=JSON.parse('{"key":"v-d70b4bf4","path":"/Java/fm/SpringBoot.html","title":"SpringBoot","lang":"zh-CN","frontmatter":{"order":4,"title":"SpringBoot","category":["Spring"],"description":"Spring-Boot-Note (#spring-boot-note); 环境搭建 & 简化部署 (#环境搭建--简化部署); 环境搭建 (#环境搭建); 简化部署 (#简化部署); @SpringBootApplication启动原理 (#springbootapplication启动原理); IDEA 快速构建 (#idea-快速构建); YAM...","head":[["meta",{"property":"og:url","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/Java/fm/SpringBoot.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"SpringBoot"}],["meta",{"property":"og:description","content":"Spring-Boot-Note (#spring-boot-note); 环境搭建 & 简化部署 (#环境搭建--简化部署); 环境搭建 (#环境搭建); 简化部署 (#简化部署); @SpringBootApplication启动原理 (#springbootapplication启动原理); IDEA 快速构建 (#idea-快速构建); YAM..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-06T15:04:01.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringBoot"}],["meta",{"property":"article:author","content":"zhiyu1998"}],["meta",{"property":"article:modified_time","content":"2023-04-06T15:04:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot\\",\\"image\\":[\\"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/\\"],\\"dateModified\\":\\"2023-04-06T15:04:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zhiyu1998\\",\\"url\\":\\"https://github.com/zhiyu1998\\"}]}"]]},"headers":[{"level":2,"title":"环境搭建 & 简化部署","slug":"环境搭建-简化部署","link":"#环境搭建-简化部署","children":[{"level":3,"title":"环境搭建","slug":"环境搭建","link":"#环境搭建","children":[]},{"level":3,"title":"简化部署","slug":"简化部署","link":"#简化部署","children":[]}]},{"level":2,"title":"@SpringBootApplication启动原理","slug":"springbootapplication启动原理","link":"#springbootapplication启动原理","children":[]},{"level":2,"title":"IDEA 快速构建","slug":"idea-快速构建","link":"#idea-快速构建","children":[]},{"level":2,"title":"YAML","slug":"yaml","link":"#yaml","children":[{"level":3,"title":"YAML基本语法","slug":"yaml基本语法","link":"#yaml基本语法","children":[]}]},{"level":2,"title":"单元测试","slug":"单元测试","link":"#单元测试","children":[{"level":3,"title":"SSM","slug":"ssm","link":"#ssm","children":[]},{"level":3,"title":"SpringBoot","slug":"springboot","link":"#springboot","children":[]}]},{"level":2,"title":"@ConfigurationProperties&@Value","slug":"configurationproperties-value","link":"#configurationproperties-value","children":[]},{"level":2,"title":"@PropertySource&@ImportResource","slug":"propertysource-importresource","link":"#propertysource-importresource","children":[{"level":3,"title":"【推荐】自己创建个配置类","slug":"【推荐】自己创建个配置类","link":"#【推荐】自己创建个配置类","children":[]},{"level":3,"title":"配置文件的占位符","slug":"配置文件的占位符","link":"#配置文件的占位符","children":[]},{"level":3,"title":"多Profile支持","slug":"多profile支持","link":"#多profile支持","children":[]}]},{"level":2,"title":"加载配置文件的位置和优先级","slug":"加载配置文件的位置和优先级","link":"#加载配置文件的位置和优先级","children":[]},{"level":2,"title":"自动配置原理","slug":"自动配置原理","link":"#自动配置原理","children":[{"level":3,"title":"自动配置原理","slug":"自动配置原理-1","link":"#自动配置原理-1","children":[]},{"level":3,"title":"以HttpEncodingAutoConfiguration为例解释自动配置原理","slug":"以httpencodingautoconfiguration为例解释自动配置原理","link":"#以httpencodingautoconfiguration为例解释自动配置原理","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"@Conditional相关注解和Debug","slug":"conditional相关注解和debug","link":"#conditional相关注解和debug","children":[]},{"level":2,"title":"日志框架SL4J","slug":"日志框架sl4j","link":"#日志框架sl4j","children":[{"level":3,"title":"其他日志框架转换为SL4J","slug":"其他日志框架转换为sl4j","link":"#其他日志框架转换为sl4j","children":[]},{"level":3,"title":"SpringBoot和日志关系","slug":"springboot和日志关系","link":"#springboot和日志关系","children":[]},{"level":3,"title":"日志的配置","slug":"日志的配置","link":"#日志的配置","children":[]},{"level":3,"title":"指定日志框架","slug":"指定日志框架","link":"#指定日志框架","children":[]},{"level":3,"title":"切换日志框架","slug":"切换日志框架","link":"#切换日志框架","children":[]}]},{"level":2,"title":"静态资源映射规则","slug":"静态资源映射规则","link":"#静态资源映射规则","children":[]},{"level":2,"title":"模板引擎Thymeleaf","slug":"模板引擎thymeleaf","link":"#模板引擎thymeleaf","children":[]},{"level":2,"title":"SpringMVC自动配置原理","slug":"springmvc自动配置原理","link":"#springmvc自动配置原理","children":[{"level":3,"title":"默认配置","slug":"默认配置","link":"#默认配置","children":[]},{"level":3,"title":"ContentNegotiatingViewResolver","slug":"contentnegotiatingviewresolver","link":"#contentnegotiatingviewresolver","children":[]},{"level":3,"title":"HttpMessageConverters","slug":"httpmessageconverters","link":"#httpmessageconverters","children":[]},{"level":3,"title":"MessageCodesResolver","slug":"messagecodesresolver","link":"#messagecodesresolver","children":[]},{"level":3,"title":"SpringBoot在SpringMVC的配置模式","slug":"springboot在springmvc的配置模式","link":"#springboot在springmvc的配置模式","children":[]},{"level":3,"title":"接管SpringBoot的SpringMVC","slug":"接管springboot的springmvc","link":"#接管springboot的springmvc","children":[]},{"level":3,"title":"小结：","slug":"小结-1","link":"#小结-1","children":[]}]},{"level":2,"title":"国际化","slug":"国际化","link":"#国际化","children":[{"level":3,"title":"使用thymeleaf国际化","slug":"使用thymeleaf国际化","link":"#使用thymeleaf国际化","children":[]},{"level":3,"title":"SpringBoot区域信息解析器","slug":"springboot区域信息解析器","link":"#springboot区域信息解析器","children":[]},{"level":3,"title":"自定义国际化","slug":"自定义国际化","link":"#自定义国际化","children":[]}]},{"level":2,"title":"拦截器","slug":"拦截器","link":"#拦截器","children":[]},{"level":2,"title":"错误处理原理","slug":"错误处理原理","link":"#错误处理原理","children":[]},{"level":2,"title":"定制错误页面和JSON错误数据","slug":"定制错误页面和json错误数据","link":"#定制错误页面和json错误数据","children":[{"level":3,"title":"定制一个JSON数据","slug":"定制一个json数据","link":"#定制一个json数据","children":[]}]},{"level":2,"title":"嵌入式Servlet","slug":"嵌入式servlet","link":"#嵌入式servlet","children":[{"level":3,"title":"Spring两种配置方式：","slug":"spring两种配置方式","link":"#spring两种配置方式","children":[]},{"level":3,"title":"嵌入式Servlet两种修改相关配置","slug":"嵌入式servlet两种修改相关配置","link":"#嵌入式servlet两种修改相关配置","children":[]},{"level":3,"title":"注册三大组件","slug":"注册三大组件","link":"#注册三大组件","children":[]}]},{"level":2,"title":"源码刨析 嵌入式Servlet原理","slug":"源码刨析-嵌入式servlet原理","link":"#源码刨析-嵌入式servlet原理","children":[{"level":3,"title":"配置是如何修改原理","slug":"配置是如何修改原理","link":"#配置是如何修改原理","children":[]},{"level":3,"title":"小结：","slug":"小结-2","link":"#小结-2","children":[]}]},{"level":2,"title":"嵌入式Servlet自动配置原理","slug":"嵌入式servlet自动配置原理","link":"#嵌入式servlet自动配置原理","children":[]},{"level":2,"title":"整合JDBC","slug":"整合jdbc","link":"#整合jdbc","children":[{"level":3,"title":"自动配置原理","slug":"自动配置原理-2","link":"#自动配置原理-2","children":[]}]},{"level":2,"title":"整合Druid","slug":"整合druid","link":"#整合druid","children":[]},{"level":2,"title":"整合Mybatis","slug":"整合mybatis","link":"#整合mybatis","children":[{"level":3,"title":"Maven","slug":"maven","link":"#maven","children":[]},{"level":3,"title":"使用注解","slug":"使用注解","link":"#使用注解","children":[]},{"level":3,"title":"使用配置文件","slug":"使用配置文件","link":"#使用配置文件","children":[]}]},{"level":2,"title":"SpringBoot启动原理","slug":"springboot启动原理","link":"#springboot启动原理","children":[{"level":3,"title":"第一步：创建SpringApplication对象","slug":"第一步-创建springapplication对象","link":"#第一步-创建springapplication对象","children":[]},{"level":3,"title":"第二步：启动应用","slug":"第二步-启动应用","link":"#第二步-启动应用","children":[]}]},{"level":2,"title":"（基于原理的测试笔记）测试启动的四个类","slug":"基于原理的测试笔记-测试启动的四个类","link":"#基于原理的测试笔记-测试启动的四个类","children":[]},{"level":2,"title":"自定义starters【暂时无法理解】","slug":"自定义starters【暂时无法理解】","link":"#自定义starters【暂时无法理解】","children":[]},{"level":2,"title":"SpringBoot缓存基本使用","slug":"springboot缓存基本使用","link":"#springboot缓存基本使用","children":[{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"几个属性介绍","slug":"几个属性介绍","link":"#几个属性介绍","children":[]}]},{"level":2,"title":"缓存自动配置原理","slug":"缓存自动配置原理","link":"#缓存自动配置原理","children":[{"level":3,"title":"以@Cacheable为例","slug":"以-cacheable为例","link":"#以-cacheable为例","children":[]},{"level":3,"title":"小结：","slug":"小结-3","link":"#小结-3","children":[]}]},{"level":2,"title":"@CachePut的使用","slug":"cacheput的使用","link":"#cacheput的使用","children":[]},{"level":2,"title":"@CacheEvict 清除缓存","slug":"cacheevict-清除缓存","link":"#cacheevict-清除缓存","children":[]},{"level":2,"title":"@Caching和@CacheConfig","slug":"caching和-cacheconfig","link":"#caching和-cacheconfig","children":[{"level":3,"title":"@Caching","slug":"caching","link":"#caching","children":[]},{"level":3,"title":"@CacheConfig","slug":"cacheconfig","link":"#cacheconfig","children":[]}]},{"level":2,"title":"整合缓存中间件Redis","slug":"整合缓存中间件redis","link":"#整合缓存中间件redis","children":[]},{"level":2,"title":"自定义RedisCacheManager","slug":"自定义rediscachemanager","link":"#自定义rediscachemanager","children":[]},{"level":2,"title":"SpringSecurity的简单使用","slug":"springsecurity的简单使用","link":"#springsecurity的简单使用","children":[{"level":3,"title":"Thymeleaf整合SpringSecurity","slug":"thymeleaf整合springsecurity","link":"#thymeleaf整合springsecurity","children":[]},{"level":3,"title":"记住我","slug":"记住我","link":"#记住我","children":[]},{"level":3,"title":"定制自己的登录页面","slug":"定制自己的登录页面","link":"#定制自己的登录页面","children":[]}]},{"level":2,"title":"Shiro的简单使用","slug":"shiro的简单使用","link":"#shiro的简单使用","children":[{"level":3,"title":"开始配置一个shiro","slug":"开始配置一个shiro","link":"#开始配置一个shiro","children":[]},{"level":3,"title":"整合Shiro启动器","slug":"整合shiro启动器","link":"#整合shiro启动器","children":[]},{"level":3,"title":"扩展：","slug":"扩展","link":"#扩展","children":[]}]}],"git":{"createdTime":1680621124000,"updatedTime":1680793441000,"contributors":[{"name":"RrOrange","email":"542716863@qq.com","commits":3}]},"readingTime":{"minutes":58.77,"words":17630},"filePathRelative":"Java/fm/SpringBoot.md","localizedDate":"2023年4月4日","autoDesc":true,"excerpt":""}');export{e as data};
