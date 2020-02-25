<template>
  <section id="blogPost">
    <div class="blogPost">
      <div class="blogPost__nav">
        <label>our blog posts</label>
        <span class="blogPost__line"></span>
        <p>
          Nam vulputate element nulla, sit amet congue ipsum malesuala pretium.
          Vivamus vel gravida.Nam vulputate element nulla, sit amet congue ipsum
          malesuala pretium. Vivamus vel gravida
        </p>
        <div class="blogPost__btn">
          <button
            v-for="(item, index) in blogButton"
            type="button"
            @click="act_showBlogPost('post' + (index + 1))"
            :class="{ active: activeBtn == index + 1 }"
            :key="index"
          >
            {{ item }}
          </button>
        </div>
      </div>

      <div class="blogPost__article">
        <div
          class="blogPost__article--items "
          id="blogPost1"
          v-for="(item, index) in cmp_currentPost"
          :key="index"
        >
          <img :src="item.url" alt="error" />
          <label class="blogPost__article--name"> {{ item.title }}</label>
          <label class="blogPost__article--path">{{ item.path }}</label>
          <p>
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters , mapActions} from "vuex";
export default {
  name: "BlogPost",
  data: function() {
    return {};
  },
  methods: {
    ...mapActions('BlogPostModule',['act_showBlogPost']),
  },
  computed: {
    ...mapState("BlogPostModule", [
      "listPost",
      "blogButton",
      "activeBtn",
      "showPost"
    ]),
    ...mapGetters("BlogPostModule", ["cmp_currentPost"])
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
