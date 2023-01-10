<template>
    <div>
        <baidu-map id="allmap"
        :scroll-wheel-zoom="true"
        @ready="mapReady">
        </baidu-map>
    </div>
</template>

<script>

export default {
    data() {
        return {
            point: "",
        }
    },
    methods: {
        mapReady({ BMap, map }) {
            // 选择一个经纬度作为中心点  116.99318,39.424576
            this.point = new BMap.Point(116.99318,39.424576);
            map.centerAndZoom(this.point, 18);
            // map.setTilt(50);
        },
    }
}
</script>

<style>
#allmap{
    height: 548px;
    width: 100%;
    margin: 0 auto;
  }
</style>