import Vue from 'vue'
import { items } from './data/items.js';
import './assets/_assets.js';
import './scss/main.scss';

var app = new Vue({
    el: '#app',
    data: {
      msg: items
    }
});