import Vue from 'vue'
import Vuex from 'vuex'
import * as mutation from './mutasions'
import * as action from './actions'
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
    
})
console.log(store.state.count)