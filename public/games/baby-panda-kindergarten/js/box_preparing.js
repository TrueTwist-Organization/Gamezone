  let asset;
  let shakeCount = 0;
  let shaking = false;
  
  let asset2;
  let shakeCount2 = 0;
  let shaking2 = false;

  let asset3;
  let shakeCount3 = 0;
  let shaking3 = false;

  let asset4;
  let shakeCount4 = 0;
  let shaking4 = false;

  let asset5;
  let shakeCount5 = 0;
  let shaking5 = false;

  let asset6;
  let shakeCount6 = 0;
  let shaking6 = false;

export default class box_preparing extends Phaser.Scene {
  logo;
  musicBtn;
  music;

  tempDragStartPos = {};
  activityCount = 0;
 isScenePaused = false;

  

  constructor() {
    super("box_preparing");
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
    
    this.drag1 = false;

const soundManager = this.sound;
soundManager.volume = 0.5;
    this.levelGroup = this.add.container();
    this.handwash_bg = this.add.sprite(400, 252, "handwash_bg");
    this.levelGroup.add(this.handwash_bg);

       this.cap_wolf = this.add.sprite(-250, 345, "cap_rat_speak").setOrigin(0.5, 0.5).setScale(0.75);
       this.cap_rabit = this.add.sprite(-250, 345, "cap_rabit_speak").setOrigin(0.5, 0.5).setScale(0.5);
       this.cap_panda = this.add.sprite(-250, 345, "cap_panda_speak").setOrigin(0.5, 0.5).setScale(0.75);
        
        this.anims.create({key: "cap_rat_speak1",frames: this.anims.generateFrameNames("cap_rat_speak", {start: 0, end: 3,}),
        frameRate: 10,
         repeat:-1, });
        this.anims.create({key: "cap_rabit_speak1",frames: this.anims.generateFrameNames("cap_rabit_speak", {start: 0, end: 4,}),
        frameRate: 10,
         repeat:-1, });
        this.anims.create({key: "cap_panda_speak1",frames: this.anims.generateFrameNames("cap_panda_speak", {start: 0, end: 3,}),
        frameRate: 10,
         repeat:-1, });

          this.anims.create({key: "cap_rat_speak2",frames: this.anims.generateFrameNames("cap_rat_speak", {start: 0, end: 3,}),
        frameRate: 10,
         repeat:-1, });
        this.anims.create({key: "cap_rabit_speak2",frames: this.anims.generateFrameNames("cap_rabit_speak", {start: 0, end: 4,}),
        frameRate: 10,
         repeat:-1, });
        this.anims.create({key: "cap_panda_speak2",frames: this.anims.generateFrameNames("cap_panda_speak", {start: 0, end: 3,}),
        frameRate: 10,
         repeat:-1, });

       this.box_back = this.add.sprite(568, 242, "box_back").setOrigin(0.5, 0.5);
       this.box_back_close1 = this.add.sprite(581, 201, "box_back_close1").setOrigin(0.5, 0.5);
       this.box_back_close2 = this.add.sprite(704, 328, "box_back_close2").setOrigin(0.5, 0.5);
       this.box_back_close2.setVisible(false);
       this.box_back_close3 = this.add.sprite(451, 198, "box_back_close3").setOrigin(0.5, 0.5);
       this.box_back_close3.setVisible(false);

       //\\\\\\\\\\\\\\\\\////////////////////////////////////////////////////////////////

      asset = this.add.sprite(704, 328, 'box_back_close2');
      asset.setInteractive({useHandCursor:true});
      asset.on('pointerdown', startShaking, this);
        
      asset2 = this.add.sprite(451, 198, "box_back_close3");
      asset2.setInteractive({useHandCursor:true});
      asset2.on('pointerdown', startShaking2, this);

      asset3 = this.add.sprite(704, 198, "box_back_close4");
      asset3.setInteractive({useHandCursor:true});
      asset3.on('pointerdown', startShaking3, this);

      asset4 = this.add.sprite(451, 328, "box_back_close5");
      asset4.setInteractive({useHandCursor:true});
      asset4.on('pointerdown', startShaking4, this);

      asset5 = this.add.sprite(581, 328, "box_back_close6");
      asset5.setInteractive({useHandCursor:true});
      asset5.on('pointerdown', startShaking5, this);

      asset6 = this.add.sprite(581, 201, "box_back_close1");
      asset6.setInteractive({useHandCursor:true});
      asset6.setVisible(false);
      asset6.on('pointerdown', startShaking6, this);


       //\\\\\\\\\\\\\\\\\////////////////////////////////////////////////////////////////


      this.rat_box1 = this.sound.add('rat_box1');
      this.come_ani = this.sound.add('come_ani');
      this.pick = this.sound.add('pick');
      this.box_drop = this.sound.add('box_drop');
      this.walk_snd = this.sound.add('walk_snd');
      this.wrong_snd = this.sound.add('wrong_snd');

      

       //\\\\\\\\\\\\\\\\\////////////////////////////////////////////////////////////////


       this.box_back_close1.on('pointerdown',function(){
      this.rat_box2 = this.sound.add('rat_box2');
        this.rat_box2.play();
        this.arrow1.setVisible(false);
       this.box_back_close1.disableInteractive();
             asset.disableInteractive();
      asset2.disableInteractive();
      asset3.disableInteractive();
      asset4.disableInteractive();
      asset5.disableInteractive();
      asset6.disableInteractive();
       this.box_back_close1.setTexture('box_back_open');
       this.cap_wolf.play("cap_rat_speak2");
       this.cap_panda.play("cap_panda_speak2");
     this.tweens.add({targets: this.hand_Box_Group1,alpha: 1,duration: 800,ease: 'Quadratic',onComplete:() => {
            this.cap_panda.stop();
            this.cap_panda.setFrame(0);
            this.cap_wolf.stop();
            this.cap_wolf.setFrame(0);
        this.tweens.add({targets:this.wolf_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
        this.tweens.add({targets:this.wolf_things1,x:620,ease: 'Quadratic',duration:500,onComplete:() => { 
      this.wolf_things1.setInteractive({useHandCursor: true,draggable: true});
          this.arrow4.setVisible(true);     
        
    }});
    }});
        },this);




       this.box_back_close2.on('pointerdown',function(){
      this.rabit_box2 = this.sound.add('rabit_box2');
        this.rabit_box2.play();
        // this.arrow2.setVisible(false);
       this.box_back_close2.disableInteractive();
             asset.disableInteractive();
      asset2.disableInteractive();
      asset3.disableInteractive();
      asset4.disableInteractive();
      asset5.disableInteractive();
      asset6.disableInteractive();
       this.box_back_close2.setTexture('box_back_open');
       this.cap_rabit.play("cap_rabit_speak1");
     this.tweens.add({targets: this.hand_Box_Group2,alpha: 1,duration: 800,ease: 'Quadratic',onComplete:() => {        
            this.cap_rabit.stop();
            this.cap_rabit.setFrame(0);
       asset.setVisible(true);
       this.box_back_close2.setVisible(false);
        this.tweens.add({targets:this.rabbit_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
        this.tweens.add({targets:this.rabbit_things1,x:610,ease: 'Quadratic',duration:500,onComplete:() => { 
      this.rabbit_things1.setInteractive({useHandCursor: true,draggable: true});
          this.arrow4.setVisible(true);
      
    
    }});
    }});
        },this);

        this.box_back_close3.on('pointerdown',function(){
      this.panda_box2 = this.sound.add('panda_box2');
        this.panda_box2.play();
        // this.arrow3.setVisible(false);
       this.box_back_close3.disableInteractive();
             asset.disableInteractive();
      asset2.disableInteractive();
      asset3.disableInteractive();
      asset4.disableInteractive();
      asset5.disableInteractive();
      asset6.disableInteractive();
       this.box_back_close3.setTexture('box_back_open');
     this.tweens.add({targets: this.hand_Box_Group3,alpha: 1,duration: 800,ease: 'Quadratic',onComplete:() => {
        this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
        this.tweens.add({targets:this.monkey_things1,x:640,ease: 'Quadratic',duration:500,onComplete:() => { 
      this.monkey_things1.setInteractive({useHandCursor: true,draggable: true});
          this.arrow4.setVisible(true);
        
    }});
    }});
        },this);

       //\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////

      this.hand_Box_Group1 = this.add.container();
      this.hand_Box_Group2 = this.add.container();
      this.hand_Box_Group3 = this.add.container();
      this.hand_Box_Group2.alpha=0;
      this.hand_Box_Group3.alpha=0;
      this.wolf_hand = this.add.sprite(1080,430, "wolf_hand").setOrigin(0.5, 0.5);
      this.rabbit_hand = this.add.sprite(1080,430, "rabbit_hand").setOrigin(0.5, 0.5);
      this.monkey_hand = this.add.sprite(1080,430, "bear_hand").setOrigin(0.5, 0.5);
       
      this.wolf_things1 = this.add.sprite(1080,430, "wolf_things1").setOrigin(0.5, 0.5).setScale(0.6);
      this.wolf_things1.rotation=0.8;
      this.wolf_things2 = this.add.sprite(1080,430, "wolf_things2").setOrigin(0.5, 0.5).setScale(0.6);
      this.wolf_things3 = this.add.sprite(1080,430, "wolf_things3").setOrigin(0.5, 0.5).setScale(0.6);
      this.wolf_things4 = this.add.sprite(1080,430, "wolf_things4").setOrigin(0.5, 0.5).setScale(0.6);

      this.rabbit_things1 = this.add.sprite(1080,430, "rabbit_things1").setOrigin(0.5, 0.5).setScale(0.7);
      this.rabbit_things2 = this.add.sprite(1080,430, "rabbit_things2").setOrigin(0.5, 0.5).setScale(0.6);
      this.rabbit_things3 = this.add.sprite(1080,430, "rabbit_things3").setOrigin(0.5, 0.5).setScale(0.6);
      this.rabbit_things4 = this.add.sprite(1080,430, "rabbit_things4").setOrigin(0.5, 0.5).setScale(0.6);

      this.monkey_things1 = this.add.sprite(1080,430, "monkey_things1").setOrigin(0.5, 0.5).setScale(0.6);
      this.monkey_things2 = this.add.sprite(1080,430, "monkey_things2").setOrigin(0.5, 0.5).setScale(0.6);
      this.monkey_things3 = this.add.sprite(1080,430, "monkey_things3").setOrigin(0.5, 0.5).setScale(0.7);
      this.monkey_things4 = this.add.sprite(1080,430, "monkey_things4").setOrigin(0.5, 0.5).setScale(0.6);
      this.monkey_things4.rotation=0.8;

    
       //\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////
    
    this.hitAreaGraphics = this.add.graphics({fillStyle: {color: 0xff0000,alpha: 0},});
    this.hitArea = new Phaser.Geom.Circle(350, 220, 150);
    this.hitAreaGraphics.fillCircleShape(this.hitArea);

    this.cursorPointerGraphics = this.add.graphics({fillStyle: {color: 0xff0000,alpha: 0},});
    this.cursorPointer = new Phaser.Geom.Circle(200, 300, 50);
    this.cursorPointerGraphics.fillCircleShape(this.cursorPointer);

       //\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////

     this.input.on("drag",function(pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      },
      this
    );
    this.input.on("dragstart",function(pointer, gameObject, dragX, dragY) {
      this.children.bringToTop(gameObject);
          this.arrow4.setVisible(false);
        this.drag1 = true;
        this.tempDragStartPos = {posX: gameObject.x,posY: gameObject.y};
      this.pick.play();
      },
      this
    );
    this.input.on("dragend",function(pointer, gameObject, dragX, dragY) {
        gameObject.x = this.tempDragStartPos.posX;
        gameObject.y = this.tempDragStartPos.posY;
        if (Phaser.Geom.Intersects.CircleToCircle(this.hitArea,this.cursorPointer)) {
        
         if((this.input.x>350 && this.input.x<630 && this.input.y>230 && this.input.y<443)){ 
            if (this.activityCount == 0) {
              this.wolf_things1.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni.play("pick-flour-1");
               }        
          }

         if((this.input.x>50 && this.input.x<290 && this.input.y>130 && this.input.y<395)){ 
          if (this.activityCount == 1) {
              this.wolf_things2.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni.play("pick-flour-2");
          }
          }

         if((this.input.x>450 && this.input.x<620 && this.input.y>50 && this.input.y<290)){ 
          if (this.activityCount == 2) {
              this.wolf_things3.setVisible(false);
           gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni.play("pick-flour-3");
          }
        }

         if((this.input.x>250 && this.input.x<510 && this.input.y>100 && this.input.y<360)){ 
          if (this.activityCount == 3) {
              this.wolf_things4.setVisible(false);
          gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni.play("pick-flour-4");
          }
        }


         if((this.input.x>430 && this.input.x<630 && this.input.y>50 && this.input.y<320)){ 
          if (this.activityCount == 4) {
              this.rabbit_things1.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni1.play("pick-flour-11");
          }
        }


         if((this.input.x>400 && this.input.x<600 && this.input.y>220 && this.input.y<420)){ 
          if (this.activityCount == 5) {
              this.rabbit_things2.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni1.play("pick-flour-12");
          }
          }


         if((this.input.x>50 && this.input.x<295 && this.input.y>130 && this.input.y<390)){ 
          if (this.activityCount == 6) {
              this.rabbit_things3.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni1.play("pick-flour-13");
          }
        }


         if((this.input.x>250 && this.input.x<490 && this.input.y>100 && this.input.y<360)){ 
          if (this.activityCount == 7) {
              this.rabbit_things4.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni1.play("pick-flour-14");
          }
        }


         if((this.input.x>240 && this.input.x<520 && this.input.y>100 && this.input.y<360)){ 
          if (this.activityCount == 8) {
              this.monkey_things1.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni2.play("pick-flour-21");
          } 
        }


         if((this.input.x>50 && this.input.x<300 && this.input.y>100 && this.input.y<380)){ 
          if (this.activityCount == 9) {
              this.monkey_things2.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni2.play("pick-flour-22");
          }
           }

         if((this.input.x>450 && this.input.x<620 && this.input.y>80 && this.input.y<300)){ 
          if (this.activityCount == 10) {
              this.monkey_things3.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni2.play("pick-flour-23");
          }
          }


         if((this.input.x>380 && this.input.x<620 && this.input.y>250 && this.input.y<400)){ 
          if (this.activityCount == 11) {
              this.monkey_things4.setVisible(false);
            gameObject.x = -500;
            gameObject.y = -500;
      this.box_drop.play();
            this.flourAni2.play("pick-flour-24");
          }
          }

        } else {
          this.arrow4.setVisible(true);
          gameObject.x = this.tempDragStartPos.posX;
          gameObject.y = this.tempDragStartPos.posY;
        }
        this.drag1 = false;
        this.cursorPointer.x = -500;
        this.cursorPointer.y = -500;
        this.cursorPointerGraphics.clear();

        this.cursorPointerGraphics.fillCircleShape(this.cursorPointer);
      },this);      

       //\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////

    this.wolf_back_box_ani = this.add.sprite(400 ,252, "wolf_back_box_ani").setOrigin(0.5, 0.5);
    this.hand_Box_Group1.add(this.wolf_back_box_ani);
    this.hand_Box_Group1.add(this.wolf_hand);
    this.hand_Box_Group1.add(this.wolf_things1);
    this.hand_Box_Group1.add(this.wolf_things2);
    this.hand_Box_Group1.add(this.wolf_things3);
    this.hand_Box_Group1.add(this.wolf_things4);
    this.hand_Box_Group1.alpha=0;
    this.wolf_back_box_ani.on("animationcomplete", this.doSomething);

    this.rabbit_back_box = this.add.sprite(400 ,252, "rabbit_back_box").setOrigin(0.5, 0.5);
    this.hand_Box_Group2.add(this.rabbit_back_box);
    this.hand_Box_Group2.add(this.rabbit_hand);
    this.hand_Box_Group2.add(this.rabbit_things1);
    this.hand_Box_Group2.add(this.rabbit_things2);
    this.hand_Box_Group2.add(this.rabbit_things3);
    this.hand_Box_Group2.add(this.rabbit_things4);
    this.rabbit_back_box.on("animationcomplete", this.doSomething);

    this.monkey_back_box = this.add.sprite(400 ,252, "monkey_back_box").setOrigin(0.5, 0.5);
    this.hand_Box_Group3.add(this.monkey_back_box);
    this.hand_Box_Group3.add(this.monkey_hand);
    this.hand_Box_Group3.add(this.monkey_things1);
    this.hand_Box_Group3.add(this.monkey_things2);
    this.hand_Box_Group3.add(this.monkey_things3);
    this.hand_Box_Group3.add(this.monkey_things4);
    this.monkey_back_box.on("animationcomplete", this.doSomething);

       //\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////

      this.flourAni = this.add.sprite(400,252, "wolf_back_box_ani").setOrigin(0.5, 0.5);
      this.flourAni.alpha=0;
      this.hand_Box_Group1.add(this.flourAni);

      this.flourAni1 = this.add.sprite(400,252, "rabbit_back_box").setOrigin(0.5, 0.5);
      this.flourAni1.alpha=0;
      this.hand_Box_Group2.add(this.flourAni1);

      this.flourAni2 = this.add.sprite(400,252, "rabbit_back_box").setOrigin(0.5, 0.5);
      this.flourAni2.alpha=0;
      this.hand_Box_Group3.add(this.flourAni2);

       //\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////

    this.anims.create({key: "pick-flour-1",frames: this.anims.generateFrameNames("wolf_back_box_ani", {start: 0, end: 1,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-2",frames: this.anims.generateFrameNames("wolf_back_box_ani", {start: 1,end: 2,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-3",frames: this.anims.generateFrameNames("wolf_back_box_ani", {start: 2,end: 3,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-4",frames: this.anims.generateFrameNames("wolf_back_box_ani", {start: 3,end: 4,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-11",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 0, end: 1,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-12",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 1,end: 2,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-13",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 2,end: 3,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-14",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 3,end: 4,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-21",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 0, end: 1,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-22",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 1,end: 2,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-23",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 2,end: 3,}),frameRate: 25,});
    this.anims.create({key: "pick-flour-24",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 3,end: 4,}),frameRate: 25,});
    
       this.flourAni.on(Phaser.Animations.Events.ANIMATION_UPDATE,function(anim, frame, sprite, frameKey) {
        if (frameKey == 1) {
          this.wolf_back_box_ani.play("fill-cooker-1");          
        }
        
        if (frameKey == 2) {
          this.wolf_back_box_ani.play("fill-cooker-2");
        }

        if (frameKey == 3) {
          this.wolf_back_box_ani.play("fill-cooker-3");
        }
        if (frameKey == 4) {
          this.wolf_back_box_ani.play("fill-cooker-4");
        }

      },
      this);

       this.flourAni1.on(Phaser.Animations.Events.ANIMATION_UPDATE,function(anim, frame, sprite, frameKey) {
        if (frameKey == 1) {
          this.rabbit_back_box.play("fill-cooker-11");          
        }
        
        if (frameKey == 2) {
          this.rabbit_back_box.play("fill-cooker-12");
        }

        if (frameKey == 3) {
          this.rabbit_back_box.play("fill-cooker-13");
        }
        if (frameKey == 4) {
          this.rabbit_back_box.play("fill-cooker-14");
        }

      },
      this);

       this.flourAni2.on(Phaser.Animations.Events.ANIMATION_UPDATE,function(anim, frame, sprite, frameKey) {
        if (frameKey == 1) {
          this.monkey_back_box.play("fill-cooker-21");          
        }
        
        if (frameKey == 2) {
          this.monkey_back_box.play("fill-cooker-22");
        }

        if (frameKey == 3) {
          this.monkey_back_box.play("fill-cooker-23");
        }
        if (frameKey == 4) {
          this.monkey_back_box.play("fill-cooker-24");
        }

      },
      this);

       //\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////

    this.anims.create({key: "fill-cooker-1",frames: this.anims.generateFrameNames("wolf_back_box_ani", {start: 0,end: 1}),frameRate: 25,});
    this.anims.create({key: "fill-cooker-2",frames: this.anims.generateFrameNames("wolf_back_box_ani", {start: 1,end: 2}),frameRate: 25,});
    this.anims.create({key: "fill-cooker-3",frames: this.anims.generateFrameNames("wolf_back_box_ani", {start: 2,end: 3}),frameRate: 25,});
    this.anims.create({key: "fill-cooker-4",frames: this.anims.generateFrameNames("wolf_back_box_ani", {start: 3,end: 4}),frameRate: 25,});

    this.anims.create({key: "fill-cooker-11",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 0,end: 1}),frameRate: 25,});
    this.anims.create({key: "fill-cooker-12",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 1,end: 2}),frameRate: 25,});
    this.anims.create({key: "fill-cooker-13",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 2,end: 3}),frameRate: 25,});
    this.anims.create({key: "fill-cooker-14",frames: this.anims.generateFrameNames("rabbit_back_box", {start: 3,end: 4}),frameRate: 25,});
    
    this.anims.create({key: "fill-cooker-21",frames: this.anims.generateFrameNames("monkey_back_box", {start: 0,end: 1}),frameRate: 25,});
    this.anims.create({key: "fill-cooker-22",frames: this.anims.generateFrameNames("monkey_back_box", {start: 1,end: 2}),frameRate: 25,});
    this.anims.create({key: "fill-cooker-23",frames: this.anims.generateFrameNames("monkey_back_box", {start: 2,end: 3}),frameRate: 25,});
    this.anims.create({key: "fill-cooker-24",frames: this.anims.generateFrameNames("monkey_back_box", {start: 3,end: 4}),frameRate: 25,});
       
       //\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////
     var arrow_Posx = [581, 704, 451, 560];
     var arrow_Posy = [150, 278, 148,420];

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

        if (i === 1) {
            this['arrow' + i].setVisible(false);
        }
        if (i === 4) {
            this['arrow' + i].setVisible(false);
            this['arrow' + i].rotation=-1.5;
        }
    }
       //\\\\\\\\\\\\\\\\\/////////////////////////////////////////////////////////////////

        this.play_btn=this.add.image(730,435,'btn5').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.95)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerup',this.enterRoom,this);
        this.play_btn.on('pointerdown',function(){
this.anims.remove("cap_rat_speak1");
this.anims.remove("cap_rabit_speak1");
this.anims.remove("cap_panda_speak1");
this.anims.remove("cap_rat_speak2");
this.anims.remove("cap_rabit_speak2");
this.anims.remove("cap_panda_speak2");
this.anims.remove("pick-flour-1");
this.anims.remove("pick-flour-2");
this.anims.remove("pick-flour-3");
this.anims.remove("pick-flour-4");
this.anims.remove("pick-flour-11");
this.anims.remove("pick-flour-12");
this.anims.remove("pick-flour-13");
this.anims.remove("pick-flour-14");
this.anims.remove("pick-flour-21");
this.anims.remove("pick-flour-22");
this.anims.remove("pick-flour-23");
this.anims.remove("pick-flour-24");
this.anims.remove("fill-cooker-1");
this.anims.remove("fill-cooker-2");
this.anims.remove("fill-cooker-3");
this.anims.remove("fill-cooker-4");
this.anims.remove("fill-cooker-11");
this.anims.remove("fill-cooker-12");
this.anims.remove("fill-cooker-13");
this.anims.remove("fill-cooker-14");
this.anims.remove("fill-cooker-21");
this.anims.remove("fill-cooker-22");
this.anims.remove("fill-cooker-23");
this.anims.remove("fill-cooker-24");
this.anims.remove("arrow");
        },this);

        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0.85);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',this.morebtnLink,this);

        this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
     this.walk_snd.play();
        this.tweens.add({targets: this.cap_wolf,x: 250,duration: 2000,ease: 'Quadratic',onComplete:() => {
     this.walk_snd.stop();
        this.cap_wolf.play("cap_rat_speak1");
        this.rat_box1.play();
        this.rat_box1.once('complete', function() {
            this.cap_wolf.stop();
            this.cap_wolf.setFrame(0);
            },this); 
            this.time.delayedCall(1500, () => this.box_back_close1.setInteractive({ useHandCursor: true }), [], this);
            this.time.delayedCall(1500, () => this.arrow1.setVisible(true), [], this);

          }});
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
 doSomething = () => {
    if (this.activityCount == 0) {
      this.tweens.add({targets:this.wolf_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
      this.come_ani.play();
      this.tweens.add({targets:this.wolf_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.wolf_things2,x:630,ease: 'Quadratic',duration:500,onComplete:() => {
       this.wolf_things2.setInteractive({useHandCursor: true,draggable: true});        
          this.arrow4.setVisible(true);
        }});
        }});

    }

    if (this.activityCount == 1) {
       this.tweens.add({targets:this.wolf_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
      this.come_ani.play();
      this.tweens.add({targets:this.wolf_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.wolf_things3,x:630,ease: 'Quadratic',duration:500,onComplete:() => {
       this.wolf_things3.setInteractive({useHandCursor: true,draggable: true});        
          this.arrow4.setVisible(true);
        }});
        }});
    }

    if (this.activityCount == 2) {
       this.tweens.add({targets:this.wolf_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
      this.come_ani.play();
      this.tweens.add({targets:this.wolf_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.wolf_things4,x:650,ease: 'Quadratic',duration:500,onComplete:() => {
       this.wolf_things4.setInteractive({useHandCursor: true,draggable: true});        
          this.arrow4.setVisible(true);
        }});
        }});
    }

    if (this.activityCount == 3) {
     this.tweens.add({targets:this.wolf_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => { 
     this.tweens.add({targets: this.hand_Box_Group1,alpha: 0,duration: 800,ease: 'Quadratic',onComplete:() => {
       this.box_back_close1.setTexture('box_back_close1');
            
     this.walk_snd.play();
     this.tweens.add({targets: this.cap_wolf,x: -250,duration: 800,ease: 'Quadratic',onComplete:() => {
     this.walk_snd.play();
     this.tweens.add({targets: this.cap_rabit,x: 250,duration: 800,ease: 'Quadratic',onComplete:() => {
     this.walk_snd.stop();
       this.box_back_close1.setVisible(false);
       asset.setVisible(false);
       asset6.setVisible(true);
             asset.setInteractive({useHandCursor:true});
      asset2.setInteractive({useHandCursor:true});
      asset3.setInteractive({useHandCursor:true});
      asset4.setInteractive({useHandCursor:true});
      asset5.setInteractive({useHandCursor:true});
      asset6.setInteractive({useHandCursor:true});
          this.box_back_close2.setVisible(true);
      this.rabit_box1 = this.sound.add('rabit_box1');
        this.rabit_box1.play();

        this.rabit_box1.once('complete', function() {
            this.cap_rabit.stop();
            this.cap_rabit.setFrame(0);
},this); 
            this.cap_rabit.play("cap_rabit_speak2");
            
            this.time.delayedCall(1500, () => this.box_back_close2.setInteractive({ useHandCursor: true }), [], this);
            // this.time.delayedCall(1500, () => this.arrow2.setVisible(true), [], this);

    }});
    }});
    }});
    }});
    }
    if (this.activityCount == 4) {
     this.tweens.add({targets:this.rabbit_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
      this.come_ani.play();
      this.tweens.add({targets:this.rabbit_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.rabbit_things2,x:620,ease: 'Quadratic',duration:500,onComplete:() => {
       this.rabbit_things2.setInteractive({useHandCursor: true,draggable: true});        
          this.arrow4.setVisible(true);
        }});
        }});
    }

    if (this.activityCount == 5) {
     this.tweens.add({targets:this.rabbit_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
      this.come_ani.play();
      this.tweens.add({targets:this.rabbit_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.rabbit_things3,x:620,ease: 'Quadratic',duration:500,onComplete:() => {
       this.rabbit_things3.setInteractive({useHandCursor: true,draggable: true});        
          this.arrow4.setVisible(true);
        }});
        }});
    }

    if (this.activityCount == 6) {
     this.tweens.add({targets:this.rabbit_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
      this.come_ani.play();
      this.tweens.add({targets:this.rabbit_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.rabbit_things4,x:640,ease: 'Quadratic',duration:500,onComplete:() => {
       this.rabbit_things4.setInteractive({useHandCursor: true,draggable: true});        
          this.arrow4.setVisible(true);
        }});
        }});
    }

    if (this.activityCount == 7) {
     this.tweens.add({targets:this.rabbit_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => { 
     this.tweens.add({targets: this.hand_Box_Group2,alpha: 0,duration: 800,ease: 'Quadratic',onComplete:() => {
       this.box_back_close2.setTexture('box_back_close2');
       
     this.walk_snd.play();
     this.tweens.add({targets: this.cap_rabit,x: -250,duration: 800,ease: 'Quadratic',onComplete:() => {
     this.walk_snd.play();
     this.tweens.add({targets: this.cap_panda,x: 250,duration: 800,ease: 'Quadratic',onComplete:() => {
     this.walk_snd.stop();
            asset.setInteractive({useHandCursor:true});
      asset2.setInteractive({useHandCursor:true});
      asset3.setInteractive({useHandCursor:true});
      asset4.setInteractive({useHandCursor:true});
      asset5.setInteractive({useHandCursor:true});
      asset6.setInteractive({useHandCursor:true});
       asset2.setVisible(false);
          this.box_back_close3.setVisible(true);
      this.panda_box1 = this.sound.add('panda_box1');
        this.panda_box1.play();   
         this.panda_box1.once('complete', function() {
            this.cap_panda.stop();
            this.cap_panda.setFrame(0);
           },this); 
             this.cap_panda.play("cap_panda_speak1");

           this.time.delayedCall(1500, () => this.box_back_close3.setInteractive({ useHandCursor: true }), [], this);
            // this.time.delayedCall(1500, () => this.arrow3.setVisible(true), [], this);
   
      

    }});
    }});
    }});
    }});
    }

     if (this.activityCount == 8) {
      this.tweens.add({targets:this.monkey_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
      this.come_ani.play();
      this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.monkey_things2,x:640,ease: 'Quadratic',duration:500,onComplete:() => {
       this.monkey_things2.setInteractive({useHandCursor: true,draggable: true});        
          this.arrow4.setVisible(true);
        }});
        }});
    }

     if (this.activityCount == 9) {
      this.tweens.add({targets:this.monkey_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
      this.come_ani.play();
      this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.monkey_things3,x:620,ease: 'Quadratic',duration:500,onComplete:() => {
       this.monkey_things3.setInteractive({useHandCursor: true,draggable: true});        
          this.arrow4.setVisible(true);
        }});
        }});
    }

     if (this.activityCount == 10) {
      this.tweens.add({targets:this.monkey_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
      this.come_ani.play();
      this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.monkey_things4,x:620,ease: 'Quadratic',duration:500,onComplete:() => {
       this.monkey_things4.setInteractive({useHandCursor: true,draggable: true});        
          this.arrow4.setVisible(true);
        }});
        }});
    }

     if (this.activityCount == 11) {
     this.tweens.add({targets:this.monkey_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => { 
     this.tweens.add({targets: this.hand_Box_Group3,alpha: 0,duration: 800,ease: 'Quadratic',onComplete:() => {
       asset2.setVisible(true);
       this.box_back_close3.setTexture('box_back_close3');
       
        this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});       
     
    }});
    }});
    }

    this.activityCount++;
  };
