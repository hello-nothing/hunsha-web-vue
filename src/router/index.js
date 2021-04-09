import Vue from "vue";
import Router from "vue-router";
import Error from "@/components/error";
import Index from "@/views/index";
import ActivityList from "@/views/activityList";
import HotList from "@/views/hotList";
import PeopleList from "@/views/peopleList";
import ContactUs from "@/views/contactUs";
import ZuoPinDetail from "@/views/zuoPin";
Vue.use(Router);

const router = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      meta: {
        title: "首页",
      }
    },
    {
      path: "/activityList",
      name: "activityList",
      component: ActivityList,
      meta: {
        title: "优惠活动",
      }
    },
    {
      path: "/hotList",
      name: "hotList",
      component: HotList,
      meta: {
        title: "优秀作品",
      }
    },
    {
      path: "/peopleList",
      name: "peopleList",
      component: PeopleList,
      meta: {
        title: "优秀摄影师",
      }
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: ContactUs,
      meta: {
        title: "联系我们",
      }
    },
    {
      path: "/zuoPinDetail",
      name: "zuoPinDetail",
      component: ZuoPinDetail,
      meta: {
        title: "作品详情",
      }
    },
    {
      path: "/error",
      name: "error",
      component: Error,
      meta: {
        title: "出错了",
      }
    }
  ]
});
router.afterEach(function(to, from) {
  document.title = to.meta.title; //跳转后设置页面的title
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default router;
