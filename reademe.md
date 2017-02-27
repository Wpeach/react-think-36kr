# 36Kr_CMS笔试项目



## 审题

前端：react.js
后端：think.js
调用方式：rest API

##启动项目

 1. 从github中克隆项目至本地
 2. 后端：命令行进入`backEnd`文件夹，`npm install`安装node依赖，`npm start`启动服务
 3. 前端：命令行进入`fontEnd`文件夹， `npm install` 安装node依赖，`webpack-dev-server --contentbase src --inline --hot`以开发模式启动项目
 4. 前端运行在8080端口，可以直接访问localhost:8080查看项目首页；后端运行在8360端口

> 注：数据库挂在自己的服务器上，不需要配置，速度可能会有点慢；在backEnd文件夹中，db文件夹下有mysql数据库脚本，可以在本地建表运行。

##项目运行截图

##数据库设计
文章 目录  标签  

##接口设计
/api/file    文件上传接口
/api/post/[id]    文章接口
/api/cate/[id]    目录接口
/api/tag/[id]     标签接口

##前端实现
虚拟DOM
css组件

##后端实现
thinkjs支持rest controller，也很好的支持数据模型

##解决的问题

 1. 跨域，CORS方式跨域
 2. fetch接口的使用
 3. react包装ueditor
 4. node实现ueditor后台

  
# 36Kr CMS

标签（空格分隔）： react  think 

---

## 审题

前端：react.js
后端：think.js
调用方式：rest API

##启动项目

 1. 从github中克隆项目至本地
 2. 后端：命令行进入`backEnd`文件夹，`npm install`安装node依赖，`npm start`启动服务
 3. 前端：命令行进入`fontEnd`文件夹， `npm install` 安装node依赖，`webpack-dev-server --contentbase src --inline --hot`以开发模式启动项目
 4. 前端运行在8080端口，可以直接访问localhost:8080查看项目首页；后端运行在8360端口

> 注：数据库挂在自己的服务器上，不需要配置，速度可能会有点慢；在backEnd文件夹中，db文件夹下有mysql数据库脚本，可以在本地建表运行。

##项目运行截图

##数据库设计
文章 目录  标签  

##接口设计
/api/file    文件上传接口
/api/post/[id]    文章接口
/api/cate/[id]    目录接口
/api/tag/[id]     标签接口

##前端实现
虚拟DOM
css组件

##后端实现
thinkjs支持rest controller，也很好的支持数据模型

##解决的问题

 1. 跨域，CORS方式跨域
 2. fetch接口的使用
 3. react包装ueditor
 4. node实现ueditor后台

  
