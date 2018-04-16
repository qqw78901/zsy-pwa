<template>
    <section>
        <h3>
            {{question.level_name}}-单选题
        </h3>
        <p>
            {{order}}.{{question.text}}
        </p>
        <v-radio-group v-model="answer">
            <v-radio v-for="item in question.anss" :label="`${item.orderby}.${item.text}`" :key="item.id" :value="item.orderby" />
        </v-radio-group>
    </section>

</template>
<script>
import axios from "axios";
import api from "../../core/api";
import qs from "qs";
export default {
  name: "single-show",
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
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      answer: "",
      answerdataId: ""
    };
  },
  watch: {
    answer(val, oldVal) {
      if (!this.preview) {
        this.handleAnswer(val);
      }
    }
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
  mounted() {
    if (this.userAnswer) {
      this.answer = this.userAnswer;
    }
  }
};
</script>
<style>

</style>
