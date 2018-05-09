<template>
    <section>
        <v-card color="pink darken-1">
            <v-card-text class="white--text">
                <p>您在《{{question.plan_name}}》</p>
                <p class="my-0">答对题数：{{corrrectAnswerCount}} 考试用时：60:00</p>
            </v-card-text>
        </v-card>

        <v-card>
            <v-card-text class="text-xs-left">
                <p>本试卷总分100，历次考试中平均分：88，最高分：100</p>
                <p>按分数/总分折算后，历次平均分：88，总分：100</p>
                <p>本次练习中折算得分：60，低于平均水平</p>
            </v-card-text>
        </v-card>
        <v-card color="primary" class="my-2">
            <v-card-text class="white--text text-xs-left">
                <P>基于总分和答题情况，经系统分析，建议您：多练习</P>
            </v-card-text>
        </v-card>
        <v-subheader>
            下表不统计没做的题
        </v-subheader>
        <v-card>
            <SinglePaperAnylisis :errorQuestions="errorQuestions" />
        </v-card>

    </section>
</template>
<script>
import { mapState } from "vuex";
import SinglePaperAnylisis from "@/components/Chengji/SinglePaperAnylisis";
export default {
  name: "Result",
  data() {
    return {
      // errorQuestions:[]
    };
  },
  components: {
    SinglePaperAnylisis
  },
  computed: {
    corrrectAnswerCount() {
      return this.userAnswer.filter(item => item.mark == 100).length;
    },
    errorQuestions() {
      return this.userAnswer.filter(item => item.mark == 0);
    },
    ...mapState("lianxi", ["question", "userAnswer"])
  }
};
</script>
<style>

</style>


