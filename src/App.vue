<template>
  <div id="app">
    <tab-box>
      <router-view :key="key" />
      <footer-box></footer-box>
    </tab-box>
  </div>
</template>

<script>
import {
  apiCollection,
  apiResource,
  apiFormSubmit,
} from "./api/index";
import router from "./router";
import tabBox from "@/components/tabbox";
import footerBox from "@/components/footerBox";

export default {
  name: "App",
  components: {
    tabBox,
    footerBox
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date();
    }
  },
  created() {
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
    const loginToken = localStorage.getItem("x-token");
    const arr = [apiCollection, apiResource, apiFormSubmit];
    if (loginToken) {
      arr.forEach(item => {
        item.defaults.headers["x-token"] = loginToken;
      });
      setTimeout(() => {
        router.push("/").catch(data => {});
      }, 100);
    }
  }
};
</script>

<style>
#app {
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
p {
  margin: 0;
}
.page-container {
  width: 100%;
  min-height: calc(100vh - 328px);
  padding-top: 106px;
}
.wrapper {
  width: 60%;
  margin: 0 auto;
}
</style>
