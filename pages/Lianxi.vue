<template>
  <section>
    <div class="pt-3 pb-2 mx-2 text-xs-left question-header">
      <span class="text-xs-right blue--text" v-if="question.ques">第{{currentIndex+1}}/{{question.ques.length}}题</span>
      <span>{{question.plan_name}} </span>
      <v-btn small color="teal darken-1" class="submit-paper-btn" @click="submitPaper">交卷</v-btn>
    </div>
    <template v-for="(item,index) in question.ques">
      <!-- question main -->
      <Single :question="item" :key="index" :order="index+1" v-if="index==currentIndex&&item.type==1"></Single>
      <Multi :question="item" :key="index" :order="index+1" v-if="index==currentIndex&&item.type==2"></Multi>
    </template>

    <v-card class="mx-2" light color="red" v-if="!currentQuestionIsRight&&currentAnswer">
      <v-card-text class="correct-helper">答错了，正确答案：
        <b>{{currentCorrectAnswer}}
        </b>
      </v-card-text>
    </v-card>
     <v-card class="mx-2" light color="teal" v-else-if="currentQuestionIsRight&&currentAnswer">
      <v-card-text class="correct-helper">答对了
      </v-card-text>
    </v-card>
    <v-layout>
      <v-btn color="primary" fixed bottom left fab icon small dark class="btn-center" @click="prevQuestion">
        <v-icon medium dark>chevron_left</v-icon>
      </v-btn>
      <v-btn color="primary" fixed bottom right fab icon small dark class="btn-center" @click="nextQuestion">
        <v-icon medium dark>chevron_right</v-icon>
      </v-btn>
    </v-layout>
  </section>

</template>
<script>
import Single from "../components/question-loader/Single";
import Multi from "../components/question-loader/Multi";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "Lianxi",
  components: {
    Single,
    Multi
  },
  methods: {
    prevQuestion() {
      if (this.currentIndex - 1 < 0) {
        return;
      }
      this.setCurrentIndex(this.currentIndex - 1);
    },
    nextQuestion() {
      if (this.currentIndex + 1 >= this.question.ques.length) {
        return;
      }
      this.setCurrentIndex(this.currentIndex + 1);
   

    },
    submitPaper(){
      //这里需要做一个上传的操作
      this.$store.dispatch('lianxi/submitPaper').then(()=>{
          this.$router.replace('result');
      });


    },
    ...mapMutations("lianxi", [
      "setQuestion",
      "setCurrentIndex",
      "setCorrectAnswer"
    ]),
    // ...mapActions("lianxi",['addQuestionLog'])
  },
  data() {
    return {};
  },
  watch:{
  },
  computed: {
    ...mapState("lianxi", {
      currentIndex: state => state.currentIndex,
      question: state => state.question
    }),
    ...mapGetters("lianxi", ["currentCorrectAnswer", "currentQuestionIsRight","currentAnswer"])
  },
  mounted() {
    this.$http.get(this.$api.getPaperByPlanId,{
      params:{
        planId:this.$route.query.planId
      }
    }).then((resp)=>{
        let {data,correctAnswer} = resp.data;
        let question = JSON.parse(data);
        this.setQuestion(question);
        this.setCorrectAnswer(correctAnswer);
    })

  }
};
</script>
<style>
.shrink {
  -webkit-box-flex: 0 !important;
  -ms-flex-positive: 0 !important;
  flex-grow: 0 !important;
  -ms-flex-negative: 1 !important;
  flex-shrink: 1 !important;
}
.btn-center i {
  display: inline-flex;
}
.question-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
}
.submit-paper-btn {
  margin-top: 0;
  margin-bottom: 0;
  height: 30px;
  min-width: 50px;
  color: #ffffff !important;
}
.correct-helper {
  text-align: left;
  color: #f5f5f5;
  font-size: 16px;
}
</style>


