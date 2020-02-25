<template>
  <section id="noticeFunctional">
    <div class="noticeFunctional">
      <div
        class="noticeFunctional_smart"
        v-for="(item, index) in imageNotice"
        :key="index"
      >
        <div class="inconNotice">
          <img :src="item.url" alt />
        </div>
        <div class="functionalName">{{ item.name }}</div>
        <div class="functionalContent">{{ item.content }}</div>
        <button type="button" class="functionalBtn">{{ item.button }}</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NoticeFunctional",
  data() {
    return {};
  },
  computed: {
    ...mapState("NoticeModule", ["imageNotice"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
