
const state = {
    isShowPopUpSendMessage: false,
    messageData: { name: "", phone: "", email: "" },
    valueEmail: ""
}

const actions = {
    act_showPopUpSendMessages({ commit }, payload) {
        commit('showPopUpSendMessages', { isShow: payload.isShow });
    },
    act_setDataMessage({commit,rootState },payload){
        commit('setDataMessage', payload);
        console.log(rootState.HeaderModule);
    }
};
const getters = {

};
const mutations = {
    showPopUpSendMessages(state, payload) {
        state.isShowPopUpSendMessage = payload.isShow;
    },
    setDataMessage(state, payload){
        state.messageData.name = payload.name;
        state.messageData.phone = payload.phone;
        state.messageData.email = payload.email;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}