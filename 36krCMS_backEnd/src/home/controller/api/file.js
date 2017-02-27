import fs from 'fs';
import path from 'path';
import Base from './base';

export default class extends Base {
  uploadConfig = {};

  async __before() {
    //this.uploadConfig = await this.getUploadConfig();
  }

  async postAction() {
  

    let file = this.file('file');
    
    if( !file.path ) { return this.fail('FILE_UPLOAD_ERROR'); }
//    file = this.http._file() ;

 
    //let {type} = this.uploadConfig;
    let type = 'local';
    let config = this.uploadConfig;
    
    if( !type ) { return this.fail(); }
    if(type == 'local') {
      config = {name: this.post('name')};
    }
    
    return this.serviceUpload(type, file.path, config);
  }

  // 获取上传设置
  async getUploadConfig() {
   // const options = await this.model('options').getOptions();
   // return options.upload;
  }

  /**
   * 上传文件
   */
  async serviceUpload(service, file, config) {
    try {
      //const uploader = think.service(`upload/${service}`,'home');
      const uploader = think.service('upload/local','home');
      const result = await (new uploader).run(file, config);
      return this.success(result);
    } catch (e) {
      return this.fail(e || 'FILE_UPLOAD_ERROR');
    }
  }
}
