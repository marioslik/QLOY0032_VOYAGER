// JavaScript Document
var container;
var content;
var dcLogo;
var bgExit;
var tl;
var preload;

$(document).ready(function () {

    var i = [
        "base-image-01.jpg",
        "card-front.png",
        "card-back.png",
        "logo-partner.svg",
        "logo-qantas-money.svg",
        "logo-qantas.svg",
        "shape-blue.svg",
        "shape-mask.svg",
        "shape-red.svg",
    ];

    preloadimages(i).done(function (images) {
        console.log("loaded");
        imagesLoaded = true;
        initCSS();
        startAnimation()
    });
});

function initCSS() {

    //SET STARTING POSITIONS FOR ELEMENTS
    TweenLite.set($("#blue-shape"), {alpha: 1, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenLite.set($("#blue-shape-small"), {alpha: 1, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 140, y: 83, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 160, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#red-gradient"), {autoAlpha:0, rotation:50, x:-214, y: -310, transformOrigin:"50% 50%", scale:0.7}); // rotation:35, autoAlpha:1, x:-214, y:-300,
    TweenLite.set($("#logos-container"), {y:1});

    TweenLite.set(".cardWrapper", {perspective:800, scale:0.4});

    TweenLite.set($(".terms-frame-02"), {alpha:0});
    TweenLite.set($(".terms-frame-03"), {alpha:0});
    TweenLite.set($(".logo-divider-line"), {alpha:0});
    TweenLite.set($(".logo-partner"), {alpha:0});

    $( ".banner" ).hover(
        function() {
            $("#cta-button").addClass('hover');
        }, function() {
            $("#cta-button").removeClass('hover');
        }
    );

    if($('.overlay').length) {
        $('.terms-endframe').click(function(){
          console.log('extended terms');
          $('.overlay').fadeIn();
          $('.terms').fadeOut();
      });

        $('.overlay-close').click(function(){
          $('.overlay').fadeOut();
          $('.terms-endframe').fadeIn();
      });
    } else {
        $('.terms-endframe').click(function(){
          console.log('clicktag invoked');
          window.open(clickTag);
      });
    }

    $('.clicktag').click(function(){
        console.log('clicktag invoked');
        window.open(clickTag);
    });
}

//------------------------------- MAIN ANIMATION -------------------------------

var percentFill = 80, /* in %, ie. this is 10% */
    duration    = 1.5;

function startAnimation() {

    console.log("startAnimation");

    $(".container").show();
    $(".loader").hide();

    bannerWidth = $(".container").width();
    bannerHeight = $(".container").height();

    var mySplitText = new SplitText("#word-03", {type:"words,chars"});
    var chars = mySplitText.chars;

    tl = new TimelineLite();

    //FRAME 01/INTRO ------------------------------------------------
    tl.from(".bg-image-01", 1, {alpha: 0, ease: Power1.easeIn}, "0");
    tl.from("#messaging-frame-01", 1.5, {alpha: 0, ease: Sine.easeInOut}, "1");
    tl.from("#points-container", 1.5, {alpha: 0, x:5, ease: Sine.easeOut}, "1");
    tl.from("#bonus", 1.5, {alpha: 0, x:5, ease: Sine.easeOut}, "1.1");
    tl.from("#qantas-points", 1.5, {alpha: 0, x:-5, ease: Sine.easeInOut}, "1.4");

    tl.call(countDown, [900, 999, 000, "#hundreds-countdown"], this, "0.3");

    tl.from(".cardWrapper", 1.5, {alpha: 0, x:-5, ease: Sine.easeOut}, "1.6");
    // tl.to(".card", 1.9, {rotationY:360, ease:Back.easeInOut}, "3");

    tl.from(".terms-frame-01", 2, {alpha: 0, ease: Power1.easeOut}, "1.8");

    //Base Gradient
    tl.to("#red-grad-values", 3, {attr:{cx:364, cy:45, r:450}, ease:Power2.easeInOut}, "0");
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, ".2");
    tl.to("#base-grad-stop-02", 2, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#red-grad-stop-02", 2, {stopOpacity:1, ease:Power1.easeIn}, ".5");
    tl.to("#red-grad-stop-03", 1.5, {stopOpacity:1, ease:Power1.easeInOut}, ".5");

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -20, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1, scaleY: 1, x: -2140, y: -1315,  ease: Power1.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {alpha:1, rotation: 90, scaleX: 0.2, scaleY: 0.2, x: 251, y: 35, ease: Power1.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {alpha:1, rotation: -90, scaleX: 1.3, scaleY: 1.3, x: -45, y: 100, ease: Power1.easeInOut}, ".3");
    tl.to("#mask-shape", 1, {rotation: 0, scaleX: 3.65, scaleY: 3.65, x: -1756, y: -1315, ease: Power3.easeInOut}, "1.1");
    tl.to("#blue-shape", 0.4, {rotation: -180, scaleX: 1.3, scaleY: 1.3, x: -290, y: 280, ease: Power2.easeIn}, "1.3");

    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 4);

    tl.to(".cardWrapper", 1, {alpha: 0, ease: Power1.easeOut}, "frame02");
    tl.set(".cardWrapper", {display: 'none'});

    tl.from("#word-01", 0.5, {alpha:0, y:-5, scale:1.2, ease: Sine.easeInOut}, "frame02+=0.7");
    tl.from("#word-02", 0.5, {alpha:0, y:-5, scale:1.2, ease: Sine.easeInOut}, "frame02+=1.2");
    tl.from("#word-03", 0.5, {alpha:0, y:-5, scale:1.2, ease: Sine.easeInOut}, "frame02+=1.4");
    tl.from("#word-04", 0.5, {alpha:0, y:-5, scale:1.2, ease: Sine.easeInOut}, "frame02+=1.7");
    tl.from("#word-05", 0.5, {alpha:0, y:-5, scale:1.2, ease: Sine.easeInOut}, "frame02+=1.8");

    tl.from(".logo-qantas", 2, {alpha:0, ease: Power1.easeInOut}, "frame02+=0.5");

    tl.to("#messaging-frame-01", 1, {alpha: 0, ease: Sine.easeInOut}, "frame02");

    // tl.to(".terms-frame-01", 1, {alpha: 0, y: 0, ease: Power1.easeOut}, "frame02");

    //FRAME 03  ------------------------------------------------
    tl.add("endframe", 7.5);

    tl.to(".logo-qantas", 1, {alpha:0, y:-5, ease: Sine.easeInOut}, "endframe");

    tl.from("#endframe-word-01", 1, {autoAlpha:0, y:5, ease: Sine.easeOut}, "endframe+=0.7");
    tl.from("#endframe-word-02", 1, {autoAlpha:0, y:5, ease: Sine.easeOut}, "endframe+=0.9");
    tl.from("#endframe-word-03", 1, {autoAlpha:0, y:5, ease: Sine.easeOut}, "endframe+=1.1");
    tl.from("#endframe-word-04", 1, {autoAlpha:0, y:5, ease: Sine.easeOut}, "endframe+=1.3");
    tl.from("#endframe-word-05", 1, {autoAlpha:0, y:5, ease: Sine.easeOut}, "endframe+=1.4");
    tl.from("#endframe-word-06", 1, {autoAlpha:0, x:-5, ease: Sine.easeOut}, "endframe+=1.7");
    tl.from("#endframe-word-07", 1, {autoAlpha:0, x:5, ease: Sine.easeOut}, "endframe+=1.7");

    //FADE TO FULL RED BASE
    tl.to("#red-gradient", 1.5, {rotation:35, autoAlpha:1, x:-214, y:-300, scale:1, ease: Power1.easeOut}, "endframe");
    tl.to("#red-grad-values", 2, {attr:{cx:364, cy:45, r:120}, ease:Power2.easeInOut}, "endframe-=.2");
    tl.to("#base-grad-stop-01", 4, {stopOpacity:0.8, stopColor:"#F70500", ease:Power1.easeInOut}, "endframe-=.2");
    tl.to("#base-grad-stop-02", 3.5, {stopOpacity:0.5, stopColor:"#F70500", ease:Power1.easeInOut}, "endframe-=.2");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:1, stopColor:"#d00914", ease:Power1.easeInOut}, "endframe-=.2");
    tl.to("#base-red", 2, {alpha:0, ease:Power1.easeInOut}, "endframe-=.3");
    tl.to(".bg-image", 1, {alpha:0, ease:Power1.easeInOut}, "endframe+=.2");

    tl.to("#messaging-frame-02", 0.8, {alpha: 0, y: -5, ease: Sine.easeInOut}, "endframe");
    tl.from("#messaging-endframe", 1.5, {alpha: 0, y: 5, ease: Power1.easeInOut}, "endframe+=.1");

    tl.to(".terms-frame-01", 1, {alpha: 0, y: 0, ease: Power1.easeOut}, "endframe");
    tl.from(".terms-endframe", 1.5, {alpha: 0, ease: Power1.easeOut}, "endframe+=1.5");

    tl.from("#cta-button", 1, {alpha: 0, y: 5, ease: Power1.easeInOut}, "endframe+=2");

    // tl.to("#logos-container", 1.2, {y: -24, ease: Power1.easeInOut}, "endframe");
    tl.from(".logo-qantas-money", 2, {alpha:0, y:10, ease: Power1.easeInOut}, "endframe+=0.8");
    // tl.from(".logo-divider-line", 2, {alpha: 0, scaleY:0, transformOrigin: "50% 100%", ease: Power1.easeInOut}, "endframe+=.4");
    // tl.from(".logo-partner", 1.3, {alpha:0, y:10, ease: Power1.easeInOut}, "endframe+=1");

    // tl.seek(10)
}

function countDown(startingPoint, limit, target, element) {

    var i = startingPoint;
    var limit = parseInt(limit);
    var target = parseInt(target);
    var value;

    var si = setInterval(function(){
        if(i < limit) {
            i++;
            value = i;
        }
        if (i === limit) {
            i = 0;
            value = i;
        }
        if(i === target) {
            $("#hundreds-countdown").html("000")
            $("#thousands-countdown").html("60")
            clearInterval(si)

        }
        if (i < 10) {

            value = i;
            value = "00" + i;
        }
        $(element).html(value)

    }, 18)
}

function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0;
    var postaction = function () {};
        arr = (typeof arr != "object") ? [arr] : arr;

    function imageloadpost() {
        loadedimages++;
        if (loadedimages == arr.length) {
            postaction(newimages); //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image();
        newimages[i].src = arr[i];
        newimages[i].onload = function () {
            imageloadpost();
        };
        newimages[i].onerror = function () {
            imageloadpost();
        };
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction; //remember user defined callback functions to be called when images load
        }
    };
}
