
var up_arrow = document.getElementById("up-arrow");
var down_arrow = document.getElementById("down-arrow");


const totalContentHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

const maxScrollTop = Math.max(0, totalContentHeight - viewportHeight);

window.onscroll = function(ev) {

    //console.log(window.scrollY);

    if ((window.innerHeight + Math.round(window.scrollY)) >= this.document.body.offsetHeight){
        //console.log('reached bottom');
        down_arrow.style.opacity = 0.2;
    }
    else {
        down_arrow.style.opacity = 1.0;
    }

    if(Math.round(window.scrollY) <= 100){
        //console.log('reached top');
        up_arrow.style.opacity = 0.2;
    }
    else {
        up_arrow.style.opacity = 1.0;
    }



};