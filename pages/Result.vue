<template>
    <section>
        <v-card color="pink darken-1">
            <v-card-text class="white--text">
                <p>您在《{{question.plan_name}}》</p>
                <p class="my-0">答对题数：{{corrrectAnswerCount}} 考试用时：{{useTime}}</p>
            </v-card-text>
        </v-card>

        <v-card>
            <v-card-text class="text-xs-left">
                <p>本试卷总分{{paper.fullMark/100}}，历次考试中平均分{{paper.average/100}}，最高分：{{paper.highest/100}}</p>
                <p>按分数/总分折算后，历次平均分：{{paper.average/paper.fullMark*100}}，最高分：{{paper.highest/paper.fullMark*100}}</p>
                <p>本次练习中折算得分：{{corrrectAnswerCount}}，{{corrrectAnswerCount<(paper.average/paper.fullMark*100)?'低':'高'}}于平均水平</p>
            </v-card-text>
        </v-card>
        <v-card color="primary" class="my-2">
            <v-card-text class="white--text text-xs-left">
                <P>基于总分和答题情况，经系统分析，建议：</P>
                <ul class="px-2">
                    <li v-for="item in recommend" :key="item">{{item}}</li>
                </ul>
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
import moment from 'moment';
import SinglePaperAnylisis from "@/components/Chengji/SinglePaperAnylisis";
export default {
  name: "Result",
  data() {
    return {
        paper:{
            fullMark:1,
            highest:0,
            average:0
        }
     
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
    useTime(){
        return moment(this.endTime-this.startTime).format("mm:ss");
    },
    recommend(){
        let rec =[];
        let lessThanNormal = this.corrrectAnswerCount<(this.paper.average/this.paper.fullMark*100);
        if(lessThanNormal){
            rec.push('你的分数低于平均水平，需要特别留意哦！')
        }
        let lessTime = this.endTime-this.startTime<30*60*1000;
        if(lessTime){
            rec.push('您的练习时间投入不够，建议您屏蔽外部消息、专注练习');
        }
        console.log(rec);
        return rec
    },
    ...mapState("lianxi", ["question", "userAnswer","startTime","endTime"])
  },
  mounted(){
      this.$http(this.$api.getpaperInfoByPlanId,{
          params:{
              planId:this.question.plan_id
          }
      }).then(resp=>{

          let {data} = resp.data;
          this.paper = data;
      console.log(this.recommend)
          
      })
  }
};
</script>
<style>

</style>


