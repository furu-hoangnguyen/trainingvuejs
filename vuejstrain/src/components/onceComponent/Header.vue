<template>
  <section id="home">
    <div class="header">
      <div class="header_nav" id="myheader_nav">
        <router-link
          tag="a"
          :to="item.path"
          v-html="item.name"
          :class="item.class"
          v-for="(item, index) in headerNav"
          :key="index"
          active-class="active_route"
          exact
          >{{ item.name }}</router-link
        >
        <a href="#icon" id="icon" class="icon" onclick="reponsiveMenu()">
          <i class="fa fa-bars" id="iconCollaps"></i>
        </a>
      </div>

      <div class="header_content">
        <div class="header_content--title">
          <span>tinder</span>
          <span>html5</span>
          <span>Template</span>
        </div>
        <div class="header_content--body">
          Adipisicing officia aliqua eiusmod minim magna. Eu et aliqua do minim
          non dolor non. Officia ullamco consectetur nulla quis esse labore
          eiusmod anim cillum.
        </div>
        <div>
          <h1>name path: {{ $route.name }}</h1>
          <h2>vuex count: {{ count }}</h2>
          <button @click="increCount">Count++</button> &nbsp; &nbsp;
          <button @click="decreCount">Count--</button>
          <br />
          <button @click="increCountNum">Count++num</button> &nbsp; &nbsp;
          <button @click="decreCountNum">Count--num</button>
        </div>
        <a @click="showCurrentRoute" class="header_content--btn">let's start</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "NoticeFunctional",
  data() {
    return {
      headerNav: [
        {
          name: "<span>t</span>inder",
          path: "/",
          class: ["logo", "menuItem1"]
        },
        { name: "Home", path: "/home", class: ["menuItem1", "menuItem2"] },
        { name: "about us", path: "/noticeFunctional", class: ["menuItem1"] },
        { name: "gallery", path: "/gallery", class: ["menuItem1"] },
        { name: "portfolio", path: "/myCarousel", class: ["menuItem1"] },
        {
          name: "blog",
          path: {
            name: "blogPost",
            params: { id: 123 },
            query: { plan: "private" }
          },
          class: ["menuItem1"]
        },
        {
          name: "contact us",
          path: {
            name: "contact",
            params: { id: 123, name: "props_contactus" },
            query: { plan: "private" }
          },
          class: ["menuItem1"]
        }
      ],
      localCount: []
    };
  },
  methods: {
    ...mapActions([
      "act_increment",
      "act_decrement",
      "act_incrementNum",
      "act_decrementNum"
    ]),
    showCurrentRoute() {
      this.$router.push({ path: "/gallery" }).catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    increCount() {
      this.act_increment();
    },
    decreCount() {
      this.act_decrement();
    },
    increCountNum() {
      this.act_incrementNum(10);
    },
    decreCountNum() {
      this.act_decrementNum(10);
    }
  },
  computed: {
    ...mapState(["count"]),
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .header .header_nav .menuItem1:nth-child(2){
    margin-left: 25% !important;
  } */
</style>
