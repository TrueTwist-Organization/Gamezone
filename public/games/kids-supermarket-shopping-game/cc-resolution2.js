window.resolution = (function (exports) {
	class Resolution {
		constructor() {
			this.scaleX = 1;
			this.scaleY = 1;
			this.loadNum = 0;
		}

		init(designWidth, designHeight, cb = new Function()) {
			this.designWidth = designWidth / 2;
			this.designHeight = designHeight / 2;
			this.container = document.querySelector('#Game');
			const userAgent = window.navigator.userAgent;
			this.onMobile = userAgent.indexOf('Mobile') > -1;
			this.onSafari = userAgent.indexOf('Safari') > -1;
			window.addEventListener('resize', () => {
				this.resize();
			});
			window.addEventListener('orientationchange', e => {
				this.resize();
			});
			setTimeout(() => {
				this.resize();
				cb && cb();
			}, 0.05e3);
		}

		get clientWidth() {
			return window.innerWidth || document.body.clientWidth;
		}
		get clientHeight() {
			return (
				window.innerHeight ||
				document.body.clientHeight ||
				document.documentElement.clientHeight
			);
		}

		resize() {
			var scaleX = 1;
			var scaleY = 1;
			var canvasWidth = this.clientWidth;
			var canvasHeight = this.clientHeight;
			var canvasStyle = this.container.style;
			scaleX = scaleY = Math.min(scaleX, scaleY);
			canvasWidth = Math.ceil(this.clientWidth * scaleX);
			canvasHeight = Math.ceil(this.clientHeight * scaleY);
			canvasStyle.width = canvasWidth + 'px';
			canvasStyle.height = canvasHeight + 'px';
			if (typeof cc != 'undefined' && cc.game?.container) {
				cc.view?._resize();
			}
			if (typeof cc != "undefined" && cc && cc.sys && cc.sys.isMobile) {
			    // if (settings.orientation === 'landscape') {
			    cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
			    // }
				// else if (settings.orientation === 'portrait') {
				// cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
				// }
			}
		}
	}
	return new Resolution();
})({});
