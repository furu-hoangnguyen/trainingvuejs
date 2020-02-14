<template>
  <section id="home">
    <div class="header">
      <div class="header_nav" id="myheader_nav">
        <a href="#home" class="logo menuItem1"> <span>t</span>inder </a>
        <a href="#home" class="menuItem1 menuItem2">Home</a>
        <a href="#noticeFunctional" class="menuItem1">about us</a>
        <a href="#gallery" class="menuItem1">gallery</a>
        <a href="#myCarousel" class="menuItem1">portfolio</a>
        <a href="#blogPost" class="menuItem1">blog</a>
        <a href="#contract" class="menuItem1">contact us</a>

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
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
