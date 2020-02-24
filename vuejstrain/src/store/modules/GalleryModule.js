
const state = {
    galleryButton: [
        { name: "Show All", imgName: "all" },
        { name: "Branding", imgName: "brand" },
        { name: "Graphic", imgName: "graphic" },
        { name: "Nature", imgName: "nature" },
        { name: "Animation", imgName: "animation" }
    ],
    galleryImgUrl: [
        { url: "./images/portfolio_item_01.jpg", type: "brand_nature" },
        {
            url: "./images/portfolio_item_02.jpg",
            type: "brand_graphic_animation"
        },
        {
            url: "./images/portfolio_item_03.jpg",
            type: "brand_nature-animation"
        },
        {
            url: "./images/portfolio_item_04.jpg",
            type: "graphic_nature_animation"
        },
        { url: "./images/portfolio_item_05.jpg", type: "graphic" },
        { url: "./images/portfolio_item_06.jpg", type: "brand_nature" }
    ],
    activeBtn: 'all'
}

const actions = {
    setTypeGallery({commit},payload){
        commit('_setTypeGallery',payload)
    }
};
const getters = {
    images: function () {
        var _galleryImgUrl;
        switch (state.activeBtn) {
            case 'all':
                _galleryImgUrl = state.galleryImgUrl
                break;
            case 'brand':
                _galleryImgUrl = state.galleryImgUrl.filter(elm => {
                    var index = elm.type.indexOf("brand");
                    if (index !== -1) return elm;
                });
                break;
            case "graphic":
                _galleryImgUrl = state.galleryImgUrl.filter(elm => {
                    var index = elm.type.indexOf("graphic");
                    if (index !== -1) return elm;
                });
                break;
            case "nature":
                _galleryImgUrl = state.galleryImgUrl.filter(elm => {
                    var index = elm.type.indexOf("nature");
                    if (index !== -1) return elm;
                });
                break;
            case "animation":
                _galleryImgUrl = state.galleryImgUrl.filter(elm => {
                    var index = elm.type.indexOf("animation");
                    if (index !== -1) return elm;
                });
                break;
            default:
                break;
        }
        return _galleryImgUrl
    }
}
const mutations = {
    _setTypeGallery(state, payload){
        state.activeBtn = payload
    }
}
export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    }