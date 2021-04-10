import { apiCollection, apiResource, apiFormSubmit } from "./index";
export default {
  // 获取摄影师人员
  getCameraPeople: opts => {
    return apiCollection({ url: "/user/querySheYingShi", params: { ...opts } });
  },
  // 获取优秀摄影师
  getGoodPhotographer: opts => {
    return apiCollection({
      url: "/user/queryGoodPhotographer",
      params: { ...opts }
    });
  },
  // 获取作品
  getzuopinList: opts => {
    return apiCollection({
      url: "/zuopin/queryZuoPinByPage",
      params: { ...opts }
    });
  },
  // 获取优秀作品
  getGoodZuopinList: opts => {
    return apiCollection({
      url: "/shoucang/queryYouXiuZuoPin",
      params: { ...opts }
    });
  },
  // 查看详情
  getDetail: opts => {
    return apiCollection({
      url: "/zuopin/details",
      params: { ...opts }
    });
  },
  // 预约
  order: opts => {
    return apiResource({
      url: "/yuyue/yuyue",
      data: opts
    });
  },
  // 获取banner图
  getBanner: opts => {
    return apiCollection({
      url: "/zuopin/querybanner",
      params: { ...opts }
    });
  },
  // 获取活动作品
  getHuodong: opts => {
    return apiCollection({
      url: "/huodong/queryZuoPinList",
      params: { ...opts }
    });
  },
};
