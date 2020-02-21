<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/onceComponent/Header";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {};
  },
  methods: {
    scroll: function() {
      if (window.pageYOffset != undefined) {
        if (pageYOffset > 50) {
          document.getElementById("myheader_nav").style.backgroundColor =
            "rgba(250, 250, 250, 0.98)";
          document.getElementById("myheader_nav").style.color = "black";
          document.getElementById("icon").style.color = "white";
          document.getElementById("iconCollaps").style.backgroundColor =
            "rgb(238, 189, 55)";
        } else {
          document.getElementById("myheader_nav").style.background = "none";
          document.getElementById("myheader_nav").style.color = "white";
          document.getElementById("icon").style.color = "white";
          document.getElementById("iconCollaps").style.background = "none";
        }
      }
    }
  },
  created() {
    document.addEventListener("scroll", this.scroll);
  },
  computed:{
  }
};
</script>

<style>
  @import "./styles/style.css";
</style>
