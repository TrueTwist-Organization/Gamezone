var Main = {
   panel_array:[0],
};

export default class car_making extends Phaser.Scene {
  logo;
  musicBtn;
  music;
  tempDragStartPos = {};
  activityCount = 0;
  first_array={car_array:[1,1,1]};
 isScenePaused = false;

  constructor() {
    super("car_making");
  }
  init(data) {
    
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
        this.drag1 = false;

    this.levelGroup = this.add.container();
    this.car_bg = this.add.sprite(400, 252, "car_bg");
    this.levelGroup.add(this.car_bg);


      this.pick = this.sound.add('pick');
      this.walk_snd = this.sound.add('walk_snd');
      this.come_ani = this.sound.add('come_ani');
      this.board_snd = this.sound.add('board_snd');

            
         this.group1_car_box_ani=this.add.image(400,230,'car_box_ani').setOrigin(0.5, 0.5);
         this.group1_car_box_ani.on('pointerdown',function(){
         this.arrow1.visible=false;
         this.group1_car_box_ani.disableInteractive();
         this.bg_group.visible=true;
            this.pick.play();
            this.rab_car2.play();
            this.rab_car2.once('complete', function() {

            this.come_ani.play();
         this.tweens.add({targets:this.rabbit_hand,x:120,ease: 'Quadratic',duration:500,onComplete:() => {}});
         this.tweens.add({targets:this.cut_sissors1,x:180,ease: 'Quadratic',duration:500,onComplete:() => {
         this.cut_sissors1.setInteractive({useHandCursor: true,draggable: true});
            }});

          },this);
          },this);

         this.rabit=this.add.sprite(200,330,'rabit_speak').setOrigin(0.5, 0.5).setScale(0.45);
         this.monkey=this.add.sprite(600,350,'monkey').setOrigin(0.5, 0.5).setScale(0.8);
         this.madam = this.add.sprite(400, 280, "mam_speak").setOrigin(0.5, 0.5).setScale(0.8);

             this.anims.create({key: "rabit_speak_1",frames: this.anims.generateFrameNames("rabit_speak", {start: 0, end: 3,}),
        frameRate: 7,
         repeat:-1, });

                this.anims.create({key: "mam_speak_1",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });
            
                

          this.mam_car1 = this.sound.add('mam_car1');
          this.rab_car1 = this.sound.add('rab_car1');
          this.rab_car2 = this.sound.add('rab_car2');
          this.rab_car3 = this.sound.add('rab_car3');
          this.rab_car4 = this.sound.add('rab_car4');
          
            this.mam_car1.once('complete', function() {
                this.madam.stop();
            this.madam.setFrame(0);
            this.rab_car1.play();
            this.rabit.play("rabit_speak_1");
            this.rab_car1.once('complete', function() {
                this.rabit.stop();
            this.rabit.setFrame(0);
            this.walk_snd.play();
        this.tweens.add({targets:this.rabit,x:-200,ease: 'Quadratic',duration:1500,onComplete:() => {}});
        this.tweens.add({targets:this.madam,x:-200,ease: 'Quadratic',duration:1500,onComplete:() => {}});
         this.tweens.add({targets:this.monkey,x:1000,ease: 'Quadratic',duration:1500,onComplete:() => {
            this.walk_snd.stop();
         this.group1_car_box_ani.setInteractive({ useHandCursor: true });
         this.arrow1.visible=true;
        }
            });

           },this);
           },this);

            //****************************************************************//

            
         this.bg_group = this.add.container();
         this.car_bg1 = this.add.sprite(400, 252, "car_bg1");
         this.bg_group.add(this.car_bg1);

         this.carcut_1 = this.add.sprite(400,300, "car_box_ani",1).setOrigin(0.5, 0.5);
         this.carcut_2 = this.add.sprite(380,344, "car_cut1").setOrigin(0.5, 0.5);
         this.carcut_2.alpha=0;
         this.carcut_3 = this.add.sprite(399,330, "car_cut2").setOrigin(0.5, 0.5);
         this.carcut_3.alpha=0;
         this.carcut_4 = this.add.sprite(393,330, "car_cut3").setOrigin(0.5, 0.5);
         this.carcut_4.alpha=0;
         this.carcut_5 = this.add.sprite(363,344, "car_cut4").setOrigin(0.5, 0.5);
         this.carcut_5.alpha=0;
         this.carcut_6 = this.add.sprite(383,330, "car_cut5").setOrigin(0.5, 0.5);
         this.carcut_6.alpha=0;
         this.carcut_7 = this.add.sprite(380,327, "car_cut6").setOrigin(0.5, 0.5);
         this.carcut_7.alpha=0;
         this.car_wheel = this.add.sprite(384,424, "car_wheel").setOrigin(0.5, 0.5);
         this.car_wheel.alpha=0;
         
         this.bg_group.add(this.carcut_1);
         this.bg_group.add(this.carcut_2);
         this.bg_group.add(this.carcut_3);
         this.bg_group.add(this.carcut_4);
         this.bg_group.add(this.carcut_5);
         this.bg_group.add(this.carcut_6);
         this.bg_group.add(this.carcut_7);
         this.bg_group.add(this.car_wheel);
         this.carcut_1.on("animationcomplete", this.doSomething);
         this.carcut_2.on("animationcomplete", this.doSomething);
         this.carcut_3.on("animationcomplete", this.doSomething);
         this.carcut_4.on("animationcomplete", this.doSomething);
         this.carcut_5.on("animationcomplete", this.doSomething);
         this.carcut_6.on("animationcomplete", this.doSomething);
         this.carcut_7.on("animationcomplete", this.doSomething);

         this.monkey_hand=this.add.image(1000,430,'monkey_hand').setOrigin(0.5, 0.5);
         this.rabbit_hand=this.add.image(-130,430,'rabbit_hand').setOrigin(0.5, 0.5);
         this.rabbit_hand.setScale(-this.rabbit_hand.scaleX, this.rabbit_hand.scaleY);

         this.cut_sissors1=this.add.image(-100,430,'cut_sissors').setOrigin(0.5, 0.5).setScale(0.8);
         // this.cut_sissors1=this.add.image(180,430,'cut_sissors').setOrigin(0.5, 0.5).setScale(0.8);
         // this.cut_sissors1.setInteractive({useHandCursor: true,draggable: true});

         this.cut_sissors2=this.add.image(1080,430,'cut_sissors').setOrigin(0.5, 0.5).setScale(0.8);
         this.cut_sissors3=this.add.image(1080,430,'cut_knife').setOrigin(0.5, 0.5).setScale(0.8);
         this.cut_sissors4=this.add.image(1080,430,'cut_knife').setOrigin(0.5, 0.5).setScale(0.8);
         this.cut_sissors5=this.add.image(1080,430,'cut_knife').setOrigin(0.5, 0.5).setScale(0.8);
         this.cut_sissors6=this.add.image(1080,430,'cut_knife').setOrigin(0.5, 0.5).setScale(0.8);
         this.wheel=this.add.image(1080,430,'wheel').setOrigin(0.5, 0.5).setScale(0.8);
            this.bg_group.add(this.monkey_hand);
            this.bg_group.add(this.rabbit_hand);
            this.bg_group.add(this.cut_sissors1);
            this.bg_group.add(this.cut_sissors2);
            this.bg_group.add(this.cut_sissors3);
            this.bg_group.add(this.cut_sissors4);
            this.bg_group.add(this.cut_sissors5);
            this.bg_group.add(this.cut_sissors6);
            this.bg_group.add(this.wheel);
         this.bg_group.visible=false;

            //****************************************************************//
       
        this.anims.create({key: "car_ani1",frames: this.anims.generateFrameNames("car_box_ani", {start: 1, end: 9,}),frameRate: 6,});
        this.anims.create({key: "car_ani2",frames: this.anims.generateFrameNames("car_box_ani", {start: 9, end: 16,}),frameRate: 6,});
        this.anims.create({key: "car_ani3",frames: this.anims.generateFrameNames("car_cut1", {start: 0, end: 14,}),frameRate: 6,});
        this.anims.create({key: "car_ani4",frames: this.anims.generateFrameNames("car_cut2", {start: 0, end: 14,}),frameRate: 6,});
        this.anims.create({key: "car_ani5",frames: this.anims.generateFrameNames("car_cut3", {start: 0, end: 18,}),frameRate: 6,});
        this.anims.create({key: "car_ani6",frames: this.anims.generateFrameNames("car_cut4", {start: 0, end: 14,}),frameRate: 6,});
        this.anims.create({key: "car_ani7",frames: this.anims.generateFrameNames("car_cut5", {start: 0, end: 14,}),frameRate: 6,});
        this.anims.create({key: "car_ani8",frames: this.anims.generateFrameNames("car_cut6", {start: 1, end: 20,}),frameRate: 6,});

            //****************************************************************//

          this.hitAreaGraphics = this.add.graphics({ fillStyle: { color: 0xff0000, alpha: 0 } });
          this.hitArea = new Phaser.Geom.Rectangle(230, 180, 350, 220); 
          this.hitAreaGraphics.fillRectShape(this.hitArea);

          this.cursorPointerGraphics = this.add.graphics({ fillStyle: { color: 0xff0000, alpha: 0 } });
          this.cursorPointer = new Phaser.Geom.Rectangle(0, 0, 100, 100);
          this.cursorPointerGraphics.fillRectShape(this.cursorPointer); 
            //****************************************************************//

           this.input.on("drag",function(pointer, gameObject, dragX, dragY) {
                gameObject.x = dragX;
                gameObject.y = dragY;
              },this);
            this.input.on("dragstart",function(pointer, gameObject, dragX, dragY) {
           this.children.bringToTop(gameObject);
                this.drag1 = true;
                this.tempDragStartPos = {posX: gameObject.x,posY: gameObject.y};
            this.pick.play();
              },this);
            this.input.on("dragend",function(pointer, gameObject, dragX, dragY) {
                gameObject.x = this.tempDragStartPos.posX;
                gameObject.y = this.tempDragStartPos.posY;
                if (Phaser.Geom.Intersects.RectangleToRectangle(this.hitArea,this.cursorPointer)) {   
          this.tweens.add({targets:this.monkey_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {   }});    

                  if (this.activityCount == 0) {
                    gameObject.x = -500;
                    gameObject.y = -500;
            this.board_snd.play();
                    this.carcut_1.play("car_ani1");
      this.tweens.add({targets:this.rabbit_hand,x:-170,ease: 'Quadratic',duration:500,onComplete:() => { }});

                  }
                  if (this.activityCount == 1) {
                    gameObject.x = -500;
                    gameObject.y = -500;
            this.board_snd.play();
                    this.carcut_1.play("car_ani2");
                  }
                   if (this.activityCount == 2) {
                    gameObject.x = -500;
                    gameObject.y = -500;
            this.board_snd.play();
                    this.carcut_2.play("car_ani3");
                  }
                  if (this.activityCount == 3) {                    
                    gameObject.x = -500;
                    gameObject.y = -500;
            this.board_snd.play();
                    this.carcut_3.play("car_ani4");
                  }
                  if (this.activityCount == 4) {
                    this.carcut_3.alpha=0;
                    this.carcut_4.alpha=1;
                    gameObject.x = -500;
                    gameObject.y = -500;
            this.board_snd.play();
                    this.carcut_4.play("car_ani5");
                  }
                  if (this.activityCount == 5) {
                    gameObject.x = -500;
                    gameObject.y = -500;
            this.board_snd.play();
                    this.carcut_5.play("car_ani6");

                  }
                  if (this.activityCount == 7) {
                    gameObject.x = -500;
                    gameObject.y = -500;
            this.board_snd.play();
                    this.carcut_7.play("car_ani8");
                  }
                  if (this.activityCount == 8) {
                    gameObject.x = -500;
                    gameObject.y = -500;
                    this.car_wheel.alpha=1;
                 this.tweens.add({targets:this.monkey_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
                 this.tweens.add({targets:this.first_group,x:100,ease: 'Quadratic',duration:800,onComplete:() => {       

                  }});
                  }});

                  }
                } else {
                  gameObject.x = this.tempDragStartPos.posX;
                  gameObject.y = this.tempDragStartPos.posY;
                }
                this.drag1 = false;
                this.cursorPointer.x = -500;
                this.cursorPointer.y = -500;
                this.cursorPointerGraphics.clear();

                this.cursorPointerGraphics.fillRectShape(this.cursorPointer);
              },this);

