import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutasions'
import action from './actions'
import HeaderModule from './modules/HeaderModule'
import ContactModule from './modules/ContactModule'
import GalleryModule from './modules/GalleryModule'
import BlogPostModule from './modules/BlogPostModule'
import NoticeModule from './modules/NoticeModule';
Vue.use(Vuex)


export const store = new Vuex.Store({
    state:{
        count:1,
        todos:[
            {id:1, text: 'Sint cillum Lorem officia excepteur laborum eu non sit consequat elit ipsum.', done:true},
            {id:2, text: 'Sint cillum Lorem officia excepteur laborum eu non sit consequat elit ipsum.', done:true}
        ]
    },
    getters:{
        doneTodos:state => {
            return state.todos.filter(todos => todos.done)
        }
    },
    mutations:{
        ...mutation
    },
    actions:{
        ...action
    },
    modules:{
        HeaderModule,
        ContactModule,
        GalleryModule,
        BlogPostModule,
        NoticeModule
    }
})