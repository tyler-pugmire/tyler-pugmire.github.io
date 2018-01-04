document.addEventListener("DOMContentLoaded",function(){new SweetScroll({});particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:19.18081918081918,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},nb:80},interactivity:{detect_on:"window",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},!1);

var slideshowsObjs = [];
var autoTimeout;
createSliderObjects();

function plusSlides(obj, n) {
    var parentDiv = obj.parentElement;
    var matchedDiv = null;
    for(var i = 0; i < slideshowsObjs.length; ++i) {
        if (parentDiv.id == slideshowsObjs[i].id) {
            matchedDiv = slideshowsObjs[i];
        }
    }
    if(matchedDiv == null){
        return false;
    }
    matchedDiv.slideIndex=matchedDiv.slideIndex+n;
    showDivs(matchedDiv, matchedDiv.slideIndex);
  }

function createSliderObjects() {
    var sliderDivs = document.getElementsByClassName("slideshow-container");
    for(var i = 0; i < sliderDivs.length; ++i) {
        var obj = {};
        obj.id = sliderDivs[i].getAttribute('id');
        obj.divContent = sliderDivs[i];
        obj.slideIndex = 1;
        obj.slideContents = sliderDivs[i].getElementsByClassName("slide");
        dotContainer = sliderDivs[i].getElementsByClassName("dot-container")[0];
        obj.dots = dotContainer.getElementsByClassName("dot");
        showDivs(obj, 1);
        slideshowsObjs.push(obj);
    }
}

function currentSlide(obj, n){
    var parentDiv = obj.parentElement.parentElement;
    var matchedDiv = null;
    for(var i = 0; i < slideshowsObjs.length; ++i) {
        if (parentDiv.id == slideshowsObjs[i].id) {
            matchedDiv = slideshowsObjs[i];
        }
    }
    if(matchedDiv == null){
        return false;
    }
    matchedDiv.slideIndex=n;
    showDivs(matchedDiv, matchedDiv.slideIndex);
}

function showDivs(divObject, n) {
    var i;
    if (n > divObject.slideContents.length) {
      divObject.slideIndex = 1
    }
    if (n < 1) {
      divObject.slideIndex = divObject.slideContents.length
    }
    for (i = 0; i < divObject.slideContents.length; i++) {
      divObject.slideContents[i].style.display = "none";
    }
    divObject.slideContents[divObject.slideIndex-1].style.display = "block";
    for (i = 0; i < divObject.dots.length; i++) {
        divObject.dots[i].className = divObject.dots[i].className.replace(" active", "");
    }
    divObject.dots[divObject.slideIndex-1].className += " active";
}

function showVideo(videoURL){
    var element = document.createElement("div");
    element.className = "fullscreen";
    console.log(videoURL);
    element.innerHTML = "<iframe width='420' height='315' src='" + videoURL + "' frameborder='0' allowfullscreen></iframe>";
    var parent = document.getElementById("projects");
    parent.appendChild(element);
}

