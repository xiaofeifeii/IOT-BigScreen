<!--
 * @Author: yyf
 * @Date: 2023-01-04 17:34:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-01-04 17:34:58
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\index.vue
-->
<template>
  <div class="contents">
    <div class="contetn_left">
      <div class="pagetab">
        <!-- <div class="item">实时监测</div> -->

      </div>
      <!-- 左上 -->
      <ItemWrap class="contetn_left-top contetn_lr-item" title="设备总览">
        <LeftTop />

      </ItemWrap>
      <!-- <ItemWrap class="contetn_left-center contetn_lr-item" title="用户总览">
        <LeftCenter />
      </ItemWrap>
       -->

      <!--左下  -->
      <ItemWrap class="contetn_left-bottom contetn_lL-item" title="网关状态信息" style="padding: 0 10px 16px 10px">
        <LeftBottom />
      </ItemWrap>
    </div>

    <div class="contetn_center">
      <!-- 中下 -->
      <CenterMap class="contetn_center_top" />
      <ItemWrap class="contetn_center-bottom" title="设备报警">
        <!-- <CenterBottom /> -->
        <!-- <RightBottom /> -->
        <DevAlarmMsgVue/>
      </ItemWrap>
    </div>

    <div class="contetn_right">
      <!-- 右上 -->
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="显示屏当前内容">
        <!-- <RightTop /> -->
        <RightBottom />
      </ItemWrap>
      <!-- 右中 -->
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="当前能见度数据" style="padding: 0 10px 16px 10px">
        <RightCenter />
      </ItemWrap>
      <!-- 右下 -->
      <ItemWrap class="contetn_left-bottom contetn_lr-item" title="历史能见度数据 ">
        <!-- <RightBottom /> -->
        <RightTop />
      </ItemWrap>
    </div>
  </div>
</template>

<script>
import LeftTop from './left-top.vue'
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./center-bottom.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightBottom from "./right-bottom.vue";
import DevAlarmMsgVue from './dev-alarm-msg.vue';
export default {
  components: {
    LeftTop,
    LeftCenter,
    LeftBottom,
    CenterMap,
    RightTop,
    RightCenter,
    RightBottom,
    CenterBottom,
    DevAlarmMsgVue,
  },
  data() {
    return {

    };
  },
  filters: {
    numsFilter(msg) {
      return msg || 0;
    },
  },
  created() {
  },

  mounted() { },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
// 内容
.contents {

  .contetn_left,
  .contetn_right {
    width: 540px;
    box-sizing: border-box;
    // padding: 16px 0;
  }

  .contetn_center {
    width: 720px;
  }

  //左右两侧 三个块
  .contetn_lr-item {
    height: 310px;
  }

  .contetn_lL-item {
    height: 620px;
  }

  .contetn_center_top {
    width: 100%;
  }

  // 中间
  .contetn_center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .contetn_center-bottom {
    height: 315px;
  }

  //左边 右边 结构一样
  .contetn_left,
  .contetn_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;


  }
}


@keyframes rotating {
  0% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
  }

  50% {
    -webkit-transform: rotate(180deg) scale(1.1);
    transform: rotate(180deg) scale(1.1);
  }

  100% {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}
</style>
