<template>
  <div class="content">
    <div class="panel cancel-margin-right">
      <div class="panel-header">
        <ul>
          <li
            v-for="(li,index) in liItems"
            v-text="li.text"
            :key="index"
            :class="['nav-li', { status: li.isChecked }]"
            @click="changeChecked(li.text)"
          ></li>
        </ul>
      </div>
      <div class="panel-content">
        <div class="div-li" v-for="title in homeData" :key="title.id">
          <div class="li-left">
            <img
              class="headtrait img-margin-right"
              :src="title.author.avatar_url"
              :title="title.author.loginname"
              @click="jumpToUser(title.author.loginname)"
            />
            <span class="count hide">
              <span v-text="title.reply_count"></span>/
              <span v-text="title.visit_count"></span>
            </span>
            <span :class="['status', `${title.status}`]" v-text="title.text"></span>
            <span
              :class="['title', 'media-font-size', {titleActive: title.isActive}]"
              v-text="title.title"
              @click="jumpToThemeDetails(title.id, title)"
            ></span>
          </div>
          <div class="media-count">
            <span v-text="title.reply_count"></span>/
            <span v-text="title.visit_count"></span>
          </div>
          <div class="li-right flex-end">
            <img class="hide" :src="title.author.avatar_url" />
            <span v-text="title.reply"></span>
          </div>
        </div>
      </div>
      <div class="footer-ul">
        <pagination :pageCount="20" @pageChange="pageChanged" />
      </div>
    </div>
    <div class="sidebar hide">
      <github></github>
      <div class="home-inner">
        <div class="home-inner-title">无人回复的话题</div>
        <div class="home-inner-content">
          <p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
          <p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
          <p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
          <p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
          <p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
        </div>
      </div>
      <div class="home-inner">
        <div class="home-inner-title">
          积分榜&nbsp;&nbsp;
          <span class="rank">TOP 100 >></span>
        </div>
        <div class="home-inner-content">
          <ul class="rank-ul">
            <li>
              <span class="top-score">16385</span>
              <span class="user-name">
                <a href="/user/i5ting">i5ting</a>
              </span>
            </li>
            <li>
              <span class="top-score">14120</span>
              <span class="user-name">
                <a href="/user/alsotang">alsotang</a>
              </span>
            </li>
            <li>
              <span class="top-score">9310</span>
              <span class="user-name">
                <a href="/user/leapon">leapon</a>
              </span>
            </li>
            <li>
              <span class="top-score">8680</span>
              <span class="user-name">
                <a href="/user/jiyinyiyong">jiyinyiyong</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <tag></tag>
    </div>
  </div>
</template>

<script>
import github from "@/components/Github.vue";
import tag from "@/components/Tag.vue";
import pagination from "@/components/Pagination.vue";
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "Home",
  setup() {
    const tabType = ref("all");
    const liItems = reactive([
      { text: "全部", isChecked: true, tab: "all" },
      { text: "精华", isChecked: false, tab: "good" },
      { text: "分享", isChecked: false, tab: "share" },
      { text: "问答", isChecked: false, tab: "ask" },
      { text: "招聘", isChecked: false, tab: "job" }
    ]);
    const homeData = reactive([]);
    const pageChanged = currentPage => {
      console.log(currentPage);
    };
    return {
      tabType,
      pageChanged,
      liItems,
      homeData
    };
  },
  components: { tag, github, pagination }
};
</script>

<style lang="less" scoped>
.content {
  position: relative;

  .panel {
    margin-right: 305px;

    .panel-header {
      padding-left: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;

      ul {
        height: 40px;
        display: flex;
        align-items: center;

        .nav-li {
          color: #80bd01;
          padding: 1px 4px 0 4px;
          border-radius: 3px;
          margin: 0 10px;
          cursor: pointer;
        }
        .nav-li.status {
          background: #80bd01;
          color: #fff;
        }
      }
    }
    .panel-content {
      background: #fff;

      .div-li {
        padding: 10px;
        border-top: 1px solid #f0f0f0;
        position: relative;

        &:hover {
          background-color: #f6f6f6;
        }

        .li-left {
          display: flex;
          align-items: center;

          .headtrait {
            width: 30px;
            height: 30px;
            border-radius: 3px;
            cursor: pointer;
          }

          .count {
            width: 70px;
            text-align: center;

            span:first-child {
              color: #9e78c0;
            }
            span:last-child {
              color: #b4b4b4;
              font-size: 10px;
            }
          }
          .status {
            height: 18px;
            line-height: 18px;
            padding: 0 3px;
            font-size: 12px;
            border-radius: 3px;
            white-space: nowrap;
          }
          .status.top {
            color: #fff;
            background: #80bd01;
          }
          .status.share {
            background-color: #e5e5e5;
            color: #999;
          }
          .title {
            margin-left: 4px;
            font-size: 16px;
            cursor: pointer;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            max-width: 70%;
            margin-right: 65px;

            &:hover {
              text-decoration: underline;
            }
          }
        }
        .li-right {
          width: 78px;
          display: flex;
          align-items: center;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);

          img {
            height: 18px;
            width: 18px;
            margin-right: 7px;
            border-radius: 3px;
          }
          span {
            color: #778087;
            text-align: right;
            min-width: 50px;
            white-space: nowrap;
            font-size: 11px;
          }
        }
      }
      .div-li:first-child {
        border-top: none;
      }
    }
    .footer-ul {
      background: #fff;
      height: 40px;
      padding: 10px 0 0 10px;
      border-radius: 0 0 3px 3px;
    }
  }

  .sidebar {
    width: 290px;
    position: absolute;
    right: 0;
    top: 0;
  }
}
.inner-content-p {
  color: #778087;
  margin: 0;
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.rank {
  cursor: pointer;
}
.rank-ul {
  li {
    height: 27px;
    line-height: 27px;

    span:first-child {
      margin-right: 10px;
    }
  }
}
.media-count {
  width: 80px;
  display: none;
  position: relative;
  left: 72px;
  top: -8px;

  span:first-child {
    color: #9e78c0;
  }
  span:last-child {
    color: #b4b4b4;
    font-size: 10px;
  }
}

/*窗口响应*/
@media screen and (max-width: 979px) {
  .flex-end {
    justify-content: flex-end;
  }
  .media-font-size {
    font-size: 14px !important;
  }
  .media-count {
    display: block;
    font-size: 10px;
  }
  .img-margin-right {
    margin-right: 10px;
  }
}
</style>
