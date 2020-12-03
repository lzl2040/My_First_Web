var optionBox = document.getElementsByClassName("classify-wrapper")[0];
var body = document.getElementsByTagName("body")[0];
var functionBox = document.getElementsByClassName("function-wrapper")[0];
var lis = functionBox.getElementsByTagName("li");
/*window.onresize = function()//窗口改变时触发
{
    var bodyW = body.clientWidth;
    optionBox.style.width = parseInt(bodyW)*0.75+"px";
    optionBox.style.marginLeft=parseInt(bodyW)*0.2+"px";//距离左边的大小
    /*for(var i =0;i<lis.length;i++)
    {
        lis[i].style.width=200*(parseInt(optionBox.style.width)/1200)+"px";//parseInt(optionBox.style.width) / 4;//-parseInt(optionBox.style.marginLeft) + "px";
        lis[i].style.height=200*(parseInt(optionBox.style.width)/1200)+"px";//parseInt(optionBox.style.width) / 4;//-parseInt(optionBox.style.marginLeft) + "px";
    }
}*/

