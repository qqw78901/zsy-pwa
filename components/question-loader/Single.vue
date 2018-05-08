<template>
  <section class="my-2 px-2" >
    <v-card class="card">
      <v-card-title class="subheading card-title light-blue">
       [单选题] {{this.order}}.{{question.text}}
      </v-card-title>
      <v-divider></v-divider>
      <v-radio-group v-model="answer" column class="px-4">
        <v-radio :label="`${item.orderby}.${item.text}`" :value="item.orderby" v-for="(item,index) in question.anss" :key="index" class="my-2">
        </v-radio>
      </v-radio-group>  
    </v-card>
  </section>
</template>
<script>
import axios from "axios";
import api from "../../core/api";
import qs from "qs";

import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  name: "single",
  props: {
    order: {
      type: Number,
      default: 1,
      required: false
    },
    question: {
      type: Object,
      required: true
    },
    changeFn: {
      type: Function,
      required: false
    }
  },
  data() {
    return {
      answerdataId: ""
    };
  },
  computed:{
    answer:{
      get(){
        return this.currentAnswer;
      },
      set(text){
        console.log(text);
        this.setUserAnswer({
          questionId:this.question.id,
          text
        })
      }

    },
    ...mapState('lianxi',{
    // currentAnswer:state=>state.currentAnswer
    }),
    ...mapGetters('lianxi',
    ['currentAnswer'])
  },
  methods: {
    /*submit*/
    handleAnswer(answertext) {
      const compoment = this;
      let questionId = this.question.id;
      let answerdataId = this.answerdataId || "";
      let $paperMain = this.$parent.$parent.$parent.$parent;
      let resttime = $paperMain.restTimeShow;
      let rs = {
        questionId,
        answertext,
        answerdataId,
        resttime: resttime
      };
      axios.post(api.submitAnswer, qs.stringify(rs)).then(resp => {
        if (resp.data.success == true) {
          let answerdartaId = resp.data.data;
          compoment.answerdataId = answerdartaId;
        }
      });
      this.$emit("changeFn", this.order, answertext);
    },
    ...mapMutations('lianxi',[
      'setUserAnswer'
    ])
  },
  mounted() {
  }
};
</script>
<style scoped>
.card-title {
  color: #f5f5f5;
  text-align: left;
}
.single {
  text-align: left;
}
.card p {
  margin-top: 20px;
}

</style>
