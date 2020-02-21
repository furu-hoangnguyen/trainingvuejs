const state = {
    headerNav: [
        {
            name: "<span>t</span>inder",
            href: "/",
            class: ["logo", "menuItem1"]
        },
        { name: "Home", href: "/home", class: ["menuItem1", "menuItem2"] },
        { name: "about us", href: "/noticeFunctional", class: ["menuItem1"] },
        { name: "gallery", href: "/gallery", class: ["menuItem1"] },
        { name: "portfolio", href: "/myCarousel", class: ["menuItem1"] },
        {
            name: "blog",
            href: {
                name: "blogPost",
                params: { id: 123 },
                query: { plan: "private" }
            },
            class: ["menuItem1"]
        },
        {
            name: "contact us",
            href: {
                name: "contact",
                params: { id: 123, name: "props_contactus" },
                query: { plan: "private" }
            },
            class: ["menuItem1"]
        }
    ],
    localCount: []
}

const actions = {
    alert() {
        alert("this is header getter")
    }
};
const getters = {
    
};
const mutations = {
    increment(state, n) {
        state.count += n
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}