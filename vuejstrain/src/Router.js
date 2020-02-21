import NoticeFunctional from "./components/onceComponent/Notice";
import Gallery from "./components/onceComponent/Gallery";
import MyCarousel from "./components/onceComponent/MyCarousel";
import BlogPost from "./components/onceComponent/BlogPost";
import Contact from "./components/onceComponent/Contact";
import Footer from "./components/onceComponent/Footer";
import Layout from "./layouts/layout.vue"
export const routes = [
  { path: "/", name: "/", component: Gallery, redirect: "/home" },
  {
    path: "/home",
    name: "homepage",
    component:Layout
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery
  },
  {
    path: "/noticeFunctional",
    name: "noticeFunctional",
    component: NoticeFunctional
  },
  {
    path: "/myCarousel",
    name: "myCarousel",
    component: MyCarousel,
    props: true
  },
  {
    path: "/blogPost",
    name: "blogPost",
    component: BlogPost,
    props: { propsname: "props_blogpost" }
  },
  { path: "/footer", name: "footer", component: Footer },
  {
    path: "/contact/:id/:name",
    name: "contact",
    component: Contact,
    props: true
  }
];
