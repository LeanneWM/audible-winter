//On Load
function init() {

    //Loads Enabler
    if (Enabler.isInitialized()) {
        Enablerinit();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, Enablerinit);
    }

    // Runs when Enabler is ready.
    function Enablerinit() {
        if (Enabler.isPageLoaded()) {
            loadAd();
        } else {
            Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, loadAd);
        }
    };

    function loadAd() {

        //Load through dynamic content from feed
        dynamicContentData();

        //Init Exits and extra listeners
        addListeners();

        //GSAP Warnings Disables REMOVE WHEN DEBUGGING/BUILDING
        gsap.config({
            nullTargetWarn: true
        });

        //Load Video
        loadVideo();

    }
}

function startAd() {

    container.style.display = "block";
    startAnimation();

}

// --- Add event listeners --- //
function addListeners() {

    //Clickthrough Exits
    clickThroughExit.addEventListener("click", onExitHandler);

    //Track video complete and midpoint counters
    s2_video.addEventListener('started', function () {
        counters("started")
    }, false);
    s2_video.addEventListener('timeupdate', videoMidpoint);
    s2_video.addEventListener('ended', function () {
        counters("complete")
    }, false);
}

//Exits
function onExitHandler() {
    Enabler.exitOverride("ExitURL", exit_url);
}

//Onload Handler
window.addEventListener('load', init);