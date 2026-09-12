let trips = 0;

let tripsCounter = setInterval ( function(){
    trips+=3;

    document.getElementById("trips").textContent = trips;
    
    if(trips===600){
        clearInterval(tripsCounter)
    }
}, 12)


let travelers =0;

let travelersCounter = setInterval(function(){
    travelers++;

    document.getElementById("travelers").textContent= travelers;

    if(travelers===98){
        clearInterval(travelersCounter);
    }
},25)

let destinations = 0;

let destinationsCounter = setInterval(function(){
    destinations++;

    document.getElementById("destinations").textContent = destinations;

    if(destinations === 32) {
        clearInterval(destinationsCounter);
    }
},75)



let player;
let fullscreenPlayer;

function onYouTubeIframeAPIReady(){
    player = new YT.Player("youtube-video");
    fullscreenPlayer = new YT.Player("fullscreen-youtube-video");
}

document.getElementById("mute-button").addEventListener("click", function () {

    if (player.isMuted()) {

        player.unMute();

    } else {

        player.mute();

    }

});

document.getElementById("fullscreen-button").addEventListener("click", function(){
    let fullscreenButton = document.getElementById("fullscreen-button");
    let videoOverlay = document.getElementById("video-overlay");
    let closeButton = document.getElementById("close-fullscreen");


    fullscreenButton.addEventListener("click", function () {

        let currentTime = player.getCurrentTime();

        player.pauseVideo();

        videoOverlay.style.display = "flex";

        if (player.isMuted()) {
            fullscreenPlayer.mute();
        } else {
            fullscreenPlayer.unMute();
        }


        fullscreenPlayer.seekTo(currentTime, true);

        fullscreenPlayer.playVideo();

    });


    closeButton.addEventListener("click", function () {

        let currentTime = fullscreenPlayer.getCurrentTime();

        fullscreenPlayer.pauseVideo();

        videoOverlay.style.display = "none";

        if (player.isMuted()) {
            fullscreenPlayer.mute();
        } else {
            fullscreenPlayer.unMute();
        }

        player.seekTo(currentTime, true);

        player.playVideo();
    });
})




/*****************************************************************************************************/ 



document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".meet-our-team-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const moreInfo = card.querySelector(".meet_our_team_card_more_info");
            const isActive = card.classList.contains("active");

            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove("active");
                    const otherInfo = otherCard.querySelector(".meet_our_team_card_more_info");
                    if (otherInfo) otherInfo.classList.remove("show");
                }
            });

            card.classList.toggle("active", !isActive);
            if (moreInfo) {
                moreInfo.classList.toggle("show", !isActive);
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", ()=>{
    const track= document.getElementById("cards-track-with-js");
    const cards = document.querySelectorAll(".meet-our-team-card");

    let currentX =0;
    let animationFrameId =null;
    const speed= 0.8;

    const breakPoint_Width = 1300;

    function shouldPause(){
        const screenWidth = window.innerWidth;
        const hasActiveCard = document.querySelector(".meet-our-team-card.active") !==null;
        return screenWidth <= breakPoint_Width || hasActiveCard;
    }

    function handleLayoutMode(){
        const screenWidth = window.innerWidth;

        if(screenWidth <= breakPoint_Width){
            track.classList.add("grid-mode");
            track.style.transform = "none";
            currentX =0;
        }

        else{
            track.classList.remove("grid-mode");
        }
    }

    function step(){
        const screenWidth = window.innerWidth;

        if(screenWidth > breakPoint_Width && !shouldPause()){
            currentX -=speed;
            const halfWidth = track.scrollWidth/2;

            if (Math.abs(currentX)>= halfWidth){
                currentX =0;
            }

            track.style.transform = `translateX(${currentX}px)`;
        }

        animationFrameId = requestAnimationFrame(step);
    }

    window.addEventListener("resize", handleLayoutMode);

    handleLayoutMode();
    animationFrameId = requestAnimationFrame(step);
});




const observerOptions = {
    threshold: 0.15
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

