var home = document.getElementsByClassName("home");
var growth = document.getElementsByClassName("growth");
var daily = document.getElementsByClassName("daily");
var about = document.getElementsByClassName("about");
//这是点击主页的形状
for(var i = 0;i<home.length;i++)
{
    home[i].onclick = function()
    {
        window.location.href="./main/home.html"//跳转页面
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