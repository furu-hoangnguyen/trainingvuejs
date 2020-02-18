<template>
  <section id="noticeFunctional">
    <div class="noticeFunctional">
      <div class="noticeFunctional_smart" v-for="(item,index) in imageNotice" :key="index">
        <div class="inconNotice">
          <img :src="item.url" alt />
        </div>
        <div class="functionalName">{{item.name}}</div>
        <div class="functionalContent">{{item.content}}</div>
        <button type="button" class="functionalBtn">{{item.button}}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NoticeFunctional",
  data() {
    return{
      imageNotice: [
      {
        url: "./images/service_icon_01.png",
        name: "Smart Notifications",
        button:'continue reading',
        content:
          " Labore anim dolor deserunt cillum.Labore anim dolor deserunt cillum.Labore anim dolor deserunt cillum."
      },
      {
        url: "./images/service_icon_03.png",
        name: "Lovely Web Design",
        button:'continue reading',
        content:
          " Labore anim dolor deserunt cillum.Labore anim dolor deserunt cillum.Labore anim dolor deserunt cillum."
      },
      {
        url: "./images/service_icon_03.png",
        name: "24/7 Quick Support",
        button:'continue reading',
        content:
          " Labore anim dolor deserunt cillum.Labore anim dolor deserunt cillum.Labore anim dolor deserunt cillum."
      },
      {
        url: "./images/service_icon_04.png",
        name: "One Click Setup",
        button:'continue reading',
        content:
          " Labore anim dolor deserunt cillum.Labore anim dolor deserunt cillum.Labore anim dolor deserunt cillum."
      }
    ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
