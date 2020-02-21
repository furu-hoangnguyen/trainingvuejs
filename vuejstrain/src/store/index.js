import Vue from 'vue'
import Vuex from 'vuex'
import mutation from './mutasions'
import action from './actions'
import HeaderModule from './modules/HeaderModule'
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
        HeaderModule
    }
})
console.log(store.state)