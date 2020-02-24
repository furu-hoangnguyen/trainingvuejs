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
            @click="showBlogPost('post' + (index + 1))"
            :class="{ active: activeBtn == index + 1 }"
            :key="index"
          >
            {{ item }}
          </button>
        </div>
      </div>

      <div class="blogPost__article">
        <div class="blogPost__article--items " id="blogPost1" v-for="(item, index) in cmp_currentPost" :key="index">
          <img :src="item.url" alt="error" />
          <label class="blogPost__article--name">
            {{ item.title }}</label
          >
          <label class="blogPost__article--path">{{
            item.path
          }}</label>
          <p>
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogPost",
  data: function() {
    return {
      blogButton: [
        "Nulla Eget Convallis Augue",
        "Quisque Ultricies Maximus",
        "Sed Vel Elit Et Lorem",
        "Vivamus Purus Neque"
      ],
      listPost: [
        {
          url: "./images/blog_item_01.jpg",
          name: "post1",
          title: "Nulla eget Convallis",
          path: "Digital Maketing / Honey / 21 September 2020",
          content:
            "Non pariatur sunt anim ad adipisicing eu sunt anim velit ullamco deserunt. Quis reprehenderit culpa ullamco duis culpa labore ut aliquip proident irure labore. Nisi adipisicing nostrud fugiat labore laboris. Dolore ex nulla eiusmod duis."
        },
        {
          name: "post2",
          url: "./images/blog_item_02.jpg",
          title: "Proident magna enim eu elit do",
          path: "Digital Maketing / Honey / 21 September 2020",
          content:
            "Donec interdum scelerisque autor. Nulla id loẻm autor. Proident ad commodo magna consequat.Cupidatat ullamco voluptate dolor veniam esse velit sunt cillum in laboris id."
        },
        {
          name: "post3",
          url: "./images/blog_item_03.jpg",
          title:
            "Quis dolor dolor nisi reprehenderit proident laboris incididunt in.",
          path: "Digital Maketing / Honey / 21 September 2020",
          content:
            "Minim ad commodo ipsum aliqua id qui minim ullamco pariatur aliquip cupidatat est id. Occaecat duis nisi deserunt cillum veniam aute irure minim sit et in ipsum labore pariatur. Enim dolore cupidatat minim eiusmod sint proident ad. Cupidatat consequatculpa reprehenderit pariatur in proident incididunt irure veniam nulla aliquip fugiat."
        },
        {
          name: "post4",
          url: "./images/blog_item_04.jpg",
          title:
            "Excepteur eiusmod mollit occaecat ex id nisi aliqua sit cillum enim cupidatat voluptate ad nulla",
          path: "Digital Maketing / Honey / 21 September 2020",
          content:
            "Sit tempor commodo ea eiusmod aliquip fugiat elit voluptate velit. Consectetur reprehenderit culpa cillum dolore est eu enim consequat duis. Ut minim excepteur minim labore magna minim. Minim tempor mollit ex id."
        }
      ],
      currentPost: {
        url: "",
        title: "",
        path: "",
        content: ""
      },
      activeBtn: 1,
      showPost: "post1"
    };
  },
  methods: {
    showBlogPost(name) {
      this.showPost = name
    },

    resetColorBlog() {
      for (var i = 1; i < 5; i++) {
        document.getElementById("btn_blogPost" + i).style.color = "black";
      }
    }
  },
  computed: {
    cmp_currentPost: function() {
      var post;
      post = this.listPost.filter(item => {
        return item.name == this.showPost
      });
      return post
    }
  },
  mounted() {
    console.log(this.cmp_currentPost)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
