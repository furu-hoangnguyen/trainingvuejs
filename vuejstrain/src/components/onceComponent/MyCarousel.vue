<template>
  <section id="myCarousel">
    <div class="myCarousel">
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
          <div :class="{'carousel-item':true,carouselItem:true, active:activeNum == index}" v-for="(item,index) in carousel" :key="index">
            <div class="myCarousel_content">
              {{item.content}}
            </div>
          </div>
          <!-- <div class="carousel-item carouselItem">
            <div class="myCarousel_content">
              Esse et incididunt id non eu esse eu aliqua.Consectetur eiusmod
              consequat et amet deserunt ad.
            </div>
          </div>
          <div class="carousel-item carouselItem">
            <div class="myCarousel_content">
              Esse et incididunt id non eu esse eu aliqua.Consectetur eiusmod
              consequat et amet deserunt ad. Esse et incididunt id non eu esse
              eu aliqua.Consectetur eiusmod consequat et amet deserunt ad.
            </div>
          </div> -->
        </div>
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyCarousel",
  data(){
    return{
      carousel:[
        {content:'Esse et incididunt id non eu esse eu aliqua.Consectetur eiusmod consequat et amet deserunt ad. Esse et incididunt id non eu esse eu aliqua.Consectetur eiusmod consequat et amet deserunt ad.'},
        {content:'Esse et incididunt id non eu esse eu aliqua.Consectetur eiusmod consequat et amet deserunt ad.'},
        {content:'asssincididunt id non eu esse eu aliqua.Consectetur eiusmod consequat et amet deserunt ad.'},
      ],
      activeNum:0
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
