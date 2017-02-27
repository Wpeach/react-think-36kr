'use strict';
import ueditor from 'ueditor';
import path from 'path';
import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
   async indexAction(){
    //获取一个参数值
   
   // ueditor(path.join(think.UPLOAD_PATH, 'public'), function(req, res, next) {

        let action = this.get('action');
        let actions = this.get();
        console.log(actions);
        if(action === 'uploadimage'){
            var file = this.file('upfile');
            console.log(file.originalFilename); // exp.png
            console.log(file.path); // 7bit
            console.log(file.size); // image/png

            try {
                //const uploader = think.service(`upload/${service}`,'home');
                const uploader = think.service('upload/local','home');
                const result = await (new uploader).run(file.path, {name: this.post('name')});
                console.log(this.http.req);
                let content =  {url: result.replace(/\\/g,'/'),
                                title: file.originalFilename,
                                 original: file.originalFilename,
                                 state: 'SUCCESS'
                                }
                return this.json(
                                  content  
                                );
            } catch (e) {
                return this.fail(e || 'FILE_UPLOAD_ERROR');
            }

        }
         // 客户端发起图片列表请求
        else if (action === 'listimage'){
            var dir_url = 'img'; // 要展示给客户端的文件夹路径
           // res.ue_list(dir_url) // 客户端会列出 dir_url 目录下的所有图片
        }
        // 客户端发起其它请求
        else {
            this.http.res.setHeader('Content-Type', 'application/json');
            // 这里填写 ueditor.config.json 这个文件的路径
            this.redirect('/static/ueditor/ueditor.config.json');
        }
 // });
  }
  
}