var Main = {
         red_tool_1X:[247,216,208,204,206,223,238,238,254,277,279,278,252,217,192,169,163,171,179,205,250,279,177,
            189,237,173,158,255,262,298,308,307,306,311,312,309,326,351,364,394,412,429,443,472,481,485,485,486,
            505,523,541,542,507,543,545,529,506,483,464,435,417,397,369,358,326,318,311,311,313,332,330,327,325,
            332,339,363,377,375,351,350,349,332,353,353,333,374,376,413,432,440,387,393,384,362,340,360,429,431,
            455,456,484,496,481,455,436,422,446,461,407,369,427,407,407,403,381,428,455,441,439,433,428,416,435,
            525,529,538,554,559,561,560,560,531,516,481,443,404,371,375,365,383,352,327,187,197,],
        
        red_tool_1Y:[307,306,326,352,392,394,367,345,334,337,361,371,390,404,388,351,330,301,293,292,290,316,391,
            403,363,366,377,362,362,352,345,329,305,289,270,246,238,234,239,241,243,245,248,254,264,287,302,
            311,323,334,340,341,366,371,394,401,401,396,397,405,406,403,403,403,404,401,396,381,365,347,339,
            335,312,293,262,264,274,292,313,333,359,368,386,387,407,410,413,416,416,412,373,338,327,305,260,
            283,264,272,308,322,356,345,325,346,369,383,386,373,360,347,334,322,303,271,253,290,269,285,319,
            306,312,359,350,353,371,408,415,393,372,349,328,314,315,242,233,222,221,363,383,392,409,371,318,356,],

        blue_tool_1X:[247,216,208,204,206,223,238,238,254,277,279,278,252,217,192,169,163,171,179,205,250,279,177,
            189,237,173,158,255,262,298,308,307,306,311,312,309,326,351,364,394,412,429,443,472,481,485,485,486,
            505,523,541,542,507,543,545,529,506,483,464,435,417,397,369,358,326,318,311,311,313,332,330,327,325,
            332,339,363,377,375,351,350,349,332,353,353,333,374,376,413,432,440,387,393,384,362,340,360,429,431,
            455,456,484,496,481,455,436,422,446,461,407,369,427,407,407,403,381,428,455,441,439,433,428,416,435,
            525,529,538,554,559,561,560,560,531,516,481,443,404,371,375,365,383,352,327,187,197,],
        
        blue_tool_1Y:[307,306,326,352,392,394,367,345,334,337,361,371,390,404,388,351,330,301,293,292,290,316,391,
            403,363,366,377,362,362,352,345,329,305,289,270,246,238,234,239,241,243,245,248,254,264,287,302,
            311,323,334,340,341,366,371,394,401,401,396,397,405,406,403,403,403,404,401,396,381,365,347,339,
            335,312,293,262,264,274,292,313,333,359,368,386,387,407,410,413,416,416,412,373,338,327,305,260,
            283,264,272,308,322,356,345,325,346,369,383,386,373,360,347,334,322,303,271,253,290,269,285,319,
            306,312,359,350,353,371,408,415,393,372,349,328,314,315,242,233,222,221,363,383,392,409,371,318,356,],


        green_tool_1X:[247,216,208,204,206,223,238,238,254,277,279,278,252,217,192,169,163,171,179,205,250,279,177,
            189,237,173,158,255,262,298,308,307,306,311,312,309,326,351,364,394,412,429,443,472,481,485,485,486,
            505,523,541,542,507,543,545,529,506,483,464,435,417,397,369,358,326,318,311,311,313,332,330,327,325,
            332,339,363,377,375,351,350,349,332,353,353,333,374,376,413,432,440,387,393,384,362,340,360,429,431,
            455,456,484,496,481,455,436,422,446,461,407,369,427,407,407,403,381,428,455,441,439,433,428,416,435,
            525,529,538,554,559,561,560,560,531,516,481,443,404,371,375,365,383,352,327,187,197,],
        
        green_tool_1Y:[307,306,326,352,392,394,367,345,334,337,361,371,390,404,388,351,330,301,293,292,290,316,391,
            403,363,366,377,362,362,352,345,329,305,289,270,246,238,234,239,241,243,245,248,254,264,287,302,
            311,323,334,340,341,366,371,394,401,401,396,397,405,406,403,403,403,404,401,396,381,365,347,339,
            335,312,293,262,264,274,292,313,333,359,368,386,387,407,410,413,416,416,412,373,338,327,305,260,
            283,264,272,308,322,356,345,325,346,369,383,386,373,360,347,334,322,303,271,253,290,269,285,319,
            306,312,359,350,353,371,408,415,393,372,349,328,314,315,242,233,222,221,363,383,392,409,371,318,356,],

        purple_tool_1X:[247,216,208,204,206,223,238,238,254,277,279,278,252,217,192,169,163,171,179,205,250,279,177,
            189,237,173,158,255,262,298,308,307,306,311,312,309,326,351,364,394,412,429,443,472,481,485,485,486,
            505,523,541,542,507,543,545,529,506,483,464,435,417,397,369,358,326,318,311,311,313,332,330,327,325,
            332,339,363,377,375,351,350,349,332,353,353,333,374,376,413,432,440,387,393,384,362,340,360,429,431,
            455,456,484,496,481,455,436,422,446,461,407,369,427,407,407,403,381,428,455,441,439,433,428,416,435,
            525,529,538,554,559,561,560,560,531,516,481,443,404,371,375,365,383,352,327,187,197,],
        
        purple_tool_1Y:[307,306,326,352,392,394,367,345,334,337,361,371,390,404,388,351,330,301,293,292,290,316,391,
            403,363,366,377,362,362,352,345,329,305,289,270,246,238,234,239,241,243,245,248,254,264,287,302,
            311,323,334,340,341,366,371,394,401,401,396,397,405,406,403,403,403,404,401,396,381,365,347,339,
            335,312,293,262,264,274,292,313,333,359,368,386,387,407,410,413,416,416,412,373,338,327,305,260,
            283,264,272,308,322,356,345,325,346,369,383,386,373,360,347,334,322,303,271,253,290,269,285,319,
            306,312,359,350,353,371,408,415,393,372,349,328,314,315,242,233,222,221,363,383,392,409,371,318,356,],


          pink_tool_1X:[247,216,208,204,206,223,238,238,254,277,279,278,252,217,192,169,163,171,179,205,250,279,177,
            189,237,173,158,255,262,298,308,307,306,311,312,309,326,351,364,394,412,429,443,472,481,485,485,486,
            505,523,541,542,507,543,545,529,506,483,464,435,417,397,369,358,326,318,311,311,313,332,330,327,325,
            332,339,363,377,375,351,350,349,332,353,353,333,374,376,413,432,440,387,393,384,362,340,360,429,431,
            455,456,484,496,481,455,436,422,446,461,407,369,427,407,407,403,381,428,455,441,439,433,428,416,435,
            525,529,538,554,559,561,560,560,531,516,481,443,404,371,375,365,383,352,327,187,197,],
        
        pink_tool_1Y:[307,306,326,352,392,394,367,345,334,337,361,371,390,404,388,351,330,301,293,292,290,316,391,
            403,363,366,377,362,362,352,345,329,305,289,270,246,238,234,239,241,243,245,248,254,264,287,302,
            311,323,334,340,341,366,371,394,401,401,396,397,405,406,403,403,403,404,401,396,381,365,347,339,
            335,312,293,262,264,274,292,313,333,359,368,386,387,407,410,413,416,416,412,373,338,327,305,260,
            283,264,272,308,322,356,345,325,346,369,383,386,373,360,347,334,322,303,271,253,290,269,285,319,
            306,312,359,350,353,371,408,415,393,372,349,328,314,315,242,233,222,221,363,383,392,409,371,318,356,],


        colour_array:[0,0,0,0,0],

};
export default class car_painting extends Phaser.Scene {
  logo;
  musicBtn;
  music;
   // first_array={car_array:[1,1,1]};  /*for directly open this scene uncomment*/
 isScenePaused = false;

