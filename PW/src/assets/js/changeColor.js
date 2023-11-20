var tshirtImage = document.getElementsByClassName("TshirtImage")
function changeTo(color){
    Array.prototype.forEach.call(tshirtImage,function (image){
        image.style.backgroundColor = color;
    });
}