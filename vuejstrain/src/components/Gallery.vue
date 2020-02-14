<template>
  <section id="gallery">
    <div class="gallery">
      <div class="galleryNav">
        <label>our gallery</label>
        <hr />
        <span class="blogPost__line"></span>
        <p>
          In malesuala placerat ligula et bibendum aennean eget urna enim. Sed
          enim ante, bibendum nec dictum ac, gravida ac lectus
        </p>
        <div class="galleryNav_btn">
          <a
            v-for="(item, index) in galleryButton"
            :id="'btn' + (index + 1)"
            @click="showImg(item.imgName)"
            :class="{ active: activeBtn == index + 1 }"
            :key="index"
            >{{ item.name }}</a
          >
        </div>
      </div>
      <div class="galleryImg">
        <img
          v-for="(item, index) in galleryImgUrl"
          :key="index"
          :id="'img' + (index + 1)"
          :src="item.url"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gallery",
  data: function() {
    return {
      galleryButton: [
        { name: "Show All", imgName: "all" },
        { name: "Branding", imgName: "brand" },
        { name: "Graphic", imgName: "graphic" },
        { name: "Nature", imgName: "nature" },
        { name: "Animation", imgName: "animation" }
      ],
      galleryImgUrl: [
        { url: require("@/image/portfolio_item_01.jpg") },
        { url: require("@/image/portfolio_item_02.jpg") },
        { url: require("@/image/portfolio_item_03.jpg") },
        { url: require("@/image/portfolio_item_04.jpg") },
        { url: require("@/image/portfolio_item_05.jpg") },
        { url: require("@/image/portfolio_item_06.jpg") }
      ],
      collectionGallerys: {
        all: ["img1", "img2", "img3", "img4", "img5", "img6"],
        brand: ["img1", "img2", "img3", "img6"],
        graphic: ["img2", "img5", "img1", "img4"],
        nature: ["img1", "img4", "img6", "img3"],
        animation: ["img4", "img3", "img1", "img2"]
      },
      activeBtn: 1
    };
  },
  methods: {
    showImg(name) {
      console.log(name);
      this.hideAllImg();
      switch (name) {
        case "all":
          this.activeBtn = 1;
          this.collectionGallerys.all.map(
            elm => (document.getElementById(elm).style.display = "block")
          );
          break;
        case "brand":
          this.activeBtn = 2;
          this.collectionGallerys.brand.map(
            elm => (document.getElementById(elm).style.display = "block")
          );
          break;
        case "graphic":
          this.activeBtn = 3;
          this.collectionGallerys.graphic.map(
            elm => (document.getElementById(elm).style.display = "block")
          );
          break;
        case "nature":
          this.activeBtn = 4;
          this.collectionGallerys.nature.map(
            elm => (document.getElementById(elm).style.display = "block")
          );
          break;
        case "animation":
          this.activeBtn = 5;
          this.collectionGallerys.animation.map(
            elm => (document.getElementById(elm).style.display = "block")
          );
          break;
        default:
          break;
      }
    },
    hideAllImg() {
      this.collectionGallerys.all.map(
        elm => (document.getElementById(elm).style.display = "none")
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
