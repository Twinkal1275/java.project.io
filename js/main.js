var load;
function mainFunction()
{
    load=setTimeout("display()",1000);
}
function display()
{
    document.getElementById("main").style="display:block !important";
    document.getElementById("alldata").style="display:none !important";

}

var search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}
