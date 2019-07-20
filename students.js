/**
 * 这个文件不关心业务 只对文件进行增删改查
 * 
 * 数据操作文件模块
 */

 const fs = require('fs');

 var dbPath = './db.json';

 /**
  * 获取所有学生列表
  */
 exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8',  function (err, data) {
        if(err){
            return callback(err);
        }
        callback(null, JSON.parse(data).students);
    })
 }

 exports.findById = function (id, callback) {
    fs.readFile(dbPath, 'utf8',  function (err, data) {
        if(err){
            return callback(err);
        }
        var students = JSON.parse(data).students
        var ret = students.find(function(item){
            return item.id === id; 
        })
        callback(null, ret);
    })
 }

/**
 * 添加学生
 */
exports.save = function (student, callback) {
     fs.readFile(dbPath, 'utf8', function (err, data) {
        if(err){
            return callback(err);
        }
        var students = JSON.parse(data).students;

        student.id = students[students.length - 1].id + 1; 

        students.push(student);

        var fileData = JSON.stringify({
            students: students
        });
        fs.writeFile(dbPath, fileData, function (err) {
            if(err){
                return callback(err);
            }
            callback(null);
        })
     })
}

 /**
  * 更新学生
  */
 exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if(err){
            return callback(err);
        }
        var students = JSON.parse(data).students;
 
        var stu = students.find(function (item) {
            return item.id === student.id;
        });

        for(key in student) {
            stu[key] = student[key];
        };

        var fileData = JSON.stringify({
            students: students
        });

        fs.writeFile(dbPath, fileData, function (err) {
            if(err){
                return callback(err);
            }
            callback(null);
        })

        
     })
}

/**
 * 删除学生
 */
exports.delete = function () {
     
}
