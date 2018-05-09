<template>
    <div>
        <div class="content">
            <v-container fluid grid-list-lg>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card color="blue darken-2" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline">欢迎您</div>
                                <div class="text-xs-left">这是一个云学习以及分析应用，系统基于大数据，以大数据做背景，结合成绩分析，助你更好地提升成绩</div>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 @click="goTo('lianxi')">
                        <v-card color="blue-grey darken-2" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline">不一样的练习平台</div>
                                <div class="text-xs-left">练习将不仅仅是练习,系统会基于大量的数据分析，在结束练习后给予您提升的建议</div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat dark>马上进入练习</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 @click="goTo('chengji')">
                        <v-card color="cyan darken-2" class="white--text">
                            <v-card-title primary-title>
                                <div class="headline">成绩分析</div>
                                <div class="text-xs-left">基于本平台的数据罗列出各个试卷的分析，向学霸看齐</div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat dark>进入分析广场</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>

        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
function setState(store) {
  store.dispatch("appShell/appHeader/setAppHeader", {
    show: true,
    title: "云学习分析平台",
    showMenu: true,
    showBack: false,
    showLogo: false
    // actions: [
    //     {
    //         icon: 'search',
    //         route: '/search'
    //     }
    // ]
  });
}

export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s - Lavas",
    meta: [
      { name: "keywords", content: "lavas PWA" },
      {
        name: "description",
        content:
          "基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"
      }
    ]
  },
  async asyncData({ store, route }) {
    setState(store);
  },
  activated() {
    setState(this.$store);
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="stylus" scoped>
.content {
    display: flex;
    align-items: flex-start;
    justify-content: flex;
    height: 100%;
    flex-wrap: wrap;

    h2 {
        font-size: 46px;
        font-weight: 500;
    }
}
</style>
