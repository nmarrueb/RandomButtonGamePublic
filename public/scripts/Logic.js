const min = 1;
const max = 51;

//get html buttons as objects
window.onload=function(){
    const randomGameButton = document.getElementById("randomGame");
    randomGameButton.addEventListener("click", () => getRandomGame(min, max));
}


//logic with variables
//The maximum is inclusive and the minimum is inclusive
function getRandomIntInclusive(min, max){
    
    min2 = Math.ceil(min);
    max2 = Math.floor(max);
    const randomNumber =  Math.floor(Math.random() * (max2 - min2 + 1) + min2); 
    console.log('getRandomIntInclusive', randomNumber);
    return randomNumber;
}

//each link will be assigned to a number
function getRandomGame(min, max){
   View.clickButton();
   //console.log("button has been clicked");
    /*numberChoice = getRandomIntInclusive(min, max);
    console.log("numberChoice", numberChoice.toString());*/

    View.getNewGameUrl();
    View.game();
}
