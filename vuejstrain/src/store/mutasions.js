export const  increment=(state)=>{
  state.count++
}
export const  decrement=(state)=>{
  state.count--
}
export const  _increment=(state,{num})=>{
  state.count += num
}
export const  _decrement=(state,{num})=>{
  state.count -= num
}