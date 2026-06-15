export default class loader extends Phaser.Scene {
  constructor() {
    super('loader');
  }
  init() {
  
  }

  preload() {
      const { width } = this.cameras.main;
      const { height } = this.cameras.main;

      const progress = this.add.text(width / 2-20,height / 2 + 25,"LOADING: ",{font:"bold 21px Arial",fill: "#ffffff",align:"center"});
      progress.setOrigin(0.5, 0.5);

        const percentText = this.add.text(width / 2+52, height / 2 + 25, '0%', {font: 'bold 21px Arial',fill: '#ffffff',});
    percentText.setOrigin(0.5);
    
    this.load.on('progress',(value) => {
      // percentText.setText(`${parseInt(value * 100, 10)}%`);
      const percentage = parseInt(value * 100, 10);
       if (percentage >= 0 && percentage < 10) {
        percentText.x = width / 2+52;
    } else if (percentage >= 10 && percentage < 100) {
        percentText.x = width / 2+58;
    } else if (percentage === 100) {
        percentText.x = width / 2+63;
    }
    percentText.setText(`${percentage}%`);
    },this,);

    this.load.on('complete',() => {
      progress.alpha=0;
      percentText.alpha=0;
      // AAAAAAA
        // this.scene.start('selection_screen');

     this.Go = this.add.image(400,300,'Go').setOrigin(0.5, 0.5);
     this.Go.setInteractive({ useHandCursor: true });
     this.Go.setScale(0.85);
     this.Go.on('pointerover',function(){this.Go.setScale(0.93)},this);
     this.Go.on('pointerout',function(){this.Go.setScale(0.85)},this);
     this.Go.on('pointerup',function(){
      this.scene.start('titlescreen');
       
     },this);
      },
      this,);

        const prebglogo =this.add.image(width / 2, height / 2 - 80, 'prebglogo').setDepth(10).setScale(1);
        prebglogo.setInteractive({useHandCursor:true});
        prebglogo.on('pointerup',this.openLink,this);
    
    this.load.image('adbg', 'assets/adbg.jpg');
    this.load.image('addismisbtn', 'assets/addismisbtn.png');
    this.load.image('adfaildbtn', 'assets/adfaildbtn.png');
    this.load.image('Go', 'assets/Go.png');
    this.load.image('prebglogo', 'assets/prebglogo.png');
    this.load.image('logo', 'assets/logo.png');
    this.load.image('lock', 'assets/lock.png');
    this.load.image('lock_bg', 'assets/lock_bg.png');
    this.load.image('music-off', 'assets/soundOffBtn.png');
    this.load.image('music-on', 'assets/soundOnBtn.png');
    this.load.image('shutter_bg', 'assets/shutter_bg.png');
    this.load.spritesheet('timer', 'assets/timer.png', { frameWidth: 160, frameHeight: 160 });
    this.load.spritesheet('arrow', 'assets/arrow.png', { frameWidth: 66, frameHeight: 89 });

    //sounds
     this.load.audio('bg_music', 'assets/music.mp3');
    this.load.audio('mam_voice1', 'assets/sounds/mam_voice1.mp3');
    this.load.audio('mam_show_hands1', 'assets/sounds/mam_show_hands1.mp3');
    this.load.audio('mam_wash_hands1', 'assets/sounds/mam_wash_hands1.mp3');
    this.load.audio('panda_box1', 'assets/sounds/panda_box1.mp3');
    this.load.audio('panda_box2', 'assets/sounds/panda_box2.mp3');
    this.load.audio('rabit_box1', 'assets/sounds/rabit_box1.mp3');
    this.load.audio('rabit_box2', 'assets/sounds/rabit_box2.mp3');
    this.load.audio('rat_box1', 'assets/sounds/rat_box1.mp3');
    this.load.audio('rat_box2', 'assets/sounds/rat_box2.mp3');
    this.load.audio('rub_hands', 'assets/sounds/rub_hands.mp3');
    this.load.audio('rabit_intro', 'assets/sounds/rabit_intro.mp3');
    this.load.audio('rabit_goodmor', 'assets/sounds/rabit_goodmor.mp3');
    this.load.audio('mamp_tep1', 'assets/sounds/mamp_tep1.mp3');
    this.load.audio('mamp_tep2', 'assets/sounds/mamp_tep2.mp3');
    this.load.audio('mamp_tep3', 'assets/sounds/mamp_tep3.mp3');
    this.load.audio('mamp_tep4', 'assets/sounds/mamp_tep4.mp3');
    this.load.audio('mamp_tep5', 'assets/sounds/mamp_tep5.mp3');
    this.load.audio('mamp_tep6', 'assets/sounds/mamp_tep6.mp3');
    this.load.audio('mamp_tep7', 'assets/sounds/mamp_tep7.mp3');
    this.load.audio('mamp_tep8', 'assets/sounds/mamp_tep8.mp3');
    this.load.audio('mamp_tep9', 'assets/sounds/mamp_tep9.mp3');
    this.load.audio('mam_car1', 'assets/sounds/mam_car1.mp3');
    this.load.audio('rab_car1', 'assets/sounds/rab_car1.mp3');
    this.load.audio('rab_car2', 'assets/sounds/rab_car2.mp3');
    this.load.audio('rab_car3', 'assets/sounds/rab_car3.mp3');
    this.load.audio('rab_car4', 'assets/sounds/rab_car4.mp3');
    this.load.audio('car_color1', 'assets/sounds/car_color1.mp3');
    this.load.audio('mam_food1', 'assets/sounds/mam_food1.mp3');
    this.load.audio('mam_food2', 'assets/sounds/mam_food2.mp3');
    this.load.audio('mam_clean1', 'assets/sounds/mam_clean1.mp3');
    this.load.audio('mam_clean2', 'assets/sounds/mam_clean2.mp3');
    this.load.audio('mam_clean3', 'assets/sounds/mam_clean3.mp3');
    this.load.audio('pick', 'assets/sounds/pick.mp3');
    this.load.audio('food_pick1', 'assets/sounds/food_pick1.mp3');
    this.load.audio('food_pick2', 'assets/sounds/food_pick2.mp3');
    this.load.audio('run_1', 'assets/sounds/run_1.mp3');
    this.load.audio('come_ani', 'assets/sounds/come_ani.mp3');
    this.load.audio('box_drop', 'assets/sounds/box_drop.mp3');
    this.load.audio('wash_snd', 'assets/sounds/wash_snd.mp3');
    this.load.audio('water_mc', 'assets/sounds/water_mc.mp3');
    this.load.audio('nail_ct', 'assets/sounds/nail_ct.mp3');
    this.load.audio('sick_snd', 'assets/sounds/sick_snd.mp3');
    this.load.audio('wash_dish_snd', 'assets/sounds/wash_dish_snd.mp3');
    this.load.audio('walk_snd', 'assets/sounds/walk_snd.mp3');
    this.load.audio('board_snd', 'assets/sounds/board_snd.mp3');
    this.load.audio('water_spray_snd', 'assets/sounds/water_spray_snd.mp3');
    this.load.audio('dust_snd2', 'assets/sounds/dust_snd2.mp3');
    this.load.audio('spray_clean_snd', 'assets/sounds/spray_clean_snd.mp3');
    this.load.audio('dust_snd1', 'assets/sounds/dust_snd1.mp3');
    this.load.audio('wrong_snd', 'assets/sounds/wrong_snd.mp3');

    this.load.image('play_btn', 'assets/title/play_btn.png');
    this.load.image('title_text', 'assets/title/title_text.png');
    this.load.image('title_bg', 'assets/title/title_bg.png');

    this.load.image('sel_bg', 'assets/selection/sel_bg.png');
    this.load.image('sel_door1_1', 'assets/selection/sel_door1_1.png');
    this.load.image('sel_door1_2', 'assets/selection/sel_door1_2.png');
    this.load.image('sel_door2_1', 'assets/selection/sel_door2_1.png');
    this.load.image('sel_door3_1ad', 'assets/selection/sel_door3_1ad.png');
    this.load.image('sel_door2_2', 'assets/selection/sel_door2_2.png');
    this.load.image('sel_door3_1', 'assets/selection/sel_door3_1.png');
    this.load.image('sel_door3_2', 'assets/selection/sel_door3_2.png');
    this.load.image('rabit', 'assets/selection/rabit.png');
    this.load.image('monkey', 'assets/selection/monkey.png');

    this.load.image('handwash_bg', 'assets/box_allign_scene/handwash_bg.png');
    this.load.image('cap_monkey', 'assets/box_allign_scene/cap_monkey.png');
    this.load.image('cap_rabit', 'assets/box_allign_scene/cap_rabit.png');
    this.load.image('madam', 'assets/box_allign_scene/madam.png');
    this.load.image('box_back', 'assets/box_allign_scene/box_back.png');
    this.load.image('box_back_open', 'assets/box_allign_scene/box_back_open.png');
    this.load.image('box_back_close1', 'assets/box_allign_scene/box_back_close1.png');
    this.load.image('box_back_close2', 'assets/box_allign_scene/box_back_close2.png');
    this.load.image('box_back_close3', 'assets/box_allign_scene/box_back_close3.png');
    this.load.image('box_back_close4', 'assets/box_allign_scene/box_back_close4.png');
    this.load.image('box_back_close5', 'assets/box_allign_scene/box_back_close5.png');
    this.load.image('box_back_close6', 'assets/box_allign_scene/box_back_close6.png');
    this.load.image('cap_wolf', 'assets/box_allign_scene/cap_wolf.png');
    this.load.image('wolf_things1', 'assets/box_allign_scene/wolf_things1.png');
    this.load.image('wolf_things2', 'assets/box_allign_scene/wolf_things2.png');
    this.load.image('wolf_things3', 'assets/box_allign_scene/wolf_things3.png');
    this.load.image('wolf_things4', 'assets/box_allign_scene/wolf_things4.png');
    this.load.image('wolf_hand', 'assets/box_allign_scene/wolf_hand.png');
    this.load.image('bear_hand', 'assets/box_allign_scene/bear_hand.png');
    this.load.image('cap_bear', 'assets/box_allign_scene/cap_bear.png');
    this.load.image('wolf_back_box', 'assets/box_allign_scene/wolf_back_box.png');
    this.load.image('rabbit_hand', 'assets/box_allign_scene/rabbit_hand.png');
    this.load.image('rabbit_things1', 'assets/box_allign_scene/rabbit_things1.png');
    this.load.image('rabbit_things2', 'assets/box_allign_scene/rabbit_things2.png');
    this.load.image('rabbit_things3', 'assets/box_allign_scene/rabbit_things3.png');
    this.load.image('rabbit_things4', 'assets/box_allign_scene/rabbit_things4.png');
    this.load.image('monkey_hand', 'assets/box_allign_scene/monkey_hand.png');
    this.load.image('monkey_things1', 'assets/box_allign_scene/monkey_things1.png');
    this.load.image('monkey_things2', 'assets/box_allign_scene/monkey_things2.png');
    this.load.image('monkey_things3', 'assets/box_allign_scene/monkey_things3.png');
    this.load.image('monkey_things4', 'assets/box_allign_scene/monkey_things4.png');
    this.load.spritesheet('wolf_back_box_ani', 'assets/box_allign_scene/wolf_back_box_ani.png', { frameWidth: 700, frameHeight: 386 });
    this.load.spritesheet('rabbit_back_box', 'assets/box_allign_scene/rabbit_back_box.png', { frameWidth: 700, frameHeight: 385 });
    this.load.spritesheet('monkey_back_box', 'assets/box_allign_scene/monkey_back_box.png', { frameWidth: 700, frameHeight: 386 });
   
    //char_ani

    this.load.spritesheet('cap_monkey_speak', 'assets/char_animation/cap_monkey_speak.png', { frameWidth: 205, frameHeight: 254 });
    this.load.spritesheet('cap_panda_speak', 'assets/char_animation/cap_panda_speak.png', { frameWidth: 156, frameHeight: 226 });
    this.load.spritesheet('cap_rabit_speak', 'assets/char_animation/cap_rabit_speak.png', { frameWidth: 299, frameHeight: 436 });
    this.load.spritesheet('cap_rat_speak', 'assets/char_animation/cap_rat_speak.png', { frameWidth: 211, frameHeight: 249 });
    this.load.spritesheet('mam_speak', 'assets/char_animation/mam_speak.png', { frameWidth: 216, frameHeight: 438 });
    this.load.spritesheet('rabit_speak', 'assets/char_animation/rabit_speak.png', { frameWidth: 265, frameHeight: 436 });
    this.load.spritesheet('rat_speak', 'assets/char_animation/rat_speak.png', { frameWidth: 211, frameHeight: 225 });
    this.load.spritesheet('cat_father_speak', 'assets/char_animation/cat_father_speak.png', { frameWidth: 198, frameHeight: 263 });

    ///hand_washing
    this.load.image('bandaid', 'assets/hand_wash/bandaid.png');
    this.load.image('bubbles', 'assets/hand_wash/bubbles.png');
    this.load.image('cat_father', 'assets/hand_wash/cat_father.png');
    this.load.image('cat_panel', 'assets/hand_wash/cat_panel.png');
    this.load.image('dust', 'assets/hand_wash/dust.png');
    this.load.image('rabbit_front', 'assets/hand_wash/rabbit_front.png');
    this.load.image('sick_cat', 'assets/hand_wash/sick_cat.png');
    this.load.image('sick_cat1', 'assets/hand_wash/sick_cat1.png');
    this.load.image('soap', 'assets/hand_wash/soap.png');
    this.load.image('towel', 'assets/hand_wash/towel.png');
    this.load.image('wash_hand', 'assets/hand_wash/wash_hand.png');
    this.load.image('water', 'assets/hand_wash/water.png');
    this.load.image('water_hand', 'assets/hand_wash/water_hand.png');
    this.load.image('wash_hand_panel', 'assets/hand_wash/wash_hand_panel.png');
    this.load.image('nail_cutter', 'assets/hand_wash/nail_cutter.png');
    this.load.image('washbashion', 'assets/hand_wash/washbashion.png');
    this.load.spritesheet('bandaid_ani', 'assets/hand_wash/bandaid_ani.png', { frameWidth: 341, frameHeight: 196 });
    this.load.spritesheet('glass_water_ani', 'assets/hand_wash/glass_water_ani.png', { frameWidth: 95, frameHeight: 96 });
    this.load.spritesheet('rabbit_hand_ani', 'assets/hand_wash/rabbit_hand_ani.png', { frameWidth: 163, frameHeight: 105 });
    this.load.spritesheet('temp_gun', 'assets/hand_wash/temp_gun.png', { frameWidth: 207, frameHeight: 173 });
    this.load.spritesheet('tap_fill_ani', 'assets/hand_wash/tap_fill_ani.png', { frameWidth: 403, frameHeight: 58 });
    this.load.spritesheet('tap_water_ani', 'assets/hand_wash/tap_water_ani.png', { frameWidth: 208, frameHeight: 168 });


    this.load.image('car_bg', 'assets/car_making/car_bg.png');
    this.load.image('car_bg1', 'assets/car_making/car_bg1.png');
    this.load.image('cut_knife', 'assets/car_making/cut_knife.png');
    this.load.image('cut_sissors', 'assets/car_making/cut_sissors.png');
    this.load.image('panel', 'assets/car_making/panel.png');
    this.load.image('car_wheel', 'assets/car_making/car_wheel.png');
    this.load.image('wheel', 'assets/car_making/wheel.png');
    this.load.image('panel_light1ad', 'assets/car_making/panel_light1ad.png');
    this.load.image('door3ad', 'assets/car_making/door3ad.png');
    this.load.image('d_window3ad', 'assets/car_making/d_window3ad.png');
    this.load.image('car_default', 'assets/car_making/car_default.png');
    this.load.image('red_paint', 'assets/car_making/red_paint.png');
    this.load.image('purple_paint_aniad', 'assets/car_making/purple_paint_aniad.png');
    this.load.image('pink_paint_aniad', 'assets/car_making/pink_paint_aniad.png');
    this.load.spritesheet('car_box_ani', 'assets/car_making/car_box_ani.png', { frameWidth: 524, frameHeight: 322 });
    this.load.spritesheet('car_cut1', 'assets/car_making/car_cut1.png', { frameWidth: 563, frameHeight: 289 });
    this.load.spritesheet('car_cut2', 'assets/car_making/car_cut2.png', { frameWidth: 524, frameHeight: 374 });
    this.load.spritesheet('car_cut3', 'assets/car_making/car_cut3.png', { frameWidth: 538, frameHeight: 249 });
    this.load.spritesheet('car_cut4', 'assets/car_making/car_cut4.png', { frameWidth: 528, frameHeight: 290 });
    this.load.spritesheet('car_cut5', 'assets/car_making/car_cut5.png', { frameWidth: 489, frameHeight: 374 });
    this.load.spritesheet('car_cut6', 'assets/car_making/car_cut6.png', { frameWidth: 512, frameHeight: 255 });
    this.load.spritesheet('red_paint_ani', 'assets/car_making/red_paint_ani.png', { frameWidth: 238, frameHeight: 140 });
    this.load.spritesheet('pink_paint_ani', 'assets/car_making/pink_paint_ani.png', { frameWidth: 237, frameHeight: 140 });
    this.load.spritesheet('purple_paint_ani', 'assets/car_making/purple_paint_ani.png', { frameWidth: 237, frameHeight: 140 });
    this.load.spritesheet('blue_paint_ani', 'assets/car_making/blue_paint_ani.png', { frameWidth: 237, frameHeight: 140 });
    this.load.spritesheet('green_paint_ani', 'assets/car_making/green_paint_ani.png', { frameWidth: 237, frameHeight: 140 });


    this.load.image('dry1', 'assets/final/dry1.png');
    this.load.image('dry2', 'assets/final/dry2.png');
    this.load.image('final_mam', 'assets/final/final_mam.png');
    this.load.image('f_towel', 'assets/final/f_towel.png');
    this.load.image('f_bg', 'assets/final/f_bg.png');
    this.load.image('f_bg1', 'assets/final/f_bg1.png');
    this.load.image('f_towel', 'assets/final/f_towel.png');
    this.load.image('f_water', 'assets/final/f_water.png');
    this.load.image('final', 'assets/final/final.png');
    this.load.image('panda', 'assets/final/panda.png');
    this.load.image('rat', 'assets/final/rat.png');
    this.load.image('plate4_clean', 'assets/final/plate4_clean.png');
    this.load.spritesheet('dustbin1', 'assets/final/dustbin1.png', { frameWidth: 359, frameHeight: 340 });
    this.load.spritesheet('dustbin2', 'assets/final/dustbin2.png', { frameWidth: 267, frameHeight: 347 });
    this.load.spritesheet('dustbin3', 'assets/final/dustbin3.png', { frameWidth: 262, frameHeight: 343 });
    this.load.spritesheet('food1', 'assets/final/food1.png', { frameWidth: 243, frameHeight: 258 });
    this.load.spritesheet('food2', 'assets/final/food2.png', { frameWidth: 244, frameHeight: 258 });
    this.load.spritesheet('food3', 'assets/final/food3.png', { frameWidth: 243, frameHeight: 258 });
    this.load.spritesheet('food3_3', 'assets/final/food3_3.png', { frameWidth: 243, frameHeight: 258 });
    this.load.spritesheet('food4', 'assets/final/food4.png', { frameWidth: 248, frameHeight: 260 });
    this.load.spritesheet('location', 'assets/final/location.png', { frameWidth: 200, frameHeight: 155 });
    this.load.spritesheet('panda_food', 'assets/final/panda_food.png', { frameWidth: 369, frameHeight: 353 });
    this.load.spritesheet('rabit_food', 'assets/final/rabit_food.png', { frameWidth: 361, frameHeight: 247 });
    this.load.spritesheet('rat_food', 'assets/final/rat_food.png', { frameWidth: 347, frameHeight: 321 });
    this.load.spritesheet('rat_food_ani', 'assets/final/rat_food_ani.png', { frameWidth: 360, frameHeight: 248 });
    this.load.spritesheet('spray_water', 'assets/final/spray_water.png', { frameWidth: 761, frameHeight: 297 });

    for (var i = 1; i <= 7; i++) {
      this.load.image('waste' + i, 'assets/final/waste' + i + '.png');
      if(i<=4){
      this.load.image('food_pop' + i, 'assets/final/food_pop' + i + '.png');
      } 
      if(i<=5){
      this.load.image('spoon' + i, 'assets/final/spoon' + i + '.png');
      } 

      if(i<=4){
      this.load.image('plate' + i, 'assets/final/plate' + i + '.png');
      } 
    } 


    this.load.image('nxt', 'assets/btns/nxt.png');
    this.load.image('prr', 'assets/btns/prr.png');


    for (var i = 1; i <= 3; i++) {
      this.load.image('panel_light' + i, 'assets/car_making/panel_light' + i + '.png');
      this.load.image('pink_car' + i, 'assets/car_making/pink_car' + i + '.png');
      this.load.image('purple_car' + i, 'assets/car_making/purple_car' + i + '.png');
      this.load.image('blue_car' + i, 'assets/car_making/blue_car' + i + '.png');
      this.load.image('green_car' + i, 'assets/car_making/green_car' + i + '.png');
      this.load.image('red_car' + i, 'assets/car_making/red_car' + i + '.png');
      this.load.image('window' + i, 'assets/car_making/window' + i + '.png');
      this.load.image('light' + i, 'assets/car_making/light' + i + '.png');
      this.load.image('door' + i, 'assets/car_making/door' + i + '.png');
      this.load.image('d_window' + i, 'assets/car_making/d_window' + i + '.png');
    }

    for (var i = 1; i <= 8; i++) {
      this.load.image('nail' + i, 'assets/hand_wash/nail' + i + '.png');
    }
    //// btns
    for (var i = 1; i <= 5; i++) {
      this.load.image('btn' + i, 'assets/btns/btn' + i + '.png');
    }


    for (var i = 0; i < RelatedGames.length; i++) {
    var gameData = RelatedGames[i];
    this.load.image('image' + i, gameData.thumb);
    }

   this.load.image('thumbframe', 'assets/thumbframe.png');

 
   
    }

openLink (){
    var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=loading-logo&utm_campaign=game-Baby-Panda-Kindergarten';
    var rr = window.open(url, '_blank');
    if (rr && rr.focus){
        rr.focus();
    }else if (!rr){
        window.location.href = url;
    }
}
}

 var music=null;