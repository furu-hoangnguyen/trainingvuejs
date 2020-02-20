<template>
  <section id="home">
    <div class="header">
      <div class="header_nav" id="myheader_nav">
        <router-link
          tag="a"
          :to="item.href"
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
          <button @click="increCount">Count++</button> &nbsp; &nbsp;<button
            @click="decreCount"
          >
            Count--
          </button>
          <br />
          <button @click="increCountNum">Count++num</button> &nbsp;
          &nbsp;<button @click="decreCountNum">Count--num</button>
        </div>
        <a @click="showCurrentRoute" class="header_content--btn">let's start</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "NoticeFunctional",
  data() {
    return {
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
    };
  },
  methods: {
    showCurrentRoute() {
      this.$router.push({ path: "/gallery" }).catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    increCount() {
      this.$store.dispatch("act_increment");
    },
    decreCount() {
      this.$store.dispatch("act_decrement");
    },
    increCountNum() {
      this.$store.dispatch("act_incrementNum");
    },
    decreCountNum() {
      this.$store.dispatch("act_decrementNum");
    }
  },
  computed: {
    state_count() {
      var a = [];
      this.doneTodos.map(d => a.push(d.id));
      return a;
    },
    ...mapState(["count"]),
    ...mapGetters(["doneTodos"]),
    ...mapActions({
      _increCount: "act_increment",
      _decreCount: "act_decrement"
    })
  },
  mounted() {
    console.log(this.$store.state);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .header .header_nav .menuItem1:nth-child(2){
    margin-left: 25% !important;
  } */
</style>