            //****************************************************************//

            this.door_1 = this.add.sprite(446, 350, 'door'+this.first_array.car_array[0]);
            this.door_1.alpha=0;
            this.light_1 = this.add.sprite(375, 383, 'light'+this.first_array.car_array[1]);
            this.light_1.alpha=0;
            this.window_1 = this.add.sprite(416, 303, 'window'+this.first_array.car_array[2]);
            this.window_1.alpha=0;
            //****************************************************************//

         this.final_button_array=[0,0,0];

            this.first_group = this.add.container();
            this.panel = this.add.sprite(700, 252, "panel");

             this.panel_group1 = this.add.container();
             // this.panel_group1.visible=false;
             const pan_door_posX = [700, 700, 700];
             const pan_door_posY = [150, 250, 350];

            for (let i = 1; i <= 3; i++) {
              this['door' + i] = this.add.sprite(pan_door_posX[i - 1], pan_door_posY[i - 1], 'door' + i);
              this['door' + i].setOrigin(0.5).setScale(0.43);
              this['door' + i].id = i;
              this['door' + i].setInteractive({ useHandCursor: true, pixelPerfect: true });
              this['door' + i].on('pointerover', function () { this.setScale(0.48) }, this['door' + i]);
              this['door' + i].on('pointerout', function () { this.setScale(0.43) }, this['door' + i]);
              this['door' + i].on('pointerdown', this.door_function.bind(this, this['door' + i]), this);
              this.panel_group1.add(this['door' + i]);
            }

