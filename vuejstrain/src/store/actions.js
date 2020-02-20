export const act_increment =({commit}) =>{
    commit('increment')
}
export const act_decrement =({commit}) =>{
    commit('decrement')
}
export const act_incrementNum =({commit}) =>{
    commit('_increment',{num: 5})
}
export const act_decrementNum =({commit}) =>{
    commit('_decrement',{num: 5})
}