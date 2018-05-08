<template>
  <section>
       <v-data-table :headers="headers" :items="rows" hide-actions>
            <template slot="items" slot-scope="props">
                <td>{{ props.item.planName }}</td>
                <td class="text-xs-center">{{ props.item.pjf }}</td>
                <td class="text-xs-center">{{ props.item.grpjf }}</td>
                <td class="text-xs-center">{{ props.item.zgf }}</td>
                <td class="text-xs-center">{{ props.item.grzgf }}</td>
                <td class="text-xs-center">{{ props.item.grcount }}</td>
            </template>
        </v-data-table>
  </section>
</template>
<script>
/**
 * 分析广场-全局分析
 * 试卷，个人练习次数，个人平均分，个人得分
 */
export default {
  name:"AllPaperAnylisis",
  data(){
      return{
        headers: [
        { text: "试卷", value: "planName", sortable: false },
        { text: "平均分", value: "pjf" },
        { text: "个人平均分", value: "grpjf" },
        { text: "最高分", value: "zgf" },
        { text: "个人最高分", value: "grzgf" },
        { text: "练习次数", value: "grcount" },
      ],
      rows:[
          {
              planName:"试卷1",
              pjf:80,
              zgf:100,
              grcount:10,
              grpjf:90,
              grzgf:100
          },
          {
              planName:"试卷1",
              pjf:80,
              zgf:100,
              grcount:10,
              grpjf:90,
              grzgf:100
          },
          {
              planName:"试卷1",
              pjf:80,
              zgf:100,
              grcount:10,
              grpjf:90,
              grzgf:100
          },
          {
              planName:"试卷1",
              pjf:80,
              zgf:100,
              grcount:10,
              grpjf:90,
              grzgf:100
          },
          {
              planName:"试卷1",
              pjf:80,
              zgf:100,
              grcount:10,
              grpjf:90,
              grzgf:100
          },
          {
              planName:"试卷1",
              pjf:80,
              zgf:100,
              grcount:10,
              grpjf:90,
              grzgf:100
          },
      ]
      }
  }
}
</script>
<style scoped>

</style>

