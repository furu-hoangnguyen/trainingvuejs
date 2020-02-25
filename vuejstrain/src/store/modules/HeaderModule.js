const state = {
    headerNav: [
        {
            href:'#home',
            name: "<span>t</span>inder",
            path: "/",
            class: ["logo", "menuItem1"]
        },
        { name: "home",href:'#home', path: "/home", class: ["menuItem1", "menuItem2"] },
        { name: "about us",href:'#noticeFunctional', path: "/noticeFunctional", class: ["menuItem1"] },
        { name: "gallery",href:'#gallery', path: "/gallery", class: ["menuItem1"] },
        { name: "portfolio",href:'#myCarousel', path: "/myCarousel", class: ["menuItem1"] },
        {
            name: "blog",
            href:'#blogPost',
            path: {
                name: "blogPost",
                params: { id: 123 },
                query: { plan: "private" }
            },
            class: ["menuItem1"]
        },
        {
            name: "contact us",
            href:'#contract',
            path: {
                name: "contact",
                params: { id: 123, name: "props_contactus" },
                query: { plan: "private" }
            },
            class: ["menuItem1"]
        }
    ],
    countHeader: 0,
    reponsiveClass: false
}

const actions = {
    headerModule_act_increment({ commit }) {
        commit('increment')
    },
    headerModule_act_decrement({ commit }) {
        commit('decrement')
    },
    headerModule_act_incrementNum({ commit }, payload) {
        commit('_increment', { num: payload })
    },
    headerModule_act_decrementNum({ commit }, payload) {
        commit('_decrement', { num: payload })
    },
    headerModule_act_reponsiveMenu({commit}){
        commit('reponsiveMenu')
    }
};
const getters = {
    render_nav: state => {
        return state.headerNav
    }
};
const mutations = {
    increment(state){
        state.countHeader++
    },
    decrement(state){
        state.countHeader--
    },
    _increment(state, payload){
        state.countHeader += payload.num
    },
    _decrement(state, payload){
        state.countHeader -= payload.num
    },
    reponsiveMenu(state){
        state.reponsiveClass = !state.reponsiveClass
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}