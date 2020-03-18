<template>
  <div id="app">
    <navbar></navbar>
    <div class="main media-cancel-style">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <footers></footers>
    <transition name="fade">
      <div class="return-top" v-show="showRetrunTop" @click="returnTop">回到顶部</div>
    </transition>
  </div>
</template>
<script>
import navbar from "@/components/Navbar";
import footers from "@/components/Footer";
import { ref, onMounted } from "@vue/composition-api";
export default {
  name: "app",
  setup() {
    let showRetrunTop = ref(false);
    const returnTop = () => {
      let currrentPosition = document.body.scrollTop;
      const timer = setInterval(runToTop, 1);
      function runToTop() {
        currrentPosition -= 100;
        if (currrentPosition < 0) {
          document.body.scrollTop = 0;
          clearInterval(timer);
        } else {
          document.body.scrollTop = currrentPosition;
        }
      }
    };
    onMounted(() => {
      window.onscroll = () => {
        document.body.scrollTop > 204
          ? (showRetrunTop = true)
          : (showRetrunTop = false);
      };
    });
    return { showRetrunTop, returnTop };
  },
  components: {
    navbar,
    footers
  }
};
</script>>

<style>
.main {
  width: 90%;
  max-width: 1400px;
  min-width: 380px;
  margin: 15px auto;
  min-height: 660px;
}
.return-top {
  width: 24px;
  color: gray;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  border-radius: 12px 0 0 12px;
  padding: 12px 0 12px 5px;
  position: fixed;
  right: 0;
  top: 139px;
  z-index: 20;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.clearfix:after {
  content: "\20";
  display: block;
  height: 0;
  clear: both;
  overflow: hidden;
}

.clearfix {
  *zoom: 1;
}
@media screen and (max-width: 979px) {
  .media-cancel-style {
    width: 100%;
  }
}
</style>