            this.panel_group2 = this.add.container();
             this.panel_group2.visible=false;
             const pan_light_posX = [700, 700, 700];
             const pan_light_posY = [350, 250, 150];

            for (let i = 1; i <= 3; i++) {
              this['panel_light' + i] = this.add.sprite(pan_light_posX[i - 1], pan_light_posY[i - 1], 'panel_light' + i);
              this['panel_light' + i].setOrigin(0.5);
              this['panel_light' + i].id = i;
              this['panel_light' + i].setInteractive({ useHandCursor: true, pixelPerfect: true });
              this['panel_light' + i].on('pointerover', function () { this.setScale(1.05) }, this['panel_light' + i]);
              this['panel_light' + i].on('pointerout', function () { this.setScale(1) }, this['panel_light' + i]);
              this['panel_light' + i].on('pointerdown', this.light_function.bind(this, this['panel_light' + i]), this);
              this.panel_group2.add(this['panel_light' + i]);
            }

            this.panel_group3 = this.add.container();
             this.panel_group3.visible=false;
             const pan_window_posX = [710, 710, 710];
             const pan_window_posY = [150, 250, 350];

            for (let i = 1; i <= 3; i++) {
              this['panel_window' + i] = this.add.sprite(pan_window_posX[i - 1], pan_window_posY[i - 1], 'd_window' + i);
              this['panel_window' + i].setOrigin(0.5).setScale(0.7);
              this['panel_window' + i].id = i;
              this['panel_window' + i].setInteractive({ useHandCursor: true, pixelPerfect: true });
              this['panel_window' + i].on('pointerover', function () { this.setScale(0.75) }, this['panel_window' + i]);
              this['panel_window' + i].on('pointerout', function () { this.setScale(0.7) }, this['panel_window' + i]);
              this['panel_window' + i].on('pointerdown', this.window_function.bind(this, this['panel_window' + i]), this);
              this.panel_group3.add(this['panel_window' + i]);
            }

