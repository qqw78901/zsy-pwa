<template>
  <section class="my-2">
    <!-- <h3>
      {{question.level_name}}-单选题
    </h3>
    <p>
      {{order}}.{{question.text}}
    </p>
    <v-radio-group v-model="answer">
      <v-radio v-for="item in question.anss" :label="`${item.orderby}.${item.text}`" :key="item.id" :value="item.orderby" />
    </v-radio-group> -->

    <v-card class="card">
      <v-card-title class="subheading card-title light-blue ">
        [多选题]{{question.text}}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="card-text">
        <div v-for="(item,index) in question.anss" :key="index">
          <v-layout align-center>
            <v-checkbox v-model="answer" hide-details class="shrink mr-2" :value="item.orderby"></v-checkbox>
            <p>{{item.orderby}}. {{item.text}}</p>
          </v-layout>
          <v-divider v-if="index+1!=question.anss.length"></v-divider>
        </div>
      </v-card-text>
    </v-card>

  </section>

</template>
<script>
import axios from "axios";
import api from "../../core/api";
import qs from "qs";
export default {
  name: "Multi",
  props: {
    userAnswer: {
      type: String,
      default: null,
      required: false
    },
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
      answer: "",
      answerdataId: ""
    };
  },
  watch: {
    // answer(val, oldVal) {
    //   if (!this.preview) {
    //     this.handleAnswer(val);
    //   }
    // }
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
    }
  },
  mounted() {}
};
</script>
<style scoped>
.card-title {
  color: #f5f5f5;
  text-align: left;
}
.card-text {
}
.single {
  text-align: left;
}
.card p {
  margin-top: 20px;
}
</style>
