export const  increment=(state)=>{
  state.count++
}
export const  decrement=(state)=>{
  state.count--
}
export const  _increment=(state,payload)=>{
  state.count += payload.num
}
export const  _decrement=(state,payload)=>{
  state.count -= payload.num
}