            this.first_group.add(this.panel);
            this.first_group.add(this.panel_group1);
            this.first_group.add(this.panel_group2);
            this.first_group.add(this.panel_group3);
            this.first_group.setScale(0.85);
            // this.first_group.x=100;
            this.first_group.y=60;
            this.first_group.x=350;

            this.nxt = this.add.sprite(700, 470, 'nxt');
            this.nxt.setOrigin(0.5).setScale(0.5);
            this.nxt.setInteractive({ useHandCursor: true, pixelPerfect: true });
            this.nxt.id = 1;
            this.nxt.on('pointerdown', this.panel_function.bind(this, this.nxt), this);
            this.first_group.add(this.nxt);

            this.prr = this.add.sprite(700, 70, 'prr');
            this.prr.setOrigin(0.5).setScale(0.45);
            this.prr.visible = false;
            this.prr.setInteractive({ useHandCursor: true, pixelPerfect: true });
            this.prr.id = 2;
            this.prr.on('pointerdown', this.panel_function.bind(this, this.prr), this);

            
            //****************************************************************//
         

            const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = createLockedItem(this, 700, 350, 'door3ad',  () => {
                this.door3.setInteractive({ useHandCursor: true ,pixelPerfect:true});
            });
            lock_r1.setScale(0.43);
            this.panel_group1.add(lock_r1);
            
            
            const { lockedItem: lock_r2, adfaildbtn: adfaildbtn_r2, addismisbtn: addismisbtn_r2 } = createLockedItem(this, 710, 350, 'd_window3ad',  () => {
                this.panel_window3.setInteractive({ useHandCursor: true ,pixelPerfect:true});
            });
            lock_r2.setScale(0.7);
            this.panel_group3.add(lock_r2);

