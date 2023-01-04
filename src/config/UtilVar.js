/*
 * @Author: yyf
 * @Date: 2021-12-06 10:58:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-01-04 17:34:58
 * @FilePath: \web-pc\src\config\UtilVar.js
 */
var UtilVar = {
    ENC: false, //返回结果是否加密
    baseUrl: `http://locolhost:8888`,
    code: 401,
}
const runtimeType = {

    production: () => {
    },
    yh:()=>{

    },
    //开发环境
    development: () => {
      
    },
    
}
runtimeType[process.env.VUE_APP_URL_ENV]()
export default UtilVar

