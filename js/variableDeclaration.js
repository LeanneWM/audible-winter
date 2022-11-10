//Feed Variables
let feedContent;

// Main Elements
let container = document.getElementById('container');
let bg = document.getElementById('background_img');

// Section One Elements
let s1_logo = document.getElementById('s1_logo');
let s1_headline = document.getElementById('s1_headline');
let s1_text1 = document.getElementById('s1_text1');
let s1_text2 = document.getElementById('s1_text2');
let s1_text3 = document.getElementById('s1_text3');
let s1_text4 = document.getElementById('s1_text4');
let s1_img1 = document.getElementById('s1_img1');
let s1_img2 = document.getElementById('s1_img2');
let s1_bk_hor = document.getElementById('s1_bookwall-horizontal');
let s1_bk_ver = document.getElementById('s1_bookwall-vertical');
let s1_cta = document.getElementById('s1_cta');
let s1_disclaimer = document.getElementById('s1_disclaimer');

//Animations Variables
let loopCount;
let textNumber;
let noOfCopyElements;
let animationDuration;

//Generic Elements
let debugMode = false;

//True False Variables
const TRUE = true;
const FALSE = false;

//Exits
let clickThroughExit = document.getElementById('clickThroughExit');

//Exit/Clickthrough URL
let exit_url;