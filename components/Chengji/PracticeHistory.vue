<template>
  <section>
    <v-subheader>
      {{planName}}
    </v-subheader>
    <v-data-table :headers="headers" :items="rows" hide-actions>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.createDt }}</td>
        <td class="text-xs-center">{{ props.item.practiceLong }}</td>
        <td class="text-xs-center">{{ props.item.errCount }}</td>
        <td class="text-xs-center">{{ props.item.score }}</td>
      </template>
    </v-data-table>
  </section>
</template>
<script>
/**
 * 分析广场-练习历史
 * 试卷，个人联系次数，个人平均分，个人得分
 */
export default {
  name: "PracticeHistory",
  data() {
    return {
      planName: "ABC考试",
      headers: [
        { text: "记录时间", value: "createDt" },
        { text: "练习时长", value: "practiceLong" },
        { text: "错题数", value: "errCount" },
        { text: "总分", value: "score" }
      ],
      rows: [
        {
          createDt: "2018-01-01",
          practiceLong: 80,
          errCount: 100,
          score: 10
        },
        {
          createDt: "2018-01-01",
          practiceLong: 80,
          errCount: 100,
          score: 10
        },
        {
          createDt: "2018-01-01",
          practiceLong: 80,
          errCount: 100,
          score: 10
        },
        {
          createDt: "2018-01-01",
          practiceLong: 80,
          errCount: 100,
          score: 10
        },
        {
          createDt: "2018-01-01",
          practiceLong: 80,
          errCount: 100,
          score: 10
        },
        {
          createDt: "2018-01-01",
          practiceLong: 80,
          errCount: 100,
          score: 10
        }
      ]
    };
  }
};
</script>
<style scoped>

</style>

