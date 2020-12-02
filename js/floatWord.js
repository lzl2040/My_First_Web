var a = new Array("欢","迎","小","可","爱","来","浏","览");// 文字数组
var bombFlag = true;
 // body节点
 var elBody = document.getElementsByTagName("body")[0];
 // 初始化文字数组下标
 var a_idx = 0;
 elBody.onclick = function(e) {
 if(bombFlag){
  // 坐标
  var ev = e||window.event,//  IE浏览器兼容
  x = ev.clientX,
     y = ev.clientY;
   // 随机产生文字颜色
  var color1 = Math.floor((Math.random()*255));
  var color2 = Math.floor((Math.random()*255));
  var color3 = Math.floor((Math.random()*255));
  // 初始化定时器
   var _timer = null;
   
   // 创建节点
   var elSpan = document.createElement("span");
   // 随机节点内容
   a_idx = (a_idx + 1) % a.length;
   // 添加内容到节点
   elSpan.innerHTML = a[a_idx];
   // 初始节点化样式
   elSpan.style.zIndex = 999;
   elSpan.style.position = "fixed";
   elSpan.style.top = y -20 + "px",
   elSpan.style.left = x -10 + "px";
   elSpan.style.color = 'rgb('+color1+','+color2+','+color3+')';
   elSpan.style.fontWeight = "bold";
   elSpan.className = "floatSpan";
   // 将元素追加到body中
   elBody.appendChild(elSpan);
   // 获取追加后的节点
   var el = document.getElementsByClassName("floatSpan")[0];
   // 初始化需要渐变的变量值
   // top值
   var cur_y = y - 20;
   // 透明度
   var cur_opacity = 1;
   // 字体大小
   var cur_fontSize = 30;
   // 创建定时器
   _timer = setInterval(function(){
    // 渐变变量
    cur_y += -10;
    cur_opacity -= 0.1;
    cur_fontSize += 1;
    // 渐变变量赋值（因为有单位的关系 所以不能直接加减 通过中间变量来赋值）
    el.style.top = cur_y + "px";
    el.style.opacity = cur_opacity;
    el.style.fontSize = cur_fontSize + "px";
   },50);
   // 时间到了之后清空定时器 清除刚才添加的元素 并且恢复点击触发事件
   setTimeout(function(){
    clearInterval(_timer);
    elBody.removeChild(el);
    bombFlag = true;
   },500);
 }
 // 暂停点击触发事件
   bombFlag = false;
 }