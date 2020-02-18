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
          v-for="(item, index) in images"
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
        { url: "./images/portfolio_item_01.jpg", type: "brand_nature" },
        {
          url: "./images/portfolio_item_02.jpg",
          type: "brand_graphic_animation"
        },
        {
          url: "./images/portfolio_item_03.jpg",
          type: "brand_nature-animation"
        },
        {
          url: "./images/portfolio_item_04.jpg",
          type: "graphic_nature_animation"
        },
        { url: "./images/portfolio_item_05.jpg", type: "graphic" },
        { url: "./images/portfolio_item_06.jpg", type: "brand_nature" }
      ],
      collectionGallerys: {
        all: ["img1", "img2", "img3", "img4", "img5", "img6"],
        brand: ["img1", "img2", "img3", "img6"],
        graphic: ["img2", "img5", "img1", "img4"],
        nature: ["img1", "img4", "img6", "img3"],
        animation: ["img4", "img3", "img1", "img2"]
      },
      galleryImages: [],
      activeBtn: 1
    };
  },
  methods: {
    showImg(name) {
      switch (name) {
        case "all":
          this.activeBtn = 1;
          this.galleryImages = this.galleryImgUrl;

          break;
        case "brand":
          this.activeBtn = 2;
          this.galleryImages = this.galleryImgUrl;
          this.galleryImages = this.galleryImages.filter(elm => {
            var index = elm.type.indexOf("brand");
            if (index !== -1) return elm;
          });
          break;
        case "graphic":
          this.activeBtn = 3;
          this.galleryImages = this.galleryImgUrl;
          this.galleryImages = this.galleryImages.filter(elm => {
            var index = elm.type.indexOf("graphic");
            if (index !== -1) return elm;
          });
          break;
        case "nature":
          this.activeBtn = 4;
          this.galleryImages = this.galleryImgUrl;
          this.galleryImages = this.galleryImages.filter(elm => {
            var index = elm.type.indexOf("nature");
            if (index !== -1) return elm;
          });
          break;
        case "animation":
          this.activeBtn = 5;
          this.galleryImages = this.galleryImgUrl;
          this.galleryImages = this.galleryImages.filter(elm => {
            var index = elm.type.indexOf("animation");
            if (index !== -1) return elm;
          });
          break;
        default:
          break;
      }
    },
  },
  computed: {
    images: function() {
      return this.galleryImages;
    }
  },
  mounted(){
    this.showImg('all');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
