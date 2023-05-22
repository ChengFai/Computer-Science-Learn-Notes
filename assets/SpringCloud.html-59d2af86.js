const l=JSON.parse('{"key":"v-7fbb6a76","path":"/Java/fm/SpringCloud.html","title":"SpringCloud","lang":"zh-CN","frontmatter":{"order":7,"title":"SpringCloud","category":["Spring","分布式"],"description":"观看地址：https://www.bilibili.com/video/BV18E411x7eT 什么是微服务架构： 1597213385700 SpringCloud 是微服务一站式服务解决方案，微服务全家桶。它是微服务开发的主流技术栈。它采用了名称，而非数字版本号。 springCloud 和 springCloud Alibaba 目前是最主流的...","head":[["meta",{"property":"og:url","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/Java/fm/SpringCloud.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"SpringCloud"}],["meta",{"property":"og:description","content":"观看地址：https://www.bilibili.com/video/BV18E411x7eT 什么是微服务架构： 1597213385700 SpringCloud 是微服务一站式服务解决方案，微服务全家桶。它是微服务开发的主流技术栈。它采用了名称，而非数字版本号。 springCloud 和 springCloud Alibaba 目前是最主流的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-06T15:04:01.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringCloud"}],["meta",{"property":"article:author","content":"zhiyu1998"}],["meta",{"property":"article:modified_time","content":"2023-04-06T15:04:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringCloud\\",\\"image\\":[\\"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/\\"],\\"dateModified\\":\\"2023-04-06T15:04:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zhiyu1998\\",\\"url\\":\\"https://github.com/zhiyu1998\\"}]}"]]},"headers":[{"level":2,"title":"Cloud简介","slug":"cloud简介","link":"#cloud简介","children":[]},{"level":2,"title":"父工程pom配置","slug":"父工程pom配置","link":"#父工程pom配置","children":[]},{"level":2,"title":"第一个微服务架构","slug":"第一个微服务架构","link":"#第一个微服务架构","children":[{"level":3,"title":"提供者","slug":"提供者","link":"#提供者","children":[]},{"level":3,"title":"热部署配置","slug":"热部署配置","link":"#热部署配置","children":[]},{"level":3,"title":"消费者","slug":"消费者","link":"#消费者","children":[]},{"level":3,"title":"工程重构","slug":"工程重构","link":"#工程重构","children":[]}]},{"level":2,"title":"Eureka","slug":"eureka","link":"#eureka","children":[{"level":3,"title":"概念和理论","slug":"概念和理论","link":"#概念和理论","children":[]},{"level":3,"title":"Server模块","slug":"server模块","link":"#server模块","children":[]},{"level":3,"title":"提供者","slug":"提供者-1","link":"#提供者-1","children":[]},{"level":3,"title":"消费者","slug":"消费者-1","link":"#消费者-1","children":[]},{"level":3,"title":"Eureka 集群","slug":"eureka-集群","link":"#eureka-集群","children":[]},{"level":3,"title":"提供者集群","slug":"提供者集群","link":"#提供者集群","children":[]},{"level":3,"title":"actuator信息配置","slug":"actuator信息配置","link":"#actuator信息配置","children":[]},{"level":3,"title":"服务发现Discovery","slug":"服务发现discovery","link":"#服务发现discovery","children":[]},{"level":3,"title":"Eureka 自我保护机制","slug":"eureka-自我保护机制","link":"#eureka-自我保护机制","children":[]}]},{"level":2,"title":"Zookeeper","slug":"zookeeper","link":"#zookeeper","children":[{"level":3,"title":"提供者","slug":"提供者-2","link":"#提供者-2","children":[]},{"level":3,"title":"消费者","slug":"消费者-2","link":"#消费者-2","children":[]}]},{"level":2,"title":"Consul","slug":"consul","link":"#consul","children":[{"level":3,"title":"安装并运行","slug":"安装并运行","link":"#安装并运行","children":[]},{"level":3,"title":"提供者","slug":"提供者-3","link":"#提供者-3","children":[]},{"level":3,"title":"消费者","slug":"消费者-3","link":"#消费者-3","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"Ribbon","slug":"ribbon","link":"#ribbon","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]},{"level":3,"title":"轮询算法原理","slug":"轮询算法原理","link":"#轮询算法原理","children":[]}]},{"level":2,"title":"OpenFeign","slug":"openfeign","link":"#openfeign","children":[{"level":3,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"超时控制","slug":"超时控制","link":"#超时控制","children":[]},{"level":3,"title":"开启日志打印","slug":"开启日志打印","link":"#开启日志打印","children":[]}]},{"level":2,"title":"概述","slug":"概述-1","link":"#概述-1","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[{"level":3,"title":"模拟高并发","slug":"模拟高并发","link":"#模拟高并发","children":[]},{"level":3,"title":"服务降级","slug":"服务降级","link":"#服务降级","children":[]},{"level":3,"title":"全局服务降级","slug":"全局服务降级","link":"#全局服务降级","children":[]},{"level":3,"title":"服务熔断","slug":"服务熔断","link":"#服务熔断","children":[]}]},{"level":2,"title":"Hystrix DashBoard","slug":"hystrix-dashboard","link":"#hystrix-dashboard","children":[{"level":3,"title":"监控实战","slug":"监控实战","link":"#监控实战","children":[]}]},{"level":2,"title":"Gateway","slug":"gateway","link":"#gateway","children":[{"level":3,"title":"简介","slug":"简介-1","link":"#简介-1","children":[]},{"level":3,"title":"入门配置","slug":"入门配置","link":"#入门配置","children":[]},{"level":3,"title":"动态配置","slug":"动态配置","link":"#动态配置","children":[]},{"level":3,"title":"Predicate","slug":"predicate","link":"#predicate","children":[]},{"level":3,"title":"Filter","slug":"filter","link":"#filter","children":[]}]},{"level":2,"title":"Config","slug":"config","link":"#config","children":[{"level":3,"title":"概述","slug":"概述-2","link":"#概述-2","children":[]},{"level":3,"title":"服务端配置","slug":"服务端配置","link":"#服务端配置","children":[]},{"level":3,"title":"客户端配置","slug":"客户端配置","link":"#客户端配置","children":[]},{"level":3,"title":"动态刷新","slug":"动态刷新","link":"#动态刷新","children":[]}]},{"level":2,"title":"Bus","slug":"bus","link":"#bus","children":[{"level":3,"title":"安装RabbitMQ","slug":"安装rabbitmq","link":"#安装rabbitmq","children":[]},{"level":3,"title":"广播式刷新配置","slug":"广播式刷新配置","link":"#广播式刷新配置","children":[]},{"level":3,"title":"定点通知","slug":"定点通知","link":"#定点通知","children":[]}]},{"level":2,"title":"Stream","slug":"stream","link":"#stream","children":[{"level":3,"title":"概述","slug":"概述-3","link":"#概述-3","children":[]},{"level":3,"title":"消息生产者","slug":"消息生产者","link":"#消息生产者","children":[]},{"level":3,"title":"消息消费者","slug":"消息消费者","link":"#消息消费者","children":[]},{"level":3,"title":"配置分组消费","slug":"配置分组消费","link":"#配置分组消费","children":[]},{"level":3,"title":"消息持久化","slug":"消息持久化","link":"#消息持久化","children":[]}]},{"level":2,"title":"概述","slug":"概述-4","link":"#概述-4","children":[]},{"level":2,"title":"案例","slug":"案例-1","link":"#案例-1","children":[]},{"level":2,"title":"大简介","slug":"大简介","link":"#大简介","children":[]},{"level":2,"title":"Nacos","slug":"nacos","link":"#nacos","children":[{"level":3,"title":"下载","slug":"下载","link":"#下载","children":[]},{"level":3,"title":"服务中心","slug":"服务中心","link":"#服务中心","children":[]},{"level":3,"title":"配置中心","slug":"配置中心","link":"#配置中心","children":[]},{"level":3,"title":"Nacos持久化","slug":"nacos持久化","link":"#nacos持久化","children":[]},{"level":3,"title":"集群架构","slug":"集群架构","link":"#集群架构","children":[]}]},{"level":2,"title":"Sentinel","slug":"sentinel","link":"#sentinel","children":[{"level":3,"title":"下载","slug":"下载-1","link":"#下载-1","children":[]},{"level":3,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":3,"title":"流控规则","slug":"流控规则","link":"#流控规则","children":[]},{"level":3,"title":"熔断降级","slug":"熔断降级","link":"#熔断降级","children":[]},{"level":3,"title":"热点Key限流","slug":"热点key限流","link":"#热点key限流","children":[]},{"level":3,"title":"系统规则","slug":"系统规则","link":"#系统规则","children":[]},{"level":3,"title":"@SentinelResource配置","slug":"sentinelresource配置","link":"#sentinelresource配置","children":[]},{"level":3,"title":"整合 openfeign 服务降级","slug":"整合-openfeign-服务降级","link":"#整合-openfeign-服务降级","children":[]},{"level":3,"title":"异常忽略","slug":"异常忽略","link":"#异常忽略","children":[]},{"level":3,"title":"持久化","slug":"持久化","link":"#持久化","children":[]}]},{"level":2,"title":"Seata","slug":"seata","link":"#seata","children":[{"level":3,"title":"下载安装","slug":"下载安装","link":"#下载安装","children":[]},{"level":3,"title":"初始化操作","slug":"初始化操作","link":"#初始化操作","children":[]},{"level":3,"title":"案例","slug":"案例-2","link":"#案例-2","children":[]}]}],"git":{"createdTime":1680621124000,"updatedTime":1680793441000,"contributors":[{"name":"RrOrange","email":"542716863@qq.com","commits":3}]},"readingTime":{"minutes":60.02,"words":18007},"filePathRelative":"Java/fm/SpringCloud.md","localizedDate":"2023年4月4日","autoDesc":true,"excerpt":""}');export{l as data};
