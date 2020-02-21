export const act_increment =({commit}) =>{
    commit('increment')
}
export const act_decrement =({commit}) =>{
    commit('decrement')
}
export const act_incrementNum =({commit},payload) =>{
    commit('_increment',{num: payload})
}
export const act_decrementNum =({commit}, payload) =>{
    commit('_decrement',{num: payload})
}