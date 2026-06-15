export default class selection_screen extends Phaser.Scene {
  
   logo;
   musicBtn;
   music;
   shutterOn=[true];
 isScenePaused = false;
  constructor() {
    super('selection_screen');

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
    this.sel_bg = this.add.sprite(798, 252, "sel_bg");
    this.sel_door1_1=this.add.image(250,265,'sel_door1_1').setOrigin(0.5, 0.5);
    this.sel_door2_1=this.add.image(594,263,'sel_door2_1').setOrigin(0.5, 0.5);
    this.sel_door3_1=this.add.image(1314,260,'sel_door3_1ad').setOrigin(0.5, 0.5);
    this.levelGroup.add(this.sel_bg);
    this.levelGroup.add(this.sel_door1_1);
    this.levelGroup.add(this.sel_door2_1);
    this.levelGroup.add(this.sel_door3_1);
    
    this.rabit=this.add.sprite(-150,300,'rabit_speak').setOrigin(0.5, 0.5).setScale(0.7);
    this.anims.create({key: "rabit_speak1",frames: this.anims.generateFrameNames("rabit_speak", {start: 0, end: 4}),
        frameRate: 10,
         repeat:-1, });
    this.maskGraphics = this.add.graphics();
    this.maskGraphics.fillStyle(0xffffff,0);
    this.maskGraphics.fillRect(-149, 145, 500, 500);
    this.mask = this.maskGraphics.createGeometryMask();
    this.rabit.setMask(this.mask);


    this.sel_door1_1.on('pointerdown',function(){
        this.pick.play();
        this.arrow1.setVisible(false);
    this.sel_door1_1.disableInteractive();
    this.sel_door1_1.setTexture('sel_door1_2');
        this.walk_snd.play();

    this.tweens.add({targets:this.rabit,scaleX: 0.53,scaleY:0.53,ease: 'Quadratic',duration:700,delay:300,});
    this.tweens.add({targets:this.rabit,x:450,y:250,ease: 'Quadratic',duration:2000,delay:300,onComplete:() => {
        this.walk_snd.stop();
    this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
        }
            });
    },this);

const soundManager = this.sound;
soundManager.volume = 0.5;
    var self = this;
        this.rabit_intro = this.sound.add('rabit_intro');
        this.pick = this.sound.add('pick');
        this.walk_snd = this.sound.add('walk_snd');

      this.rabit_intro.on('complete', function() {
        self.sel_door1_1.setInteractive({ useHandCursor:true});
        self.arrow1.setVisible(true);
         self.rabit.stop();
            self.rabit.setFrame(0);
      });

         var arrow_Posx = [252];
         var arrow_Posy = [100];
         
         for (var i = 1; i <= 50; i++) {
            this['arrow' + i] = this.add.sprite(arrow_Posx[i - 1], arrow_Posy[i - 1], 'arrow');
            this['arrow' + i].setOrigin(0.5);
            this['arrow' + i].anims.create({key: 'arrow',
                frames: this.anims.generateFrameNumbers('arrow', { start: 0, end: 13 - 1 }),
                frameRate: 25,
                repeat: -1
            });
            this['arrow' + i].anims.play('arrow');
            this['arrow' + i].setVisible(false);

            if (i === 1 ) {
                this['arrow' + i].setVisible(false);
            }           
        }


        this.play_btn=this.add.image(730,435,'btn5').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.95)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerup',enterRoom,this);
        this.play_btn.on('pointerdown',function(){            
            this.anims.remove('rabit_speak1');
            this.anims.remove('arrow');            
                    },this);

        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0.85);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',morebtnLink,this);

        this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
        this.tweens.add({targets:this.levelGroup,x:-796,ease: 'Quadratic',duration:3000,onComplete:() => {
        this.tweens.add({targets:this.levelGroup,x:0,ease: 'Quadratic',duration:3000,delay:300,onComplete:() => {
        this.walk_snd.play();
        this.tweens.add({targets:this.rabit,x:150,ease: 'Quadratic',duration:2000,onComplete:() => {
        this.walk_snd.stop();
        
        this.rabit_intro.play();
        this.rabit.play("rabit_speak1");
        }
            });
        }
            });
        }
            });
        }
            });
        
        this.logo =this.add.image(60,32,'logo').setOrigin(0.5, 0.5);
        this.logo.setInteractive();
        this.logo.on('pointerup',LogoLink,this);

        this.musicBtn = this.add.sprite(750,35,"music-on");
        this.musicBtn.setScale(0.5);
        this.musicBtn.setInteractive();
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
 this.tweens.add({targets:this.shutter_Bg,y:252,ease: 'Quadratic',duration:1500,onComplete:() => {          
       var state = 'handwash_intro';
       MyShowAD(this, state);
        }});
       
     }


   function morebtnLink (){
    var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=game-morebutton&utm_campaign=game-Baby-Panda-Kindergarten';
    var rr = window.open(url, '_blank');
    if (rr && rr.focus){
        rr.focus();
    }else if (!rr){
        window.location.href = url;
    }
}


   function LogoLink (){
    var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=game-logo&utm_campaign=game-Baby-Panda-Kindergarten';
    var rp = window.open(url, '_blank');
    if (rp && rp.focus){
        rp.focus();
    }else if (!rp){
        window.location.href = url;
    }
}
    }
}



function MyShowAD_InterstialAD(scene, state1) {
    console.error("MyShowAD");
    const currentScene1 = scene; 
    
    YYGGames.showInterstitial({
        beforeShowAd: () => {
            currentScene1.sound.pauseAll(); 
        },
        afterShowAd: () => {
            currentScene1.sound.resumeAll(); 
        }
    });
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