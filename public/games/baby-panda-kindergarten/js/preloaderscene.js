export default class preloaderscene extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        this.load.image('prebglogo', 'assets/prebglogo.png');
    }

    create() {
        const { width } = this.cameras.main;
        const { height } = this.cameras.main;
        const prebglogo = this.add.image(width / 2, height / 2 - 80, 'prebglogo').setDepth(10).setScale(1);
        prebglogo.setInteractive({ useHandCursor: true });
        prebglogo.on('pointerup', this.openLink, this);
        
        this.load.on('complete', () => {
            this.scene.start('loader');
        });
        
        this.load.start();
    }

openLink() {
        var url = 'https://www.yiv.com/?utm_source=localhost&utm_medium=loading-logo&utm_campaign=game-Baby-Panda-Kindergarten';
        var rr = window.open(url, '_blank');
        if (rr && rr.focus) {
            rr.focus();
        } else if (!rr) {
            window.location.href = url;
        }
    }
}