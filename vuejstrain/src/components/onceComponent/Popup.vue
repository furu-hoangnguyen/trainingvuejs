<template>
  <section>
    <div class="popup" id="popup">
      <img :src="'./images/close.png'" alt="" @click="$emit('close')" />
      <div class="popup__form">
          <label>Name:</label>
          <input
            type="text"
            class="popup__form--name"
            v-model="messageData.name"
            name="name"
          />
          <label>Phone:</label>
          <input
            type="text"
            class="popup__form--phone"
            v-model="messageData.phone"
            name="phone"
          />
          <label>Email:</label>
          <input
            type="text"
            class="popup__form--email"
            v-model="messageData.email"
            name="email"
          />
          <button type="button" @click="showMsg">send message</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PopupMessage",
  data() {
    return {
      isShowPopUpSendMessage: true,
      messageData: { name: "", phone: "", email: "" }
    };
  },
  methods: {
    showMsg: function() {
      this.$emit('getMessages',this.messageData)
    },
    hidePopup: function() {
      this.showPopup(false);
    }
  },

  mounted() {},
  props: { sendMessage: Function, showPopup: Function }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
