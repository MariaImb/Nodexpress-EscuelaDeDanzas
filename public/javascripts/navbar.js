
// SHRINK VAR ON SCROLL

window.onscroll=function()
    {
    scrollFunction()
    };

    function scrollFunction()
    {
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50)
        {
        document.getElementById("logo").style.height="60px";
        }
    else{
        document.getElementById("logo").style.height="100px";
        }
    }



