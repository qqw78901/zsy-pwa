<template>
    <section>
        <!-- <SinglePaperAnylisis/> -->
       <AllPaperAnylisis/>
       <PracticeHistory/>
    </section>
</template>
<script>
//成绩分析广场
import SinglePaperAnylisis from '../components/Chengji/SinglePaperAnylisis'
import AllPaperAnylisis from '../components/Chengji/AllPaperAnylisis'
import PracticeHistory from '../components/Chengji/PracticeHistory'
export default {
  name: "Chengji",
  components:{
      SinglePaperAnylisis,
      AllPaperAnylisis,
      PracticeHistory
  },
  data() {
    return {
    }
  }
};
</script>
<style scoped>

</style>

