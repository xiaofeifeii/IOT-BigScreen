/*
 * @Author: yyf
 * @Date: 2023-01-04 17:34:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-01-04 17:34:58
 * @FilePath: \web-pc\src\directives\filters.js
 */
export function montionFilter (val) {
    // console.log(val);
    return val ? Number(val).toFixed(2) : '--'
}