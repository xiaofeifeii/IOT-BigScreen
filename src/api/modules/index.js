/*
 * @Author: yyf
 * @Date: 2021-12-23 11:18:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-01-04 17:34:58
 * @FilePath: \web-pc\src\api\modules\index.js
 */
import * as API from "../api";

export const paramType ={
    'big1':"/bigscreen/countUserNum",   //用户总览
    'big2':"/bigscreen/countDeviceNum", //设备总览 
    
    'big3':"/bigscreen/devInfo",           //设备网关状态信息
    // 'big4':"/bigscreen/alarmNum",  //报警次数
    'big4':"/bigscreen/VD_history",  //报警次数
    // 'big5':'/bigscreen/ssyj',   //实时预警  
    'big5':'/bigscreen/devAlarm',  //设备报警
    // 'big6':'/bigscreen/installationPlan',// 安装计划
    'big6':'/bigscreen/screen_display',// 屏幕显示
    // 'big7':'/bigscreen/ranking',// 报警排名
    'big7':'/bigscreen/VD_current',// 报警排名
    // 'big8':'/bigscreen/centermap',// //中间地图
    'big8':'/bigscreen/dev_map',// //中间地图
}
/******************      通用增删改查       ********************* */
/**
 * 通用列表
 * @param {*} param 
 */
 export const currentList =  (key,param)=> {
    return API.GET(paramType[key]+"/list", param)
}
export const currentPage =  (key,param)=> {
    return API.GET(paramType[key]+"/page", param)
}
/**
 * 查询可选择的列表
 * @param {*} param 
 */
 export const currentSelectList=  (key,param)=> {
    return API.GET(paramType[key]+"/selectList", param)
}


/**
 * 通用新增
 * @param {*} param 
 */
 export const currentSave= (key,param)=> {
    return API.POST(paramType[key]+"/save", param)
}
/**
 * 通用修改
 * @param {*} param 
 */
 export const currentUpdate=  (key,param) => {
    return API.POST(paramType[key]+"/update", param)
}

/**
 * 通用删除
 * @param {*} param 
 */
 export const currentDelete= (key,param) => {
    return API.POST(paramType[key]+"/delete", param)
}

/**
 * 通用获取所有不分页
 * @param {*} param 
 */
 export const currentSelect=  (key,param)=> {
    return API.GET(paramType[key]+"/select", param)
}

/**
 * 通用GET
 * @param {*} param 
 */
 export const currentGET=  (key,param)=> {
    return API.GET(paramType[key], param)
}
/**
 * 通用POST
 * @param {*} param 
 */
 export const currentPOST=  (key,param)=> {
    return API.POST(paramType[key], param)
}
// 通用接口集合
export const currentApi={
    currentList,
    currentPage,
    currentSave,
    currentUpdate,
    currentDelete,
    currentSelect,
    currentSelectList,
    currentPOST,
    currentGET
}