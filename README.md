# student_crud

##案例使用node.js搭建简单后端，使用文件模拟数据库的运行，达到数据的增加、读取、更新、删除工作，旨在了解数据库的底层操作

##起步

-初始化
-模块处理

##路由设计

| 请求方法 |     请求路径     | get参数 |            post参数            |       备注       |
|:--------:|:----------------:|:-------:|:------------------------------:|:----------------:|
|   get    |    /students     |         |                                |     渲染页面     |
|   get    |  /students/new   |         |                                | 渲染添加学生页面 |
|   post   |  /students/new   |         |   name、age、gender、hobbies   | 处理添加学生请求 |
|   get    |  /students/edit  |   id    |                                |   渲染编辑页面   |
|   post   |  /students/edit  |         | id、name、age、gender、hobbies |   处理编辑请求   |
|   get    | /students/delete |   id    |                                |   处理删除请求   |