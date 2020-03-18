<template>
  <div class="modal-wrap" v-show="isShowLoading">
    <div class="modal-content">
      <div class="loadEffect">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="modal-tip" v-text="tip"></div>
    </div>
    <div class="modal-mask"></div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    tip: {
      type: String,
      default: "加载中,请稍等。。。"
    },
    isShowLoading: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isShowLoading: {
      handler: function(val) {
        if (val) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
.loadEffect {
  width: 100px;
  height: 100px;
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ff6600;
    position: absolute;
    -webkit-animation: load 1.04s ease infinite;
  }
  span:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -10px;
    -webkit-animation-delay: 0.13s;
  }
  span:nth-child(2) {
    left: 14px;
    top: 14px;
    -webkit-animation-delay: 0.26s;
  }
  span:nth-child(3) {
    left: 50%;
    top: 0;
    margin-left: -10px;
    -webkit-animation-delay: 0.39s;
  }
  span:nth-child(4) {
    top: 14px;
    right: 14px;
    -webkit-animation-delay: 0.52s;
  }
  span:nth-child(5) {
    right: 0;
    top: 50%;
    margin-top: -10px;
    -webkit-animation-delay: 0.65s;
  }
  span:nth-child(6) {
    right: 14px;
    bottom: 14px;
    -webkit-animation-delay: 0.78s;
  }
  span:nth-child(7) {
    bottom: 0;
    left: 50%;
    margin-left: -10px;
    -webkit-animation-delay: 0.91s;
  }
  span:nth-child(8) {
    bottom: 14px;
    left: 14px;
    -webkit-animation-delay: 1.04s;
  }
}
.modal-tip {
  width: 200px;
  text-align: center;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translate(-50%);
}
.modal-content {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1001;
}
.modal-mask {
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  z-index: 999;
}
@-webkit-keyframes load {
  0% {
    -webkit-transform: scale(1.2);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.3);
    opacity: 0.5;
  }
}
</style>