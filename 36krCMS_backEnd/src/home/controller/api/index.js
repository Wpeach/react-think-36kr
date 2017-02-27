'use strict';
import Base from './base.js';


export default class extends Base {


    async getAction(self){
        return this.success("self");
    }
}