            const { lockedItem: lock_r3, adfaildbtn: adfaildbtn_r3, addismisbtn: addismisbtn_r3 } = createLockedItem(this, 700, 350, 'panel_light1ad',  () => {
                this.panel_light1.setInteractive({ useHandCursor: true ,pixelPerfect:true});
            });
            this.panel_group2.add(lock_r3);

       
            //****************************************************************//

             var arrow_Posx = [406,178,408,630,408,630,408,630,408,630,408,630,408,630,408,];
             var arrow_Posy = [120,320,180,330,180,330,180,330,180,330,180,330,180,330,180,];
            
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

            //****************************************************************//


        this.play_btn=this.add.image(570,435,'btn5').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.95)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerup',this.enterRoom,this);
        this.play_btn.on('pointerdown',function(){
            this.anims.remove("rabit_speak_1");
this.anims.remove("mam_speak_1");
this.anims.remove("car_ani1");
this.anims.remove("car_ani2");
this.anims.remove("car_ani3");
this.anims.remove("car_ani4");
this.anims.remove("car_ani5");
this.anims.remove("car_ani6");
this.anims.remove("car_ani7");
this.anims.remove("car_ani8");
this.anims.remove("arrow");
        },this);
        
        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',this.morebtnLink,this);

         this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
            this.mam_car1.play();
               this.madam.play("mam_speak_1");
            
         
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

door_function(pointer) {
            this.pick.play();
  this.door_1.setTexture('door' + pointer.id);
  this.door_1.alpha=1;
  this.first_array.car_array[0]= pointer.id;
  this.final_button_array[0]=1;
    if(this.final_button_array.indexOf(0)<(0)){
        
        this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
        this.tweens.add({targets:this.more_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});    
    }    
}

light_function(pointer) {
            this.pick.play();
  this.light_1.setTexture('light' + pointer.id);
  this.light_1.alpha=1;
  this.first_array.car_array[1]= pointer.id;
  this.final_button_array[1]=1;
    if(this.final_button_array.indexOf(0)<(0)){
        this.anims.remove("rabit_speak_1");
this.anims.remove("mam_speak_1");
this.anims.remove("car_ani1");
this.anims.remove("car_ani2");
this.anims.remove("car_ani3");
this.anims.remove("car_ani4");
this.anims.remove("car_ani5");
this.anims.remove("car_ani6");
this.anims.remove("car_ani7");
this.anims.remove("car_ani8");
this.anims.remove("arrow");
        this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
        this.tweens.add({targets:this.more_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});    
    }    
}

window_function(pointer) {
            this.pick.play();
  this.window_1.setTexture('window' + pointer.id);
  this.window_1.alpha=1;
  this.first_array.car_array[2]= pointer.id;
  this.final_button_array[2]=1;
    if(this.final_button_array.indexOf(0)<(0)){
        this.anims.remove("rabit_speak_1");
this.anims.remove("mam_speak_1");
this.anims.remove("car_ani1");
this.anims.remove("car_ani2");
this.anims.remove("car_ani3");
this.anims.remove("car_ani4");
this.anims.remove("car_ani5");
this.anims.remove("car_ani6");
this.anims.remove("car_ani7");
this.anims.remove("car_ani8");
this.anims.remove("arrow");
        this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
        this.tweens.add({targets:this.more_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});    
    }    
}

panel_function(pointer) {
    if (pointer.id == 1) {
        Main.panel_array[0]++;
        this['panel_group' + Main.panel_array[0]].visible=false;
        this['panel_group' + (Main.panel_array[0] + 1)].visible=true;
    } 
    if (pointer.id == 2) {
        Main.panel_array[0]--;
        this['panel_group' + (Main.panel_array[0] + 2)].visible=false;
        this['panel_group' + (Main.panel_array[0] + 1)].visible=true;
    }

    if (Main.panel_array[0] == 0) {
        this.prr.visible=true;
    }
     if (Main.panel_array[0] == 1) {
        this.prr.visible=true;
    } 
     if (Main.panel_array[0] == 2) {
        this.nxt.visible=false;
        this.prr.visible=true;
    } 
    if (Main.panel_array[0]==0) {
             this.prr.visible = false;
             this.nxt.visible = true;
           }
}

