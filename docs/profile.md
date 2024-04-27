# mysql学习的知识点记录



## 这里是用ORM框架 —— sequelize

> ORM ->  Object Relational Mapping 对象关系映射， 自动将程序中的对象和数据库关联起来  
> 隐藏具体的数据库底层实现（sql语句实现），让开发者关注对象即可。ORM提供的API无需使用sql语句，他会根据具体的调用方式，自动生成合适的sql语句操作数据  
> ORM支持各种类型的数据库，包括 mysql、 sql server、 oracle、 mongodb

通用的ORM优势
1. 开发者无需关注数据库，仅需关注对象
2. 可轻易的完成数据库的移植，比如从mysql移植到mongodb
3. 精确查询中，无需拼接复杂的sql语句

node中的ORM框架，
sequelize 支持js和ts，更成熟
typeORM  只支持ts

## 后端项目三层架构

自上而下的结构如下，（JAVA外部可能还有个模型层）

1. 路由层  Route  提供对外的API访问接口
2. 服务层  Service  提供业务逻辑的支持
3. 数据访问层 DAO  提供与数据库的通信，通常为ORM



## 增删改查说明

尽量少的执行sql语句，因为慢，所以关于改，要用 `Admin.update()` 而不推荐 `ins = Admin.findOne() + ins[change]后ins.save() 这两条指令`



## mysql的启动和关闭

macOS中 启动、查询状态（暴露出pid）、关闭

- sudo /usr/local/mysql/support-files/mysql.server start

- sudo /usr/local/mysql/support-files/mysql.server status

- sudo /usr/local/mysql/support-files/mysql.server stop

注意，sudo要加上，否则，可能stop的时候报错 `ERROR! MySQL server PID file could not be found!` 

当然，也可以用通用的方式关闭，获取到pid

`kill -15 pid` 杀进程。pid就是port

`kill -9 pid` 强杀进程


## 数据操作指令 （eg: sequel pro 可视化软件操作）

