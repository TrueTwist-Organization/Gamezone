
export default class final_screen extends Phaser.Scene {
  logo;
  musicBtn;
  music;
 isScenePaused = false;

  constructor() {
    super("final_screen");
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
    this.f_bg = this.add.sprite(400, 252, "f_bg");
    this.levelGroup.add(this.f_bg);
      
const soundManager = this.sound;
soundManager.volume = 0.5;
       this.madam = this.add.sprite(170, 230, "mam_speak").setOrigin(0.5, 0.5).setScale(0.8);
       this.madam.setScale(-this.madam.scaleX, this.madam.scaleY);


                this.anims.create({key: "mam_speak1_1",frames: this.anims.generateFrameNames("mam_speak", {start: 0, end: 5,}),
                 frameRate: 7,
                 repeat:-1, });
            
          this.mam_food1 = this.sound.add('mam_food1');
          this.mam_food2 = this.sound.add('mam_food2');
          this.pick = this.sound.add('pick');
          this.food_pick1 = this.sound.add('food_pick1');
          this.food_pick2 = this.sound.add('food_pick2');
          this.run_1 = this.sound.add('run_1');


          this.mam_food1.once('complete', function() {
            this.madam.stop();
            this.madam.setFrame(0);
          this.arrow1.setVisible(true);
          this.panda.setInteractive({useHandCursor:true});
           this.location1.play("location1_animation");
         },this);


       this.location1 = this.add.sprite(200, 450, "location").setOrigin(0.5, 0.5).setScale(0.8);
       this.location2 = this.add.sprite(320, 450, "location").setOrigin(0.5, 0.5).setScale(0.8);
       this.location3 = this.add.sprite(440, 450, "location").setOrigin(0.5, 0.5).setScale(0.8);
       this.location4 = this.add.sprite(560, 450, "location").setOrigin(0.5, 0.5).setScale(0.8);  

         this.rabit = this.add.sprite(480, 130, "rabit").setOrigin(0.5, 0.5).setScale(0.45);
         this.rabit.on('pointerdown',function(){
            this.pick.play();
            this.pick.once('complete', function() {
            },this);
         this.arrow4.setVisible(false);
         this.rabit.disableInteractive();
         this.tweens.add({targets:this.rabit,scaleX:0.42,scaleY:0.42,x:560,y:390,ease: 'Quadratic',duration:500,onComplete:() => {
           this.run_1.play();
         this.location4.visible=false;
        this.tweens.add({targets:this.play_btn1,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
         }});

          },this);


         this.panda = this.add.sprite(340, 280, "panda").setOrigin(0.5, 0.5).setScale(0.8);
         this.panda.on('pointerdown',function(){
            this.pick.play();
            this.pick.once('complete', function() {
            },this);
         this.panda.disableInteractive();
         this.arrow1.setVisible(false);
         this.tweens.add({targets:this.panda,scaleX:0.7,scaleY:0.7,x:200,y:410,ease: 'Quadratic',duration:500,onComplete:() => {
           this.run_1.play();
        this.monkey.setInteractive({useHandCursor:true});
         this.arrow2.setVisible(true);
        this.location1.visible=false;
           this.location2.play("location1_animation");
         }});

          },this);

        this.monkey = this.add.sprite(480, 270, "monkey").setOrigin(0.5, 0.5).setScale(0.8);
         this.monkey.on('pointerdown',function(){
            this.pick.play();
            this.pick.once('complete', function() {
            },this);
         this.arrow2.setVisible(false);
         this.monkey.disableInteractive();
         this.tweens.add({targets:this.monkey,scaleX:0.7,scaleY:0.7,x:320,y:400,ease: 'Quadratic',duration:500,onComplete:() => {
           this.run_1.play();
         this.arrow3.setVisible(true);
        this.rat.setInteractive({useHandCursor:true});
           this.location2.visible=false;
           this.location3.play("location1_animation");
         }});

          },this);

        this.rat = this.add.sprite(630, 270, "rat").setOrigin(0.5, 0.5).setScale(0.8);
         this.rat.on('pointerdown',function(){
            this.pick.play();
            this.pick.once('complete', function() {
            },this);
         this.arrow3.setVisible(false);
         this.rat.disableInteractive();
         this.tweens.add({targets:this.rat,scaleX:0.7,scaleY:0.7,x:440,y:400,ease: 'Quadratic',duration:500,onComplete:() => {
           this.run_1.play();
         this.rabit.setInteractive({useHandCursor:true});
         this.arrow4.setVisible(true);
            this.location3.visible=false;
           this.location4.play("location1_animation");
         }});

          },this);
      

           this.anims.create({key: 'location1_animation',
                frames: this.anims.generateFrameNumbers('location'),
                frameRate: 20,
                repeat: -1
            });

           this.anims.create({key: 'location2_animation',
                frames: this.anims.generateFrameNumbers('location'),
                frameRate: 20,
                repeat: -1
            });

           this.anims.create({key: 'location3_animation',
                frames: this.anims.generateFrameNumbers('location'),
                frameRate: 20,
                repeat: -1
            });

           this.anims.create({key: 'location4_animation',
                frames: this.anims.generateFrameNumbers('location'),
                frameRate: 20,
                repeat: -1
            });


           //**************************************************************************************//


           this.bg_group2 = this.add.container();
           this.f_bg1 = this.add.sprite(400, 252, "f_bg1");
           this.bg_group2.add(this.f_bg1);
           this.bg_group2.visible=false;

           //**************************************************************************************//
           this.food4 = this.add.sprite(220, 100, "food4").setOrigin(0.5, 0.5);
           this.food4.on('pointerdown',function(){
           this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick1.play();
            },this);
           this.food4.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'food4_ani',
            frames: this.anims.generateFrameNumbers('food4', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.food4.play('food4_ani');
          this.food4.on('animationcomplete',function(){            
           this.food4.visible=false;
           this.food1_1.visible=true;
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon2');
            this.rat_food.setInteractive({useHandCursor:true,pixelPerfect:true});
            this.rat_food.visible=true;    
           },this);

           },this);

           //////////////////////////////////
           this.food4_1 = this.add.sprite(220, 100, "food4").setOrigin(0.5, 0.5);
           this.food4_1.visible=false;
           this.food4_1.on('pointerdown',function(){
           this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick1.play();
            },this);
           this.food4_1.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'food4_1_ani1',
            frames: this.anims.generateFrameNumbers('food4', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.food4_1.play('food4_1_ani1');
          this.food4_1.on('animationcomplete',function(){            
           this.food4_1.visible=false;
           this.food1_1.visible=true;
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon2');
            this.rat_food_ani_1.setInteractive({useHandCursor:true,pixelPerfect:true});
           },this);

           },this);
           //////////////////////////////////

           this.food1_4 = this.add.sprite(680, 100, "food1").setOrigin(0.5, 0.5);
           this.food1_4.visible=false;
           this.food1_4.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick1.play();
            },this);
           this.food1_4.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'food1_ani4_2',
            frames: this.anims.generateFrameNumbers('food1', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.food1_4.play('food1_ani4_2');
          this.food1_4.on('animationcomplete',function(){           
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon5');
           this.rat_food_ani_1.visible=false
            this.rat_food_ani_2.visible=true
            this.rat_food_ani_2.setInteractive({useHandCursor:true,pixelPerfect:true});           
          },this);

           },this);
           //////////////////////////////////

           this.food3 = this.add.sprite(375, 100, "food3").setOrigin(0.5, 0.5);
           this.food3.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick1.play();
            },this);
           this.food3.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'food3_ani',
            frames: this.anims.generateFrameNumbers('food3', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.food3.play('food3_ani');
          this.food3.on('animationcomplete',function(){
            
           this.food3.visible=false;
           this.food3_3.visible=true;
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon3');            
            this.rabit_food.setInteractive({useHandCursor:true,pixelPerfect:true});
          },this);

           },this);
            
           this.food2 = this.add.sprite(525, 100, "food2").setOrigin(0.5, 0.5);
           this.food2.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick1.play();
            },this);
           this.food2.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'food2_ani',
            frames: this.anims.generateFrameNumbers('food2', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.food2.play('food2_ani');
          this.food2.on('animationcomplete',function(){            
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon4');
            this.rat_food2.visible=true;
            this.rat_food.visible=false;
            this.rat_food2.setInteractive({useHandCursor:true,pixelPerfect:true});
          },this);

           },this);

           this.food1 = this.add.sprite(680, 100, "food1").setOrigin(0.5, 0.5);
           this.food1.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick1.play();
            },this);
           this.food1.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'food1_ani',
            frames: this.anims.generateFrameNumbers('food1', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.food1.play('food1_ani');
          this.food1.on('animationcomplete',function(){           
           this.food1_4.visible=true;
           this.food1.visible=false;
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon5');
           this.rabit_food.visible=false
            this.rabit_food2.visible=true
            this.rabit_food2.setInteractive({useHandCursor:true,pixelPerfect:true});           
          },this);

           },this);

            this.food1_1 = this.add.sprite(220, 100, "food4").setOrigin(0.5, 0.5);
           this.food1_1.visible=false;
           this.food1_1.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick1.play();
            },this);
           this.food1_1.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'food1_1_ani',
            frames: this.anims.generateFrameNumbers('food4', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.food1_1.play('food1_1_ani');
          this.food1_1.on('animationcomplete',function(){

           this.food1_1.visible=false;
           this.food4_1.visible=true;
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon2');
            this.panda_food.setInteractive({useHandCursor:true,pixelPerfect:true});           
          },this);

           },this);

           this.food3_3 = this.add.sprite(375, 100, "food3_3").setOrigin(0.5, 0.5);
           this.food3_3.visible=false;
           this.food3_3.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick1.play();
            },this);
           this.food3_3.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'food3_3_ani',
            frames: this.anims.generateFrameNumbers('food3_3', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.food3_3.play('food3_3_ani');
          this.food3_3.on('animationcomplete',function(){
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon3');            
            this.panda_food.visible=false;
            this.panda_food2.visible=true;
            this.panda_food2.setInteractive({useHandCursor:true,pixelPerfect:true});
          },this);

           },this);

           this.bg_group2.add(this.food4);
           this.bg_group2.add(this.food4_1);
           this.bg_group2.add(this.food3);
           this.bg_group2.add(this.food2);
           this.bg_group2.add(this.food1);
           this.bg_group2.add(this.food1_4);
           this.bg_group2.add(this.food1_1);
           this.bg_group2.add(this.food3_3);

           //**************************************************************************************//


           this.rat_food = this.add.sprite(490, 300, "rat_food").setOrigin(0.5, 0.5); 
           this.rat_food.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick2.play();
            },this);
           this.rat_food.disableInteractive();            
           this.spoon1.visible=false;
           this.anims.create({key: 'rat_food_ani1',
            frames: this.anims.generateFrameNumbers('rat_food', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.rat_food.play('rat_food_ani1');
           this.rat_food.on('animationcomplete',function(){
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon1');
           this.rat_pop1.setTexture('food_pop2');
           this.food2.setInteractive({useHandCursor:true,pixelPerfect:true});
          },this);

           },this);          
           this.bg_group2.add(this.rat_food);


            this.rat_food2 = this.add.sprite(490, 300, "rat_food",8).setOrigin(0.5, 0.5); 
            this.rat_food2.visible=false;
           this.rat_food2.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick2.play();
            },this);
           this.rat_food2.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'rat_food2_ani2',
            frames: this.anims.generateFrameNumbers('rat_food', { start: 9, end: 17 }),
            frameRate: 10,
            });
           this.rat_food2.play('rat_food2_ani2');
           this.rat_food2.on('animationcomplete',function(){
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon1');
            this.tweens.add({targets: this.rat_food2,x: 1000 ,duration: 800,delay:200,ease: 'Quadratic',onComplete:() => {
            this.tweens.add({targets: this.rabit_food,x: 490 ,duration: 800,ease: 'Quadratic',onComplete:() => {
           this.rat_pop1.setTexture('food_pop3');
           this.food3.setInteractive({useHandCursor:true,pixelPerfect:true});
                }});
                }});
          },this);
           },this);          
           this.bg_group2.add(this.rat_food2);

           //**************************************************************************************//

           this.rabit_food = this.add.sprite(1000, 300, "rabit_food").setOrigin(0.5, 0.5); 
           // this.rabit_food = this.add.sprite(490, 300, "rabit_food").setOrigin(0.5, 0.5); 
           this.rabit_food.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick2.play();
            },this);
           this.rabit_food.disableInteractive();           
           this.spoon1.visible=false;
           this.anims.create({key: 'rabit_food_ani1',
            frames: this.anims.generateFrameNumbers('rabit_food', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.rabit_food.play('rabit_food_ani1');
          this.rabit_food.on('animationcomplete',function(){            
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon1');
           this.rat_pop1.setTexture('food_pop4');
           this.food1.setInteractive({useHandCursor:true,pixelPerfect:true});
          },this);
           },this);          
           this.bg_group2.add(this.rabit_food);


           this.rabit_food2 = this.add.sprite(490, 300, "rabit_food",8).setOrigin(0.5, 0.5); 
           this.rabit_food2.visible=false;
           this.rabit_food2.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick2.play();
            },this);
           this.rabit_food2.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'rabit_food_ani2',
            frames: this.anims.generateFrameNumbers('rabit_food', { start: 9, end: 16 }),
            frameRate: 10,
            });
           this.rabit_food2.play('rabit_food_ani2');
           this.rabit_food2.on('animationcomplete',function(){
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon1');
           this.tweens.add({targets: this.rabit_food2,x: 1000 ,duration: 800,delay:200,ease: 'Quadratic',onComplete:() => {
            this.tweens.add({targets: this.panda_food,x: 490 ,duration: 800,ease: 'Quadratic',onComplete:() => {
           this.rat_pop1.setTexture('food_pop1');
           this.food1_1.setInteractive({useHandCursor:true,pixelPerfect:true});
                }});
                }});
          },this);

           },this);          
           this.bg_group2.add(this.rabit_food2);


           //**************************************************************************************//

            this.panda_food = this.add.sprite(1000, 300, "panda_food").setOrigin(0.5, 0.5); 
           // this.panda_food = this.add.sprite(490, 300, "panda_food").setOrigin(0.5, 0.5); 
           this.panda_food.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick2.play();
            },this);
           this.panda_food.disableInteractive();           
           this.spoon1.visible=false;
           this.anims.create({key: 'panda_food_ani1',
            frames: this.anims.generateFrameNumbers('panda_food', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.panda_food.play('panda_food_ani1');
          this.panda_food.on('animationcomplete',function(){           
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon1');
           this.rat_pop1.setTexture('food_pop3');
           this.food3_3.setInteractive({useHandCursor:true,pixelPerfect:true});
          },this);
           },this);          
           this.bg_group2.add(this.panda_food);


           this.panda_food2 = this.add.sprite(490, 300, "panda_food",8).setOrigin(0.5, 0.5); 
           this.panda_food2.visible=false;
           this.panda_food2.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick2.play();
            },this);
           this.panda_food2.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'panda_food2_ani1',
            frames: this.anims.generateFrameNumbers('panda_food', { start: 9, end: 16 }),
            frameRate: 10,
            });
           this.panda_food2.play('panda_food2_ani1');
           this.panda_food2.on('animationcomplete',function(){            
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon1');
            this.tweens.add({targets: this.panda_food2,x: 1000 ,duration: 800,delay:200,ease: 'Quadratic',onComplete:() => {
            this.tweens.add({targets: this.rat_food_ani_1,x: 490 ,duration: 800,ease: 'Quadratic',onComplete:() => {
           this.rat_pop1.setTexture('food_pop1');
           this.food4_1.setInteractive({useHandCursor:true,pixelPerfect:true});

          //   this.time.delayedCall(500, () => this.final.setVisible(true), [], this);
          //   this.time.delayedCall(500, () => this.plate1.setVisible(true), [], this);
          //   this.time.delayedCall(500, () => this.plate2.setVisible(true), [], this);
          //   this.time.delayedCall(500, () => this.plate3.setVisible(true), [], this);
          //   this.time.delayedCall(500, () => this.plate4.setVisible(true), [], this);
              
         
          // this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,delay:1000,});

                }});
                }});

          },this);
           },this);          
           this.bg_group2.add(this.panda_food2);

                this.spoon_drag=false;

           //**************************************************************************************//

           this.rat_food_ani_1 = this.add.sprite(1000, 300, "rat_food_ani").setOrigin(0.5, 0.5); 
           this.rat_food_ani_1.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick2.play();
            },this);
           this.rat_food_ani_1.disableInteractive();            
           this.spoon1.visible=false;
           this.anims.create({key: 'rat_food_ani_1_key',
            frames: this.anims.generateFrameNumbers('rat_food_ani', { start: 0, end: 8 }),
            frameRate: 10,
            });
           this.rat_food_ani_1.play('rat_food_ani_1_key');
           this.rat_food_ani_1.on('animationcomplete',function(){
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon1');
           this.rat_pop1.setTexture('food_pop4');
            this.food1_4.setInteractive({useHandCursor:true,pixelPerfect:true});           
          },this);

           },this);          
           this.bg_group2.add(this.rat_food_ani_1);

           
            this.rat_food_ani_2 = this.add.sprite(490, 300, "rat_food_ani",8).setOrigin(0.5, 0.5); 
            this.rat_food_ani_2.visible=false;
           this.rat_food_ani_2.on('pointerdown',function(){
            this.pick.play();
             this.pick.once('complete', function() {
           this.food_pick2.play();
            },this);
           this.rat_food_ani_2.disableInteractive();
           this.spoon1.visible=false;
           this.anims.create({key: 'rat_food_ani_2',
            frames: this.anims.generateFrameNumbers('rat_food_ani', { start: 9, end: 17 }),
            frameRate: 10,
            });
           this.rat_food_ani_2.play('rat_food_ani_2');
           this.rat_food_ani_2.on('animationcomplete',function(){
           this.spoon1.visible=true;
           this.spoon1.setTexture('spoon1');
           this.spoon_drag=false;
                this.rat_pop1.visible=false;
            this.tweens.add({targets: this.spoon1,x: 1000 ,duration: 800,delay:200,ease: 'Quadratic',onComplete:() => {}});
            this.tweens.add({targets: this.rat_food_ani_2,x: 1000 ,duration: 800,delay:200,ease: 'Quadratic',onComplete:() => {
                
            this.time.delayedCall(500, () => this.final.setVisible(true), [], this);
            this.time.delayedCall(500, () => this.plate1.setVisible(true), [], this);
            this.time.delayedCall(500, () => this.plate2.setVisible(true), [], this);
            this.time.delayedCall(500, () => this.plate3.setVisible(true), [], this);
            this.time.delayedCall(500, () => this.plate4.setVisible(true), [], this);
              
         
          this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,delay:1000,});

                }});
          },this);
           },this);          
           this.bg_group2.add(this.rat_food_ani_2);
           //**************************************************************************************//

           this.rat_pop1 = this.add.sprite(200, 350, "food_pop1").setOrigin(0.5, 0.5);
           this.rat_pop1.visible=false;
           this.bg_group2.add(this.rat_pop1);


           this.spoon1 = this.add.sprite(630, 320, "spoon1").setOrigin(0.5, 0.5);
           this.spoon1.on('pointerdown',function(){
           this.food4.setInteractive({useHandCursor:true,pixelPerfect:true});
           this.pick.play();
           this.spoon1.disableInteractive();
           this.rat_pop1.visible=true;
           this.spoon_drag=true;
           this.arrow5.visible=false;
           },this);
           this.bg_group2.add(this.spoon1);


              this.final = this.add.sprite(400, 252, "final");
              this.final.setVisible(false);
           this.plate4 = this.add.sprite(230, 430, "plate4").setOrigin(0.5, 0.5);
           this.plate3 = this.add.sprite(390, 380, "panda_food",16).setOrigin(0.5, 0.5).setScale(0.4);
           this.plate2 = this.add.sprite(540, 380, "rabit_food",16).setOrigin(0.5, 0.5).setScale(0.4);
           this.plate1 = this.add.sprite(700, 380, "rat_food",17).setOrigin(0.5, 0.5).setScale(0.4);
              this.plate4.setVisible(false);
              this.plate3.setVisible(false);
              this.plate2.setVisible(false);
              this.plate1.setVisible(false);


           //**************************************************************************************//
       

             var arrow_Posx = [340,480,630,480,630];
             var arrow_Posy = [150,150,150,50,280];
            
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



        this.play_btn1=this.add.image(730,435,'btn5').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn1.setInteractive({ useHandCursor: true });
        this.play_btn1.on('pointerover',function(){this.play_btn1.setScale(0.95)},this);
        this.play_btn1.on('pointerout',function(){this.play_btn1.setScale(0.85)},this);
        this.play_btn1.on('pointerup',function(){
        this.bg_group2.visible=true;
           this.play_btn1.visible=false;
            this.mam_food2.play();
        this.mam_food2.once('complete', function() {
           this.spoon1.setInteractive({useHandCursor:true,pixelPerfect:true});
            this.arrow5.visible=true;
        },this);
        },this);

        this.play_btn=this.add.image(730,435,'btn5').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.95)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerup',this.enterRoom,this);
        this.play_btn.on('pointerdown',function(){
             this.anims.remove('mam_speak1_1');
             this.anims.remove('rat_food_ani_1_key');
             this.anims.remove('rat_food_ani_2');
             this.anims.remove('food1_ani4_2');
             this.anims.remove('food4_1_ani1');
this.anims.remove('location1_animation');
this.anims.remove('location2_animation');
this.anims.remove('location3_animation');
this.anims.remove('location4_animation');
this.anims.remove('food4_ani');
this.anims.remove('food3_ani');
this.anims.remove('food2_ani');
this.anims.remove('food1_ani');
this.anims.remove('food1_1_ani');
this.anims.remove('food3_3_ani');
this.anims.remove('rat_food_ani1');
this.anims.remove('rat_food2_ani2');
this.anims.remove('rabit_food_ani1');
this.anims.remove('rabit_food_ani2');
this.anims.remove('panda_food_ani1');
this.anims.remove('panda_food2_ani1');
this.anims.remove('arrow');

        },this);
        
        this.more_btn=this.add.image(75,435,'btn4').setOrigin(0.5, 0.5).setScale(0.85);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.95)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',this.morebtnLink,this);

         this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
            this.mam_food1.play();
               this.madam.play("mam_speak1_1");
        
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
       var state = 'final_screen1';
       MyShowAD(this, state);
    }
        });
   }
 update() {
    if (this.spoon_drag) {
      //console.log(this.cursorPointer.id)
      this.spoon1.x = this.game.input.activePointer.x;
      this.spoon1.y = this.game.input.activePointer.y;
     
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