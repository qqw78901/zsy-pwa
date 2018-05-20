/**
 * 在 SSR 场景下，单一状态会被多个服务端 Vue 实例共享，造成互相影响，
 * 因此需要每次调用 state 方法创建新的初始状态对象。
 * 如果您只是在 SPA/MPA 场景下使用 Lavas，可以不用遵守这个规则，直接返回初始状态对象即可。
 */
import axios from 'axios';
import api from '@/core/api';

export const state = () => {
    return {
        currentIndex: 0,
        question: {},
        //正确答案
        correctAnswer: {},
        userAnswer: [], //考生填的答案
        exercise: {
            id: ''
        },
        mark:0,
        startTime:0,
        endTime:0,
        // currentAnswer: ''
    };
};
export const getters = {
    //当前用户答案
    currentAnswer(state, getters, rootState, rootGetters) {
        let { currentQuestionId } = getters;
        let { userAnswer } = state;
        let result = ''
        userAnswer.forEach(element => {
            if (element.questionId === currentQuestionId) {
                result = element.text;
            }
        });
        return result;
    },
    /**
     * 当前选题的正确答案
     * @param {*} state 
     * @param {*} getters 
     * @param {*} rootState 
     * @param {*} rootGetters 
     */
    currentCorrectAnswer(state, getters, rootState, rootGetters) {
        const { currentQuestionId } = getters;
        const { correctAnswer } = state;
        return correctAnswer[`q_${currentQuestionId}`] || '';
    },
    /**
     * 当前问题的id
     * 根据currentIndex换算
     * @param {*} state 
     */
    currentQuestionId(state) {
        const { currentIndex, question } = state;
        try {
            return question.ques[currentIndex].id;
        } catch (e) {
            return '';
        }
    },
    /**
     * 当前问题
     * 根据currentIndex换算
     * @param {*} state 
     */
    currentQuestion(state) {
        const { currentIndex, question } = state;
        try {
            return question.ques[currentIndex];
        } catch (e) {
            return '';
        }
    },
    currentQuestionIsRight(state, getters, rootState, rootGetters) {
        const { currentAnswer, currentCorrectAnswer } = getters;
        //暂时单选
        return currentAnswer == currentCorrectAnswer;
    }
}

export const mutations = {
    setQuestion(state, question) {
        state.question = question;
    },
    setStartTime(state) {
        state.startTime = +new Date();
    },
    setEndTime(state) {
        state.endTime = +new Date();
    },
    setCurrentIndex(state, currentIndex) {
        state.currentIndex = currentIndex;
    },
    /**
     * 设置考生选择的答案
     * @param {*} state 
     * @param {*} param1 
     */
    addUserAnswer(state, { questionId, text }) {
        // state.currentAnswer = text;
        let flag = false;
        // state.userAnswer.forEach((item)=>{
        //     if(item.questionId==questionId){
        //         item.text=text;
        //         flag=true;
        //         return;
        //     }
        // });
        if (!flag) {
            const { correctAnswer, currentIndex } = state;
            let currentCorrectAnswer = correctAnswer[`q_${questionId}`];
            let mark = currentCorrectAnswer === text ? 100 : 0;
            let order = currentIndex + 1;
            state.userAnswer.push({ questionId, text, mark, order });
        }
    },
    /**
     * 初始化时设置正确答案
     * @param {*} state 
     * @param {*} correctAnswer 
     */
    setCorrectAnswer(state, correctAnswer) {
        let obj = {}
        correctAnswer.forEach(item => {
            obj[`q_${item.question_id}`] = item.text;
        })
        state.correctAnswer = obj;
    },
    setExerciseLog(state, data) {
        state.exercise = data;
    }
};
export const actions = {
    addExercise({ commit }, { planId, userId }) {
        axios.get(api.addExerciseLog, {
            params: {
                planId,
                userId
            }
        }).then((resp) => {
            let {data} = resp.data;
            commit('setExerciseLog', data);
            commit('setStartTime')

        })
    },
    addQuestionLog({ commit, state, rootState, getters }, { questionId, text }) {
        let flag = false;
        state.userAnswer.forEach((item) => {
            if (item.questionId == questionId) {
                item.text = text;
                flag = true;
                return;
            }
        });
        if (!flag) {
            commit('addUserAnswer', { questionId, text });
            axios.get(api.addQuestionLog, {
                params: {
                    exerciseId: state.exercise.id,
                    questionId: getters.currentQuestionId,
                    mark: getters.currentQuestionIsRight ? 100 : 0,
                    levelId: getters.currentQuestion.level_id
                }
            })
        }
    },
    submitPaper({ commit, state, rootState, getters }){
        commit('setEndTime');
        let dur = state.endTime-state.startTime;
        return axios.get(api.submitPaper,{
            params:{
                id:state.exercise.id,
                mark:state.userAnswer.filter(item => item.mark == 100).length*100,
                time:dur
            }
        })

    }

}