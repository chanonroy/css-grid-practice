import Vue from 'vue';
import ElementUI from 'element-ui';
import './assets/_assets.js';
import { throttle } from 'lodash';

import './scss/main.scss';
import 'element-ui/lib/theme-chalk/index.css'

import { items } from './data/items.js';

Vue.use(ElementUI)

var app = new Vue({
    el: '#app',
    data: {
      items: items,
      query: ""
    },
    computed: {
      item_list() {

        let query = this.query;
        let filtered = this.items.filter((item) => {
          return item.model.toLowerCase().includes(query);
        });

        return filtered;
      }
    },
    watch: {
      query(val) {
        this.filter_query(val);
      }
    },
    methods: {
      filter_query: throttle(function(val) {
        this.query = val.toLowerCase();
      }, 500)
    }
});