doSomething = () => {
    if (this.activityCount == 0) {           

            this.come_ani.play();
            this.board_snd.stop();
      this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
    this.tweens.add({targets:this.cut_sissors2,x:630,ease: 'Quadratic',duration:500,onComplete:() => {
       this.cut_sissors2.setInteractive({useHandCursor: true,draggable: true});
       
        }});
  

    }

    if (this.activityCount == 1) {
         this.carcut_1.alpha=0;
         this.carcut_2.alpha=1;
            this.board_snd.stop();
          this.rab_car3.play();
            this.rab_car3.once('complete', function() { 
            this.come_ani.play();
      this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
      this.tweens.add({targets:this.cut_sissors3,x:630,ease: 'Quadratic',duration:500,onComplete:() => {
       this.cut_sissors3.setInteractive({useHandCursor: true,draggable: true});
       
        }});
  },this);
    }

    if (this.activityCount == 2) {         
         this.carcut_2.alpha=0;
         this.carcut_3.alpha=1;
            // this.board_snd.stop();
         this.carcut_3.play("car_ani4");
            // this.come_ani.play();
          this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,delay:1900,onComplete:() => {}});
          this.tweens.add({targets:this.cut_sissors4,x:630,ease: 'Quadratic',duration:500,delay:1900,onComplete:() => {
          this.cut_sissors4.setInteractive({useHandCursor: true,draggable: true});
            
            }});
    }

    if (this.activityCount == 3) {
            this.come_ani.play();
           
        }

        if (this.activityCount == 4) {   
          this.carcut_4.alpha=0;
          this.carcut_5.alpha=1;
            this.board_snd.stop();
            this.come_ani.play();
          this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
          this.tweens.add({targets:this.cut_sissors5,x:630,ease: 'Quadratic',duration:500,onComplete:() => {
          this.cut_sissors5.setInteractive({useHandCursor: true,draggable: true});

            
            }});
        }

        if (this.activityCount == 5) {   
          this.carcut_5.alpha=0;
            // this.board_snd.stop();
          this.carcut_6.alpha=1;
          this.carcut_6.play("car_ani7");
            // this.come_ani.play();
          this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,delay:1900,onComplete:() => {}});
          this.tweens.add({targets:this.cut_sissors6,x:630,ease: 'Quadratic',duration:500,delay:1900,onComplete:() => {
          this.cut_sissors6.setInteractive({useHandCursor: true,draggable: true});

            
            }});
        }

        if (this.activityCount == 6) {
          this.carcut_6.alpha=0;
          this.carcut_7.alpha=1;
            this.board_snd.stop();
            this.come_ani.play();
        }
        
         if (this.activityCount == 7) {
            this.rab_car4.play();
            this.board_snd.stop();
            this.rab_car4.once('complete', function() {

            this.come_ani.play();
          this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:500,onComplete:() => {}});
          this.tweens.add({targets:this.wheel,x:630,ease: 'Quadratic',duration:500,onComplete:() => {
          this.wheel.setInteractive({useHandCursor: true,draggable: true});
            
            
            }});
            },this);
        }

        if (this.activityCount == 8) {
          this.tweens.add({targets:this.monkey_hand,x:1080,ease: 'Quadratic',duration:500,onComplete:() => {       
          // this.tweens.add({targets:this.monkey_hand,x:680,ease: 'Quadratic',duration:800,onComplete:() => {}});
          // this.tweens.add({targets:this.wheel,x:630,ease: 'Quadratic',duration:800,onComplete:() => {
          // this.wheel.setInteractive({useHandCursor: true,draggable: true});

          //   }});
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
      this.tempDragStartPos = {};
      this.activityCount = 0;
      Main.panel_array=[0];
    this.tweens.add({targets:this.shutter_Bg,y:252,ease: 'Quadratic',duration:1500,onComplete:() => {
      var state = 'car_painting';
       MyShowAD(this, state);
      // this.scene.start("car_painting",{moveObj:this.first_array});
        }
         });
   }
   
  
update() {
  // console.log(this.input.x + ':' + this.input.y);

    if (this.drag1) {
      //console.log(this.cursorPointer.id)
      this.cursorPointer.x = this.game.input.activePointer.x-50;
      this.cursorPointer.y = this.game.input.activePointer.y-50;
      this.cursorPointerGraphics.clear();

      this.cursorPointerGraphics.fillRectShape(this.cursorPointer);
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


function MyShowAD(scene, state) {
    console.error("MyShowAD");
    const currentScene = scene; 
    
    YYGGames.showInterstitial({
        beforeShowAd: () => {
            currentScene.sound.pauseAll(); 
        },
        afterShowAd: () => {
            currentScene.sound.resumeAll(); 
            currentScene.scene.start(state,{moveObj:currentScene.first_array}); 
        }
    });
}


YYGGames.init({
    appName: "Baby-Panda-Kindergarden",
    channel:1,
})


let music;