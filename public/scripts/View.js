var numberChoice;
var link ="";
var temp;
var description;

class View{

    //view.game changes the url of the iframe
    static game(min, max){
        //get random int
        //min and max number of games
        numberChoice = getRandomIntInclusive(1, 51);
        //console.log("numberChoice", numberChoice);

        //assign link variable based on link
        const link = this.getNewGameUrl(numberChoice);
        

        //change html iframe link with new link variable
        document.getElementById('srcLink').src = link;
        //console.log("iframe link changed");

        temp = this.getNumberChoice();
        console.log("get method works", temp);
        
        const description = this.getGameDescription(numberChoice);
        document.getElementById('game-description').innerHTML = description;
        
        
    }
    
    static getNewGameUrl(numberChoice){
        //switch case for all game urls
        switch(numberChoice){

            //adventure games (awesome-jsgames)
            case 1: return "https://js13kgames.com/games/triangle-back-to-home/index.html";         //triangle: back to home
            case 2: return "https://js13kgames.com/games/dwarfs-there-and-back-again/index.html";   //dwarfs ther back and again
            case 3: return "https://js13kgames.com/games/bounce-back/index.html";                   //bounce back
            case 4: return "https://js13kgames.com/games/wander/index.html";                        //wander
            case 5: return "https://js13kgames.com/games/offline-paradise/index.html";              //offline paradise
            case 6: return "https://js13kgames.com/games/planetfall/index.html";                    //planetfall
            case 7: return "https://js13kgames.com/games/quest-of-tod/index.html";                  //quest of tod

            //arcade games (awesome-jsgames)
            case 8: return  "https://js13kgames.com/games/racer/index.html";                         //racer
            case 9: return  "https://js13kgames.com/games/everyones-sky/index.html";                 //everyone's sky
            case 10: return "https://js13kgames.com/games/evil-glitch/index.html";                   //evil glitch
            case 11: return "https://js13kgames.com/games/off-the-line/index.html";                  //off the line
            case 12: return "https://js13kgames.com/games/behind-asteroids-the-dark-side/index.html";//behind asteroids the dark side
            case 13: return "https://js13kgames.com/games/pest-control-weasels/index.html";          //pest control weasels
            case 14: return "https://js13kgames.com/games/pizza-undelivery/index.html";              //pizza undelivery
            case 15: return "https://grahamthecoder.github.io/jump-n-bump/";                         //jump n bump
            
            //education (awesome-jsgames)
            case 16: return "https://pixelart.academy/";                                             //pixel art academy

            //platfrom (awesome-jsgames)
            case 17: return "https://js13kgames.com/games/nano-wirebot/index.html#hpzuxo";           //nano-wirebot
            case 18: return "https://js13kgames.com/games/the-wandering-wraith/index.html";          //the wandering wraith
            case 19: return "https://js13kgames.com/games/onoff/index.html";                         //onoff
            case 20: return "https://js13kgames.com/games/the-matr13k/index.html";                   //the Matr13k
            case 21: return "https://js13kgames.com/games/glitch-buster/index.html";                 //glitch buster
            case 22: return "https://js13kgames.com/games/vier-wizard-wars/index.html";              //vier
            case 23: return "https://js13kgames.com/games/way-out/index.html";                       //way out

            //puzzle (awesome-jsgames)
            case 24: return "https://js13kgames.com/games/play-back/index.html";                     //playback
            case 25: return "https://js13kgames.com/games/back-attacker/index.html";                 //back attacker
            case 26: return "https://js13kgames.com/games/xx142-b2exe/index.html";                   //xx142-b2
            case 27: return "https://js13kgames.com/games/1024-moves/index.html";                    //1024 moves
            case 28: return "https://js13kgames.com/games/re-wire/index.html";                       //rewire
            case 29: return "https://js13kgames.com/games/envisionator/index.html";                  //envisionator
            case 30: return "https://js13kgames.com/games/planet-figadore-has-gone-offline/index.html";//planet figadore
            case 31: return "https://js13kgames.com/games/enmeshed/index.html";                      //enmeshed
            case 32: return "https://js13kgames.com/games/raven/index.html";                         //raven
            case 33: return "https://js13kgames.com/games/lost-treasure/index.html";                 //lost treasure
            case 34: return "https://4ark.me/2048/";                                                 //2048
            
            //running (awesome-jsgames)
            case 35: return "https://js13kgames.com/games/offline-oect/index.html";                  //offline O.E.C.T

            //shooter (awesome-jsgames)
            case 36: return "https://js13kgames.com/games/swagshot/index.html";                      //swagshot
            case 37: return "https://js13kgames.com/games/the-chroma-incident/index.html";           //the chroma incident
            case 38: return "https://js13kgames.com/games/underrun/index.html";                      //underrun
            case 39: return "https://js13kgames.com/games/backcountry/index.html";                   //backcountry

            //strategy (awesome-jsgames)
            case 40: return "https://js13kgames.com/games/elematter/index.html";                     //elematter
            

            //web components (awesome-jsgames)
            case 41: return "https://zeevkatz.github.io/scroll/";                                    //scroll

            //uncategorized (awesome-jsgames)
            case 42: return "https://js13kgames.com/games/push-back/index.html";                     //pushback
            case 43: return "https://js13kgames.com/games/retrohaunt/index.html";                    //retrohaunt
            case 44: return "https://js13kgames.com/games/spacecraft/index.html";                    //spacecraft
            case 45: return "https://js13kgames.com/games/lost-robot/index.html";                    //lost robot
            case 46: return "https://js13kgames.com/games/exo/index.html";                           //exo
            case 47: return "https://js13kgames.com/games/submersible-warship-2063/index.html";      //submersible warship 2063
            case 48: return "https://js13kgames.com/games/enjoy-the-sunshine-get-offline/index.html";//enjoy the sunshine
            case 49: return "https://js13kgames.com/games/oh-flip/index.html";                       //oh flip
            case 50: return "https://uno.guilherr.me/";                                              //uno
            case 51: return "https://chezsoi.org/lucas/MemoryGame/";                                 //memory game

        }
    }

