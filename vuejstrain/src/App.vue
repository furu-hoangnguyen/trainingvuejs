<template>
  <div id="app">
    <Header />
    <NoticeFunctional />
    <Gallery />
    <MyCarousel />
    <BlogPost />
    <Contact />
    <Footer />
    <button type="button" v-on:click="scroll">Click me</button>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NoticeFunctional from "./components/Notice.vue";
import Gallery from "./components/Gallery.vue";
import MyCarousel from "./components/MyCarousel.vue";
import BlogPost from "./components/BlogPost.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    NoticeFunctional,
    Gallery,
    MyCarousel,
    BlogPost,
    Contact,
    Footer
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
    },
    countScroll: function() {
      console.log("aaaa");
    }
  },
  created() {
    document.addEventListener("scroll", this.scroll);
  }
};
</script>

<style>
@import "./styles/style.css";
</style>
