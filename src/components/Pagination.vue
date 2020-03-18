<template>
  <div class="pagination-wrap clearfix">
    <ul class="pagination">
      <li @click="goFirstPage" :class="{ firstLi: isFirstHover}" class="first">首页</li>
      <li v-show="firstEllipsis" class="mouse-status">...</li>
      <li
        v-for="(p,index) in paginateItems"
        v-text="p.text"
        :key="index"
        :class="[p.isChecked ? 'defaults' : 'hovers', { actives: p.isActive}]"
        @click="paginateChecked(p.text)"
      ></li>
      <li v-show="lastEllipsis" class="mouse-status">...</li>
      <li @click="goLastPage" :class="['lastLi', { lastHover: isLastHover}]" class="first">末页</li>
    </ul>
    <div class="pagination_jump">
      前往
      <input
        type="text"
        min="1"
        :max="maxPage"
        class="jump_input"
        v-model.number="nextPage"
        @blur="jumpToPage(nextPage)"
      />页
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from "@vue/composition-api";
export default {
  name: "pagination",
  props: {
    pageCount: {
      type: Number,
      required: true
    }
  },
  setup(props, ctx) {
    let currentPage = 1;
    const isFirstHover = ref(false);
    const firstEllipsis = ref(false);
    const lastEllipsis = ref(true);
    const isLastHover = ref(true);
    const maxPage = computed(() => props.pageCount);
    const nextPage = ref("");
    const paginateItems = reactive([
      { text: 1, isActive: true, isChecked: true },
      { text: 2, isActive: false, isChecked: false },
      { text: 3, isActive: false, isChecked: false },
      { text: 4, isActive: false, isChecked: false },
      { text: 5, isActive: false, isChecked: false }
    ]);
    const goFirstPage = () => {
      if (currentPage === 1) {
        return;
      }
      paginateChecked(1);
    };
    const paginateChecked = text => {
      currentPage = +text;
      let arr;
      if (currentPage > 3 && currentPage < props.pageCount - 2) {
        firstEllipsis.value = true;
        lastEllipsis.value = true;
        arr = [
          { text: currentPage - 2, isActive: false, isChecked: false },
          { text: currentPage - 1, isActive: false, isChecked: false },
          { text: currentPage, isActive: true, isChecked: true },
          { text: currentPage + 1, isActive: false, isChecked: false },
          { text: currentPage + 2, isActive: false, isChecked: false }
        ];
      } else if (currentPage <= 3) {
        firstEllipsis.value = false;
        lastEllipsis.value = true;
        arr = [
          { text: 1, isActive: true, isChecked: true },
          { text: 2, isActive: false, isChecked: false },
          { text: 3, isActive: false, isChecked: false },
          { text: 4, isActive: false, isChecked: false },
          { text: 5, isActive: false, isChecked: false }
        ];
        arr.forEach(item => {
          if (item.text == currentPage) {
            item.isActive = true;
            item.isChecked = true;
          } else {
            item.isActive = false;
            item.isChecked = false;
          }
        });
      } else {
        firstEllipsis.value = true;
        lastEllipsis.value = false;
        arr = [
          { text: props.pageCount - 4, isActive: true, isChecked: true },
          { text: props.pageCount - 3, isActive: false, isChecked: false },
          { text: props.pageCount - 2, isActive: false, isChecked: false },
          { text: props.pageCount - 1, isActive: false, isChecked: false },
          { text: props.pageCount, isActive: false, isChecked: false }
        ];
        arr.forEach(item => {
          if (item.text == currentPage) {
            item.isActive = true;
            item.isChecked = true;
          } else {
            item.isActive = false;
            item.isChecked = false;
          }
        });
      }
      paginateItems.length = 0;
      paginateItems.splice(0, 5, ...arr);
      ctx.emit("pageChange", currentPage);
    };
    const goLastPage = () => {
      if (currentPage === props.pageCount) {
        return;
      }
      paginateChecked(props.pageCount);
    };
    const jumpToPage = num => {
      let number = 1;
      typeof num !== "number" || +num < 1
        ? (number = 1)
        : num > maxPage.value
        ? (number = maxPage.value)
        : (number = num);
      nextPage.value = number;
      if(currentPage !==number){
        paginateChecked(number)
      }
    };
    return {
      isFirstHover,
      firstEllipsis,
      lastEllipsis,
      isLastHover,
      paginateItems,
      maxPage,
      nextPage,
      goFirstPage,
      paginateChecked,
      goLastPage,
      jumpToPage
    };
  }
};
</script>

<style lang="less" scoped>
.pagination {
  height: 30px;
  display: flex;
  float: left;
  background: #fff;
  text-align: center;
  .first {
    min-width: 30px;
  }
  li {
    padding: 4px 12px;
    line-height: 20px;
    border: 1px solid #ddd;
    border-right: 0;

    &:first-child {
      border-radius: 4px 0 0 4px;
      cursor: pointer;
    }
  }
  li.hovers:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  li.defaults:hover {
    cursor: pointer;
  }
  li.actives {
    color: #80bd01;
  }
  .firstLi:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  .lastLi {
    border-right: 1px solid #ddd;
    border-radius: 0 4px 4px 0;
    cursor: default;
  }
  .lastHover:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
}
.pagination_jump {
  height: 30px;
  line-height: 30px;
  float: left;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  padding: 0 8px;
  .jump_input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    outline: none;
    padding: 0 8px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 50px;
    text-align: center;
    margin: 0 4px;
  }
}
</style>