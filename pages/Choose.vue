<template>
    <section>
        <v-card color="light-2" class="white--text mt-4 mx-2">
            <v-card-title class="teal darken-1">{{examPaper.name}}</v-card-title>
            <v-divider></v-divider>
            <v-list>
                <template v-for="(item,index) in listData">
                    <v-list-tile :key="index">
                        <v-list-tile-content class="align-start">{{item.key}}</v-list-tile-content>
                        <v-list-tile-content class="align-end">{{item.value}}</v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="'divider'+index" ></v-divider>
                </template>
            </v-list>

            <v-card-actions>
                <v-flex class="align-center pb-3">
                    <v-btn color="teal white--text" round @click="$router.push('lianxi')">
                        <v-icon>edit</v-icon>开始模拟考</v-btn>
                </v-flex>
            </v-card-actions>
        </v-card>

    </section>
</template>
<script>
/**
 * 选择练习
 */
export default {
  name: "Choose",
  data() {
    return {
      examPaper: {
        fullMark: 0,
        isPublic: "",
        name: "",
        numStr: "",
        passMark: 0,
        plansetId: 0,
        questionNum: 0,
        questionSum: 0,
        useType: ""
      }
    };
  },
  computed: {
    listData() {
      const { numStr, passMark, fullMark, useType } = this.examPaper;
      let userType = "";
      switch (useType) {
        case "1":
          userType = "医生";
          break;
        case "2":
          userType = "护理";
          break;
        case "3":
          userType = "药学";
          break;
        case "4":
          userType = "医技";
          break;
        case "5":
          userType = "管理";
          break;
        case "6":
          userType = "其他";
          break;
      }
      const dataModel = [
        {
          key: "试题数量",
          value: numStr
        },
        {
          key: "人员类别",
          value: userType
        },
        {
          key: "合格",
          value: `${parseInt(passMark / 100, 10)}`
        },
        {
          key: "总分",
          value: `${parseInt(fullMark / 100, 10)}`
        }
      ];
      return dataModel;
    }
  },
  async created() {
    console.log("active");
    const planset = await this.$http.get(this.$api.getpsnamebydeptplanset);
    const { data } = planset.data;
    const [plansetObj] = data;
    console.log(plansetObj);
    let plansetId = plansetObj.intId;
    const find = await this.$http.get(this.$api.exercisetime, {
      params: {
        plansetId
      }
    });
    this.examPaper = find.data.rows[0];
  }
};
</script>
<style scoped>

</style>

