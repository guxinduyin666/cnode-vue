<template>
  <div class="navbar">
    <div class="container">
      <div class="nav-left">
        <img @click="jumpToHome" src="../assets/cnode.png" />
        <form class="form-style" action="http://www.baidu.com/baidu" target="_blank">
          <input type="text" v-model="searchText" name="word" @keyup.enter="onSearch()" />
        </form>
      </div>
      <ul class="right-ul">
        <li @click="jumpToHome" :class="{active:currentIndex==1}">首页</li>
        <li @click="jumpToNoob" :class="{active:currentIndex==2}">新手入门</li>
        <li @click="jumpToApi" :class="{active:currentIndex==3}">API</li>
        <li @click="jumpToAbout" :class="{active:currentIndex==4}">关于</li>
        <li class="register">
          <a href="https://github.com">注册</a>
        </li>
        <li @click="jumpToLogin" :class="{active:currentIndex==5}">登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  name: "Navbar",
  setup(props, { root }) {
    const searchText = ref("");
    const currentIndex = ref(1);
    const onSearch = () => {
      let data = BaiduHttps.useHttps();
      if (data.s === 0) {
      } else {
        formname.action =
          "https://www.baidu.com/baidu" + "?ssl_s=1&ssl_c" + data.ssl_code;
      }
      return true;
    };
    const jumpToHome = () => {
      root.$router.push("/");
    };
    const jumpToNoob = () => {
      root.$router.push("/getstart");
    };
    const jumpToApi = () => {
      root.$router.push("/api");
    };
    const jumpToAbout = () => {
      root.$router.push("/about");
    };
    const jumpToLogin = () => {
      root.$router.push("/login");
    };
    return {
      searchText,
      currentIndex,
      onSearch,
      jumpToHome,
      jumpToNoob,
      jumpToApi,
      jumpToAbout,
      jumpToLogin
    };
  },
  watch: {
    $route: function(to, from) {
      const path = to.path;
      switch (path) {
        case "/getstart":
          this.currentIndex = 2;
          break;
        case "/api":
          this.currentIndex = 3;
          break;
        case "/about":
          this.currentIndex = 4;
          break;
        case "/login":
          this.currentIndex = 5;
          break;
        default:
          this.currentIndex = 1;
          break;
      }
    }
  }
};
</script>

<style lang="less">
.navbar {
  width: 100%;
  background: #444;
  font-size: 13px;

  .container {
    width: 90%;
    height: 50px;
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-left {
      width: 373px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 120px;
        height: 28px;
        cursor: pointer;
        position: relative;
        top: -2px;
      }

      input {
        width: 206px;
        height: 20px;
        padding: 3px 5px 3px 22px;
        color: #666;
        border: 0;
        margin-top: 2px;
        font-weight: 400;
        border-radius: 15px;
        outline: 0;
        background: url(../assets/query.png) 4px 4px no-repeat #888;
        transition: all 0.5s;

        &:hover {
          background: url(../assets/query.png) 4px 4px no-repeat #fff;
        }
        &:focus {
          background: url(../assets/query.png) 4px 4px no-repeat #fff;
        }
      }
    }
    .right-ul {
      display: flex;
      align-items: center;
      color: #ccc;
      li {
        cursor: pointer;
        padding: 0 15px;

        &:hover {
          color: #fff;
        }
      }
      .active {
        color: #ff6600;
        &:hover {
          color: #ff6600;
        }
      }
      .register {
        a {
          text-decoration: none;
          color: #ccc;
          &:hover {
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .navbar {
    width: 100%;
    background: #444;
    font-size: 13px;

    .container {
      width: 90%;
      height: auto;
      margin: 0 auto;
      max-width: 1400px;
      display: block;
      padding-top: 9px;

      .nav-left {
        width: 373px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          width: 120px;
          height: 28px;
          cursor: pointer;
          position: relative;
          top: -2px;
        }

        input {
          width: 206px;
          height: 20px;
          padding: 3px 5px 3px 22px;
          color: #666;
          border: 0;
          margin-top: 2px;
          font-weight: 400;
          border-radius: 15px;
          outline: 0;
          background: url(../assets/query.png) 4px 4px no-repeat #888;
          transition: all 0.5s;

          &:hover {
            background: url(../assets/query.png) 4px 4px no-repeat #fff;
          }
          &:focus {
            background: url(../assets/query.png) 4px 4px no-repeat #fff;
          }
        }
      }
      .right-ul {
        display: flex;
        align-items: center;
        color: #ccc;
        padding: 10px 0 15px 0;

        li {
          cursor: pointer;
          padding: 0 15px;

          &:hover {
            color: #fff;
          }
        }
        .register {
          a {
            text-decoration: none;
            color: #ccc;
            &:hover {
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 430px) {
  .navbar {
    width: 100%;
    background: #444;
    font-size: 13px;

    .container {
      width: 90%;
      height: auto;
      margin: 0 auto;
      max-width: 1400px;
      display: block;
      padding-top: 9px;

      .nav-left {
        width: 373px;
        display: block;
        align-items: center;
        justify-content: space-between;

        img {
          display: block;
          width: 120px;
          height: 28px;
          margin: 0 auto;
          cursor: pointer;
          position: relative;
          top: -2px;
        }

        input {
          display: block;
          width: 206px;
          height: 20px;
          padding: 3px 5px 3px 22px;
          color: #666;
          border: 0;
          margin-top: 2px;
          font-weight: 400;
          border-radius: 15px;
          outline: 0;
          background: url(../assets/query.png) 4px 4px no-repeat #888;
          transition: all 0.5s;
          margin: 2px auto 0 auto;

          &:hover {
            background: url(../assets/query.png) 4px 4px no-repeat #fff;
          }
          &:focus {
            background: url(../assets/query.png) 4px 4px no-repeat #fff;
          }
        }
      }
      .right-ul {
        display: flex;
        align-items: center;
        color: #ccc;
        padding: 10px 0 15px 0;

        li {
          cursor: pointer;
          padding: 0 15px;
          white-space: nowrap;

          &:hover {
            color: #fff;
          }
        }
        .register {
          a {
            text-decoration: none;
            color: #ccc;
            &:hover {
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>