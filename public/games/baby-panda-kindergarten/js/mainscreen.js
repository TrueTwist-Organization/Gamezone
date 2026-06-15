export default class mainscreen extends Phaser.Scene {
  
   logo;
   musicBtn;
   music;
   shutterOn=[true];

  constructor() {
    super('mainscreen');

  }
  init() {
   
  }

  create() {
     
        this.t_bg =this.add.image(400,252,'t_bg').setOrigin(0.5,0.5);

    // this.tweens.add({targets:this.playbtn,scaleX:1,scaleY:1,ease: 'Bounce',duration:800});
    // this.tweens.add({targets:this.morebtn,scaleX:1,scaleY:1,ease: 'Bounce',duration:800});



        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(1);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(1.03)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(1)},this);
        this.more_btn.on('pointerup',morebtnLink,this);

        this.play_btn=this.add.image(730,435,'btn2').setOrigin(0.5, 0.5).setScale(1);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(1.03)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(1)},this);
        this.play_btn.on('pointerup',enterRoom,this);

        this.shutter_Bg =this.add.image(400,252,'titlebg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
          
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
       var state = 'finalscreen';
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