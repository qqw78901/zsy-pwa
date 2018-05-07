/**
 * @file appShell/appSidebar module
 * @author lavas
 */

export const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';

export const state = () => {
    return {
        show: false, // 是否显示sidebar

        // 头部条的相关配置
        title: {
            imageLeft: '',
            altLeft: '',
            iconLeft: 'home',
            text: '首页',
            imageRight: '',
            altRight: '',
            iconRight: ''
        },

        // user: {
        //     name: 'Lavas',
        //     email: 'lavas@baidu.com',
        //     location: 'Shanghai'
        // },

        // 分块组
        blocks: [
            {
                // 子列表1
                sublistTitle: '菜单',
                list: [
                    {
                        text: '练习',
                        icon: 'book',
                        route: '/lianxi'
                    },
                    {
                        text: '成绩分析',
                        icon: 'insert_chart',
                        route: '/chengji'
                    }
                ]
            }
        ]
    };
};

export const mutations = {
    [SET_SIDEBAR_VISIBILITY](state, sidebarVisibility) {
        state.show = sidebarVisibility;
    }
};

export const actions = {

    /**
     * 展示侧边栏
     *
     * @param {Function} commit commit
     */
    showSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, true);
    },

    /**
     * 隐藏侧边栏
     *
     * @param {Function} commit commit
     */
    hideSidebar({commit}) {
        commit(SET_SIDEBAR_VISIBILITY, false);
    }
};
