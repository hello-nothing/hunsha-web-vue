import Vue from "vue";
import Router from "vue-router";
import Error from "@/components/error";
import Login from "@/views/login";
import Index from "@/views/index";
import NewList from "@/views/newList";
import Setting from "@/views/setting";
import HotList from "@/views/hotList";
import ClothesList from "@/views/clothesList";
import ClientImg from "@/views/clientImg";
import AboutUs from "@/views/aboutUs";
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
        noNeedLogin: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        noNeedLogin: true,
        title: "登录"
      }
    },
    {
      path: "/newList",
      name: "newList",
      component: NewList,
      meta: {
        title: "最新系列",
        noNeedLogin: true
      }
    },
    {
      path: "/hotList",
      name: "hotList",
      component: HotList,
      meta: {
        title: "热门系列",
        noNeedLogin: true
      }
    },
    {
      path: "/clothesList",
      name: "clothesList",
      component: ClothesList,
      meta: {
        title: "礼服展示",
        noNeedLogin: true
      }
    },
    {
      path: "/clientImg",
      name: "clientImg",
      component: ClientImg,
      meta: {
        title: "真实客照",
        noNeedLogin: true
      }
    },
    {
      path: "/aboutUs",
      name: "aboutUs",
      component: AboutUs,
      meta: {
        title: "关于我们",
        noNeedLogin: true
      }
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: ContactUs,
      meta: {
        title: "联系我们",
        noNeedLogin: true
      }
    },
    {
      path: "/zuoPinDetail",
      name: "zuoPinDetail",
      component: ZuoPinDetail,
      meta: {
        title: "作品详情",
        noNeedLogin: true
      }
    },
    {
      path: "/error",
      name: "error",
      component: Error,
      meta: {
        title: "出错了",
        noNeedLogin: true
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (!to.meta.noNeedLogin) {
    if (window.localStorage.getItem("isLogin")) {
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    next();
  }
});
router.afterEach(function(to, from) {
  document.title = to.meta.title; //跳转后设置页面的title
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default router;
