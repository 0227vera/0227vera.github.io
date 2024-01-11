const getMonthLength = (date) => {
  return ((new Date().getTime() - new Date(date).getTime())/(1000 * 60 * 60 * 24 * 30 * 12)).toFixed(1)
}

export default [
  {
    type: 2,
    industry: "高级研发工程师",
    time: `20201203-至今(${getMonthLength('2020/12/03')}年)`,
    work: [
      "负责快的新出租小程序的维护、日常功能交付及性能优化",
      "负责出租车业务的扫码付、红包码等营销活动B、C端开发、迁移",
      "负责滴滴出行小程序，日常行中模块相关业务迭代、主导行后页面平稳升级"
    ],
  },
  {
    type: 1,
    industry: "高级软件开发工程师",
    time: "201807-202012(2.5年)",
    work: [
      "日常系统（多级公文、内控系统、工作流系统）技术选型、开发",
      "调研并开发团队使用脚手架,统一开发规范",
      "设计UED规范、产出对应的组件库",
      "表单设计器开发、工作流(bpmn.js)引擎迭代",
    ],
  },
];
