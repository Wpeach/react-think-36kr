'use strict';
// import marked from "marked";
import Base from './base.js';
// import toc from 'markdown-toc';
// import highlight from 'highlight.js';
// import push2Firekylin from 'push-to-firekylin';

export default class extends Base {
  modelInstance = this.modelInstance.where({type: 0});
  /**
   * get
   * @return {[type]} [description]
   */
  async getAction(self){
    // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
    let data;
    if( this.id ) {
      if( this.id === 'lastest' ) {
        return this.lastest();
      }
      data = await this.modelInstance.where({id: this.id}).find();
      //文章选项
      if(data.options){
        data.options = JSON.parse(data.options) || {};
      }else{
        data.options = {};
      }
    } else {
      let where = {};
    //   //不是管理员，只显示个人的文章
    //   if(this.userInfo.type !== 1){
    //     where.user_id = this.userInfo.id;
    //   }

    //   if(this.get('status')) {
    //     where.status = this.get('status');
    //   }

    //   if(this.get('keyword')) {
    //     let keywords = this.get('keyword').split(/\s+/g);
    //     if( keywords.indexOf(':public') > -1 || keywords.indexOf(':private') > -1 ) {
    //       where.is_public = Number(keywords.indexOf(':public') > -1);
    //       keywords = keywords.filter(word => word !== ':public' && word !== ':private');
    //     }
    //     if(keywords.length > 0) {
    //       where.title = ["like", keywords.map(word => `%${word}%`)];
    //     }
    //   }

      let field = ['id', 'title', 'cover_img','user_id', 'create_time', 'update_time', 'status', 'pathname', 'is_public'];
      data = await this.modelInstance.where(where).field(field).order('create_time DESC').page( this.get('page'), 15 ).countSelect();
    }
    return this.success(data);
  }

  getBaseAction(self) {
    return super.getAction(self);
  }
  /**
   * add user
   * @return {[type]} [description]
   */
  async postAction(){
    let data = this.post();
    //check pathname
    let post = await this.modelInstance.where({pathname: data.pathname}).select();
    if( post.length > 0 ) {
      return this.fail('PATHNAME_EXIST');
    }

    // /** 如果是编辑发布文章的话默认状态改为审核中 **/
    // if( data.status == 3 && this.userInfo.type != 1 ) {
    //   data.status = 1;
    // }


    // data.tag = await this.getTagIds(data.tag);
    // data = await this.getContentAndSummary(data);
   // data.user_id = this.userInfo.id;
   data.user_id = 0;
    data = this.getPostTime(data);
    data.options = data.options ? JSON.stringify(data.options) : '';

    let insertId = await this.modelInstance.addPost(data);
    return this.success({id: insertId});
  }
  /**
   * update user info
   * @return {[type]} [description]
   */
  async putAction(){
    if (!this.id) {
      return this.fail('PARAMS_ERROR');
    }

    let data = this.post();
    data.id = this.id;

    let rows = await this.modelInstance.savePost(data);
    return this.success({affectedRows: rows});
  }

  async deleteAction() {
    if(!this.id) {
      return this.fail('PARAMS_ERROR');
    }

   
    await this.modelInstance.deletePost(this.id);
    return this.success();
  }


  async lastest() {
    let userId = this.userInfo.type !== 1 ? this.userInfo.id : null;
    let data = await this.modelInstance.getLatest(userId, 6);
    return this.success(data);
  }

  getPostTime(data) {
    data.update_time = think.datetime();
    /**草稿可以没有创建时间**/
    if( !data.create_time ) {
      data.create_time = data.status != 0 ? data.update_time : null;
    }else{
      data.create_time = think.datetime(data.create_time);
    }
    return data;
  }

  

  

}