initControls();

function initControls(){
    const randomPlayButton = document.getElementById("randomGame");
    randomPlayButton.addEventListener("click", () => getRandomGame(min, max));
    //console.log("button ready");
}