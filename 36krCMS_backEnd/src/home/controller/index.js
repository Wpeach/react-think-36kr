'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    let data = {
      name: "kbiao",
      age: 14,
      male:false
    }
    return this.json(data);
    //return this.display();
  }
  ueditorAction(){
    return this.display();
  }
}