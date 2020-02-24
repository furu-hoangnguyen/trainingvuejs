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
            @click="setTypeGallery(item.imgName)"
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
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: "Gallery",
  data: function() {
    return {
    
    };
  },
  methods: {
    ...mapActions('GalleryModule',['setTypeGallery']),
  },
  computed: {
    ...mapState('GalleryModule',['activeBtn','galleryButton','galleryImgUrl']),
    ...mapGetters('GalleryModule',['images'])
  },
  created(){
    console.log(this.images)
  },
  // beforeRouteEnter (to, from, next) {
  //   alert("Before Route Enter")
  //   next()
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
