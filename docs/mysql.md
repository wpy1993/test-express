## 数据库
内存和硬盘存储的格式不同
数据库能做什么？
1. 持久化数据，数据存储在硬盘文件中
2. 备份和恢复数据
3. 存取数据 特别快速
4. 能够控制权限

数据库的类型
1. 关系型数据库 业务开发一般用这个。 代表： mySql、Oracle、sql server
  特点：以表和表的关联构成的数据库 （类似excel， 里面一个个的sheet）
  优点：能表达复杂的数据关系。强大的查询语言 - mySQL
  缺点：读写性能差、数据结构比较死板
2. 非关系型数据库 代表：MongoDB、Redis、Membase
  特点：存储结构极其简单 - 文档型、键值对等
  优点：灵活，海量数据读写效率高
  缺点：难以表达复杂数据结构、复杂查询效率低
3. 面对对象数据库


一些术语
SQL structured query language
DDL  Data Definition language 操作数据库对象 包括 库、表、视图、存储过程
DML  Data Manipulation language 数据操控语言
DCL  Data Control language 操作用户权限


DML
两个数据库 students 和 teachers 创建、切换、删除
create database teacher;
use student;
drop database teacher; 


数据库建表
创建一个名为 basic 的表

```sql
create table basic (
  id int auto_increment,
  name varchar(100) default 'guys' not null,
  age int,
  birthdate date,
  phone char(11),
  card_id varchar(18),
  is_active boolean default true,
  primary key (id, card_id)
);
```


里面字段类型可选值
`bit` 占一位， 0 / 1， true / false
`int` 32位整数
`decimal(M, N)` 整数位M位，小数位N位 超过就截断
`char(n)` 固定长度为n的字符 不够就自动加空格
`varchar(n)` 最大长度为n的字符
`text`  大量的字符
`date` 仅日期
`datetime` 日期和时间
`time` 仅时间

auto_increment 模式下，不能设置 default


删除表
> drop table basic;
> drop table if exists basic; // 增加 if exists 防止报错


数据写入 basic 这个表
INSERT INTO basic (username, email, birthdate, is_active)
VALUES ('test', 'test@runoob.com', '1990-01-01', true);

basic也可以写成\`basic\` 或者详细点 \`students\`.\`basic\`



ORM  Object relational mapping 对象关系映射
ORM框架，可以统一不同类型数据库的开发过程

node中的ORM框架
Sequelize（js/ts）  typeORM（支持ts）