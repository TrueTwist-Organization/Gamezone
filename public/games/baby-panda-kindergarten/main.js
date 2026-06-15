import preloaderscene from './js/preloaderscene.js';
import loader from './js/loader.js';
import titlescreen from './js/titlescreen.js';
import selection_screen from './js/selection_screen.js';
import handwash_intro from './js/handwash_intro.js';
import box_preparing from './js/box_preparing.js';
import car_making from './js/car_making.js';
import car_painting from './js/car_painting.js';
import final_screen from './js/final_screen.js';
import final_screen1 from './js/final_screen1.js';
import hand_washing from './js/hand_washing.js';
import selection_screen2 from './js/selection_screen2.js';
import selection_screen3 from './js/selection_screen3.js';
import mainscreen from './js/mainscreen.js';
import gameover from './js/gameover.js';

const gameContainer = document.getElementById('game-container');

const config = {
    type: Phaser.AUTO,
    parent: gameContainer,
    backgroundColor: '#00547C',
    transparent: true,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        width: 800,
        height: 504,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
    },
    scene: [preloaderscene, loader, titlescreen,selection_screen,handwash_intro,box_preparing,car_making,car_painting,
    final_screen,final_screen1,hand_washing,selection_screen2,selection_screen3 ,mainscreen, gameover],
};

const game = new Phaser.Game(config);