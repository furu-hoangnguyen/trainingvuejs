<template>
  <section id="home">
    <div class="header">
      <div class="header_nav" id="myheader_nav">
        <router-link
          tag="a"
          :to="item.path"
          v-html="item.name"
          :class="item.class"
          v-for="(item, index) in as"
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
          <h2>vuex count: {{ countHeader }}</h2>
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
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "NoticeFunctional",
  data() {
    return {
      localCount: []
    };
  },
  methods: {
    ...mapActions("HeaderModule", [
      "headerModule_act_increment",
      "headerModule_act_decrement",
      "headerModule_act_incrementNum",
      "headerModule_act_decrementNum"
    ]),
    showCurrentRoute() {
      this.$router.push({ path: "/gallery" }).catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    increCount() {
      this.headerModule_act_increment();
    },
    decreCount() {
      this.headerModule_act_decrement();
    },
    increCountNum() {
      this.headerModule_act_incrementNum(10);
    },
    decreCountNum() {
      this.headerModule_act_decrementNum(10);
    }
  },
  computed: {
    ...mapState({ countHeader: state => state.HeaderModule.countHeader }),
    ...mapGetters({ as: "HeaderModule/render_nav", todos: "doneTodos" })
  },
  created() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .header .header_nav .menuItem1:nth-child(2){
    margin-left: 25% !important;
  } */
</style>
