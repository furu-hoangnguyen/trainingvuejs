<template>
    <section>
        <NoticeFunctional/>
        <Gallery/>
        <BlogPost/>
        <MyCarousel/>
        <Contact/>
        <Footer/>
    </section>
</template>
<script>
import BlogPost from "../components/onceComponent/BlogPost";
import Contact from "../components/onceComponent/Contact";
import Footer from "../components/onceComponent/Footer";
import Gallery from "../components/onceComponent/Gallery";
import MyCarousel from "../components/onceComponent/MyCarousel";
import NoticeFunctional from "../components/onceComponent/Notice";
export default {
    name:'Layout',
    components:{
        Contact,BlogPost,Footer,MyCarousel,Gallery,NoticeFunctional
    }
}
</script>