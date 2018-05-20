<template>
  <section>
    <v-data-table :headers="headers" :items="errVO" hide-actions>
      <template slot="items" slot-scope="props">
        <td>第{{ props.item.order }}题</td>
        <td class="text-xs-center">{{ props.item.wrongCount }}次</td>
        <td class="text-xs-center">共{{ props.item.allCount }}次</td>
        <!-- <td class="justify-center layout px-0">
          <v-btn icon class="mx-0">
            详情
          </v-btn>
        </td> -->
      </template>
    </v-data-table>
  </section>
</template>
<script>
export default {
  name: "SinglePaperAnylisis",
  props: {
    errorQuestions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      headers: [
        {
          text: "本次错题",
          value: "questionId",
          sortable: false,
          align: "center"
        },
        { text: "历史答错", value: "num" },
        { text: "总答题", value: "action", align: "center" }
      ],
      errVO: []
    };
  },
  mounted() {
    console.log(this.$store.state.login.userInfo);
    this.errorQuestions.forEach(({ questionId, order }) => {
      this.$http
        .get(this.$api.analysisQuestion, {
          params: {
            userId: this.$store.state.login.userInfo.id,
            questionId
          }
        })
        .then(resp => {
          let { data } = resp.data;
          if (data) {
            let { allCount, wrongCount } = data;
            this.errVO.push({
              questionId,
              order,
              allCount,
              wrongCount
            });
          }
        });
    });
  }
};
</script>
<style scoped>

</style>

