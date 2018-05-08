<template>
    <section>
        <v-data-table :headers="headers" :items="errorQuestions" hide-actions>
            <template slot="items" slot-scope="props">
                <td>{{ props.item.questionId }}</td>
                <td class="text-xs-center">{{ props.item.num }}次</td>
                <td class="justify-center layout px-0">
                    <v-btn icon class="mx-0">
                        查看
                    </v-btn>
                </td>
            </template>
        </v-data-table>
    </section>
</template>
<script>
export default {
  name: "SinglePaperAnylisis",
  data() {
    return {
      headers: [
        { text: "本次错题", value: "questionId", sortable: false },
        { text: "历史答错", value: "num" },
        { text: "详情", value: "action" }
      ],
      errorQuestions: [
        {
          questionId: 1,
          num: 2
        },
        {
          questionId: 2,
          num: 3
        },
        {
          questionId: 3,
          num: 2
        },
        {
          questionId: 4,
          num: 2
        },
        {
          questionId: 6,
          num: 2
        },
        {
          questionId: 8,
          num: 8
        },
        {
          questionId: 15,
          num: 2
        },
        {
          questionId: 10,
          num: 2
        },
        {
          questionId: 2,
          num: 3
        },
        {
          questionId: 3,
          num: 2
        },
        {
          questionId: 4,
          num: 2
        },
        {
          questionId: 6,
          num: 2
        },
        {
          questionId: 8,
          num: 8
        },
        {
          questionId: 15,
          num: 2
        },
        {
          questionId: 10,
          num: 2
        }
      ]
    };
  }
};
</script>
<style scoped>

</style>

