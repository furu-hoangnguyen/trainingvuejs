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
        {{isShowPopUpSendMessage}}
        <button type="button" @click="showPopUpSendMessages(true)">
          Send Us A message
        </button>
        
      </div>
    </div>
    <PopupMessage
      :sendMessage="getMessages"
      :showPopup="showPopUpSendMessages"
      @getMessages="getMessages"
      @close="showPopUpSendMessages(false)"
      v-if="isShowPopUpSendMessage"
    />
  </section>
</template>

<script>
import PopupMessage from "./Popup";
// import { mapState, mapActions, mapGetters } from "vuex";
import { mapState,mapActions} from "vuex";
export default {
  name: "Contact",
  data: function() {
    return {
      // isShowPopUpSendMessage: false,
      // messageData: { name: "", phone: "", email: "" },
      // valueEmail: ""
    };
  },
  components: {
    PopupMessage
  },
  methods: {
    ...mapActions('ContactModule',['act_showPopUpSendMessages','act_setDataMessage']),
    getMessages: function(data) {
      this.act_setDataMessage(data)
    },
    showPopUpSendMessages: function(data) {
      this.act_showPopUpSendMessages({isShow: data});
    }
  },
  beforeRouteLeave (to, from, next) {
    var nameRoute = this.$route.path;
    alert("before Rout Enter contact this");
    console.log(nameRoute)
    next();
  },
  computed:{
    ...mapState({isShowPopUpSendMessage: state => state.ContactModule.isShowPopUpSendMessage})
  },
  created(){
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
