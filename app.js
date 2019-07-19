//node.js原生的服务端代码写法
// const http = require('http');

// const server = http.createServer();

// server.on('request', function(request, response){
//     response.end("hello world");
// });

// server.listen('3000', function(){
//     console.log('running');
// })

//使用express框架
//第一步 安装
//第二步 引包

const express = require('express');

const fs = require('fs');

const router = require('./router')

//第三步 创建服务器应用程序

const app = express();



/*
app.js入门模块
职责：
    创建服务
    做一些服务相关的配置
        模板引擎
        body-parse请求表单 post 请求体
        提供静态资源服务
    挂载路由
    监听端口启动服务
*/

//公开指定目录
//只要这样，你就可以直接通过/public/xx的方式访问public 目录的所有资源了
app.use('/public/', express.static('./public/'));
app.use('/node_modules/', express.static('./node_modules/'));

//配置使用art-template模板引擎
//第一个参数表示，当渲染以 .art 结尾的文件的时候，使用art-template模板引擎

app.engine('html', require('express-art-template'))

//Express为Response相应对象提供了一个方法： render
//render 方法默认是不可以使用的，但是如果配置了模板引擎就可以使用了
//res.render('html模板', {模板数据}
//第一个参数不能写路径， 默认去项目中的 views 目录查找该文件
//也就是说 Express 有一个约定：开发人员吧所有视图文件都放到 views 目录中

//如果想要修改默认路径则可以
//app.set('views', render函数的默认路径)

// app.get('/', function (req, res) {
//     //readFile 的第二个参是可以选择的，传入 utf8 就是告诉浏览器，把读到的文件按照uft-8编码翻译出来
//     //除了这样来转换以外，也可以通过 data.toString() 的方式 
//     fs.readFile('./db.json', 'utf8', function (err, data) {
//         if (err) {
//             return res.status(500).send('Sever Error!');
//         }
//         var students = JSON.parse(data).students;

//         res.render('index.html', {
//             fruits: [
//                 '苹果',
//                 '香蕉',
//                 '橘子'
//             ],
//             students: students
//         });
//     })

// })

app.use(router);

app.listen(3000, function () {
    console.log('app is running!');
})