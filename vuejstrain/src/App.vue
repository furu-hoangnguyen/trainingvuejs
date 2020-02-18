<template>
  <div id="app">
    <Header />
    <NoticeFunctional />
    <Gallery />
    <MyCarousel />
    <BlogPost />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/onceComponent/Header";
import NoticeFunctional from "./components/onceComponent/Notice";
import Gallery from "./components/onceComponent/Gallery";
import MyCarousel from "./components/onceComponent/MyCarousel";
import BlogPost from "./components/onceComponent/BlogPost";
import Contact from "./components/onceComponent/Contact";
import Footer from "./components/onceComponent/Footer";
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
  data() {
    return {
      messageData: { name: "", phone: "", email: "" }
    };
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
  }
};
</script>

<style>
@import "./styles/style.css";
</style>
