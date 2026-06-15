var Main = {
         tool_1X:[524,558,557,525,522,539,553,586,591,564,545,541,556,566,585,596,575,595,
    598,604,596,559,574,595,538,302,275,248,219,206,201,206,211,224,236,246,
    244,228,250,258,267,286,286,250,228,223,283,272,224,225,565,522,304,],
        tool_1Y:[283,271,282,262,237,234,244,240,207,208,211,190,179,151,137,151,170,184,184,
    220,226,227,189,174,156,272,271,265,252,230,201,176,139,133,131,153,176,199,
    207,220,221,227,247,238,225,208,207,179,147,155,253,209,234,],

        tool_2X:[524,558,557,525,522,539,553,586,591,564,545,541,556,566,585,596,575,595,
    598,604,596,559,574,595,538,302,275,248,219,206,201,206,211,224,236,246,
    244,228,250,258,267,286,286,250,228,223,283,272,224,225,565,522,304,],
        tool_2Y:[283,271,282,262,237,234,244,240,207,208,211,190,179,151,137,151,170,184,184,
    220,226,227,189,174,156,272,271,265,252,230,201,176,139,133,131,153,176,199,
    207,220,221,227,247,238,225,208,207,179,147,155,253,209,234,],

        tool_3X:[524,558,557,525,522,539,553,586,591,564,545,541,556,566,585,596,575,595,
    598,604,596,559,574,595,538,302,275,248,219,206,201,206,211,224,236,246,
    244,228,250,258,267,286,286,250,228,223,283,272,224,225,565,522,304,],
        tool_3Y:[283,271,282,262,237,234,244,240,207,208,211,190,179,151,137,151,170,184,184,
    220,226,227,189,174,156,272,271,265,252,230,201,176,139,133,131,153,176,199,
    207,220,221,227,247,238,225,208,207,179,147,155,253,209,234,],


};
export default class hand_washing extends Phaser.Scene {
  logo;
  musicBtn;
  music;
 isScenePaused = false;
  constructor() {
    super("hand_washing");
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
            this.nailcutter_drag=false;
            this.tep_gun_drag1=false;
            this.tep_gun_drag2=false;
            this.glass_drag=false;
            this.soap_drag=false;
            this.towel_drag=false;
            this.towel_drag1=false;

       this.levelGroup = this.add.container();
       this.handwash_bg = this.add.sprite(400, 252, "handwash_bg");
       this.levelGroup.add(this.handwash_bg);
       
       this.madam = this.add.sprite(1000, 250, "mam_speak").setOrigin(0.5, 0.5).setScale(0.8);
    this.anims.create({key: "mam_speak1",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });
    this.anims.create({key: "mam_speak2",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });
this.anims.create({key: "mam_speak3",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });
this.anims.create({key: "mam_speak4",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });
this.anims.create({key: "mam_speak5",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });
this.anims.create({key: "mam_speak6",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });
this.anims.create({key: "mam_speak7",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });
this.anims.create({key: "mam_speak8",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });
this.anims.create({key: "mam_speak9",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
        frameRate: 7,
         repeat:-1, });

       this.rabit = this.add.sprite(-200, 320, "rabit").setOrigin(0.5, 0.5).setScale(0.54);

       this.sick_cat = this.add.sprite(-450, 345, "sick_cat").setOrigin(0.5, 0.5).setScale(0.75);
       // this.sick_cat = this.add.sprite(400, 345, "sick_cat").setOrigin(0.5, 0.5).setScale(0.75);

       this.bandaid = this.add.sprite(420, 290, "bandaid").setOrigin(0.5, 0.5).setScale(0.75);
       this.bandaid.setVisible(false); 

       this.glass_water_ani = this.add.sprite(445, 375, "glass_water_ani").setOrigin(0.5, 0.5).setScale(0.75);
       this.glass_water_ani.setVisible(false);

       this.cat_father = this.add.sprite(-250, 305, "cat_father_speak").setOrigin(0.5, 0.5);
           this.anims.create({key: "cat_father_speak1",frames: this.anims.generateFrameNames("cat_father_speak", {start: 0, end: 4,}),
        frameRate: 7,
         repeat:-1, });
          this.cat_father = this.add.sprite(-250, 305, "cat_father_speak").setOrigin(0.5, 0.5);
           this.anims.create({key: "cat_father_speak2",frames: this.anims.generateFrameNames("cat_father_speak", {start: 0, end: 4,}),
        frameRate: 7,
         repeat:-1, });
           
            //***********************************.................*****************************//
            
             var self = this; 

      this.mam_show_hands1 = this.sound.add('mam_show_hands1');
      this.mam_wash_hands1 = this.sound.add('mam_wash_hands1');
      this.mamp_tep1 = this.sound.add('mamp_tep1');
      this.mamp_tep2 = this.sound.add('mamp_tep2');
      this.mamp_tep3 = this.sound.add('mamp_tep3');
      this.mamp_tep4 = this.sound.add('mamp_tep4');
      this.mamp_tep5 = this.sound.add('mamp_tep5');
      this.mamp_tep6 = this.sound.add('mamp_tep6');
      this.mamp_tep7 = this.sound.add('mamp_tep7');
      this.mamp_tep8 = this.sound.add('mamp_tep8');
      this.mamp_tep9 = this.sound.add('mamp_tep9');
      this.nail_ct = this.sound.add('nail_ct');
      this.wash_snd = this.sound.add('wash_snd');
      this.come_ani = this.sound.add('come_ani');
      this.water_mc = this.sound.add('water_mc');
      this.pick = this.sound.add('pick');
      this.sick_snd = this.sound.add('sick_snd');
      this.wash_dish_snd = this.sound.add('wash_dish_snd');
      this.walk_snd = this.sound.add('walk_snd');
      

            //***********************************.................*****************************//
          this.rabit.on('pointerdown',function(){
          this.arrow10.setVisible(false);
          this.rabit.disableInteractive();
            this.come_ani.play();
          this.tweens.add({targets:this.hand_Group1,alpha:1,ease: 'Quadratic',duration:800,onComplete:() => {
            this.come_ani.play();
          this.tweens.add({targets:this.nail_cutter,x:658,ease: 'Quadratic',duration:500,onComplete:() => {
          this.nail_cutter.setInteractive({ useHandCursor:true});
          this.arrow1.setVisible(true);
            
            }});
            }});
          },this);
            //****************************************************************//
         this.hand_Group1 = this.add.container();
         this.hand_Group1.alpha=0;
         this.wash_hand_panel = this.add.sprite(409, 217, "wash_hand_panel").setOrigin(0.5, 0.5);
         this.nail1 = this.add.sprite(535.5,232.2, "nail1").setOrigin(0.5, 0.5);
         this.nail2 = this.add.sprite(535.5,232.2, "nail2").setOrigin(0.5, 0.5);
         this.nail3 = this.add.sprite(535.5,232.2, "nail3").setOrigin(0.5, 0.5);
         this.nail4 = this.add.sprite(535.5,232.2, "nail4").setOrigin(0.5, 0.5);
         this.nail5 = this.add.sprite(282,233.2, "nail5").setOrigin(0.5, 0.5);
         this.nail6 = this.add.sprite(282,233.2, "nail6").setOrigin(0.5, 0.5);
         this.nail7 = this.add.sprite(282,233.2, "nail7").setOrigin(0.5, 0.5);
         this.nail8 = this.add.sprite(282,233.2, "nail8").setOrigin(0.5, 0.5);
         this.wash_hand = this.add.sprite(409, 163, "wash_hand").setOrigin(0.5, 0.5);
         this.hand_Group1.add(this.wash_hand_panel);
         this.hand_Group1.add(this.nail1);
         this.hand_Group1.add(this.nail2);
         this.hand_Group1.add(this.nail3);
         this.hand_Group1.add(this.nail4);
         this.hand_Group1.add(this.nail5);
         this.hand_Group1.add(this.nail6);
         this.hand_Group1.add(this.nail7);
         this.hand_Group1.add(this.nail8);
         this.hand_Group1.add(this.wash_hand);
         this.hand_Group1.y=20;

          this.nail_cutter = this.add.sprite(1000,360, "nail_cutter").setOrigin(0.5, 0.5);
          // this.nail_cutter = this.add.sprite(658,360, "nail_cutter").setOrigin(0.5, 0.5);
          this.nail_cutter.setInteractive({ useHandCursor:true});
          this.nail_cutter.on('pointerdown',function(){
            this.pick.play();
          this.nail_cutter.disableInteractive();
          this.nail1.setInteractive({ useHandCursor:true});
          this.nailcutter_drag=true;
        this.arrow1.setVisible(false);
        this.arrow2.setVisible(true);
          },this);

          this.nail1.on('pointerdown',function(){
        this.arrow2.setVisible(false);
          this.nail1.disableInteractive();
            this.nail_ct.play();
          this.tweens.add({targets:this.nail1,alpha:0,y:300,ease: 'Quadratic',duration:800,onComplete:() => {
          this.nail2.setInteractive({ useHandCursor:true});
        this.arrow3.setVisible(true);
            
            }});
          },this);

          this.nail2.on('pointerdown',function(){
        this.arrow3.setVisible(false);
          this.nail2.disableInteractive();
            this.nail_ct.play();
          this.tweens.add({targets:this.nail2,alpha:0,y:300,ease: 'Quadratic',duration:800,onComplete:() => {
          this.nail3.setInteractive({ useHandCursor:true});
        this.arrow4.setVisible(true);
            
            }});
          },this);

          this.nail3.on('pointerdown',function(){
        this.arrow4.setVisible(false);
          this.nail3.disableInteractive();
            this.nail_ct.play();
          this.tweens.add({targets:this.nail3,alpha:0,y:300,ease: 'Quadratic',duration:800,onComplete:() => {
          this.nail4.setInteractive({ useHandCursor:true});
        this.arrow5.setVisible(true);
            
            }});
          },this);

          this.nail4.on('pointerdown',function(){
        this.arrow5.setVisible(false);
          this.nail4.disableInteractive();
            this.nail_ct.play();
          this.tweens.add({targets:this.nail4,alpha:0,y:300,ease: 'Quadratic',duration:800,onComplete:() => {
          this.nail5.setInteractive({ useHandCursor:true});
        this.arrow6.setVisible(true);
            
            }});
          },this);

          this.nail5.on('pointerdown',function(){
        this.arrow6.setVisible(false);
          this.nail5.disableInteractive();
            this.nail_ct.play();
          this.tweens.add({targets:this.nail5,alpha:0,y:300,ease: 'Quadratic',duration:800,onComplete:() => {
          this.nail6.setInteractive({ useHandCursor:true});
        this.arrow7.setVisible(true);
            
            }});
          },this);

          this.nail6.on('pointerdown',function(){
        this.arrow7.setVisible(false);
          this.nail6.disableInteractive();
            this.nail_ct.play();
          this.tweens.add({targets:this.nail6,alpha:0,y:300,ease: 'Quadratic',duration:800,onComplete:() => {
          this.nail7.setInteractive({ useHandCursor:true});
        this.arrow8.setVisible(true);
            
            }});
          },this);

          this.nail7.on('pointerdown',function(){
        this.arrow8.setVisible(false);
          this.nail7.disableInteractive();
            this.nail_ct.play();
          this.tweens.add({targets:this.nail7,alpha:0,y:300,ease: 'Quadratic',duration:800,onComplete:() => {
          this.nail8.setInteractive({ useHandCursor:true});
        this.arrow9.setVisible(true);
            
            }});
          },this);

          this.nail8.on('pointerdown',function(){
          this.arrow9.setVisible(false);
            this.nail_ct.play();
          this.nail8.disableInteractive();
          this.tweens.add({targets:this.nail8,alpha:0,y:300,ease: 'Quadratic',duration:800,onComplete:() => {
            this.nailcutter_drag=false;
            this.tweens.add({targets:this.nail_cutter,alpha:0,x:1000,ease: 'Quadratic',duration:500,onComplete:() => {

            this.tweens.add({targets:this.hand_Group1,alpha:0,ease: 'Quadratic',duration:500,onComplete:() => {
            this.mam_wash_hands1.play();
            this.madam.play("mam_speak1");
            this.mam_wash_hands1.once('complete', function() {
            this.madam.stop();
            this.madam.setFrame(0);           
            this.come_ani.play();
             this.tweens.add({targets:this.hand_Group2,alpha:1,ease: 'Quadratic',duration:500,onComplete:() => {
                
          this.walk_snd.play();
           this.tweens.add({targets: this.rabbit_front,x: 400,duration: 2500,ease: 'Quadratic',onComplete:() => {
        this.walk_snd.stop();
           this.rabbit_hand_ani.setVisible(true);
           this.rectangle.setInteractive({ useHandCursor:true});
          this.arrow11.setVisible(true);

             }});
             }});
      },this);

            }});            
            }});
            }});
          },this);



            //****************************************************************//

          this.dust = this.add.sprite(405,165, "dust").setOrigin(0.5, 0.5);          
          this.hand_Group1.add(this.dust);          

          
            //****************************************************************//

           this.hand_Group2 = this.add.container();
           this.hand_Group2.alpha=0;
           this.handwash_bg2 = this.add.sprite(400, 252, "handwash_bg");
           this.rabbit_front = this.add.sprite(-400, 252, "rabbit_front").setOrigin(0.5,0.5).setScale(0.8);
           this.washbashion = this.add.sprite(400, 400, "washbashion").setOrigin(0.5,0.5);
           this.tap_fill_ani = this.add.sprite(370, 455, "tap_fill_ani").setOrigin(0.5,0.5);
           this.rabbit_hand_ani = this.add.sprite(405, 370, "rabbit_hand_ani").setOrigin(0.5,0.5).setScale(0.8);
           this.rabbit_hand_ani.setVisible(false);
           this.tap_water_ani = this.add.sprite(430, 390, "tap_water_ani").setOrigin(0.5,0.5).setScale(0.8);
           this.tap_water_ani.alpha=0;
           this.hand_Group2.add(this.handwash_bg2);
           this.hand_Group2.add(this.rabbit_front);
           this.hand_Group2.add(this.washbashion);
           this.hand_Group2.add(this.tap_fill_ani);
           this.hand_Group2.add(this.rabbit_hand_ani);

            //****************************************************************//

           this.rectangle = this.add.rectangle(620, 380, 130, 145, 0xff0000,0).setOrigin(0.5);
           this.rectangle.on('pointerdown',function(){
           this.rectangle.disableInteractive();
          this.arrow11.setVisible(false);
           this.tap_water_ani.alpha=1;
           this.tap_fill_ani.play("tap_animation");
           this.rabbit_hand_ani.play("rabit_animation");
           this.tap_water_ani.play("tap_water_animation");
            this.water_mc.play();
            this.wash_snd.play();

          },this);
            //****************************************************************//


          this.anims.create({key: "tap_animation",frames: this.anims.generateFrameNames("tap_fill_ani", {start: 0, end: 20,}),frameRate: 10,});
          this.tap_fill_ani.on('animationcomplete',function(){
            this.water_mc.stop();
            this.wash_snd.stop();
          this.rabbit_hand_ani.stop("rabit_animation");
          this.tap_water_ani.alpha=0;
            this.come_ani.play();
          this.tweens.add({targets:this.hand_Group3,alpha:1,ease: 'Quadratic',duration:500,onComplete:() => {
            this.come_ani.play();
          this.tweens.add({targets:this.soap,x:658,ease: 'Quadratic',duration:500,onComplete:() => {
          this.soap.setInteractive({ useHandCursor:true});
          this.arrow12.setVisible(true);
          
        }});
        }});
          },this);

          this.anims.create({key: 'rabit_animation',
                frames: this.anims.generateFrameNumbers('rabbit_hand_ani', { start: 0, end: 12 }),
                frameRate: 13,
                repeat: -1
            });

          this.anims.create({key: 'tap_water_animation',
                frames: this.anims.generateFrameNumbers('tap_water_ani', { start: 0, end: 11 }),
                frameRate: 13,
                repeat: -1
            });
            //****************************************************************//

          this.hand_Group3 = this.add.container();
          this.hand_Group3.alpha = 0;
          this.water_hand = this.add.sprite(405,250, "water_hand").setOrigin(0.5, 0.5);
          this.dust1 = this.add.sprite(405,205, "dust").setOrigin(0.5, 0.5);
          this.water = this.add.sprite(405,205, "water").setOrigin(0.5, 0.5);
          this.bubbles = this.add.sprite(405,205, "bubbles").setOrigin(0.5, 0.5);
          this.bubbles.alpha=0;
          this.hand_Group3.add(this.water_hand);
          this.hand_Group3.add(this.dust1);
          this.hand_Group3.add(this.water);
          this.hand_Group3.add(this.bubbles);


            //****************************************************************//


          this.soap = this.add.sprite(1000,380, "soap").setOrigin(0.5, 0.5).setScale(0.75);
          // this.soap = this.add.sprite(658,380, "soap").setOrigin(0.5, 0.5).setScale(0.75);
          this.soap.setInteractive({ useHandCursor:true});
          this.soap.on('pointerdown',function(){
            this.pick.play();
          this.soap.disableInteractive();
          this.arrow12.setVisible(false);
          this.arrow13.setVisible(true);
          this.soap_drag=true;
          },this);

            //****************************************************************//         

          this.hitGroup_tool1 = this.physics.add.group();
          for (var i = 0; i < Main.tool_1X.length; i++) {
            var hitCircle_1 = this.add.graphics();
            hitCircle_1.fillStyle(0x000000, 0);
            hitCircle_1.fillCircle(0, 0, 10);
            hitCircle_1.x = Main.tool_1X[i];
            hitCircle_1.y = Main.tool_1Y[i];
            hitCircle_1.id = i;
            this.hitGroup_tool1.add(hitCircle_1);
            this.physics.add.existing(hitCircle_1);
            hitCircle_1.body.collideWorldBounds = true;
          }

          this.circleGroup_tool1 = this.add.group();
          this.circle_tool1 = this.add.graphics();
          this.circle_tool1.fillStyle(0x000000, 0);
          this.circleGroup_tool1.add(this.circle_tool1);

          this.dragCircle_1 = this.add.graphics();
          this.dragCircle_1.fillStyle(0x000000, 0);
          this.dragCircle_1.fillCircle(0, 0, 20);

          this.hitSprite_tool1_count = 0;

          this.physics.add.existing(this.dragCircle_1);
          this.dragCircle_1.body.collideWorldBounds = true;
          this.physics.add.collider(this.dragCircle_1, this.hitGroup_tool1, this.hitSprite_group_tool1, null, this);


            //****************************************************************//
          this.water1 = this.add.sprite(405,205, "water").setOrigin(0.5, 0.5);
          this.water1.alpha=0;
         
          this.towel = this.add.sprite(1000,380, "towel").setOrigin(0.5, 0.5).setScale(0.75);
          this.towel.on('pointerdown',function(){
          this.towel.disableInteractive();
            this.pick.play();
          this.arrow14.setVisible(false);
          this.arrow15.setVisible(true);
          this.towel_drag=true;
          },this);


          this.hitGroup_tool2 = this.physics.add.group();
          for (var i = 0; i < Main.tool_2X.length; i++) {
            var hitCircle_2 = this.add.graphics();
            hitCircle_2.fillStyle(0x000000, 0);
            hitCircle_2.fillCircle(0, 0, 10);
            hitCircle_2.x = Main.tool_2X[i];
            hitCircle_2.y = Main.tool_2Y[i];
            hitCircle_2.id = i;
            this.hitGroup_tool2.add(hitCircle_2);
            this.physics.add.existing(hitCircle_2);
            hitCircle_2.body.collideWorldBounds = true;
          }

          this.circleGroup_tool2 = this.add.group();
          this.circle_tool2 = this.add.graphics();
          this.circle_tool2.fillStyle(0x000000, 0);
          this.circleGroup_tool2.add(this.circle_tool2);

          this.dragCircle_2 = this.add.graphics();
          this.dragCircle_2.fillStyle(0x000000, 0);
          this.dragCircle_2.fillCircle(0, 0, 20);

          this.hitSprite_tool2_count = 0;

          this.physics.add.existing(this.dragCircle_2);
          this.dragCircle_2.body.collideWorldBounds = true;
          this.physics.add.collider(this.dragCircle_2, this.hitGroup_tool2, this.hitSprite_group_tool2, null, this);
            //****************************************************************//

          this.towel1 = this.add.sprite(1000,380, "towel").setOrigin(0.5, 0.5).setScale(0.75);
          this.towel1.on('pointerdown',function(){
          this.towel1.disableInteractive();
            this.pick.play();
          this.arrow16.setVisible(false);
          this.arrow17.setVisible(true);
          this.towel_drag1=true;
          },this);

           this.hitGroup_tool3 = this.physics.add.group();
          for (var i = 0; i < Main.tool_3X.length; i++) {
            var hitCircle_3 = this.add.graphics();
            hitCircle_3.fillStyle(0x000000, 0);
            hitCircle_3.fillCircle(0, 0, 10);
            hitCircle_3.x = Main.tool_3X[i];
            hitCircle_3.y = Main.tool_3Y[i];
            hitCircle_3.id = i;
            this.hitGroup_tool3.add(hitCircle_3);
            this.physics.add.existing(hitCircle_3);
            hitCircle_3.body.collideWorldBounds = true;
          }

          this.circleGroup_tool3 = this.add.group();
          this.circle_tool3 = this.add.graphics();
          this.circle_tool3.fillStyle(0x000000, 0);
          this.circleGroup_tool3.add(this.circle_tool3);

          this.dragCircle_3 = this.add.graphics();
          this.dragCircle_3.fillStyle(0x000000, 0);
          this.dragCircle_3.fillCircle(0, 0, 20);

          this.hitSprite_tool3_count = 0;

          this.physics.add.existing(this.dragCircle_3);
          this.dragCircle_3.body.collideWorldBounds = true;
          this.physics.add.collider(this.dragCircle_3, this.hitGroup_tool3, this.hitSprite_group_tool3, null, this);

            //****************************************************************//
          this.temp_gun_ani1 = this.add.sprite(480,320, "temp_gun").setOrigin(0.5, 0.5).setScale(0.75);
          this.temp_gun_ani1.setVisible(false);

          this.anims.create({key: 'gun1_animation',
                frames: this.anims.generateFrameNumbers('temp_gun', { start: 0, end: 2 }),
                frameRate: 10,
                repeat: 3
            });

          this.temp_gun1 = this.add.sprite(1000,380, "temp_gun").setOrigin(0.5, 0.5).setScale(0.65);
          this.temp_gun1.on('pointerdown',function(){
            this.pick.play();
          this.temp_gun_click1.setInteractive({ useHandCursor:true});
          this.temp_gun1.disableInteractive();
          this.arrow18.setVisible(false);
          this.arrow19.setVisible(true);
          this.tep_gun_drag1=true;
          },this);

           this.temp_gun_click1 = this.add.rectangle(500, 330, 130, 145, 0xff0000,0).setOrigin(0.5);
           this.temp_gun_click1.on('pointerdown',function(){
           this.temp_gun_click1.disableInteractive();
          this.temp_gun_ani1.setVisible(true);
          this.temp_gun1.setVisible(false);
           this.temp_gun_ani1.play("gun1_animation");
          this.arrow19.setVisible(false);
          this.tep_gun_drag1=false;

          },this);

            this.temp_gun_ani1.on('animationcomplete', () => {            
            this.time.delayedCall(1300, () => this.temp_gun_ani1.setVisible(false), [], this);
            this.mamp_tep2.play();
       this.madam.play("mam_speak2");

            this.mamp_tep2.once('complete', function() {
            this.mamp_tep3.play();
           

            this.mamp_tep3.once('complete', function() {
            this.mamp_tep4.play();

            this.mamp_tep4.once('complete', function() {
              this.madam.stop();
            this.madam.setFrame(0);
        this.walk_snd.play();
            this.tweens.add({targets: this.rabit,x: -400,duration: 2500,ease: 'Quadratic',onComplete:() => {
        this.walk_snd.play();
            this.tweens.add({targets: this.sick_cat,x: 400,duration: 800,ease: 'Quadratic',onComplete:() => {
        this.walk_snd.stop();
            this.mamp_tep5.play();
       this.madam.play("mam_speak3");
            this.mamp_tep5.once('complete', function() {
            this.come_ani.play();
            this.madam.stop();
            this.madam.setFrame(0);
            this.tweens.add({targets: this.temp_gun2,x: 530 ,duration: 500,ease: 'Quadratic',onComplete:() => {
            this.temp_gun2.setInteractive({ useHandCursor:true});
          this.arrow20.setVisible(true);
             }});
                },this);

             }});
             }});
                },this);
            
                },this);
                },this);
            


            });


            //****************************************************************//

          this.temp_gun_ani2 = this.add.sprite(480,320, "temp_gun").setOrigin(0.5, 0.5).setScale(0.65);
          this.temp_gun_ani2.setVisible(false);

          this.anims.create({key: 'gun2_animation',
                frames: this.anims.generateFrameNumbers('temp_gun', { start: 3, end: 5 }),
                frameRate: 10,
                repeat: 3
            });

          this.temp_gun2 = this.add.sprite(1000,380, "temp_gun").setOrigin(0.5, 0.5).setScale(0.65);
          this.temp_gun2.on('pointerdown',function(){
            this.pick.play();
          this.temp_gun_click2.setInteractive({ useHandCursor:true});
          this.temp_gun2.disableInteractive();
          this.arrow20.setVisible(false);
          this.arrow21.setVisible(true);
          this.tep_gun_drag2=true;
          },this);

           this.temp_gun_click2 = this.add.rectangle(500, 330, 130, 145, 0xff0000,0).setOrigin(0.5);
           this.temp_gun_click2.on('pointerdown',function(){
           this.temp_gun_click2.disableInteractive();
          this.temp_gun_ani2.setVisible(true);
          this.temp_gun2.setVisible(false);
           this.temp_gun_ani2.play("gun2_animation");
          this.tep_gun_drag2=false;
          this.arrow21.setVisible(false);

          },this);

            this.temp_gun_ani2.on('animationcomplete', () => {            
           this.time.delayedCall(1300, () => this.temp_gun_ani2.setVisible(false), [], this);
            this.mamp_tep6.play();
       this.madam.play("mam_speak4");
            this.mamp_tep6.once('complete', function() {
              this.madam.stop();
            this.madam.setFrame(0);
           
            this.sick_snd.play();
            this.sick_snd.once('complete', function() {
            this.come_ani.play();

            this.tweens.add({targets: this.glass_water,x: 540 ,duration: 500,ease: 'Quadratic',onComplete:() => {
            this.glass_water.setInteractive({ useHandCursor:true});
          this.arrow23.setVisible(true);
                
             }});
            },this);
            },this);
             //////////////////

             });
            //****************************************************************//

            this.glass_water = this.add.sprite(1000,380, "glass_water_ani").setOrigin(0.5, 0.5).setScale(0.75);
            this.glass_water.rotation=0.6;
            this.glass_water.on('pointerdown',function(){
            this.glass_water.disableInteractive();
            this.glass_water_click.setInteractive({ useHandCursor:true});
            this.pick.play();
          this.arrow23.setVisible(false);
          this.arrow24.setVisible(true);
            this.glass_drag=true;
          },this);

           this.glass_water_click = this.add.rectangle(440, 350, 130, 145, 0xff0000,0).setOrigin(0.5);
           this.glass_water_click.on('pointerdown',function(){
           this.glass_water_click.disableInteractive();
           this.glass_water.setVisible(false);
           this.glass_water_ani.setVisible(true);
           
           this.time.delayedCall(1000, () => this.glass_water_ani.play("glass_animation"), [], this);

           this.glass_drag=false;
          this.arrow24.setVisible(false);
            this.mamp_tep7.play();
            this.madam.play("mam_speak5");
             this.mamp_tep7.once('complete', function() {
            this.madam.stop();
            this.madam.setFrame(0);
            
      },this);
           },this);

           this.anims.create({key: 'glass_animation',
                frames: this.anims.generateFrameNumbers('glass_water_ani', { start: 0, end: 9 }),
                frameRate: 10,
                repeat: 0
            });

           this.glass_water_ani.on('animationcomplete', () => {            
           this.time.delayedCall(500, () => this.glass_water_ani.setVisible(false), [], this);
            this.come_ani.play();
            this.tweens.add({targets: this.bandaid1,x: 570 ,duration: 300,delay:4100,ease: 'Quadratic',onComplete:() => {
            this.bandaid1.setInteractive({ useHandCursor:true});
            this.arrow25.setVisible(true);
                
             }});

             });

            //****************************************************************//

            this.bandaid1 = this.add.sprite(1000,420, "bandaid").setOrigin(0.5, 0.5).setScale(0.9);
            this.bandaid1.on('pointerdown',function(){
            this.pick.play();
          this.arrow25.setVisible(false);
            this.bandaid1.disableInteractive();
            this.bandaid1.setVisible(false);
            this.come_ani.play();
            this.tweens.add({targets: this.bandaid_Group,alpha: 1 ,duration: 500,ease: 'Quadratic',onComplete:() => {
            this.arrow26.setVisible(true);
             this.click1.setInteractive({ useHandCursor:true});
             this.sick_cat.setTexture('sick_cat1');
             }});
                
            },this);

          this.bandaid_Group = this.add.container();
          this.bandaid_Group.alpha=0;
          this.cat_panel = this.add.sprite(405,270, "cat_panel").setOrigin(0.5, 0.5);        
          this.bandaid_ani = this.add.sprite(445,240, "bandaid_ani").setOrigin(0.5, 0.5);       
          this.bandaid_Group.add(this.cat_panel);
          this.bandaid_Group.add(this.bandaid_ani);

           this.click1 = this.add.rectangle(560, 180, 120, 80, 0xff0000,0).setOrigin(0.5);
           // this.click1.setInteractive({ useHandCursor:true});
           this.click1.on('pointerdown',function(){
            this.pick.play();
           this.click1.disableInteractive();
           this.bandaid_ani.setFrame(1);
           this.click2.setInteractive({ useHandCursor:true});
            this.arrow26.setVisible(false);
            this.arrow27.setVisible(true);

           },this);

           this.click2 = this.add.rectangle(560, 290, 120, 80, 0xff0000,0).setOrigin(0.5);
           this.click2.on('pointerdown',function(){
            this.pick.play();
           this.click2.disableInteractive();
           this.bandaid_ani.setFrame(2);
           this.click3.setInteractive({ useHandCursor:true});
            this.arrow27.setVisible(false);
            this.arrow28.setVisible(true);

           },this);

           this.click3 = this.add.rectangle(330, 290, 120, 80, 0xff0000,0).setOrigin(0.5);
           this.click3.on('pointerdown',function(){
           this.click3.disableInteractive();
            this.pick.play();
           this.bandaid_ani.setFrame(3);
           this.click4.setInteractive({ useHandCursor:true});
            this.arrow28.setVisible(false);
            this.arrow29.setVisible(true);

           },this);

           this.click4 = this.add.rectangle(330, 180, 120, 80, 0xff0000,0).setOrigin(0.5);
           this.click4.on('pointerdown',function(){
            this.arrow29.setVisible(false);
            this.pick.play();
           this.click4.disableInteractive();
           this.bandaid_ani.setFrame(4);
           this.tweens.add({targets: this.bandaid_Group,alpha: 0 ,duration: 500,ease: 'Quadratic',onComplete:() => {
            this.mamp_tep8.play();
       this.madam.play("mam_speak6");
          this.mamp_tep8.once('complete', function() {
             this.madam.stop();
            this.madam.setFrame(0);
          this.walk_snd.play();
           this.tweens.add({targets: this.cat_father,x: 200,duration: 2500,ease: 'Quadratic',onComplete:() => {
            this.walk_snd.stop();
            this.mamp_tep9.play();

         this.cat_father.play("cat_father_speak1");
          this.time.delayedCall(3200, () => this.cat_father.stop(), [], this);
          this.time.delayedCall(3200, () => this.cat_father.setFrame(0), [], this);
          this.time.delayedCall(3200, () => this.madam.play("mam_speak7"), [], this);
          
          this.time.delayedCall(8200, () => this.madam.stop(), [], this);
          this.time.delayedCall(8200, () => this.madam.setFrame(0), [], this);

          this.time.delayedCall(8200, () => this.cat_father.play("cat_father_speak2"), [], this);
          this.time.delayedCall(12000, () => this.cat_father.stop(), [], this);
          this.time.delayedCall(12000, () => this.cat_father.setFrame(0), [], this);

            this.mamp_tep9.once('complete', function() {
            this.cat_father.setScale(-this.cat_father.scaleX, this.cat_father.scaleY);
            this.sick_cat.setScale(-this.sick_cat.scaleX, this.sick_cat.scaleY);
          this.walk_snd.play();
           this.tweens.add({targets: this.cat_father,x: -450,duration: 2500,ease: 'Quadratic',onComplete:() => {}});
           this.tweens.add({targets: this.sick_cat,x: -250,duration: 2500,ease: 'Quadratic',onComplete:() => {         

            this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
             
             }});
            },this);
             }});

           },this);
             }});
           },this);


            //****************************************************************//

        // this.mcir = this.add.graphics();
        // this.mcir.fillStyle(0x666666, 0.1);
        // this.mcir.fillRect(0, 0, 800, 800);
        // this.mcir.setInteractive(new Phaser.Geom.Rectangle(0, 0, 800, 800), Phaser.Geom.Rectangle.Contains);
        // this.mcir.on('pointerdown', function (pointer) {
        //   this.mcnt1++;
        //   this['xcnt' + this.mcnt1] = pointer.x;
        //   this['ycnt' + this.mcnt1] = pointer.y;
        //   const circle = this.add.graphics();
        //   circle.fillStyle(0x000000, 0.5);
        //   circle.fillCircle(pointer.x, pointer.y, 10);
        //   circle.setDepth(1);
        //   console.log(this['xcnt' + this.mcnt1] + ':' + this['ycnt' + this.mcnt1]);
        // }, this);
  
            //****************************************************************//

         var arrow_Posx = [550, 595, 555,510,470,343,310,265,220,420,612,488,400,488,400,488,400,640,420,640,420,540,540,420,560,556,556,330,330 ];
         var arrow_Posy = [370, 220, 230,230,190,190,220,225,225,200,252,363,55 ,363,55 ,363,55, 379,198,379,198,300,300,198,350,105,205,205,105];
         
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
                this['arrow' + i].rotation=-1.5;
            }
            if (i === 12 ) {
                this['arrow' + i].setVisible(false);
                this['arrow' + i].rotation=-1.5;
            }
            if (i === 14 ) {
                this['arrow' + i].setVisible(false);
                this['arrow' + i].rotation=-1.5;
            }
            if (i === 16 ) {
                this['arrow' + i].setVisible(false);
                this['arrow' + i].rotation=-1.5;
            }
            if (i === 18 ) {
                this['arrow' + i].setVisible(false);
                this['arrow' + i].rotation=1.5;
            }
            if (i === 20 ) {
                this['arrow' + i].setVisible(false);
                this['arrow' + i].rotation=1.5;
            }
            
        }

        
            //****************************************************************//

        this.play_btn=this.add.image(730,435,'btn5').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.95)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerup',this.enterRoom,this);
          this.play_btn.on('pointerdown',function(){            
            this.anims.remove('mam_speak1');
            this.anims.remove('mam_speak2');
            this.anims.remove('mam_speak3');
            this.anims.remove('mam_speak4');
            this.anims.remove('mam_speak5');
            this.anims.remove('mam_speak6');
            this.anims.remove('mam_speak7');
            this.anims.remove('mam_speak8');
            this.anims.remove('mam_speak9');
            this.anims.remove('cat_father_speak1');
            this.anims.remove('cat_father_speak2');
            this.anims.remove('tap_animation');
            this.anims.remove('rabit_animation');
            this.anims.remove('tap_water_animation');
            this.anims.remove('gun1_animation');
            this.anims.remove('gun2_animation');
            this.anims.remove('glass_animation');
            this.anims.remove('arrow');
                    },this);

        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0.85);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',this.morebtnLink,this);

         this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
        this.walk_snd.play();
        this.tweens.add({targets:this.madam,x:650,ease: 'Quadratic',duration:2000,onComplete:() => {
        this.walk_snd.play();
        this.tweens.add({targets:this.rabit,x:420,ease: 'Quadratic',duration:2300,});
        this.tweens.add({targets:this.sick_cat,x:250,ease: 'Quadratic',duration:2300,onComplete:() => {
        this.walk_snd.stop();
        this.mam_show_hands1.play();
        this.madam.play("mam_speak8");
           this.mam_show_hands1.once('complete', function() {
            this.madam.stop();
            this.madam.setFrame(0);
           this.rabit.setInteractive({ useHandCursor: true });
           this.arrow10.setVisible(true);
      },this);


          // this.time.delayedCall(13500, () => this.rabit.setInteractive({ useHandCursor: true }), [], this);
          //   this.time.delayedCall(13500, () => this.arrow10.setVisible(true), [], this);

            
        }});
        }});
        }});


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
hitSprite_group_tool1(dragCircle_1, hitCircle_1) {
          this.arrow13.setVisible(false);
  hitCircle_1.destroy();
    if (!hitCircle_1 || !hitCircle_1.body) {
  }
  this.hitSprite_tool1_count++;
            this.wash_dish_snd.play();
  if (this.hitSprite_tool1_count === 1) {
    this.bubbles.alpha = 0;
    this.dust1.alpha = 1;
    this.water.alpha = 1;
  }
  const stepSize = 1 / Main.tool_1X.length;
  this.bubbles.alpha += stepSize;
  this.dust1.alpha -= stepSize;
  this.water.alpha -= stepSize;
  if (this.hitSprite_tool1_count >= Main.tool_1X.length) {
            this.wash_dish_snd.stop();
    this.soap_drag = false;
    this.tweens.add({targets:this.soap,alpha:0,x:1000,ease: 'Quadratic',duration:800,onComplete:() => {
    this.tweens.add({targets:this.hand_Group3,alpha:0,ease: 'Quadratic',duration:800,onComplete:() => {
    this.bubbles.alpha = 0;
    this.rabbit_hand_ani.play("rabit_animation");
            this.water_mc.play();

           this.tap_water_ani.play("tap_water_animation");
           this.tap_water_ani.alpha=1;
           this.time.delayedCall(1000, () => this.wash_snd.play(), [], this);
           this.time.delayedCall(4000, () => this.water_mc.stop(), [], this);
           this.time.delayedCall(4000, () => this.rabbit_hand_ani.stop(), [], this);
           this.time.delayedCall(4000, () => this.tap_water_ani.stop(), [], this);
           this.time.delayedCall(4000, () => this.tap_water_ani.setVisible(false)
            , [], this);
    this.tweens.add({targets:this.water1,alpha:1,ease: 'Quadratic',duration:800,delay:3000,onComplete:() => {}});
    this.tweens.add({targets:this.hand_Group3,alpha:1,ease: 'Quadratic',duration:800,delay:3000,onComplete:() => {
            this.come_ani.play();
    this.tweens.add({targets:this.towel1,x:658,ease: 'Quadratic',duration:500,onComplete:() => {
          this.towel1.setInteractive({ useHandCursor:true});
          this.arrow16.setVisible(true);
          
        }});
        }});
        }});
    // this.tweens.add({targets:this.towel,x:658,ease: 'Quadratic',duration:800,onComplete:() => {
    //       this.towel.setInteractive({ useHandCursor:true});
    //       this.arrow14.setVisible(true);
         
    //     }});
        }});
  }
}
hitSprite_group_tool2(dragCircle_2, hitCircle_2) {
          this.arrow15.setVisible(false);
  hitCircle_2.destroy();
    if (!hitCircle_2 || !hitCircle_2.body) {
  }
  this.hitSprite_tool2_count++;
            this.wash_dish_snd.play();
  if (this.hitSprite_tool2_count === 1) {
    this.water.alpha = 1;
    this.dust1.alpha = 1;
    this.bubbles.alpha = 1;
  }
  const stepSize = 1 / Main.tool_2X.length;
  this.water.alpha -= stepSize;
  this.dust1.alpha -= stepSize;
  this.bubbles.alpha -= stepSize;
  if (this.hitSprite_tool2_count >= Main.tool_2X.length) {
            this.wash_dish_snd.stop();
    this.towel_drag = false;
    this.tweens.add({targets:this.towel,alpha:0,x:1000,ease: 'Quadratic',duration:500,onComplete:() => {
    this.tweens.add({targets:this.hand_Group3,alpha:0,ease: 'Quadratic',duration:500,onComplete:() => {
        
            this.water_mc.play();
           this.rabbit_hand_ani.play("rabit_animation");
           this.tap_water_ani.play("tap_water_animation");
           this.tap_water_ani.alpha=1;
           this.time.delayedCall(1000, () => this.wash_snd.play(), [], this);
           this.time.delayedCall(4000, () => this.rabbit_hand_ani.stop(), [], this);
           this.time.delayedCall(4000, () => this.water_mc.stop(), [], this);
           this.time.delayedCall(4000, () => this.tap_water_ani.stop(), [], this);
           this.time.delayedCall(4000, () => this.tap_water_ani.setVisible(false)
            , [], this);
    this.tweens.add({targets:this.water1,alpha:1,ease: 'Quadratic',duration:800,delay:2500,onComplete:() => {}});
    this.tweens.add({targets:this.hand_Group3,alpha:1,ease: 'Quadratic',duration:800,delay:2500,onComplete:() => {
            this.come_ani.play();
    this.tweens.add({targets:this.towel1,x:658,ease: 'Quadratic',duration:500,onComplete:() => {
          this.towel1.setInteractive({ useHandCursor:true});
          this.arrow16.setVisible(true);

        }});
        }});

        }});
        }});
  }
}

 hitSprite_group_tool3(dragCircle_3, hitCircle_3) {
          this.arrow17.setVisible(false);
  hitCircle_3.destroy();
    if (!hitCircle_3 || !hitCircle_3.body) {
  }
  this.hitSprite_tool3_count++;
            this.wash_dish_snd.play();
  if (this.hitSprite_tool3_count === 1) {
    this.water1.alpha = 1;
  }
  const stepSize = 1 / Main.tool_3X.length;
  this.water1.alpha -= stepSize;
  if (this.hitSprite_tool3_count >= Main.tool_3X.length) {
    this.towel_drag1 = false;
            this.wash_dish_snd.stop();
    this.tweens.add({targets:this.towel1,x:1000,ease: 'Quadratic',duration:500,onComplete:() => {
    this.tweens.add({targets:this.hand_Group3,alpha:0,ease: 'Quadratic',duration:500,onComplete:() => {
    this.tweens.add({targets:this.hand_Group2,alpha:0,ease: 'Quadratic',duration:500,onComplete:() => {
      this.mamp_tep1.play();
       this.madam.play("mam_speak9");
      this.mamp_tep1.once('complete', function() {
            this.come_ani.play();
            this.madam.stop();
            this.madam.setFrame(0);
   this.tweens.add({targets: this.temp_gun1,x: 530 ,duration: 500,ease: 'Quadratic',onComplete:() => {
            this.temp_gun1.setInteractive({ useHandCursor:true});
             this.arrow18.setVisible(true);
                
             }});
      },this);

        }});
        }});
        }});
  }
}
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
       var state = 'selection_screen2';
       MyShowAD(this, state)
    }
        });
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
update() {
  // console.log(this.input.x + ':' + this.input.y);
        if (this.nailcutter_drag) {
          this.nail_cutter.x = this.game.input.activePointer.x+46;
          this.nail_cutter.y = this.game.input.activePointer.y+45;
        } 
        if (this.tep_gun_drag1) {
          this.temp_gun1.x = this.game.input.activePointer.x-25;
          this.temp_gun1.y = this.game.input.activePointer.y;
        }  
        if (this.tep_gun_drag2) {
          this.temp_gun2.x = this.game.input.activePointer.x-25;
          this.temp_gun2.y = this.game.input.activePointer.y;
        }
        if (this.glass_drag) {
          this.glass_water.x = this.game.input.activePointer.x;
          this.glass_water.y = this.game.input.activePointer.y;
        }

         if (this.soap_drag) {
            this.soap.x = this.input.activePointer.x;
            this.soap.y = this.input.activePointer.y;

            this.dragCircle_1.x = this.input.activePointer.x;
            this.dragCircle_1.y = this.input.activePointer.y;

        for (var i = 0; i < Main.tool_1X.length; i++) {
              this.physics.world.collide(this.dragCircle_1, this.hitGroup_tool1.getChildren()[i], this.hitSprite_group_tool1, null, this);
            }
            }

            if (this.towel_drag) {
            this.towel.x = this.input.activePointer.x;
            this.towel.y = this.input.activePointer.y;

            this.dragCircle_2.x = this.input.activePointer.x;
            this.dragCircle_2.y = this.input.activePointer.y;

        for (var i = 0; i < Main.tool_2X.length; i++) {
              this.physics.world.collide(this.dragCircle_2, this.hitGroup_tool2.getChildren()[i], this.hitSprite_group_tool2, null, this);
            }
            }

             if (this.towel_drag1) {
            this.towel1.x = this.input.activePointer.x;
            this.towel1.y = this.input.activePointer.y;

            this.dragCircle_3.x = this.input.activePointer.x;
            this.dragCircle_3.y = this.input.activePointer.y;

        for (var i = 0; i < Main.tool_3X.length; i++) {
              this.physics.world.collide(this.dragCircle_3, this.hitGroup_tool3.getChildren()[i], this.hitSprite_group_tool3, null, this);
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