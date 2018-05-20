/**
 * 在 SSR 场景下，单一状态会被多个服务端 Vue 实例共享，造成互相影响，
 * 因此需要每次调用 state 方法创建新的初始状态对象。
 * 如果您只是在 SPA/MPA 场景下使用 Lavas，可以不用遵守这个规则，直接返回初始状态对象即可。
 */
import api from '@/core/api';
import axios from 'axios';
export const state = () => {
    return {
        userInfo: {
            deptName: "",
            name: "",
            loginName: "",
            id: ""

        }
    };
};
export const getters = {}

export const mutations = {
    setUserInfo(state, info) {
        state.userInfo = info;
    }
};
export const actions = {
    updateUserInfo({ commit }) {
        axios.get(api.getUserInfo).then(resp => {
            try{
                commit("setUserInfo", resp.data.data);
            }catch(e){
            }
        })
    }

}