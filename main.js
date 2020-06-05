/**
 * Title: 跳过青年大学习的脚本
 * Author: kapechen
 * Update Time: 2020/6/5
 * Description: 复制脚本代码，参照README中操作步骤执行代码即可,不要复制注释！！！
 */
// 目前的思路是直接显示结果页，结果页通常被放在某一个class为section+"n"的div中，并且不透明度在视频完成其均为0，因此直接重新设置不透明度和z-index值即可显示
// 由于选项数量不固定，其类名可能会变化(虽然几次都没变)，因此代码有待改进
(function(){
    document.getElementsByClassName("section3")[0].style.zIndex = 111
    document.getElementsByClassName("section3")[0].style.opacity = 100
})()
