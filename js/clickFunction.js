//这是点击跳转界面的事件
var home = document.getElementsByClassName("home");
var growth = document.getElementsByClassName("growth");
var daily = document.getElementsByClassName("daily");
var about = document.getElementsByClassName("about");
var view = document.getElementsByTagName("body")[0];
if(view.className!="homeView")
{
    for(var i = 0;i<home.length;i++)
    {
    home[i].onclick = function()
    {
        window.location.href="./main/home.html"//跳转页面
    }
    }
}


for(var i = 0;i<growth.length;i++)
{
    growth[i].onclick = function()
    {
        alert("尚未开发!");
    }
}
for(var i = 0;i<daily.length;i++)
{
    daily[i].onclick = function()
    {
        alert("尚未开发!");
    }
}
for(var i = 0;i<about.length;i++)
{
    about[i].onclick = function()
    {
        alert("尚未开发!");
    }
}
//这是点击触发事件
var homePage = document.getElementsByClassName("homepage")[0];
var lis = homePage.getElementsByTagName("li");
var lis_as = homePage.getElementsByTagName("a");
for(var i = 0;i<lis.length;i++)
{
    lis[i].num=i;
    lis_as[i].num=i;
    lis[i].onmouseover = function()
    {
        for(var j = 0;j<lis.length;j++)
        {
            lis[j].style.backgroundColor="rgba(62, 157, 255, .8)";
            lis_as[j].style.color = "";
        }
        lis[this.num].style.backgroundColor="rgba(37,38,255,.8)";
        lis_as[this.num].style.color = "red";
    }
}