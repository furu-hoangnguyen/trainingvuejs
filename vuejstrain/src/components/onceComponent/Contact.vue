<template>
  <section id="contract">
    <div class="contract">
      <div class="contract__content">
        <label>contact us</label>
        <span class="blogPost__line"></span>
        <p>
          Amet sint nostrud exercitation veniam. Adipisicing ut id voluptate
          aliquip adipisicing minim pariatur velit laboris adipisicing quis
          culpa aliqua commodo. Sint amet aute ut incididunt nulla.
        </p>
        <button type="button" @click="showPopUpSendMessages(true)">
          Send Us A message
        </button>
      </div>
    </div>
    <PopupMessage
      :sendMessage="getMessages"
      :showPopup="showPopUpSendMessages"
      @getMessages="getMessages"
      @close="isShowPopUpSendMessage = false"
      v-model="valueEmail"
      v-if="isShowPopUpSendMessage"
    />
  </section>
</template>

<script>
import PopupMessage from "./Popup";
export default {
  name: "Contact",
  data: function() {
    return {
      isShowPopUpSendMessage: false,
      messageData: { name: "", phone: "", email: "" },
      valueEmail: ""
    };
  },
  components: {
    PopupMessage
  },
  methods: {
    getMessages: function(data) {
      console.log(data);
      this.messageData.name = data.name;
      this.messageData.phone = data.phone;
      this.messageData.email = data.email;
    },
    showPopUpSendMessages: function(data) {
      this.isShowPopUpSendMessage = data;
    }
  },
  beforeRouteLeave (to, from, next) {
    var nameRoute = this.$route.path;
    if(nameRoute !== '/home'){
      alert("before Rout Enter contact this");
    }
    console.log(nameRoute)
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
