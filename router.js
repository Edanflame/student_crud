const express = require('express');

const fs = require('fs');

var router = express.Router();

var Student = require('./students')



/**
 * router.js模块
 * 职责：
 *  处理路由
 *  根据不同的处理方法和请求路径，来处理路由模块
 */

router.get('/students', function (req, res) {
    //readFile 的第二个参是可以选择的，传入 utf8 就是告诉浏览器，把读到的文件按照uft-8编码翻译出来
    //除了这样来转换以外，也可以通过 data.toString() 的方式 
    // fs.readFile('./db.json', 'utf8', function (err, data) {
    //     if (err) {
    //         return res.status(500).send('Sever Error!');
    //     }
    //     var students = JSON.parse(data).students;

    //     res.render('index.html', {
    //         fruits: [
    //             '苹果',
    //             '香蕉',
    //             '橘子'
    //         ],
    //         students: students
    //     });
    // })
    Student.find(function (err, students){
        if (err) {
            return res.status(500).send('Sever Error!');
        }

        res.render('index.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子'
            ],
            students: students
        });

    })

})

router.get('/students/new', function (req, res) {
    res.render('new.html');
})

router.post('/students/new', function (req, res) {
    Student.save(req.body, function (err) {
        if(err){
            return res.status(500).send('Sever Error!')
        }
        res.redirect('/students')
    })
})

router.get('/students/edit', function (req, res) {
    Student.findById(parseInt(req.query.id), function (err, student) {
        if(err){
            return res.status(500).send("Sever Error!");
        }
        res.render('edit.html',{
            student: student
        })
    })
})

router.post('/students/edit', function (req, res) {

})

router.get('/students/delete', function (req, res) {

})

module.exports = router; 