morebtnLink (){
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
LogoLink (){
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
enterRoom (){
    this.tweens.add({targets:this.shutter_Bg,y:252,ease: 'Quadratic',duration:1500,onComplete:() => {
      this.tempDragStartPos = {};
      this.activityCount = 0;
      var state = 'hand_washing';
       MyShowAD(this, state);
    }
        });
   }
  update() {
  // console.log(this.input.x + ':' + this.input.y);
    if (this.drag1) {
      //console.log(this.cursorPointer.id)
      this.cursorPointer.x = this.game.input.activePointer.x;
      this.cursorPointer.y = this.game.input.activePointer.y;
      this.cursorPointerGraphics.clear();

      this.cursorPointerGraphics.fillCircleShape(this.cursorPointer);
    }
  } 
}

function startShaking() {
     this.wrong_snd.play();
  if (!shaking) {
    shaking = true;
    shakeAsset(asset);
  }
}

function shakeAsset(asset) {
  if (shakeCount < 5) {
    asset.x += 5;
    shakeCount++;

    if (shakeCount % 2 === 0) {
      asset.x -= 10;
    }

    // Delay and continue shaking
    setTimeout(() => {
      shakeAsset(asset);
    }, 50);
  } else {
    // Reset values after shaking is done
    shaking = false;
    shakeCount = 0;
    asset.x = 704;
  }
}


function startShaking2() {
     this.wrong_snd.play();
  if (!shaking2) {
    shaking2 = true;
    shakeAsset2(asset2);
  }
}

function shakeAsset2(asset2) {
  if (shakeCount2 < 5) {
    asset2.x += 5;
    shakeCount2++;

    if (shakeCount2 % 2 === 0) {
      asset2.x -= 10;
    }

    // Delay and continue shaking2
    setTimeout(() => {
      shakeAsset2(asset2);
    }, 50);
  } else {
    // Reset values after shaking2 is done
    shaking2 = false;
    shakeCount2 = 0;
    asset2.x = 451;
  }
}

function startShaking3() {
     this.wrong_snd.play();
  if (!shaking3) {
    shaking3 = true;
    shakeAsset3(asset3);
  }
}

function shakeAsset3(asset3) {
  if (shakeCount3 < 5) {
    asset3.x += 5;
    shakeCount3++;

    if (shakeCount3 % 2 === 0) {
      asset3.x -= 10;
    }

    // Delay and continue shaking3
    setTimeout(() => {
      shakeAsset3(asset3);
    }, 50);
  } else {
    // Reset values after shaking3 is done
    shaking3 = false;
    shakeCount3 = 0;
    asset3.x = 704;
  }
}


function startShaking4() {
     this.wrong_snd.play();
  if (!shaking4) {
    shaking4 = true;
    shakeAsset4(asset4);
  }
}

function shakeAsset4(asset4) {
  if (shakeCount4 < 5) {
    asset4.x += 5;
    shakeCount4++;

    if (shakeCount4 % 2 === 0) {
      asset4.x -= 10;
    }

    // Delay and continue shaking4
    setTimeout(() => {
      shakeAsset4(asset4);
    }, 50);
  } else {
    // Reset values after shaking4 is done
    shaking4 = false;
    shakeCount4 = 0;
    asset4.x = 451;
  }
}


function startShaking5() {
     this.wrong_snd.play();
  if (!shaking5) {
    shaking5 = true;
    shakeAsset5(asset5);
  }
}

function shakeAsset5(asset5) {
  if (shakeCount5 < 5) {
    asset5.x += 5;
    shakeCount5++;

    if (shakeCount5 % 2 === 0) {
      asset5.x -= 10;
    }

    // Delay and continue shaking5
    setTimeout(() => {
      shakeAsset5(asset5);
    }, 50);
  } else {
    // Reset values after shaking5 is done
    shaking5 = false;
    shakeCount5 = 0;
    asset5.x = 581;
  }
}


function startShaking6() {
     this.wrong_snd.play();
  if (!shaking6) {
    shaking6 = true;
    shakeAsset6(asset6);
  }
}

function shakeAsset6(asset6) {
  if (shakeCount6 < 5) {
    asset6.x += 5;
    shakeCount6++;

    if (shakeCount6 % 2 === 0) {
      asset6.x -= 10;
    }

    // Delay and continue shaking6
    setTimeout(() => {
      shakeAsset6(asset6);
    }, 50);
  } else {
    // Reset values after shaking6 is done
    shaking6 = false;
    shakeCount6 = 0;
    asset6.x = 581;
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
    appName: "Baby-Panda-Kindergarden",
    channel:1,
})

let music;