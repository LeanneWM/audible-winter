//MAIN ANIMATION
function startAnimation() {

    //Audible Animation
    var tl = gsap.timeline({repeat:0, repeatDelay: 1});
    tl.to("#s1_logo", {duration: 0.3, x: 0});
    tl.fromTo("#s1_text1", {x: -200}, {ease: "back.out(1.2)", duration: 0.5, x: 0});
    tl.fromTo("#s1_text2", {x: -200}, {ease: "back.out(1.2)", duration: 0.5, x: 0},"<0.3");
    tl.fromTo("#s1_text3", {x: -200}, {ease: "back.out(1.2)", duration: 0.5, x: 0},"<0.3");
    tl.fromTo("#s1_text4", {x: -200}, {ease: "back.out(1.2)", duration: 0.5, x: 0},"<0.3");
    tl.fromTo("#s1_img1", {x: 400}, {ease: "back.out(1.2)", duration: 0.6, x: 0}, "<0.3");
    tl.fromTo("#s1_img2", {x: 400}, {ease: "back.out(1.2)", duration: 0.6, x: 0}, "<0.3");
    tl.fromTo("#s1_cta", {y: 400}, {ease: "back.out(0.9)", duration: 0.6, y: 0}, "<0.3");

}

startAnimation();