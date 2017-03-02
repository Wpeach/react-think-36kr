##项目简介
利用 think.js，react.js 搭一个简单的CMS系统，有前台展示和后台管理系统，数据库使用mysql。前台有列表页和文章详情页，后台能创建文章和编辑文章。(仿36氪主页)

##技术环境

- 前端：react.js
- 后端：think.js
- 调用方式：rest API，前后端完全分离

##启动项目

 1. 从github中克隆项目至本地
 2. 后端：命令行进入`36krCMS_backEnd`文件夹，`npm install`安装node依赖，`npm start`启动服务
 3. 前端：命令行进入`36krCMS_frontEnd`文件夹， `npm install` 安装node依赖，`webpack-dev-server --contentbase src --inline --hot`以开发模式启动项目
 4. 前端运行在8080端口，可以直接访问localhost:8080查看项目首页；后端运行在8360端口

> 注：数据库挂在自己的服务器上，不需要配置，速度可能会有点慢；在backEnd文件夹中，db文件夹下有mysql数据库脚本，可以在本地建表运行（需要修改后台项目中的db.js的配置指向本地数据源）。

##项目运行截图
首页：
![](http://image.kbiao.me/17-2-28/62440013-file_1488231567185_12318.png)
详情页：
![](http://image.kbiao.me/17-2-28/10969418-file_1488231961658_256e.png)
编辑页：
![](http://image.kbiao.me/17-2-28/64618732-file_1488232048576_181d7.png)
移动端效果：
![](http://image.kbiao.me/17-2-28/59147727-file_1488232019745_8fa2.png)


##数据库设计
ER图
![](http://image.kbiao.me/17-2-28/77402441-file_1488231537195_d56e.png) 

##接口设计

 -  **/api/file**
    文件上传接口用于标题图,post提交表单文件域‘name’为`file`,返回值为文件地址

 - **/api/post/[id]**
    文章操作接口，可以对文章进行增删改查，在编辑和新增时，通过判断有无ID，进行相应的操作
 - **/api/cate/[id]**
    目录接口，对文章进行大的分类，方便在网站中动态的设置目录
 - **/api/tag/[id]**
    标签接口，通过post和delete给文章动态设置标签

以上接口符合RESTful规则，使用get、post、put、delete动词代表查增改删动作，id参数可选。（返回列表或详情，默认十五条分页）。
返回参数：errno为0则正常，数据内容在data对象中，errms表示错误信息。
   

##前端实现

> 在这之前，我只学过ionic和java，没学过react.js和think.js,在这紧张的笔试项目中，我现学现做，由于时间的原因，很多想法没来的及实现。

技术环境：

 - es6 + webpack 打包
 - 虚拟DOM实现组件化开发
 - flex布局
 - react—root 设置页面跳转路由
 - antDesign 快速实现网站的UI
 -  react-responsive 适配移动端
 
总的来说，react开发效率很高，它是虚拟DOM和CSS组件化，都是非常好的编程思想，组件化开发，大大的较少了工作量，我会继续深入的学习。

##后端实现
thinkjs支持rest controller，也很好的支持数据模型。因此在实现上没有很大难度。主要是接触nodeJS较少，基本属于现学现卖。好在有java后端的开发经验，相对比较容易解决了问题。

##解决的问题

 1. CORS方式跨域。
    thinkJS中的__call方法在无法匹配action时候调用，rest接口没有定义option请求，正好可以对跨域预检请求返回200并包含跨域头即可解决。
    为了支持fetch方式调用，也在__before中做了跨域头的返回。
 2. fetch接口的使用
    fetch是新的W3C标准，在使用的fetch的过程中出现了get请求跨域的问题，Fetch引入了3个接口，分别是Headers，Request和Response。支持CORS规则以及保证cookies不能被第三方获取。
 3. react包装ueditor
    ueditor的前端配置是三个插件文件（all、config、zh-cn）放入口函数中，新建一个组件类<Ueditor>配置ueditor的参数和方法，在设置编辑器内容时，需等组件加载完毕再设置，即监听编辑器的`ready`事件。