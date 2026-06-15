var Main = {
         tool_1X:[524,558,557,525,522,539,553,586,591,564,545,541,556,566,585,596,575,595,
    598,604,596,559,574,595,538,302,275,248,219,206,201,206,211,224,236,246,
    244,228,250,258,267,286,286,250,228,223,283,272,224,225,565,522,304,],
        tool_1Y:[283,271,282,262,237,234,244,240,207,208,211,190,179,151,137,151,170,184,184,
    220,226,227,189,174,156,272,271,265,252,230,201,176,139,133,131,153,176,199,
    207,220,221,227,247,238,225,208,207,179,147,155,253,209,234,],

};
export default class final_screen1 extends Phaser.Scene {
  logo;
  musicBtn;
  music;

 isScenePaused = false;

  constructor() {
    super("final_screen1");
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
    this.handwash_bg = this.add.sprite(400, 252, "f_bg1");
    this.levelGroup.add(this.handwash_bg);
      
const soundManager = this.sound;
soundManager.volume = 0.5;
        this.dry2 = this.add.sprite(300,270, "dry2").setOrigin(0.5, 0.5).setScale(0.8);
        this.dry1 = this.add.sprite(370,220, "dry1").setOrigin(0.5, 0.5).setScale(0.8);

           /////////////////////////////////////////////////////////////////////////////////////

          this.mam_clean1 = this.sound.add('mam_clean1');
          this.mam_clean2 = this.sound.add('mam_clean2');
          this.mam_clean3 = this.sound.add('mam_clean3');
          this.pick = this.sound.add('pick');
          this.water_spray_snd = this.sound.add('water_spray_snd');
          this.dust_snd2 = this.sound.add('dust_snd2');
          this.dust_snd1 = this.sound.add('dust_snd1');
          this.spray_clean_snd = this.sound.add('spray_clean_snd');
          this.come_ani = this.sound.add('come_ani');

          this.mam_clean1.once('complete', function() {
          this.tweens.add({targets:this.dustbin1,y:350,ease: 'Quadratic',duration:800,onComplete:() => {
          this.plate4_clean.setInteractive({useHandCursor:true});
          this.arrow24.setVisible(true);

          }});
          
         },this);
           /////////////////////////////////////////////////////////////////////////////////////

        this.dustbin1 = this.add.sprite(400,750, "dustbin1").setOrigin(0.5, 0.5).setScale(0.8);
        this.p1_drag1=false;
          this.plate4_clean = this.add.sprite(210,80, "plate4_clean").setOrigin(0.5, 0.5).setScale(0.8);
          // this.plate4_clean.setInteractive({useHandCursor:true});
          this.plate4_clean.on('pointerdown',function(){
          this.pick.play();
          this.plate4_clean.disableInteractive();
          this.plate_click11.setInteractive({useHandCursor:true});
      this.children.bringToTop(this.plate4_clean);
          this.p1_drag1=true;
          this.arrow24.setVisible(false);
          this.arrow2.setVisible(true);
          },this);

           this.plate_click11 = this.add.rectangle(400, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.plate_click11.on('pointerdown',function(){
          this.dust_snd1.play();
           this.p1_drag1=false;
           this.plate4_clean.setVisible(false);
          this.arrow2.setVisible(false);
           this.plate_click11.disableInteractive();
           this.anims.create({key: 'dustbin_ani4',
            frames: this.anims.generateFrameNumbers('dustbin1', { start: 0, end: 5 }),
            framerate: 6,
            });
           this.dustbin1.play('dustbin_ani4');
           this.dustbin1.on('animationcomplete',function(){
          this.plate1.setInteractive({useHandCursor:true});
             },this);
        
           this.time.delayedCall(500, () =>  this.arrow1.setVisible(true), [], this);

          },this);


        this.p1_drag=false;
          this.plate1 = this.add.sprite(166,165, "plate1").setOrigin(0.5, 0.5).setScale(0.8);
          // this.plate1.setInteractive({useHandCursor:true});
          this.plate1.on('pointerdown',function(){
          this.pick.play();
          this.plate1.disableInteractive();
          this.plate_click1.setInteractive({useHandCursor:true});
      this.children.bringToTop(this.plate1);
          this.p1_drag=true;
          this.arrow1.setVisible(false);
          this.arrow2.setVisible(true);
          },this);

           this.plate_click1 = this.add.rectangle(400, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.plate_click1.on('pointerdown',function(){
          this.dust_snd1.play();
           this.p1_drag=false;
           this.plate1.setVisible(false);
          this.arrow2.setVisible(false);
           this.plate_click1.disableInteractive();
           this.anims.create({key: 'dustbin_ani1',
            frames: this.anims.generateFrameNumbers('dustbin1', { start: 6, end: 11 }),
            framerate: 6,
            });
           this.dustbin1.play('dustbin_ani1');
           this.dustbin1.on('animationcomplete',function(){
          this.plate2.setInteractive({useHandCursor:true});
             },this);
        
           this.time.delayedCall(500, () =>  this.arrow3.setVisible(true), [], this);

          },this);
           /////////////////////////////////////////////////////////////////////////////////////

          this.p2_drag=false;
          this.plate2 = this.add.sprite(365,175, "plate2").setOrigin(0.5, 0.5).setScale(0.8);
          this.plate2.on('pointerdown',function(){
          this.pick.play();
      this.children.bringToTop(this.plate2);
          this.arrow3.setVisible(false);
          this.arrow4.setVisible(true);
          this.plate2.disableInteractive();
          this.plate_click2.setInteractive({useHandCursor:true});
          this.p2_drag=true;
          },this);

          // console.log(this.plate_click2);
           this.plate_click2 = this.add.rectangle(400, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.plate_click2.on('pointerdown',function(){
          // console.log(this.plate_click2);
          this.dust_snd1.play();
           this.p2_drag=false;
           this.plate2.setVisible(false);
           this.arrow4.setVisible(false);
           this.plate_click2.disableInteractive();
           this.anims.create({key: 'dustbin_ani2',
            frames: this.anims.generateFrameNumbers('dustbin1', { start: 12, end: 17 }),
            framerate: 6,
            });
           this.dustbin1.play('dustbin_ani2');  
           this.dustbin1.on('animationcomplete',function(){
          this.plate3.setInteractive({useHandCursor:true});
          
             },this);
           this.time.delayedCall(500, () =>  this.arrow5.setVisible(true), [], this);

          },this);



           /////////////////////////////////////////////////////////////////////////////////////

             this.p3_drag=false;
            this.plate3 = this.add.sprite(620,200, "plate3").setOrigin(0.5, 0.5).setScale(0.8);
          this.plate3.on('pointerdown',function(){
      this.children.bringToTop(this.plate3);
          this.pick.play();
          this.plate3.disableInteractive();
          this.arrow5.setVisible(false);
          this.plate_click3.setInteractive({useHandCursor:true});
          this.arrow6.setVisible(true);
          this.p3_drag=true;
          },this);

           this.plate_click3 = this.add.rectangle(400, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.plate_click3.on('pointerdown',function(){
           this.plate_click3.disableInteractive();
          this.dust_snd1.play();
          this.arrow6.setVisible(false);
           this.p3_drag=false;
           this.plate3.setVisible(false);
           this.anims.create({key: 'dustbin_ani3',
            frames: this.anims.generateFrameNumbers('dustbin1', { start: 18, end: 22 }),
            framerate: 6,
            });
           this.dustbin1.play('dustbin_ani3');
           this.dustbin1.on('animationcomplete',function(){
           this.tweens.add({targets: this.dustbin1,x: 1000 ,duration: 800,ease: 'Quadratic',onComplete:() => {
            this.mam_clean2.play();
             this.mam_clean2.once('complete', function() {

            this.tweens.add({targets:this.dustbin2,x:300,ease: 'Quadratic',duration:800,onComplete:() => {}});
            this.tweens.add({targets:this.dustbin3,x:600,ease: 'Quadratic',duration:800,onComplete:() => {
            this.waste1.setInteractive({useHandCursor:true});
            
            }},);
        },this);
           }});        
           
             },this);

           this.time.delayedCall(8000, () =>  this.arrow7.setVisible(true), [], this);

          },this);

           /////////////////////////////////////////////////////////////////////////////////////

        this.dustbin2 = this.add.sprite(-300,350, "dustbin2").setOrigin(0.5, 0.5).setScale(0.8);

           /////////////////////////////////////////////////////////////////////////////////////

             this.w1_drag=false;
          this.waste1 = this.add.sprite(145,255, "waste2").setOrigin(0.5, 0.5).setScale(0.8);
          // this.waste1.setInteractive({useHandCursor:true});
          this.waste1.on('pointerdown',function(){
          this.pick.play();
      this.children.bringToTop(this.waste1);
          this.arrow7.setVisible(false);
          this.arrow8.setVisible(true);
          this.waste1.disableInteractive();
          this.waste_click3.setInteractive({useHandCursor:true});
          this.w1_drag=true;
          },this);

           this.waste_click3 = this.add.rectangle(300, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.waste_click3.on('pointerdown',function(){
          this.arrow8.setVisible(false);
          this.dust_snd2.play();
           this.w1_drag=false;
           this.waste1.setVisible(false);
           this.waste_click3.disableInteractive();
           this.anims.create({key: 'dustbin_ani21',
            frames: this.anims.generateFrameNumbers('dustbin2', { start: 0, end: 6 }),
            framerate: 6,
            });
           this.dustbin2.play('dustbin_ani21');
           this.dustbin2.on('animationcomplete',function(){                  
          this.waste2.setInteractive({useHandCursor:true});

             },this);

           this.time.delayedCall(500, () =>  this.arrow9.setVisible(true), [], this);
          },this);






        /////////////////////////////////////////////////////////////////////////////////////

             this.w2_drag=false;
          this.waste2 = this.add.sprite(255,245, "waste3").setOrigin(0.5, 0.5).setScale(0.8);
          // this.waste2.setInteractive({useHandCursor:true});
          this.waste2.on('pointerdown',function(){
      this.children.bringToTop(this.waste2);
          this.arrow9.setVisible(false);
          this.pick.play();
          this.arrow10.setVisible(true);
          this.waste2.disableInteractive();
          this.waste_click4.setInteractive({useHandCursor:true});
          this.w2_drag=true;
          },this);

           this.waste_click4 = this.add.rectangle(300, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.waste_click4.on('pointerdown',function(){
          this.arrow10.setVisible(false);
           this.w2_drag=false;
          this.dust_snd2.play();
           this.waste2.setVisible(false);
           this.waste_click4.disableInteractive();
           this.anims.create({key: 'dustbin_ani22',
            frames: this.anims.generateFrameNumbers('dustbin2', { start: 7, end: 12 }),
            framerate: 6,
            });
           this.dustbin2.play('dustbin_ani22');
           this.dustbin2.on('animationcomplete',function(){                  
          this.waste3.setInteractive({useHandCursor:true});

             },this);
           this.time.delayedCall(500, () =>  this.arrow11.setVisible(true), [], this);

          },this);



           ///////////////////////////////////////////


           this.w3_drag=false;
        this.waste3 = this.add.sprite(325,99, "waste1").setOrigin(0.5, 0.5).setScale(0.8);
         // this.waste3.setInteractive({useHandCursor:true});
          this.waste3.on('pointerdown',function(){
          this.pick.play();
      this.children.bringToTop(this.waste3);
          this.arrow11.setVisible(false);
          this.arrow12.setVisible(true);
          this.waste3.disableInteractive();
          this.waste_click5.setInteractive({useHandCursor:true});
          this.w3_drag=true;
          },this);

           this.waste_click5 = this.add.rectangle(300, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.waste_click5.on('pointerdown',function(){
          this.arrow12.setVisible(false);
           this.w3_drag=false;
          this.dust_snd2.play();
           this.waste3.setVisible(false);
           this.waste_click5.disableInteractive();
           this.anims.create({key: 'dustbin_ani23',
            frames: this.anims.generateFrameNumbers('dustbin2', { start: 13, end: 18 }),
            framerate: 6,
            });
           this.dustbin2.play('dustbin_ani23');
           this.dustbin2.on('animationcomplete',function(){                  
          this.waste4.setInteractive({useHandCursor:true});

             },this);
           this.time.delayedCall(500, () =>  this.arrow13.setVisible(true), [], this);

          },this);


           ///////////////////////////////////////////


          this.w4_drag=false;
         this.waste4 = this.add.sprite(470,116, "waste5").setOrigin(0.5, 0.5).setScale(0.8);
        // this.waste4.setInteractive({useHandCursor:true});
          this.waste4.on('pointerdown',function(){
          this.pick.play();
      this.children.bringToTop(this.waste4);
          this.waste4.disableInteractive();
          this.waste_click6.setInteractive({useHandCursor:true});
          this.arrow13.setVisible(false);
          this.arrow14.setVisible(true);
          this.w4_drag=true;
          },this);

           this.waste_click6 = this.add.rectangle(300, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.waste_click6.on('pointerdown',function(){
           this.w4_drag=false;
          this.arrow14.setVisible(false);
           this.waste4.setVisible(false);
           this.waste_click6.disableInteractive();
          this.dust_snd2.play();
           this.anims.create({key: 'dustbin_ani24',
            frames: this.anims.generateFrameNumbers('dustbin2', { start: 19, end: 24 }),
            framerate: 6,
            });
           this.dustbin2.play('dustbin_ani24');
           this.dustbin2.on('animationcomplete',function(){                  
          this.waste5.setInteractive({useHandCursor:true});

             },this);
           this.time.delayedCall(500, () =>  this.arrow15.setVisible(true), [], this);

          },this);

           /////////////////////////////////////////////////

        this.dustbin3 = this.add.sprite(1000,350, "dustbin3").setOrigin(0.5, 0.5).setScale(0.8);

         this.w5_drag=false;
         this.waste5 = this.add.sprite(500,200, "waste7").setOrigin(0.5, 0.5).setScale(0.8);
        // this.waste5.setInteractive({useHandCursor:true});
          this.waste5.on('pointerdown',function(){
      this.children.bringToTop(this.waste5);
          this.waste5.disableInteractive();
          this.waste_click7.setInteractive({useHandCursor:true});
          this.pick.play();
          this.arrow15.setVisible(false);
          this.arrow16.setVisible(true);
          this.w5_drag=true;
          },this);

           this.waste_click7 = this.add.rectangle(600, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.waste_click7.on('pointerdown',function(){
          this.arrow16.setVisible(false);
           this.w5_drag=false;
          this.dust_snd2.play();
           this.waste5.setVisible(false);
           this.waste_click7.disableInteractive();
           this.anims.create({key: 'dustbin_ani31',
            frames: this.anims.generateFrameNumbers('dustbin3', { start: 0, end: 6 }),
            framerate: 6,
            });
           this.dustbin3.play('dustbin_ani31');
           this.dustbin3.on('animationcomplete',function(){                  
          this.waste6.setInteractive({useHandCursor:true});

             },this);
           this.time.delayedCall(500, () =>  this.arrow17.setVisible(true), [], this);

          },this);



         this.w6_drag=false;
        this.waste6 = this.add.sprite(550,230, "waste6").setOrigin(0.5, 0.5).setScale(0.8);
        // this.waste6.setInteractive({useHandCursor:true});
          this.waste6.on('pointerdown',function(){
      this.children.bringToTop(this.waste6);
          this.waste6.disableInteractive();
          this.waste_click8.setInteractive({useHandCursor:true});
          this.arrow17.setVisible(false);
          this.pick.play();
          this.arrow18.setVisible(true);
          this.w6_drag=true;
          },this);

           this.waste_click8 = this.add.rectangle(600, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.waste_click8.on('pointerdown',function(){
           this.w6_drag=false;
          this.arrow18.setVisible(false);
           this.waste6.setVisible(false);
          this.dust_snd2.play();
           this.waste_click8.disableInteractive();
           this.anims.create({key: 'dustbin_ani32',
            frames: this.anims.generateFrameNumbers('dustbin3', { start: 7, end: 12 }),
            framerate: 6,
            });
           this.dustbin3.play('dustbin_ani32');
           this.dustbin3.on('animationcomplete',function(){                  
          this.waste7.setInteractive({useHandCursor:true});

             },this);
           this.time.delayedCall(500, () =>  this.arrow19.setVisible(true), [], this);

          },this);


          this.w7_drag=false;
        this.waste7 = this.add.sprite(575,87, "waste4").setOrigin(0.5, 0.5).setScale(0.8);
        // this.waste7.setInteractive({useHandCursor:true});
          this.waste7.on('pointerdown',function(){
      this.children.bringToTop(this.waste7);
          this.waste7.disableInteractive();
          this.pick.play();
          this.waste_click9.setInteractive({useHandCursor:true});
          this.arrow19.setVisible(false);
          this.arrow20.setVisible(true);
          this.w7_drag=true;
          },this);

           this.waste_click9 = this.add.rectangle(600, 380, 200, 145, 0xff0000,0).setOrigin(0.5);
           this.waste_click9.on('pointerdown',function(){
          this.arrow20.setVisible(false);
          this.dust_snd2.play();
           this.w7_drag=false;
           this.waste7.setVisible(false);
           this.waste_click9.disableInteractive();
           this.anims.create({key: 'dustbin_ani33',
            frames: this.anims.generateFrameNumbers('dustbin3', { start: 13, end: 18 }),
            framerate: 6,
            });
           this.dustbin3.play('dustbin_ani33');
           this.dustbin3.on('animationcomplete',function(){                  
            this.tweens.add({targets:this.dustbin2,y:1000,ease: 'Quadratic',duration:800,onComplete:() => {}});
            this.tweens.add({targets:this.dustbin3,y:1000,ease: 'Quadratic',duration:800,onComplete:() => {
              this.mam_clean3.play();
             this.mam_clean3.once('complete', function() {
              
          this.come_ani.play();
            this.tweens.add({targets:this.spray_water,x:300,ease: 'Quadratic',duration:500,onComplete:() => {
          this.spray_water.setInteractive({useHandCursor:true,pixelPerfect:true});
          this.arrow21.setVisible(true);
                }});
          },this);
                }});
             },this);

          },this);

           /////////////////////////////////////////////////////
          this.f_water = this.add.sprite(350,240, "f_water").setOrigin(0.5, 0.5).setScale(0.8);
          this.f_water.alpha=0;
            
          this.spray_water = this.add.sprite(700,250, "spray_water").setOrigin(0.5, 0.5).setScale(0.8);
          this.spray_water.on('pointerdown',function(){
          this.pick.play();
          this.arrow21.setVisible(false);
          this.spray_water.disableInteractive();
          this.dust_snd2.play();
          this.water_spray_snd.play();

          this.anims.create({key: 'spray_water_ani',
            frames: this.anims.generateFrameNumbers('spray_water', { start: 0, end: 7 }),
            framerate: 6,
            repeat:2,
            });
           this.spray_water.play('spray_water_ani');
            this.tweens.add({targets:this.f_water,alpha:1,ease: 'Quadratic',duration:2000,onComplete:() => {
          this.water_spray_snd.stop();
          this.spray_water.setVisible(false);
          this.come_ani.play();
            this.tweens.add({targets:this.f_towel,x:650,ease: 'Quadratic',duration:500,onComplete:() => {
          this.f_towel.setInteractive({useHandCursor:true});
          this.arrow22.setVisible(true);

            }});
            }});
           
          },this);


           /////////////////////////////////////////////////////


          this.towel_drag=false;
          this.f_towel = this.add.sprite(1000,200, "f_towel").setOrigin(0.5, 0.5).setScale(0.6);
          this.f_towel.on('pointerdown',function(){
          this.f_towel.disableInteractive();
          this.arrow22.setVisible(false);
          this.arrow23.setVisible(true);
          this.towel_drag=true;
          },this);  


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



         var arrow_Posx = [165,400,370,400,615,400,147,300,250,300,325,300,465,300,500,600,545,600,570,600,560,650,400,210];
         var arrow_Posy = [100,290,115,290,115,290,200,290,180,290,40,290,50,290,145,290,160,290,30,290,200,150,250,50];
            
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
        this.play_btn.on('pointerup',this.enterRoom,this);
          this.play_btn.on('pointerdown',function(){            
          this.anims.remove('dustbin_ani1');
          this.anims.remove('dustbin_ani4');
          this.anims.remove('dustbin_ani2');
          this.anims.remove('dustbin_ani3');
          this.anims.remove('dustbin_ani21');
          this.anims.remove('dustbin_ani22');
          this.anims.remove('dustbin_ani23');
          this.anims.remove('dustbin_ani24');
          this.anims.remove('dustbin_ani31');
          this.anims.remove('dustbin_ani32');
          this.anims.remove('dustbin_ani33');
          this.anims.remove('spray_water_ani');
          this.anims.remove('arrow');
                    },this);

        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0.85);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',this.morebtnLink,this);

        this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
            this.mam_clean1.play();

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
          
  hitSprite_group_tool1(dragCircle_1, hitCircle_1) {
          this.arrow23.setVisible(false);
  hitCircle_1.destroy();
    if (!hitCircle_1 || !hitCircle_1.body) {
  }
          this.spray_clean_snd.play();
  this.hitSprite_tool1_count++;
  if (this.hitSprite_tool1_count === 1) {
    // this.f_water.alpha = 0;
    // this.dry1.alpha = 0;
    // this.dry2.alpha = 0;
  }
  const stepSize = 1 / Main.tool_1X.length;
  this.f_water.alpha -= stepSize;
  this.dry2.alpha -= stepSize;
  this.dry1.alpha -= stepSize;
  this.f_water.alpha -= stepSize;
  if (this.hitSprite_tool1_count >= Main.tool_1X.length) {
          this.spray_clean_snd.stop();
    this.towel_drag = false;
    this.tweens.add({targets:this.f_towel,x:1000,ease: 'Quadratic',duration:800,onComplete:() => {
      
          this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});         
        
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
       var state = 'gameover';
       MyShowAD(this, state);
    }
        });
   }
  update() {
  // console.log(this.input.x + ':' + this.input.y);

    if (this.towel_drag) {
      this.f_towel.x = this.game.input.activePointer.x;
      this.f_towel.y = this.game.input.activePointer.y;
       
            this.dragCircle_1.x = this.input.activePointer.x;
            this.dragCircle_1.y = this.input.activePointer.y;

        for (var i = 0; i < Main.tool_1X.length; i++) {
              this.physics.world.collide(this.dragCircle_1, this.hitGroup_tool1.getChildren()[i], this.hitSprite_group_tool1, null, this);
            }
    }

    if (this.p1_drag) {
      this.plate1.x = this.game.input.activePointer.x;
      this.plate1.y = this.game.input.activePointer.y;
     
    }

     if (this.p1_drag1) {
      this.plate4_clean.x = this.game.input.activePointer.x;
      this.plate4_clean.y = this.game.input.activePointer.y;
     
    }
    if (this.p2_drag) {
      this.plate2.x = this.game.input.activePointer.x;
      this.plate2.y = this.game.input.activePointer.y;
     
    }
    if (this.p3_drag) {
      this.plate3.x = this.game.input.activePointer.x;
      this.plate3.y = this.game.input.activePointer.y;
     
    }
    if (this.w1_drag) {
      this.waste1.x = this.game.input.activePointer.x;
      this.waste1.y = this.game.input.activePointer.y;
     
    }
    if (this.w2_drag) {
      this.waste2.x = this.game.input.activePointer.x;
      this.waste2.y = this.game.input.activePointer.y;
     
    }
    if (this.w3_drag) {
      this.waste3.x = this.game.input.activePointer.x;
      this.waste3.y = this.game.input.activePointer.y;
     
    }
    if (this.w4_drag) {
      this.waste4.x = this.game.input.activePointer.x;
      this.waste4.y = this.game.input.activePointer.y;
     
    }
    if (this.w5_drag) {
      this.waste5.x = this.game.input.activePointer.x;
      this.waste5.y = this.game.input.activePointer.y;
     
    }
    if (this.w6_drag) {
      this.waste6.x = this.game.input.activePointer.x;
      this.waste6.y = this.game.input.activePointer.y;
     
    }
    if (this.w7_drag) {
      this.waste7.x = this.game.input.activePointer.x;
      this.waste7.y = this.game.input.activePointer.y;
     
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