<template>
  <section id="home">
    <div class="header">
      <div class="header_nav" id="myheader_nav">
        <a
          :href="item.href"
          v-html="item.name"
          :class="item.class"
          v-for="(item, index) in headerNav"
          :key="index"
          >{{ item.name }}</a
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
        <a href="#noticeFunctional" class="header_content--btn">let's start</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NoticeFunctional",
  data() {
    return {
      headerNav: [
        {
          name: "<span>t</span>inder",
          href: "#home",
          class: ["logo", "menuItem1"]
        },
        { name: "Home", href: "#home", class: ["menuItem1", "menuItem2"] },
        { name: "about us", href: "#noticeFunctional", class: ["menuItem1"] },
        { name: "gallery", href: "#gallery", class: ["menuItem1"] },
        { name: "portfolio", href: "#myCarousel", class: ["menuItem1"] },
        { name: "blog", href: "#blogPost", class: ["menuItem1"] },
        { name: "contact us", href: "#contract", class: ["menuItem1"] }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .header .header_nav .menuItem1:nth-child(2){
    margin-left: 25% !important;
  } */
</style>
