//MAIN ANIMATION
function startAnimation() {

    //Audible Animation
    var tl = gsap.timeline({repeat: 1, repeatDelay: 1});
    tl.to("#s1_logo", {duration: 0.3, x: 0});
    tl.fromTo("#s1_text1", {x: -200}, {ease: "back.out(1.2)", duration: 0.3, x: 0});
    tl.fromTo("#s1_text2", {x: -200}, {ease: "back.out(1.2)", duration: 0.3, x: 0});
    tl.fromTo("#s1_text3", {x: -200}, {ease: "back.out(1.2)", duration: 0.3, x: 0});
    tl.fromTo("#s1_text4", {x: -200}, {ease: "back.out(1.2)", duration: 0.3, x: 0});
    tl.fromTo("#s1_img1", {x: 400}, {ease: "back.out(1.2)", duration: 0.6, x: 0});
    tl.fromTo("#s1_img2", {x: 400}, {ease: "back.out(1.2)", duration: 0.6, x: 0});
    tl.fromTo("#s1_cta", {y: 400}, {duration: 0.3, y: 0});

    // //Variable Declarations
    // let xFrom;
    // let yFrom;

    // //Determine Frame Height/Width Variables
    // const frameHeight = document.getElementById("container").offsetHeight;
    // const frameWidth = document.getElementById("container").offsetWidth;

    // //Animation Variables
    // const parameter = ">-0.2";
    // const blur = "blur(5px)"

    // //Animation Timeline
    // const frameTL = gsap.timeline({defaults: {duration: animationDuration, ease: "expo.out"}});

    // //Positioning functions for Elements
    // function xPosition(element) {
    //     if (element.direction === "right") {
    //         return frameWidth;
    //     } else if (element.direction === "left") {
    //         return -Math.abs(frameWidth);
    //     } else if (element.direction === "top") {
    //         return 0;
    //     } else if (element.direction === "bottom") {
    //         return 0;
    //     }
    // }

    // function yPosition(element) {
    //     if (element.direction === "right") {
    //         return 0;
    //     } else if (element.direction === "left") {
    //         return 0;
    //     } else if (element.direction === "top") {
    //         return -Math.abs(frameHeight);
    //     } else if (element.direction === "bottom") {
    //         return frameHeight;
    //     }
    // }

    // Actimel Animation
    // for (var i = 1; i <= noOfCopyElements; ++i) {

    //     textNumber = document.getElementById("s1_text" + [i]);

    // frameTL
    //     .fromTo(textNumber, {x: xPosition(textNumber), y: yPosition(textNumber), opacity: 1, filter: blur}, {x: 0, y: 0, opacity: 1, filter: "blur(0px)"}, parameter)
    // }    

    // Actimel Animation
    // frameTL
    //     //load video when frame 1 fades out
    //     .to(".section1", {opacity: 0},"+=0.8")
    //     //play video when frame 2 starts
    //     .to(".section2-container", {opacity:1, onStart: playVideo}, "<")
    //     .fromTo(s2_bottle_mask, 2, {scale: 4.5}, {scale: 1, ease: "power1.out"}, "<")
    //     .fromTo(s2_white_mask, 0.25, {opacity: 0}, {opacity: 1, ease: "power1.out", onComplete: stopVideo})
    //     //disclaimer
    //     .fromTo(s2_disclaimer, {opacity: 0}, {opacity: 1, duration: 2.5}, "+=0.25")
    //     //immune support
    //     .fromTo(s2_text1, 0.30, {x: xPosition(s2_text1), y: yPosition(s2_text1), opacity: 1, filter: blur}, {x: 0, y: 0, opacity: 1, ease: "power2.out", filter: "blur(0px)"}, "-=2.5")
    //     .to(s2_text1, {opacity: 0})
    //     //packed with vitamin D
    //     .fromTo(s2_text2, 0.30, {x: xPosition(s2_text2), y: yPosition(s2_text2), opacity: 1, filter: blur}, {x: 0, y: 0, opacity: 1, ease: "power2.out", filter: "blur(0px)"}, "<")
    //     .to(s2_text2, {opacity: 0}, "+=1.5")
    //     //CTA
    //     .fromTo(cta, 0.30, {x: xPosition(cta), y: yPosition(cta), opacity: 1, filter: blur}, {x: 0, y: 0, opacity: 1, ease: "power2.out", filter: "blur(0px)"}, "<")
    //     .repeat(loopCount).repeatDelay(2);

    //     //check animation duration
    //     console.log("total duration: " + frameTL.duration());
    }

    startAnimation();