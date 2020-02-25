import Vue from 'vue'

// var myMixin = {
//   data: function () {
//     return {
//       message: 'hello',
//       foo: 'abc'
//     }
//   },  
//   created: function () {
//     this.hello();
//   },
//   methods: {
//     hello: function () {
//       console.log('hello from mixin!')
//     },
//     showMessage(){
//       alert("hoang")
//     }
//   }
// };

export default Vue.mixin({
  data: function () {
    return {
      a: []
    }
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!');
    },
    showMessage() {
      console.log(this.a)
      this.a.push(this.$data)
      console.log(this.a);
    }
  },
  mounted: function () {
    console.log(this.$route.name);
    var elmntName = this.$route.name;
    var elmnt = document.getElementById(elmntName);
    elmnt.scrollIntoView();
  }
})