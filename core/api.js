/**
 * Created by King-z on 2017/10/1 0001.
 */
const host="api";
export default {
  loginYzm: host+'/servlet/CreateImage',
  loginUrl: host+'/admin/login.do',
  userloginUrl: host+'/user/login.do',
  logoutUrl: host+'/admin/logout.do',
  checkLogin: host + '/admin/checklogin.do',

  getUserByPage:host+'/user/page.do',
  addUser:host+'/user/add.do',
  updateUser:host+'/user/update.do',
  removeUser:host+'/user/remove.do',

  addQuestion: host+'/question/add.do',
  getQuestionByPage: host+'/question/getByLevelIdTypeByPage.do',
  getJsonstrById: host+'/question/getJsonstrById.do',
  removeQuestionByid: host+'/question/deleteById.do',

  listLevel: host+'/level/list.do',
  getLevelByPage: host+'/level/page.do',
  addLevel: host+'/level/add.do',
  updateLevel: host+'/level/update.do',
  removeLevel: host+'/level/remove.do',


  getExamByPage: host+'/exam/page.do',
  canExamPageByPage: host+'/exam/canExamPage.do',
  updateExamById: host+'/exam/update.do',
  addExam: host+'/exam/add.do',
  listExam: host+'/exam/list.do',
  removeExamById: host+'/exam/remove.do',



  getPaperByPlanId:host+'/paper/createPaperByPlanId.do',
  submitAnswer:host+'/paper/submitAnswer.do',
  submitPaper:host+'/paper/submitPaper.do',
  achievementPaper:host+'/paper/scoreBypage.do',

/**
 * 获取命题方案
 */
  getpsnamebydeptplanset:`${host}/plan/getpsnamebydeptplanset.do`,
  /**
   * 查询当前剩余选题次数（已经选题就会带上当前题库）
   */
  exercisetime:`${host}/exercisetime/find.do`,
  /**
   * 获取当前命题方案下的试题
   */
  getplanbydeptid:`${host}/plan/getplanbydeptid.do`,
    /**
     *题库列表 按题库练习
    */
  getplanlevel:`${host}/planlevel/getplanlevel.do`

}
