<template>
    <section>
        <v-data-table :headers="headers" :items="errorQuestions" hide-actions>
            <template slot="items" slot-scope="props">
                <td>第{{ props.item.order }}题</td>
                <td class="text-xs-center">{{ props.item.num }}次</td>
                <td class="justify-center layout px-0">
                    <v-btn icon class="mx-0">
                        详情
                    </v-btn>
                </td>
            </template>
        </v-data-table>
    </section>
</template>
<script>
export default {
  name: "SinglePaperAnylisis",
  props:{
    errorQuestions:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      headers: [
        { text: "本次错题", value: "questionId", sortable: false,align:'center' },
        { text: "历史答错", value: "num" },
        { text: "操作", value: "action",align:'center' }
      ]
    };
  }
};
</script>
<style scoped>

</style>