  constructor() {
    super("car_painting");
  }
  init(data) {
  this.first_array = data.moveObj;
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

    // this.first_array={car_array:[1,1,1]}; /*for directly open this scene uncomment*/  
    
    this.red_drag = false;
    this.green_drag = false;
    this.blue_drag = false;
    this.purple_drag = false;
    this.pink_drag = false;

    this.levelGroup = this.add.container();
    this.handwash_bg = this.add.sprite(400, 252, "handwash_bg");
    this.levelGroup.add(this.handwash_bg);

          this.car_color1 = this.sound.add('car_color1');
          this.pick = this.sound.add('pick');
        
        this.default_car = this.add.sprite(365,315, "car_cut6",20).setOrigin(0.5, 0.5);
        this.door_1 = this.add.sprite(429, 337, 'door'+this.first_array.car_array[0]);
        this.red_car = this.add.sprite(365,327, "red_car"+this.first_array.car_array[0]).setOrigin(0.5, 0.5);
        this.red_car.alpha=0;
        this.blue_car = this.add.sprite(365,327, "blue_car"+this.first_array.car_array[0]).setOrigin(0.5, 0.5);
        this.blue_car.alpha=0;
        this.green_car = this.add.sprite(365,327, "green_car"+this.first_array.car_array[0]).setOrigin(0.5, 0.5);
        this.green_car.alpha=0;
        this.pink_car = this.add.sprite(365,327, "pink_car"+this.first_array.car_array[0]).setOrigin(0.5, 0.5);
        this.pink_car.alpha=0;
        this.purple_car = this.add.sprite(365,327, "purple_car"+this.first_array.car_array[0]).setOrigin(0.5, 0.5);
        this.purple_car.alpha=0;
        this.red_car.alpha=0;
        this.light_1 = this.add.sprite(358, 368, 'light'+this.first_array.car_array[1]);
        this.window_1 = this.add.sprite(401, 288, 'window'+this.first_array.car_array[2]);
        this.car_wheel = this.add.sprite(367,410, "car_wheel").setOrigin(0.5, 0.5);

        this.panel = this.add.sprite(700, 266, "panel");
        this.panel.setScale(1, 1.1)

        
        this.red_paint_ani = this.add.sprite(650,110, "red_paint_ani").setOrigin(0.5, 0.5).setScale(0.75);
        this.red_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
        this.red_paint_ani.rotation=-0.3;
          this.red_paint_ani.on('pointerdown',function(event){
            this.pick.play();


            this.red_hitGroup_tool1 = this.physics.add.group();
          for (var i = 0; i < Main.red_tool_1X.length; i++) {
            var red_hitCircle_1 = this.add.graphics();
            red_hitCircle_1.fillStyle(0x000000, 0);
            red_hitCircle_1.fillCircle(0, 0, 10);
            red_hitCircle_1.x = Main.red_tool_1X[i];
            red_hitCircle_1.y = Main.red_tool_1Y[i];
            red_hitCircle_1.id = i;
            this.red_hitGroup_tool1.add(red_hitCircle_1);
            this.physics.add.existing(red_hitCircle_1);
            red_hitCircle_1.body.collideWorldBounds = true;
          }
          this.red_hitSprite_tool1_count = 0;

           this.red_circleGroup_tool1 = this.add.group();
          this.red_circle_tool1 = this.add.graphics();
          this.red_circle_tool1.fillStyle(0x000000, 0);
          this.red_circleGroup_tool1.add(this.red_circle_tool1);

          this.red_dragCircle_1 = this.add.graphics();
          this.red_dragCircle_1.fillStyle(0x000000, 0);
          this.red_dragCircle_1.fillCircle(0, 0, 20);


          this.physics.add.existing(this.red_dragCircle_1);
          this.red_dragCircle_1.body.collideWorldBounds = true;
          this.physics.add.collider(this.red_dragCircle_1, this.red_hitGroup_tool1, this.red_hitSprite_group_tool1, null, this);


          this.red_car.setTexture('red_car'+this.first_array.car_array[0]);
          this.red_paint_ani.disableInteractive();
          this.green_paint_ani.disableInteractive();
          this.blue_paint_ani.disableInteractive();
          this.purple_paint_ani.disableInteractive();
          this.pink_paint_ani.disableInteractive();
          this.red_drag=true;
           this.red_paint_ani.play("red_animation");
           this.children.bringToTop(this.red_car);
           this.children.bringToTop(this.car_wheel);
           this.children.bringToTop(this.window_1);
           this.children.bringToTop(this.light_1);
           this.children.bringToTop(this.red_paint_ani);
           this.children.bringToTop(this.blue_paint_ani);
           this.children.bringToTop(this.green_paint_ani);
           this.children.bringToTop(this.pink_paint_ani);
           this.children.bringToTop(this.purple_paint_ani);
           this.children.bringToTop(this.play_btn);
           this.children.bringToTop(this.more_btn);

           this.children.bringToTop(lock_r1);
           this.children.bringToTop(lock_r2);
           this.children.bringToTop(this.shutter_Bg);
           this.children.bringToTop(this.logo);
           this.children.bringToTop(this.musicBtn);

           
           Main.colour_array[0]=1;
          },this);

          this.anims.create({key: 'red_animation',
                frames: this.anims.generateFrameNumbers('red_paint_ani', { start: 1, end: 9 }),
                frameRate: 10,
                repeat: -1
            });

    
        this.green_paint_ani = this.add.sprite(650,350, "green_paint_ani").setOrigin(0.5, 0.5).setScale(0.75);
        this.green_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
        this.green_paint_ani.rotation=-0.3;
          this.green_paint_ani.on('pointerdown',function(){
            this.pick.play();



              this.green_hitGroup_tool1 = this.physics.add.group();
          for (var i = 0; i < Main.green_tool_1X.length; i++) {
            var green_hitCircle_1 = this.add.graphics();
            green_hitCircle_1.fillStyle(0x000000, 0);
            green_hitCircle_1.fillCircle(0, 0, 10);
            green_hitCircle_1.x = Main.green_tool_1X[i];
            green_hitCircle_1.y = Main.green_tool_1Y[i];
            green_hitCircle_1.id = i;
            this.green_hitGroup_tool1.add(green_hitCircle_1);
            this.physics.add.existing(green_hitCircle_1);
            green_hitCircle_1.body.collideWorldBounds = true;
          }

this.green_hitSprite_tool1_count = 0;

 this.green_circleGroup_tool1 = this.add.group();
          this.green_circle_tool1 = this.add.graphics();
          this.green_circle_tool1.fillStyle(0x000000, 0);
          this.green_circleGroup_tool1.add(this.green_circle_tool1);

          this.green_dragCircle_1 = this.add.graphics();
          this.green_dragCircle_1.fillStyle(0x000000, 0);
          this.green_dragCircle_1.fillCircle(0, 0, 20);
          

          this.physics.add.existing(this.green_dragCircle_1);
          this.green_dragCircle_1.body.collideWorldBounds = true;
          this.physics.add.collider(this.green_dragCircle_1, this.green_hitGroup_tool1, this.green_hitSprite_group_tool1, null, this);

            
          this.red_paint_ani.disableInteractive();
          this.red_car.setTexture('green_car'+this.first_array.car_array[0]);
          this.green_paint_ani.disableInteractive();
          this.blue_paint_ani.disableInteractive();
          this.purple_paint_ani.disableInteractive();
          this.pink_paint_ani.disableInteractive();
         this.green_drag=true;
           this.green_paint_ani.play("green_animation");
           Main.colour_array[1]=1;
           this.children.bringToTop(this.green_car);
           this.children.bringToTop(this.car_wheel);
            this.children.bringToTop(this.window_1);
           this.children.bringToTop(this.light_1);
           this.children.bringToTop(this.red_paint_ani);
           this.children.bringToTop(this.blue_paint_ani);
           this.children.bringToTop(this.green_paint_ani);
           this.children.bringToTop(this.pink_paint_ani);
           this.children.bringToTop(this.purple_paint_ani);
           this.children.bringToTop(this.play_btn);
           this.children.bringToTop(this.more_btn);

           this.children.bringToTop(lock_r1);
           this.children.bringToTop(lock_r2);
           this.children.bringToTop(this.shutter_Bg);
           this.children.bringToTop(this.logo);
           this.children.bringToTop(this.musicBtn);           
          },this);

        this.anims.create({key: 'green_animation',
                frames: this.anims.generateFrameNumbers('green_paint_ani', { start: 1, end: 9 }),
                frameRate: 10,
                repeat: -1
            });

        
        this.blue_paint_ani  = this.add.sprite(650,270, "blue_paint_ani").setOrigin(0.5, 0.5).setScale(0.75);
        this.blue_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
        this.blue_paint_ani.rotation=-0.3;
          this.blue_paint_ani.on('pointerdown',function(){
            this.pick.play();

             this.blue_hitGroup_tool1 = this.physics.add.group();
          for (var i = 0; i < Main.blue_tool_1X.length; i++) {
            var blue_hitCircle_1 = this.add.graphics();
            blue_hitCircle_1.fillStyle(0x000000, 0);
            blue_hitCircle_1.fillCircle(0, 0, 10);
            blue_hitCircle_1.x = Main.blue_tool_1X[i];
            blue_hitCircle_1.y = Main.blue_tool_1Y[i];
            blue_hitCircle_1.id = i;
            this.blue_hitGroup_tool1.add(blue_hitCircle_1);
            this.physics.add.existing(blue_hitCircle_1);
            blue_hitCircle_1.body.collideWorldBounds = true;
          }
this.blue_hitSprite_tool1_count = 0;
             this.blue_circleGroup_tool1 = this.add.group();
          this.blue_circle_tool1 = this.add.graphics();
          this.blue_circle_tool1.fillStyle(0x000000, 0);
          this.blue_circleGroup_tool1.add(this.blue_circle_tool1);

          this.blue_dragCircle_1 = this.add.graphics();
          this.blue_dragCircle_1.fillStyle(0x000000, 0);
          this.blue_dragCircle_1.fillCircle(0, 0, 20);          

          this.physics.add.existing(this.blue_dragCircle_1);
          this.blue_dragCircle_1.body.collideWorldBounds = true;
          this.physics.add.collider(this.blue_dragCircle_1, this.blue_hitGroup_tool1, this.blue_hitSprite_group_tool1, null, this);

          this.red_paint_ani.disableInteractive();
          this.green_paint_ani.disableInteractive();
          this.blue_paint_ani.disableInteractive();
          this.purple_paint_ani.disableInteractive();
          this.pink_paint_ani.disableInteractive();       
          this.red_car.setTexture('blue_car'+this.first_array.car_array[0]);
         this.blue_drag=true;
           this.blue_paint_ani.play("blue_animation");
           Main.colour_array[2]=1;
           this.children.bringToTop(this.blue_car);
           this.children.bringToTop(this.car_wheel);
           this.children.bringToTop(this.window_1);
           this.children.bringToTop(this.light_1);
           this.children.bringToTop(this.red_paint_ani);
           this.children.bringToTop(this.blue_paint_ani);
           this.children.bringToTop(this.green_paint_ani);
           this.children.bringToTop(this.pink_paint_ani);
           this.children.bringToTop(this.purple_paint_ani);
           this.children.bringToTop(this.play_btn);
           this.children.bringToTop(this.more_btn);

           this.children.bringToTop(lock_r1);
           this.children.bringToTop(lock_r2);
           this.children.bringToTop(this.shutter_Bg);
           this.children.bringToTop(this.logo);
           this.children.bringToTop(this.musicBtn);

          },this);

        this.anims.create({key: 'blue_animation',
                frames: this.anims.generateFrameNumbers('blue_paint_ani', { start: 1, end: 9 }),
                frameRate: 10,
                repeat: -1
            });

        
        this.purple_paint_ani = this.add.sprite(650,190, "purple_paint_ani").setOrigin(0.5, 0.5).setScale(0.75);
        // this.purple_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
        this.purple_paint_ani.rotation=-0.3;
          this.purple_paint_ani.on('pointerdown',function(){
            this.pick.play();

             this.purple_hitGroup_tool1 = this.physics.add.group();
          for (var i = 0; i < Main.purple_tool_1X.length; i++) {
            var purple_hitCircle_1 = this.add.graphics();
            purple_hitCircle_1.fillStyle(0x000000, 0);
            purple_hitCircle_1.fillCircle(0, 0, 10);
            purple_hitCircle_1.x = Main.purple_tool_1X[i];
            purple_hitCircle_1.y = Main.purple_tool_1Y[i];
            purple_hitCircle_1.id = i;
            this.purple_hitGroup_tool1.add(purple_hitCircle_1);
            this.physics.add.existing(purple_hitCircle_1);
            purple_hitCircle_1.body.collideWorldBounds = true;
          }


          this.purple_hitSprite_tool1_count = 0;
                  this.purple_circleGroup_tool1 = this.add.group();
          this.purple_circle_tool1 = this.add.graphics();
          this.purple_circle_tool1.fillStyle(0x000000, 0);
          this.purple_circleGroup_tool1.add(this.purple_circle_tool1);

          this.purple_dragCircle_1 = this.add.graphics();
          this.purple_dragCircle_1.fillStyle(0x000000, 0);
          this.purple_dragCircle_1.fillCircle(0, 0, 20);


          this.physics.add.existing(this.purple_dragCircle_1);
          this.purple_dragCircle_1.body.collideWorldBounds = true;
          this.physics.add.collider(this.purple_dragCircle_1, this.purple_hitGroup_tool1, this.purple_hitSprite_group_tool1, null, this);

          this.red_paint_ani.disableInteractive();
          this.green_paint_ani.disableInteractive();
          this.blue_paint_ani.disableInteractive();
          this.purple_paint_ani.disableInteractive();
          this.pink_paint_ani.disableInteractive();
          this.red_car.setTexture('purple_car'+this.first_array.car_array[0]);
         this.purple_drag=true;
           this.purple_paint_ani.play("purple_animation");
           Main.colour_array[3]=1;
           this.children.bringToTop(this.purple_car);
           this.children.bringToTop(this.car_wheel);
           this.children.bringToTop(this.window_1);
           this.children.bringToTop(this.light_1);
           this.children.bringToTop(this.red_paint_ani);
           this.children.bringToTop(this.blue_paint_ani);
           this.children.bringToTop(this.green_paint_ani);
           this.children.bringToTop(this.pink_paint_ani);
           this.children.bringToTop(this.purple_paint_ani);
           this.children.bringToTop(this.play_btn);
           this.children.bringToTop(this.more_btn);

           this.children.bringToTop(lock_r1);
           this.children.bringToTop(lock_r2);
           this.children.bringToTop(this.shutter_Bg);
           this.children.bringToTop(this.logo);
           this.children.bringToTop(this.musicBtn);

          },this);

        this.anims.create({key: 'purple_animation',
                frames: this.anims.generateFrameNumbers('purple_paint_ani', { start: 1, end: 9 }),
                frameRate: 10,
                repeat: -1
            });


        
        this.pink_paint_ani = this.add.sprite(650,430, "pink_paint_ani").setOrigin(0.5, 0.5).setScale(0.75);
        // this.pink_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
        this.pink_paint_ani.rotation=-0.3;
          this.pink_paint_ani.on('pointerdown',function(){
            this.pick.play();
            

               this.pink_hitGroup_tool1 = this.physics.add.group();
          for (var i = 0; i < Main.pink_tool_1X.length; i++) {
            var pink_hitCircle_1 = this.add.graphics();
            pink_hitCircle_1.fillStyle(0x000000, 0);
            pink_hitCircle_1.fillCircle(0, 0, 10);
            pink_hitCircle_1.x = Main.pink_tool_1X[i];
            pink_hitCircle_1.y = Main.pink_tool_1Y[i];
            pink_hitCircle_1.id = i;
            this.pink_hitGroup_tool1.add(pink_hitCircle_1);
            this.physics.add.existing(pink_hitCircle_1);
            pink_hitCircle_1.body.collideWorldBounds = true;
          }

          this.pink_hitSprite_tool1_count = 0;


          this.pink_circleGroup_tool1 = this.add.group();
          this.pink_circle_tool1 = this.add.graphics();
          this.pink_circle_tool1.fillStyle(0x000000, 0);
          this.pink_circleGroup_tool1.add(this.pink_circle_tool1);

          this.pink_dragCircle_1 = this.add.graphics();
          this.pink_dragCircle_1.fillStyle(0x000000, 0);
          this.pink_dragCircle_1.fillCircle(0, 0, 20);

          this.physics.add.existing(this.pink_dragCircle_1);
          this.pink_dragCircle_1.body.collideWorldBounds = true;
          this.physics.add.collider(this.pink_dragCircle_1, this.pink_hitGroup_tool1, this.pink_hitSprite_group_tool1, null, this);

          this.red_paint_ani.disableInteractive();
          this.green_paint_ani.disableInteractive();
          this.blue_paint_ani.disableInteractive();
          this.purple_paint_ani.disableInteractive();
          this.pink_paint_ani.disableInteractive();
          this.red_car.setTexture('pink_car'+this.first_array.car_array[0]);
         this.pink_drag=true;
           this.pink_paint_ani.play("pink_animation");
           Main.colour_array[4]=1;
           this.children.bringToTop(this.pink_car);
           this.children.bringToTop(this.car_wheel);
           this.children.bringToTop(this.window_1);
           this.children.bringToTop(this.light_1);
           this.children.bringToTop(this.red_paint_ani);
           this.children.bringToTop(this.blue_paint_ani);
           this.children.bringToTop(this.green_paint_ani);
           this.children.bringToTop(this.pink_paint_ani);
           this.children.bringToTop(this.purple_paint_ani);
           this.children.bringToTop(this.play_btn);
           this.children.bringToTop(this.more_btn);

           this.children.bringToTop(lock_r1);
           this.children.bringToTop(lock_r2);
           this.children.bringToTop(this.shutter_Bg);
           this.children.bringToTop(this.logo);
           this.children.bringToTop(this.musicBtn);

          },this);

        this.anims.create({key: 'pink_animation',
                frames: this.anims.generateFrameNumbers('pink_paint_ani', { start: 1, end: 9 }),
                frameRate: 10,
                repeat: -1
            });
       
     

          // ********************************************************************* //

        

       const { lockedItem: lock_r1, adfaildbtn: adfaildbtn_r1, addismisbtn: addismisbtn_r1 } = createLockedItem(this, 847, 476, 'purple_paint_aniad',  () => {
                this.purple_paint_ani.setInteractive({ useHandCursor: true ,pixelPerfect:true});
            });
            lock_r1.rotation = -0.3;
            lock_r1.setScale(0.75);

       const { lockedItem: lock_r2, adfaildbtn: adfaildbtn_r2, addismisbtn: addismisbtn_r2 } = createLockedItem(this, 847, 716, 'pink_paint_aniad',  () => {
                this.pink_paint_ani.setInteractive({ useHandCursor: true ,pixelPerfect:true});
            });
            lock_r2.rotation = -0.3;
            lock_r2.setScale(0.75);
          // ********************************************************************* //
       
        //    this.mcir = this.add.graphics();
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

          // ********************************************************************* //


        this.play_btn=this.add.image(450,100,'btn5').setOrigin(0.5, 0.5).setScale(0);
        this.play_btn.setInteractive({ useHandCursor: true });
        this.play_btn.on('pointerover',function(){this.play_btn.setScale(0.9)},this);
        this.play_btn.on('pointerout',function(){this.play_btn.setScale(0.85)},this);
        this.play_btn.on('pointerup',this.enterRoom,this);
        this.play_btn.on('pointerdown',function(event){
          this.anims.remove('red_animation');
          this.anims.remove('green_animation');
          this.anims.remove('blue_animation');
          this.anims.remove('purple_animation');
          this.anims.remove('pink_animation');
      },this);
       
        this.more_btn=this.add.image(300,100,'btn4').setOrigin(0.5, 0.5).setScale(0);
        this.more_btn.setInteractive({ useHandCursor: true });
        this.more_btn.on('pointerover',function(){this.more_btn.setScale(0.9)},this);
        this.more_btn.on('pointerout',function(){this.more_btn.setScale(0.85)},this);
        this.more_btn.on('pointerup',this.morebtnLink,this);

         this.shutter_Bg =this.add.image(400,252,'shutter_bg').setOrigin(0.5, 0.5);
        this.tweens.add({targets:this.shutter_Bg,y:-252,ease: 'Quadratic',duration:1500,onComplete:() => {
            this.car_color1.play();
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

 red_hitSprite_group_tool1(red_dragCircle_1, red_hitCircle_1) {       
  red_hitCircle_1.destroy();
    if (!red_hitCircle_1 || !red_hitCircle_1.body) {
  }
  this.red_hitSprite_tool1_count++;
   
    const stepSize = 1 / Main.red_tool_1X.length;
    this.red_car.alpha += stepSize;
    this.blue_car.alpha -= stepSize;
    this.purple_car.alpha -= stepSize;
    this.pink_car.alpha -= stepSize;
    this.green_car.alpha -= stepSize;
    this.default_car.alpha -= stepSize;
  
  if (this.red_hitSprite_tool1_count >= Main.red_tool_1X.length) {
      

     

     this.tweens.add({targets:this.more_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
     this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});

         this.red_drag = false;
        this.red_paint_ani.stop();
        this.red_paint_ani.setFrame(0);
        this.red_dragCircle_1.x = -100;
        this.red_dragCircle_1.y = -100;
        this.red_paint_ani.x = 650;
        this.red_paint_ani.y = 110;

    this.red_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.green_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.blue_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.purple_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.pink_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    
  }
}

blue_hitSprite_group_tool1(blue_dragCircle_1, blue_hitCircle_1) {       
  blue_hitCircle_1.destroy();
    if (!blue_hitCircle_1 || !blue_hitCircle_1.body) {
  }
  this.blue_hitSprite_tool1_count++;
  
    const stepSize = 1 / Main.blue_tool_1X.length;
    this.blue_car.alpha += stepSize;
    this.red_car.alpha -= stepSize;
    this.purple_car.alpha -= stepSize;
    this.default_car.alpha -= stepSize;
    this.pink_car.alpha -= stepSize;
    this.green_car.alpha -= stepSize;
  if (this.blue_hitSprite_tool1_count >= Main.blue_tool_1X.length) {
     

     this.tweens.add({targets:this.more_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
     this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});

     this.blue_drag = false;
        this.blue_paint_ani.stop();
        this.blue_paint_ani.setFrame(0);
        this.blue_dragCircle_1.x = -100;
        this.blue_dragCircle_1.y = -100;
        this.blue_paint_ani.x = 650;
        this.blue_paint_ani.y = 270;

    this.red_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.green_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.blue_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.purple_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.pink_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    
  }
}
green_hitSprite_group_tool1(green_dragCircle_1, green_hitCircle_1) {       
  green_hitCircle_1.destroy();
    if (!green_hitCircle_1 || !green_hitCircle_1.body) {
  }
  this.green_hitSprite_tool1_count++;
  
    const stepSize = 1 / Main.green_tool_1X.length;
    this.green_car.alpha += stepSize;
    this.blue_car.alpha -= stepSize;
    this.purple_car.alpha -= stepSize;
    this.pink_car.alpha -= stepSize;
    this.default_car.alpha -= stepSize;
    this.red_car.alpha -= stepSize;
  if (this.green_hitSprite_tool1_count >= Main.green_tool_1X.length) {
     

     this.tweens.add({targets:this.more_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
     this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});

          this.green_drag = false;
        this.green_paint_ani.stop();
        this.green_paint_ani.setFrame(0);
        this.green_dragCircle_1.x = -100;
        this.green_dragCircle_1.y = -100;
        this.green_paint_ani.x = 650;
        this.green_paint_ani.y = 350;

    this.red_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.green_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.blue_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.purple_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.pink_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
  }
}

purple_hitSprite_group_tool1(purple_dragCircle_1, purple_hitCircle_1) {       
  purple_hitCircle_1.destroy();
    if (!purple_hitCircle_1 || !purple_hitCircle_1.body) {
  }
  this.purple_hitSprite_tool1_count++;
  
    const stepSize = 1 / Main.purple_tool_1X.length;
    this.purple_car.alpha += stepSize;
  this.blue_car.alpha -= stepSize;
    this.red_car.alpha -= stepSize;
    this.pink_car.alpha -= stepSize;
    this.default_car.alpha -= stepSize;
    this.green_car.alpha -= stepSize;
  if (this.purple_hitSprite_tool1_count >= Main.purple_tool_1X.length) {
     

     this.tweens.add({targets:this.more_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
     this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});

   this.purple_drag = false;
        this.purple_paint_ani.stop();
        this.purple_paint_ani.setFrame(0);
        this.purple_dragCircle_1.x = -100;
        this.purple_dragCircle_1.y = -100;
        this.purple_paint_ani.x = 650;
        this.purple_paint_ani.y = 190;

    this.red_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.green_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.blue_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.purple_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.pink_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
  }
}


pink_hitSprite_group_tool1(pink_dragCircle_1, pink_hitCircle_1) {       
  pink_hitCircle_1.destroy();
    if (!pink_hitCircle_1 || !pink_hitCircle_1.body) {
  }
  this.pink_hitSprite_tool1_count++;
  
    const stepSize = 1 / Main.pink_tool_1X.length;
    this.pink_car.alpha += stepSize;
  this.blue_car.alpha -= stepSize;
    this.default_car.alpha -= stepSize;
    this.purple_car.alpha -= stepSize;
    this.red_car.alpha -= stepSize;
    this.green_car.alpha -= stepSize;
  if (this.pink_hitSprite_tool1_count >= Main.pink_tool_1X.length) {
     

     this.tweens.add({targets:this.more_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});
     this.tweens.add({targets:this.play_btn,scaleX: 0.85,scaleY:0.85,ease: 'Bounce',duration:800,});

   this.pink_drag = false;
        this.pink_paint_ani.stop();
        this.pink_paint_ani.setFrame(0);
        this.pink_dragCircle_1.x = -100;
        this.pink_dragCircle_1.y = -100;
        this.pink_paint_ani.x = 650;
        this.pink_paint_ani.y = 430;

    this.red_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.green_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.blue_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.purple_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
    this.pink_paint_ani.setInteractive({ useHandCursor:true,pixelPerfect: true});
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

      this.first_array={car_array:[1,1,1]};
        Main.colour_array=[0,0,0,0,0];
    this.tweens.add({targets:this.shutter_Bg,y:252,ease: 'Quadratic',duration:1500,onComplete:() => {
      
       var state = 'selection_screen3';
       MyShowAD(this, state);

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

        if (this.red_drag && this.red_dragCircle_1) {
        this.red_paint_ani.x = this.input.activePointer.x - 50;
        this.red_paint_ani.y = this.input.activePointer.y;

        this.red_dragCircle_1.x = this.input.activePointer.x - 30;
        this.red_dragCircle_1.y = this.input.activePointer.y - 10;

        for (var i = 0; i < Main.red_tool_1X.length; i++) {
            if (this.red_hitGroup_tool1.getChildren()[i]) { // Check if the object exists
                this.physics.world.collide(this.red_dragCircle_1, this.red_hitGroup_tool1.getChildren()[i], this.red_hitSprite_group_tool1, null, this);
            }
        }
    }

             if (this.blue_drag && this.blue_dragCircle_1) {
        this.blue_paint_ani.x = this.input.activePointer.x - 50;
        this.blue_paint_ani.y = this.input.activePointer.y;

        this.blue_dragCircle_1.x = this.input.activePointer.x - 30;
        this.blue_dragCircle_1.y = this.input.activePointer.y - 10;

        for (var i = 0; i < Main.blue_tool_1X.length; i++) {
            if (this.blue_hitGroup_tool1.getChildren()[i]) { // Check if the object exists
                this.physics.world.collide(this.blue_dragCircle_1, this.blue_hitGroup_tool1.getChildren()[i], this.blue_hitSprite_group_tool1, null, this);
            }
        }
    }

             if (this.green_drag && this.green_dragCircle_1) {
        this.green_paint_ani.x = this.input.activePointer.x - 50;
        this.green_paint_ani.y = this.input.activePointer.y;

        this.green_dragCircle_1.x = this.input.activePointer.x - 30;
        this.green_dragCircle_1.y = this.input.activePointer.y - 10;

        for (var i = 0; i < Main.green_tool_1X.length; i++) {
            if (this.green_hitGroup_tool1.getChildren()[i]) { // Check if the object exists
                this.physics.world.collide(this.green_dragCircle_1, this.green_hitGroup_tool1.getChildren()[i], this.green_hitSprite_group_tool1, null, this);
            }
        }
    }


            if (this.purple_drag && this.purple_dragCircle_1) {
        this.purple_paint_ani.x = this.input.activePointer.x - 50;
        this.purple_paint_ani.y = this.input.activePointer.y;

        this.purple_dragCircle_1.x = this.input.activePointer.x - 30;
        this.purple_dragCircle_1.y = this.input.activePointer.y - 10;

        for (var i = 0; i < Main.purple_tool_1X.length; i++) {
            if (this.purple_hitGroup_tool1.getChildren()[i]) { // Check if the object exists
                this.physics.world.collide(this.purple_dragCircle_1, this.purple_hitGroup_tool1.getChildren()[i], this.purple_hitSprite_group_tool1, null, this);
            }
        }
    }

            
  if (this.pink_drag && this.pink_dragCircle_1) {
        this.pink_paint_ani.x = this.input.activePointer.x - 50;
        this.pink_paint_ani.y = this.input.activePointer.y;

        this.pink_dragCircle_1.x = this.input.activePointer.x - 30;
        this.pink_dragCircle_1.y = this.input.activePointer.y - 10;

        for (var i = 0; i < Main.pink_tool_1X.length; i++) {
            if (this.pink_hitGroup_tool1.getChildren()[i]) { // Check if the object exists
                this.physics.world.collide(this.pink_dragCircle_1, this.pink_hitGroup_tool1.getChildren()[i], this.pink_hitSprite_group_tool1, null, this);
            }
        }
    }

          }     
}
function createLockedItem(scene, x, y, imageKey, unlockCallback) {
    const lockedItem = scene.add.image(x, y, imageKey).setOrigin(0.5, 0.5);
    lockedItem.setInteractive({ useHandCursor: true ,pixelPerfect:true});

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
            currentScene.scene.start(state); 
        }
    });
}


YYGGames.init({
    appName: "Baby-Panda-Kindergarten",
    channel:1,
})


let music;