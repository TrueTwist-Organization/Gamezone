export default class gameover extends Phaser.Scene {
  logo;
  musicBtn;
  music;
 isScenePaused = false;

  constructor() {
    super('gameover');
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

    this.levelGroup = this.add.container();
    this.title_bg = this.add.sprite(400, 252, "title_bg");
    this.levelGroup.add(this.title_bg);
   
        this.madam = this.add.sprite(220, 180, "final_mam").setOrigin(0.5, 0.5);
        this.madam.setScale(-this.madam.scaleX, this.madam.scaleY);

        this.rabit = this.add.sprite(360, 200, "rabit").setOrigin(0.5, 0.5).setScale(0.3);
        this.panda = this.add.sprite(300, 250, "panda").setOrigin(0.5, 0.5).setScale(0.5);
        this.monkey = this.add.sprite(430, 250, "monkey").setOrigin(0.5, 0.5).setScale(0.5);
        this.rat = this.add.sprite(520, 250, "rat").setOrigin(0.5, 0.5).setScale(0.5);

    this.levelGroup.add(this.madam);
    this.levelGroup.add(this.rabit);
    this.levelGroup.add(this.panda);
    this.levelGroup.add(this.monkey);
    this.levelGroup.add(this.rat);
    // this.levelGroup.setScale(1.3);
    // this.levelGroup.x=-80;


        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0.85);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',this.morebtnLink,this);


        this.play_btn=this.add.image(730,435,'btn1').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.95)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerup',this.enterRoom,this);



        var self = this;
        var randomIndex = Math.floor(Math.random() * 5);
        var gameData = RelatedGames[randomIndex];
        var thumbframeVar = {
            width: 195,
            height: 195,
        };
        var container = self.add.container(252, 700).setScale(0.8);
        var sprite = self.add.sprite(0, 0, 'image' + randomIndex);
        sprite.setOrigin(0.5);
        sprite.setDisplaySize(thumbframeVar.width - 10, thumbframeVar.height - 10);
        sprite.setInteractive({
            useHandCursor: true
        });
        sprite.on('pointerup', this.thumbLink, self);

        // Pass randomIndex as an argument to thumbLink
        sprite.on('pointerup', function () {
            self.thumbLink(randomIndex);
        }, self);

        var frame = self.add.image(0, 0, 'thumbframe');
        frame.setOrigin(0.5);
        frame.setDisplaySize(thumbframeVar.width, thumbframeVar.height);
        container.add([sprite, frame]);
        container.x = 400;
        container.y = 410;


        this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
          this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
            
        }
            });
        
        this.logo =this.add.image(60,32,'logo').setOrigin(0.5, 0.5);
        this.logo.setInteractive({ useHandCursor: true });
        this.logo.on('pointerup',this.LogoLink,this);

        this.musicBtn = this.add.sprite(750,35,"music-on");
        this.musicBtn.setScale(0.5);
        this.musicBtn.setInteractive({ useHandCursor: true });
        this.musicBtn.on('pointerup',this.musicOn,this);
          
 if (!this.sound.mute) {
        this.musicBtn.setTexture('music-on');
        } else {
        this.musicBtn.setTexture('music-off');
        }
    }
musicOn() {
    if (!this.sound.mute) {
    this.musicBtn.setTexture('music-off');
    this.sound.mute = true;
  } else {
    this.musicBtn.setTexture('music-on');
    this.sound.mute = false;
  }
}          
morebtnLink (){
  var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=gameover-morebutton&utm_campaign=game-Baby-Panda-Kindergarten';

    var rr = window.open(url, '_blank');

    if (rr && rr.focus)
    {
        rr.focus();
    }
    else if (!rr)
    {
        window.location.href = url;
    }
}
LogoLink (){
      var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=gameover-logo&utm_campaign=game-Baby-Panda-Kindergarten';

    var rp = window.open(url, '_blank');

    if (rp && rp.focus)
    {
        rp.focus();
    }
    else if (!rp)
    {
        window.location.href = url;
    }
}
enterRoom (){
    this.tweens.add({targets:this.shutter_Bg,y:252,ease: 'Quadratic',duration:1500,onComplete:() => {
       var state = 'titlescreen';
       MyShowAD(this, state);
    }
        });
   }
thumbLink(index) {
    if (index >= 0 && index < RelatedGames.length && RelatedGames[index] && RelatedGames[index]['id']) {
        YYGGames.navigate("gameover", "thumb", RelatedGames[index]['id']);
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