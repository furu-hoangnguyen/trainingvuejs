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
            @click="activeBtn = item.imgName"
            :class="{ active: activeBtn == item.imgName}"
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
      activeBtn: 'all'
    };
  },
  methods: {
  },
  computed: {
    images: function() {
      var _galleryImgUrl;
      switch (this.activeBtn) {
        case 'all':
          _galleryImgUrl = this.galleryImgUrl
          break;
      case 'brand':
          _galleryImgUrl = this.galleryImgUrl.filter(elm => {
            var index = elm.type.indexOf("brand");
            if (index !== -1) return elm;
          });
          break;
      case "graphic":
          _galleryImgUrl = this.galleryImgUrl.filter(elm => {
            var index = elm.type.indexOf("graphic");
            if (index !== -1) return elm;
          });
          break;
      case "nature":
          _galleryImgUrl = this.galleryImgUrl.filter(elm => {
            var index = elm.type.indexOf("nature");
            if (index !== -1) return elm;
          });
          break;    
      case "animation":
          _galleryImgUrl = this.galleryImgUrl.filter(elm => {
            var index = elm.type.indexOf("animation");
            if (index !== -1) return elm;
          });
          break;        
        default:
          break;
      }
      return _galleryImgUrl
    }
  },
  created(){
    // this.showImg('all');
  },
  // beforeRouteEnter (to, from, next) {
  //   alert("Before Route Enter")
  //   next()
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
