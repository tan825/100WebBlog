//scrollPic
var scrollPicArr = document.getElementsByClassName("scrollPic")[0].getElementsByTagName("li");
var imgWidth = scrollPicArr[0].offsetWidth;
var arrLength = scrollPicArr.length;
var current = 0;
function move(current) {
    for(let i = 0; i < arrLength; i++){
        if(current == i){
            scrollPicArr[i].style.left = 0;
            scrollPicArr[i].style.zIndex = 50;
        }else{
            scrollPicArr[i].style.zIndex = 10;
            if(current == 0){
                scrollPicArr[arrLength-1].style.left = -imgWidth + 'px';
                scrollPicArr[current+1].style.left = imgWidth + 'px';
            }else if(current == arrLength-1) {
                scrollPicArr[current-1].style.left = -imgWidth +'px';
                scrollPicArr[0].style.left = imgWidth + 'px';
            }else {
                scrollPicArr[current-1].style.left = -imgWidth +'px';
                scrollPicArr[current+1].style.left = imgWidth + 'px';
            }
        }
    }
}
move(0);
function roll() {
    current++;
    if(current < arrLength) {
        move(current);
    }else{
        current = 0;
        move(current);
    }
    setTimeout(roll,5000);
}

setTimeout(roll,5000);

// introPage
var introObj = document.getElementsByClassName("introPage")[0].getElementsByTagName("div");

for(let i = 1; i < introObj.length; i++){
    if(i%2){
        introObj[i].className = 'leftIntro';
    }else{
        introObj[i].className = 'rightIntro';
        introObj[i].getElementsByTagName("p")[0].className = "order";
    }
}
