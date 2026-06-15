export default class handwash_intro extends Phaser.Scene {
  
   logo;
   musicBtn;
   music;
   shutterOn=[true];
 isScenePaused = false;

  constructor() {
    super('handwash_intro');

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
    this.handwash_bg = this.add.sprite(400, 252, "handwash_bg");
    this.levelGroup.add(this.handwash_bg);
      
const soundManager = this.sound;
soundManager.volume = 0.5;
       this.madam = this.add.sprite(1000, 250, "mam_speak").setOrigin(0.5, 0.5).setScale(0.8);
       this.cap_rabit = this.add.sprite(-200, 330, "cap_rabit_speak").setOrigin(0.5, 0.5).setScale(0.45);
       this.cap_monkey = this.add.sprite(-450, 345, "cap_monkey_speak").setOrigin(0.5, 0.5).setScale(0.75);
       
               // this.cap_rabit.play("cap_rabit_speak1");
               // this.cap_monkey.play("cap_monkey_speak1");
       this.walk_snd = this.sound.add('walk_snd');

       var self = this;
       var mam_voice1 = this.sound.add('mam_voice1');
        mam_voice1.once('complete', function() {
            self.madam.stop();
            self.madam.setFrame(0);
            
        self.tweens.add({targets:self.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});       

        });
        
        var rabit_goodmor = this.sound.add('rabit_goodmor');
        rabit_goodmor.once('complete', function() {
        mam_voice1.play();
        self.cap_rabit.stop();
            self.cap_rabit.setFrame(0);

            self.cap_monkey.stop();
            self.cap_monkey.setFrame(0);

               self.madam.play("mam_speak1");
        });
        

        this.anims.create({key: "mam_speak1",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5}),
        frameRate: 5,
         repeat:-1, });

        this.anims.create({key: "cap_rabit_speak1",frames: this.anims.generateFrameNames("cap_rabit_speak", {start: 0, end: 4}),
        frameRate: 5,
         repeat:-1, });

        this.anims.create({key: "cap_monkey_speak1",frames: this.anims.generateFrameNames("cap_monkey_speak", {start: 0, end: 4}),
        frameRate: 5,
         repeat:-1, });

        this.play_btn=this.add.image(730,435,'btn5').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.95)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerup',enterRoom,this);
          this.play_btn.on('pointerdown',function(){            
            this.anims.remove('mam_speak1');
            this.anims.remove('cap_rabit_speak1');
            this.anims.remove('cap_monkey_speak1');
                    },this);
            
        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0.85);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',morebtnLink,this);

         this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
            this.walk_snd.play();
        this.tweens.add({targets:this.madam,x:650,ease: 'Quadratic',duration:2000,onComplete:() => {
            this.walk_snd.play();
        this.tweens.add({targets:this.cap_rabit,x:420,ease: 'Quadratic',duration:2300,});
        this.tweens.add({targets:this.cap_monkey,x:250,ease: 'Quadratic',duration:2300,onComplete:() => {
            this.walk_snd.stop();
        rabit_goodmor.play();
                this.cap_rabit.play("cap_rabit_speak1");
               this.cap_monkey.play("cap_monkey_speak1");
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
       var state = 'box_preparing';
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