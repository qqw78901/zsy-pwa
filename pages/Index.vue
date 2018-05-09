<template>
    <div class="app-login-page grey lighten-2">
        <!-- <div v-if="loading" class="search-loading">
            <v-progress-circular indeterminate v-bind:size="70" class="primary--text"></v-progress-circular>
        </div> -->
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-6">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>登录</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field prepend-icon="person" name="login" label="帐号" type="text" v-model="loginName"></v-text-field>
                                <v-text-field prepend-icon="lock" name="password" label="密码" type="password" v-model="password"></v-text-field>
                                <v-layout align-center>
                                    <v-flex xs8>
                                        <v-text-field prepend-icon="lock" name="password" label="验证码" type="text" v-model="yzm"></v-text-field>
                                    </v-flex>
                                    <v-flex xs4>
                                        <img :src="yzmImg" class="d-inline-flex yzmImg" @click="changeYzm">
                                    </v-flex>
                                </v-layout>

                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="login">登录</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import api from "@/core/api.js";
import qs  from 'qs';

let state = {
  appHeaderState: {
    show: false
  }
};
function setState(store) {
  store.dispatch("appShell/appHeader/setAppHeader", state.appHeaderState);
}

export default {
  name: "Index",
  metaInfo: {
    title: "登录",
    titleTemplate: "%s - 云学习分析平台",
    meta: [
      { name: "keywords", content: "lavas PWA" },
      {
        name: "description",
        content:
          "基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"
      }
    ]
  },
  data() {
    return {
      loginName:"",
      password:"",
      yzm:"",
      loading: true,
      yzmImg: api.loginYzm,
      data: []
    };
  },
  methods: {
      changeYzm(){
          this.yzmImg =`${api.loginYzm}?t=${+new Date()}`;
      },
      login(){
         const {loginName,password,yzm} = this;
          this.$http.post(api.userloginUrl,qs.stringify({
              loginName,password,yzm,userType:2
          })).then(resp=>{
              console.log(resp);
          })
      }
  },
  async asyncData({ store, route }) {
    setState(store);
  },
  activated() {
    setState(this.$store);
  }
};
</script>

<style  scoped>
.yzmImg {
    width: 88%;
}
</style>