    //******************************************************************************************************************************** */

    static getGameDescription(numberChoice){
        //switch case for all game names
        switch(numberChoice){

            //adventure games (awesome-jsgames)
            case 1: return '<h1>Triangle: Back to Home</h1><p>Creator: Viktor Uhryn</p><p><a href="https://github.com/vik-13/back-to-home">GitHub link</a></p>';
            case 2: return '<h1>Dwarfs: There and Back Again</h1><p>Creator: mvasilkov</p><p><a href="https://github.com/mvasilkov/dwarfs2019">GitHub link</a></p>';   //dwarfs ther back and again
            case 3: return '<h1>Bounce Back</h1><p>Creator: Frank Force</p><p><a href="https://github.com/KilledByAPixel/BounceBack">GitHub Link</a></p>';                   //bounce back
            case 4: return '<h1>Wander</h1><p>Creator: RAZH</p><p><a href="https://github.com/razh/js13k-2018">GitHub Link</a></p>';                        //wander
            case 5: return '<h1>Offiine Paradise</h1><p>Creator: SIRXEMIC</p><p><a href="https://github.com/sirxemic/js13k-game">GitHub Link</a></p>';              //offline paradise
            case 6: return '<h1>PlanetFall</h1><p>Creator: Cheng Chiao</p><p><a href="https://github.com/chiaogu/planetfall">GitHub Link</a></p>';                    //planetfall
            case 7: return '<h1>Quest of Tod</h1><p>Creator: SAMIRH</p><p><a href="https://github.com/SamirHodzic/js13k18-quest-of-tod">GitHub Link</a></p>';                  //quest of tod

            //arcade games (awesome-jsgames)
            case 8: return  '<h1>Racer</h1><p>Creator: James</p><p><a href="https://github.com/jaammees/racer">GitHub Link</a></p>';                        //racer
            case 9: return  '<h1>Everyone*s Sky</h1><p>Creator: Rémi Vansteelandt</p><p><a href="https://github.com/remvst/everyones-sky">GitHub Link</a></p>';                 //everyone's sky
            case 10: return '<h1>Evil Glitch</h1><p>Creator: AGAR3S</p><p><a href="https://github.com/agar3s/devil-glitches">GitHub Link</a></p>';                   //evil glitch
            case 11: return '<h1>Off The Line</h1><p>Creator: Bryan Perfetto</p><p><a href="https://github.com/regularkid/offtheline">GitHub Link</a></p>';                  //off the line
            case 12: return '<h1>Behind Asteroids — The Dark Side</h1><p>Creator: GREWEB</p><p><a href="https://github.com/gre/behind-asteroids">GitHub Link</a></p>'; //behind asteroids the dark side
            case 13: return '<h1>Pest Control : Weasels</h1><p>Creator: SIORKI</p><p><a href="https://github.com/Siorki/js13kgames/tree/master/2014%20-%20weasels">GitHub Link</a></p>';          //pest control weasels
            case 14: return '<h1>Pizza Undelivery</h1><p>Creator: Nils Gawlik</p><p><a href="https://github.com/nilsgawlik/js13k2919">GitHub Link</a></p>';              //pizza undelivery
            case 15: return '<h1>Jump N Bump</h1><p>Creator: GrahamTheCoder</p><p><a href="https://github.com/ennorehling/jump-n-bump">GitHub Link</a></p>';                         //jump n bump
            
            //education (awesome-jsgames)
            case 16: return '<h1>Pixel Art Academy</h1><p>Creator: Matej Jan</p><p><a href="https://github.com/Retronator/Pixel-Art-Academy">GitHub Link</a></p>';                                             //pixel art academy

            //platfrom (awesome-jsgames)
            case 17: return '<h1>Nano-Wirebot</h1><p>Creator: Mariano Lambir</p><p><a href="https://github.com/mlambir/js13k-2019-back">GitHub Link</a></p>';           //nano-wirebot
            case 18: return '<h1>The Wandering Wraith</h1><p>Creator: Mateusz Tomczyk</p><p><a href="https://github.com/tulustul/The-Wandering-Wraith">GitHub Link</a></p>';          //the wandering wraith
            case 19: return '<h1>OnOff</h1><p>Creator: Bran Dunino</p><p><a href="https://github.com/starzonmyarmz/js13k-2018">GitHub Link</a></p>';                         //onoff
            case 20: return '<h1>The Matr13k</h1><p>Creator: Agar3s - Giovanny Beltrán</p><p><a href="https://github.com/agar3s/js13k2018/">GitHub Link</a></p>';                   //the Matr13k
            case 21: return '<h1>Glitch Buster</h1><p>Creator: Rémi Vansteelandt</p><p><a href="https://github.com/remvst/glitchbuster">GitHub Link</a></p>';                 //glitch buster
            case 22: return '<h1>Vier</h1><p>Creator: Agares</p><p><a href="http://github.com/agar3s/vier">GitHub Link</a></p>';              //vier
            case 23: return '<h1>Way Out</h1><p>Creator: SamirH</p><p><a href="https://github.com/SamirHodzic/js13k19-way-out">GitHub Link</a></p>';                       //way out

            //puzzle (awesome-jsgames)
            case 24: return '<h1>Play Back</h1><p>Creator: MADMAW</p><p><a href="https://github.com/madmaw/playback">GitHub Link</a></p>';                     //playback
            case 25: return '<h1>Back Attacker</h1><p>Creator: Yeon Juan</p><p><a href="https://github.com/yeonjuan/js13k-2019-back">GitHub Link</a></p>';                 //back attacker
            case 26: return '<h1>xx142-B2.exe</h1><p>Creator: Ben & Salvatore</p><p><a href="https://github.com/bencoder/js13k-2019">GitHub Link</a></p>';                   //xx142-b2
            case 27: return '<h1>1024 Moves</h1><p>Creator: Greg Peck</p><p><a href="https://github.com/GregPeck/1024-moves">GitHub Link</a></p>';                    //1024 moves
            case 28: return '<h1>Re-Wire</h1><p>Creator: Jan Mankopf</p><p><a href="https://github.com/JMankopf/js13k-rewire">GitHub Link</a></p>';                       //rewire
            case 29: return '<h1>Envisonator</h1><p>Creator: Donitz</p><p><a href="https://github.com/DennisBengs/envisionator/">GitHub Link</a></p>';                  //envisionator
            case 30: return '<h1>Planet Figadore</h1><p>Creator: PICOSONIC</p><p><a href="https://github.com/picosonic/js13k-2018">GitHub Link</a></p>';//planet figadore
            case 31: return '<h1>Enmeshed</h1><p>Creator: Mark Barr</p><p><a href="https://github.com/mdbarr/enmeshed">GitHub Link</a></p>';                      //enmeshed
            case 32: return '<h1>Raven</h1><p>Creator: Elliot Nelson</p><p><a href="https://github.com/elliot-nelson/js13k-2018-raven">GitHub Link</a></p>';                         //raven
            case 33: return '<h1>Lost Treasure</h1><p>Creator: Samirh</p><p><a href="https://github.com/SamirHodzic/js13k17-lost-treasure">GitHub Link</a></p>';                 //lost treasure
            case 34: return '<h1>2048</h1><p>Creator: 4ark</p><p><a href="https://github.com/gd4Ark/2048">GitHub Link</a></p>';                                                 //2048
            
            //running (awesome-jsgames)
            case 35: return '<h1>Offline: O.E.C.T</h1><p>Creator: Ben Fox</p><p><a href="https://github.com/BenjaminWFox/offline-oect-js13k">GitHub Link</a></p>';                  //offline O.E.C.T

            //shooter (awesome-jsgames)
            case 36: return '<h1>SWAGSHOT</h1><p>Creator: Remi Vansteelandt</p><p><a href="https://github.com/remvst/swagshot">GitHub Link</a></p>';                      //swagshot
            case 37: return '<h1>The Chroma Incident</h1><p>Creator: Ryan Malm</p><p><a href="http://github.com/Rybar/js13k2018/">GitHub Link</a></p>';           //the chroma incident
            case 38: return '<h1>UnderRun</h1><p>Creator: PhobosLab</p><p><a href="https://github.com/phoboslab/underrun">GitHub Link</a></p>';                      //underrun
            case 39: return '<h1>BackCountry</h1><p>Creator: Piesku</p><p><a href="https://github.com/piesku/backcountry">GitHub Link</a></p>';                   //backcountry

            //strategy (awesome-jsgames)
            case 40: return '<h1>Elemater</h1><p>Creator: Jack Rugile</p><p><a href="https://github.com/jackrugile/elematter-js13k">GitHub Link</a></p>';                     //elematter
            

            //web components (awesome-jsgames)
            case 41: return '<h1>Scroll</h1><p>Creator: ZeevKatz</p><p><a href="https://github.com/ZeevKatz/scroll">GitHub Link</a></p>';                                    //scroll

            //uncategorized (awesome-jsgames)
            case 42: return '<h1>Push Back</h1><p>Creator: Lomateron & Erik</p><p><a href="https://github.com/ErikSom/js13k-pushback">GitHub Link</a></p>';                     //pushback
            case 43: return '<h1>RetroHaunt</h1><p>Creator: Donitz</p><p><a href="https://github.com/DennisBengs/retrohaunt">GitHub Link</a></p>';                    //retrohaunt
            case 44: return '<h1>SPACECRAFT</h1><p>Creator: Csaba Csecskedi</p><p><a href="https://github.com/tricsi/spacecraft">GitHub Link</a></p>';                    //spacecraft
            case 45: return '<h1>Lost Robot</h1><p>Creator: Dennis Meckel</p><p><a href="https://github.com/Rayne/js13k-lost-robot">GitHub Link</a></p>';                    //lost robot
            case 46: return '<h1>EXO</h1><p>Creator: Jack Oatley & AI Doge</p><p><a href="https://github.com/scorp200/td13k">GitHub Link</a></p>';                           //exo
            case 47: return '<h1>Submersible Warship 2063</h1><p>Creator: Jerome Lecomte</p><p><a href="https://github.com/herebefrogs/submersible-warship-2063">GitHub Link</a></p>';      //submersible warship 2063
            case 48: return '<h1>Enjoy The Sunshine</h1><p>Creator: EOINMCG</p><p><a href="https://github.com/eoinmcg/enjoythesunshine">GitHub Link</a></p>';//enjoy the sunshine
            case 49: return '<h1>OH, FLIP!</h1><p>Creator: Bryan Perfetto</p><p><a href="https://github.com/regularkid/ohflip">GitHub Link</a></p>';                       //oh flip
            case 50: return '<h1>UNO</h1><p>Creator: Guilher Mebkel</p><p><a href="https://github.com/guilhermebkel/uno-game">GitHub Link</a></p>';                                              //uno
            case 51: return '<h1>Memory Game</h1><p>Creator: Lucas-C</p><p><a href="https://github.com/Lucas-C/MemoryGame.js">GitHub Link</a></p>';                                 //memory game

        }
    }

    //click the button animation
   static clickButton(){
        if (document.getElementById('randomGame').src = 'public/assets/buttonPushed.png'){
            setTimeout(function(){
                document.getElementById('randomGame').src = 'public/assets/buttonNotPushed.png';
            }, 1000);
            
        }
    }

    static getNumberChoice(){
        return numberChoice;
    }
    
    
}//end class


//show on screen
View.getNewGameUrl(); 
View.game();
