//输入框的js
window.onload = function(){

  var o_input = document.querySelector("#s_input");
  var o_li = document.querySelector("#o_li")
  var o_la = document.querySelector("#la")

  o_input.onfocus = function(){
  this.style.boreder = 'black';

  this.value = "";
} 

  o_input.onblur = function(){

  
      this.value = "华为P30 Pro";
   

}
//二级菜单
var o_cd = document.querySelector(".cd")
var o_lbt = document.querySelector(".lbt")
var o_main = document.querySelector(".main-r") 
//轮播旁的二级菜单
  o_li.onmouseover =  o_la.onmouseover =function(){
    o_la.style.display = "block";
  
    o_lbt.style.display = "none";
    o_main.style.display = "none";
  }
  o_li.onmouseleave  =  o_la.onmouseleave =function(){
    o_la.style.display = "none";
    o_lbt.style.display = "block";
    o_main.style.display = "block";
  }

//跳转
var o_paing = document.querySelector("#paing");
var o_reg = document.querySelector("#reg");



}













