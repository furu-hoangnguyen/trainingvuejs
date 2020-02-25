const state = {
    blogButton: [
        "Nulla Eget Convallis Augue",
        "Quisque Ultricies Maximus",
        "Sed Vel Elit Et Lorem",
        "Vivamus Purus Neque"
    ],
    listPost: [
        {
            url: "./images/blog_item_01.jpg",
            name: "post1",
            title: "Nulla eget Convallis",
            path: "Digital Maketing / Honey / 21 September 2020",
            content:
                "Non pariatur sunt anim ad adipisicing eu sunt anim velit ullamco deserunt. Quis reprehenderit culpa ullamco duis culpa labore ut aliquip proident irure labore. Nisi adipisicing nostrud fugiat labore laboris. Dolore ex nulla eiusmod duis."
        },
        {
            name: "post2",
            url: "./images/blog_item_02.jpg",
            title: "Proident magna enim eu elit do",
            path: "Digital Maketing / Honey / 21 September 2020",
            content:
                "Donec interdum scelerisque autor. Nulla id loẻm autor. Proident ad commodo magna consequat.Cupidatat ullamco voluptate dolor veniam esse velit sunt cillum in laboris id."
        },
        {
            name: "post3",
            url: "./images/blog_item_03.jpg",
            title:
                "Quis dolor dolor nisi reprehenderit proident laboris incididunt in.",
            path: "Digital Maketing / Honey / 21 September 2020",
            content:
                "Minim ad commodo ipsum aliqua id qui minim ullamco pariatur aliquip cupidatat est id. Occaecat duis nisi deserunt cillum veniam aute irure minim sit et in ipsum labore pariatur. Enim dolore cupidatat minim eiusmod sint proident ad. Cupidatat consequatculpa reprehenderit pariatur in proident incididunt irure veniam nulla aliquip fugiat."
        },
        {
            name: "post4",
            url: "./images/blog_item_04.jpg",
            title:
                "Excepteur eiusmod mollit occaecat ex id nisi aliqua sit cillum enim cupidatat voluptate ad nulla",
            path: "Digital Maketing / Honey / 21 September 2020",
            content:
                "Sit tempor commodo ea eiusmod aliquip fugiat elit voluptate velit. Consectetur reprehenderit culpa cillum dolore est eu enim consequat duis. Ut minim excepteur minim labore magna minim. Minim tempor mollit ex id."
        }
    ],
    activeBtn: 1,
    showPost: "post1"
}

const actions = {
    act_showBlogPost({commit}, payload){
        commit('showBlogPost', payload)
    }
};
const getters = {
    cmp_currentPost: function () {
        var post;
        post = state.listPost.filter(item => {
            return item.name == state.showPost
        });
        return post
    }
}
const mutations = {
    showBlogPost(state,payload) {
        state.showPost = payload
        state.activeBtn = state.showPost.substring(4, 5)
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}