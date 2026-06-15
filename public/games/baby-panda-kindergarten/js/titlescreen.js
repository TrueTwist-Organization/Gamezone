export default class titlescreen extends Phaser.Scene { 
   logo;
   musicBtn;
   music;
 isScenePaused = false;

  constructor() {
    super('titlescreen');
  }
    init() {
   
  }

   pauseScene() {
    if (!this.isScenePaused) {
      this.scene.pause();
      this.sound.pauseAll();
      this.isScenePaused = true;
    }
  }
  resumeScene() {
    if (this.isScenePaused) {
      this.scene.resume();
      this.sound.resumeAll();
      this.isScenePaused = false;
    }
  }

  create() {
const gameCanvas = this.game.canvas;

document.body.addEventListener('touchstart', (event) => {
  if (event.target !== gameCanvas) {
    this.pauseScene();
  }
});

gameCanvas.addEventListener('touchstart', () => {
  this.resumeScene();
});

document.body.addEventListener('click', (event) => {
  if (event.target !== gameCanvas) {
    this.pauseScene();
  }
});

gameCanvas.addEventListener('click', () => {
  this.resumeScene();
});

window.addEventListener('blur', () => {
  this.pauseScene();
});

window.addEventListener('focus', () => {
  this.resumeScene();
});

   if (!music) {
    music = this.sound.add('bg_music', {volume: 0,loop: true});
    music.play();
   }
  
  
        this.levelGroup = this.add.container();
    this.title_bg = this.add.sprite(400, 252, "title_bg");
    this.levelGroup.add(this.title_bg);
    
    this.title_text=this.add.image(400,220,'title_text').setOrigin(0.5, 0.5);    
    this.tweens.add({targets: this.title_text,scaleX: 0.95,scaleY: 1.1,duration: 1000 / 2,ease: 'Linear',yoyo: true,repeat: -1,});
    
        this.play_btn=this.add.image(400,435,'play_btn').setOrigin(0.5, 0.5).setScale(0.85);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.95)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerdown',enterRoom,this);

        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',morebtnLink,this);
        
        this.logo =this.add.image(60,32,'logo').setOrigin(0.5, 0.5);
        this.logo.setInteractive({ useHandCursor: true });
        this.logo.on('pointerup',LogoLink,this);

        this.musicBtn = this.add.sprite(750,35,"music-on");
        this.musicBtn.setScale(0.5);
        this.musicBtn.setInteractive({ useHandCursor: true });
        this.musicBtn.on('pointerup',changemusic,this);
    
    if (!this.sound.mute) {
    this.musicBtn.setTexture('music-on');
    } else {
    this.musicBtn.setTexture('music-off');
    }

function changemusic() {
  if (!this.sound.mute) {
    this.musicBtn.setTexture('music-off');
    this.sound.mute = true;
  } else {
    this.musicBtn.setTexture('music-on');
    this.sound.mute = false;
  }
}
      
 function enterRoom (){
var state = 'selection_screen';
        MyShowAD(this, state);

}


function morebtnLink (){
    var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=menu-morebutton&utm_campaign=game-Baby-Panda-Kindergarten';
    var rr = window.open(url, '_blank');
    if (rr && rr.focus){
        rr.focus();
    }else if (!rr){
        window.location.href = url;
    }
}

function LogoLink (){
    var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=menu-logo&utm_campaign=game-Baby-Panda-Kindergarten';
    var rp = window.open(url, '_blank');
    if (rp && rp.focus)
    {
        rp.focus();
    }else if (!rp){
        window.location.href = url;
    }
}
    }

}


function MyShowAD(scene, state) {
    console.error("MyShowAD");
    const currentScene = scene; 
    
    YYGGames.showInterstitial({
        beforeShowAd: () => {
            currentScene.sound.pauseAll(); 
        },
        afterShowAd: () => {
            currentScene.sound.resumeAll(); 
            currentScene.scene.start(state); 
        }
    });
}


YYGGames.init({
    appName: "Baby-Panda-Kindergarten",
    channel:1,
})


let music;
   

