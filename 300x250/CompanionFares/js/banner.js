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
        "shape-white.svg"
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
    TweenLite.set($("#red-gradient"), {autoAlpha:0, rotation:70, x:-210, y: 60, scale:0.8});
    TweenLite.set($("#partnership-white-shape-small"), {y:-5})
    TweenLite.set($("#logos-container"), {y:-4});

    TweenLite.set(".cardWrapper", {perspective:800});
    TweenLite.set(".card", {transformStyle:"preserve-3d"});
    TweenLite.set(".back", {rotationY:-180});
    TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

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

    tl = new TimelineLite();

    //FRAME 01/INTRO ------------------------------------------------
    tl.from(".bg-image-01", 1, {alpha: 0, ease: Power1.easeIn}, "0");

    tl.from(".cardWrapper", 1.5, {alpha: 0, x:-20, ease: Sine.easeOut}, "1.5");

    tl.from("#frame01-line-01", 2, {autoAlpha:0, y:-10, ease: Sine.easeOut}, "1.5");
    tl.from("#frame01-line-02", 2, {autoAlpha:0, y:-10, ease: Sine.easeOut}, "1.7");
    tl.from("#frame01-line-03", 2, {autoAlpha:0, y:-10, ease: Sine.easeOut}, "1.9");

    tl.from(".terms-frame-01", 2, {alpha: 0, ease: Power1.easeOut}, "1.8");

    //Base Gradient
    tl.to("#red-grad-values", 2.5, {attr:{cx:0, cy:295, r:450}, ease:Power2.easeInOut}, "0");
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, ".2");
    tl.to("#base-grad-stop-02", 2, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#red-gradient", 3, {rotation:-30, autoAlpha:0, x:0, y:-290, scale:1, ease: Power2.easeInOut}, "0");

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -9, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1, scaleY: 1, x: -2140, y: -1315,  ease: Sine.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {alpha:1, rotation: 90, scaleX: 0.2, scaleY: 0.2, x: 221, y: 35, ease: Sine.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {rotation: -90, scaleX: 1, scaleY: 1, x: 5, y: 130, ease: Sine.easeInOut}, ".3");
    tl.to("#mask-shape", 0.5, {rotation: 0, scaleX: 2.2, scaleY: 2.2, x: -1950, y: -1315, ease: Power2.easeIn}, "1.1");
    tl.to("#blue-shape", 0.4, {rotation: -180, scaleX: 1.3, scaleY: 1.3, x: -100, y: 240, ease: Power2.easeIn}, "1.3");
    tl.to("#blue-shape-small", 0.4, {rotation: 150, scaleX: 0.7, scaleY: 0.7, x: 330, y: -95, ease: Power2.easeIn}, "1.3");

    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 4);
    tl.to("#partnership-white-shape-small", 1.5, {autoAlpha:1, x:-100, y:-20, scaleX:2.2, ease: Power1.easeIn}, "frame02+=1");

    tl.from("#frame02-line-01", 1, {autoAlpha:0, y:10, ease: Sine.easeOut}, "frame02+=0.9");
    tl.from("#frame-02-word-05", 1, {autoAlpha:0, x:-20, ease: Sine.easeOut}, "frame02+=1.3");
    tl.from("#frame-02-word-06", 1, {autoAlpha:0, x:20, ease: Sine.easeOut}, "frame02+=1.3");
    tl.from("#frame-02-word-07", 1, {autoAlpha:0, y:10, ease: Sine.easeOut}, "frame02+=1.5");
    tl.from("#frame-02-word-08", 1, {autoAlpha:0, y:10, ease: Sine.easeOut}, "frame02+=1.7");

    tl.to(".card", 1.9, {rotationY:360, ease:Back.easeInOut}, "frame02+=1.9");

    tl.to("#messaging-frame-01", 0.8, {alpha: 0, ease: Sine.easeInOut}, "frame02");

    tl.to(".terms-frame-01", 1, {alpha: 0, y: 0, ease: Power1.easeOut}, "frame02");
    tl.from(".terms-frame-02", 1.5, {alpha: 0, ease: Power1.easeInOut}, "frame02+=.1");

    //FRAME 03  ------------------------------------------------
    tl.add("frame03", 9);

    tl.to("#messaging-frame-02", 0.8, {alpha: 0, ease: Power1.easeInOut}, "frame03");
    tl.from("#messaging-endframe", 1.5, {alpha: 0, y: 20, ease: Power1.easeInOut}, "frame03+=.1");

    tl.call(countDown, [900, 999, 000, "#hundreds-countdown"], this, "frame03-=0.4");

    tl.to(".cardWrapper", 1, {alpha: 0, ease: Power1.easeOut}, "frame03");
    tl.set(".cardWrapper", {display: 'none'});

    tl.to(".terms-frame-02", 1, {alpha: 0, y: 0, ease: Power1.easeOut}, "frame03");
    tl.from(".terms-frame-03", 1.5, {alpha: 0, ease: Power1.easeInOut}, "frame03+=.1");

    tl.from(".logo-qantas", 2, {alpha:0, ease: Power1.easeInOut}, "frame03+=0.5");

    //END FRAME ------------------------------------------------
    tl.add("endframe", 12.5);

    tl.to(".logo-qantas", 0.8, {alpha:0, y:-5, ease: Power1.easeInOut}, "endframe");

    //FADE TO FULL RED BASE
    tl.to("#red-gradient", 3.5, {autoAlpha:1, rotation:-96, x:-230, y: -250, scale:0.8, ease: Power1.easeInOut}, "endframe");
    tl.to("#red-grad-values", 3, {attr:{cx:150, cy:125, r:90}, ease:Power2.easeInOut}, "endframe+=.2");
    tl.to("#base-grad-stop-01", 4, {stopOpacity:0.8, stopColor:"#F70500", ease:Power1.easeInOut}, "endframe+=.2");
    tl.to("#base-grad-stop-02", 3.5, {stopOpacity:0.5, stopColor:"#F70500", ease:Power1.easeInOut}, "endframe+=.2");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:1, stopColor:"#d00914", ease:Power1.easeInOut}, "endframe+=.2");
    tl.to("#base-red", 1, {autoAlpha:0, ease:Power1.easeOut}, "endframe+=.3");
    tl.to(".bg-image", 1, {alpha:0, ease:Power1.easeInOut}, "endframe+=.2");

    tl.to(".terms-frame-03", 1, {alpha: 0, y: 0, ease: Power1.easeOut}, "endframe");
    tl.from(".terms-endframe", 1.5, {alpha: 0, ease: Power1.easeInOut}, "endframe+=1.5");

    tl.from("#cta-button", 1, {alpha: 0, y: 15, ease: Power1.easeInOut}, "endframe+=0.5");

    tl.to("#logos-container", 1.2, {y: -23, ease: Power1.easeInOut}, "endframe");
    tl.from(".logo-qantas-money", 1.3, {alpha:0, y:10, ease: Power1.easeInOut}, "endframe+=0.8");
    tl.from(".logo-divider-line", 2, {alpha: 0, scaleY:0, transformOrigin: "50% 100%", ease: Power1.easeInOut}, "endframe+=.4");
    tl.from(".logo-partner", 1.3, {alpha:0, y:10, ease: Power1.easeInOut}, "endframe+=1");

    tl.from("#partnership-white-shape", 2, {x:40, y:35, rotation:20, ease: Power2.easeInOut}, "endframe+=.3");
    tl.to("#white-grad-stop-01", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=.5");
    tl.to("#white-grad-stop-02", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=1");
    tl.to("#white-grad-stop-03", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=1.7");
    tl.to("#white-grad-small-stop-02", 1, {stopOpacity:0, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=1");


    // tl.pause(12.2);
    // tl.seek(5.5);
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
