
var currentPage = window.location.pathname;
var pathArr = currentPage.split("/");
var currentHtml = pathArr[pathArr.length-1];
var liObj = document.getElementsByClassName("nav")[0].getElementsByTagName("li");

switch(currentHtml) {
    case 'index.html':
        liObj[0].className = 'currentPage';
        break;
    case 'menu.html':
        liObj[1].className = 'currentPage';
        break;
    case 'address.html':
        liObj[2].className = 'currentPage';
        break;
    case 'contact.html':
        liObj[3].className = 'currentPage';
        break;
    case 'message.html':
        liObj[4].className = 'currentPage';
        break;
    default:
        break;
}