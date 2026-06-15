export default class selection_screen3 extends Phaser.Scene {
  logo;
  musicBtn;
  music;
 isScenePaused = false;

  constructor() {
    super("selection_screen3");
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
    
const soundManager = this.sound;
soundManager.volume = 0.5;
    
            this.levelGroup = this.add.container();
            this.sel_bg = this.add.sprite(798, 252, "sel_bg");
            this.sel_door1_1=this.add.image(250,265,'sel_door1_1').setOrigin(0.5, 0.5);
            this.sel_door2_1=this.add.image(594,263,'sel_door2_1').setOrigin(0.5, 0.5);
            this.sel_door3_1=this.add.image(1314,260,'sel_door3_1').setOrigin(0.5, 0.5);
                this.sel_door3_1.setInteractive({ useHandCursor: true });
            this.levelGroup.add(this.sel_bg);
            this.levelGroup.add(this.sel_door1_1);
            this.levelGroup.add(this.sel_door2_1);
            this.levelGroup.add(this.sel_door3_1);
            this.levelGroup.x=-796;
      this.pick = this.sound.add('pick');

      this.walk_snd = this.sound.add('walk_snd');

           
            this.monkey=this.add.image(-150,390,'panda').setOrigin(0.5, 0.5).setScale(0.7);
            this.maskGraphics = this.add.graphics();
            this.maskGraphics.fillStyle(0xffffff,0);
            this.maskGraphics.fillRect(-85, 145, 700, 500);
            this.mask = this.maskGraphics.createGeometryMask();
            this.monkey.setMask(this.mask);


            this.sel_door3_1.on('pointerdown',function(){
            this.pick.play();
            this.arrow1.setVisible(false);
            this.sel_door3_1.disableInteractive();
            this.sel_door3_1.setTexture('sel_door3_2');
            this.tweens.add({targets:this.monkey,scaleX: 0.7,scaleY:0.7,ease: 'Quadratic',duration:700,delay:300,});
            this.walk_snd.play();
            this.tweens.add({targets:this.monkey,x:800,y:230,ease: 'Quadratic',duration:2000,delay:300,onComplete:() => {
            this.walk_snd.stop();
            this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,
                    });
                }
                    });
            },this);


           var arrow_Posx = [526];
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

        ///////////////////////////////////////////////////////////////////

      
        const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = createLockedItem(this, 1316,260, 'sel_door3_1ad',  () => {
                this.sel_door3_1.setInteractive({ useHandCursor: true ,pixelPerfect:true});
            });
            this.levelGroup.add(lock_r1);


        ///////////////////////////////////////////////////////////////////

        this.play_btn=this.add.image(730,435,'btn5').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.95)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerup',enterRoom,this);
        this.play_btn.on('pointerdown',function(){
            this.anims.remove('arrow');            
                    },this);

        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0.85);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',morebtnLink,this);

        this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
            this.walk_snd.play();
        this.tweens.add({targets:this.monkey,x:350,ease: 'Quadratic',duration:2000,onComplete:() => {
            this.walk_snd.stop();
        // this.sel_door3_1.setInteractive({ useHandCursor:true});
        this.arrow1.setVisible(true);        
       
        }
            });
        }
            });



        this.logo =this.add.image(60,32,'logo').setOrigin(0.5, 0.5);
        this.logo.setInteractive({ useHandCursor: true });
        this.logo.on('pointerup',LogoLink,this);

        this.musicBtn = this.add.sprite(750,35,"music-on");
        this.musicBtn.setScale(0.5);
        this.musicBtn.setInteractive({ useHandCursor: true });
        this.musicBtn.on('pointerup',musicOn,this);
         
     
         if (!this.sound.mute) {
        this.musicBtn.setTexture('music-on');
        } else {
        this.musicBtn.setTexture('music-off');
        }
 

 function createLockedItem(scene, x, y, imageKey, unlockCallback) {
    const lockedItem = scene.add.image(x, y, imageKey).setOrigin(0.5, 0.5);
    lockedItem.setInteractive({ useHandCursor: true });

    const adfaildbtn = createButton(scene, 400, 252, 'adfaildbtn', () => {
        adfaildbtn.visible = false;
        lockedItem.visible = true;
    });

    const addismisbtn = createButton(scene, 400, 252, 'addismisbtn', () => {
        addismisbtn.visible = false;
        lockedItem.visible = true;
    });

    lockedItem.on('pointerdown', function () {
        const canShowReward = YYGGames.canShowReward();
        console.log(YYGGames.canShowReward());
        switch (canShowReward) {
            case true:
                YYGGames.showReward({
                    beforeShowAd: () => {
                        scene.sound.pauseAll();
                        console.log("music pause");
                    },
                    afterShowAd: () => {
                        scene.sound.resumeAll();
                        console.log("music resume");
                    },
                    rewardComplete: () => {
                        console.log("rewarded");
                        lockedItem.disableInteractive();
                        lockedItem.visible = false;
                         unlockCallback();
                    },
                    rewardDismissed: () => {
                        console.log("reward dismissed");
                        addismisbtn.visible = true;
                        lockedItem.visible = false;
                    }
                });
                break;
            case false:
                console.log("add fail btn");
                adfaildbtn.visible = true;
                lockedItem.visible = false;
                break;
        }
    });

    return {
        lockedItem,
        adfaildbtn, 
        addismisbtn
    };
}

function createButton(scene, x, y, imageKey, callback) {
    const button = scene.add.image(x, y, imageKey).setOrigin(0.5, 0.5).setDepth(1);
    button.visible = false;
    button.setInteractive({ useHandCursor: true, pixelPerfectClick: true });

    if (typeof callback === 'function') {
        button.on('pointerdown', callback, scene);
    }

    return button;
}


function morebtnLink (){
  var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=game-morebutton&utm_campaign=game-Baby-Panda-Kindergarten';

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
function LogoLink (){
      var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=game-logo&utm_campaign=game-Baby-Panda-Kindergarten';

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
function enterRoom (){
    this.tweens.add({targets:this.shutter_Bg,y:252,ease: 'Quadratic',duration:1500,onComplete:() => {
       var state = 'final_screen';
       MyShowAD(this, state);
    }
        });
   }
  
function musicOn() {
    if (!this.sound.mute) {
    this.musicBtn.setTexture('music-off');
    this.sound.mute = true;
  } else {
    this.musicBtn.setTexture('music-on');
    this.sound.mute = false;
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