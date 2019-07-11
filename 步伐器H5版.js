(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"步伐器H5版_atlas_", frames: [[584,174,304,210],[252,674,250,211],[584,599,250,211],[504,812,194,242],[700,812,194,242],[0,674,250,211],[584,386,250,211],[584,0,408,172],[0,0,582,672]]}
];


// symbols:



(lib.badminton = function() {
	this.initialize(ss["步伐器H5版_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["步伐器H5版_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["步伐器H5版_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["步伐器H5版_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["步伐器H5版_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["步伐器H5版_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["步伐器H5版_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["步伐器H5版_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.half = function() {
	this.initialize(ss["步伐器H5版_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.halfp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.half();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,582,672);


(lib.an_Button = function(options) {
	this._element = new $.an.Button(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



// stage content:
(lib.无标题5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:19,q:20,s:30});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.RndTxt.on('added', function() {
			$('#RndTxt').val(function () {
				return "请输入步伐组数(默认为" + Rnd + "组): ";
			});
		}, this, true);
		$('#dom_overlay_container').on('click', '#RndTxt', RndTxt_clicked.bind(this));
		if(!this.RndTxt_change_cbk) {
			$("#dom_overlay_container").on("change", "#RndTxt", RndTxt_change.bind(this));
			this.RndTxt_change_cbk = true;
		}
		
		this.NumTxt.on('added', function() {
			$('#NumTxt').val(function () {
				return "请输入步伐个数(默认为" + Num + "个/组): ";
			});
		}, this, true);
		$('#dom_overlay_container').on('click', '#NumTxt', NumTxt_clicked.bind(this));
		if(!this.NumTxt_change_cbk) {
			$("#dom_overlay_container").on("change", "#NumTxt", NumTxt_change.bind(this));
			this.NumTxt_change_cbk = true;
		}

		this.SpeedTxt.on('added', function() {
			$('#SpeedTxt').val(function () {
				return "请输入速度大小(0.1s/个, 默认为" + Speed + "*0.1秒/个, 输入值需大于10): ";
			});
		}, this, true);
		$('#dom_overlay_container').on('click', '#SpeedTxt', SpeedTxt_clicked.bind(this));
		if(!this.SpeedTxt_change_cbk) {
			$("#dom_overlay_container").on("change", "#SpeedTxt", SpeedTxt_change.bind(this));
			this.SpeedTxt_change_cbk = true;
		}
		
		this.NumTxt.on('added', function() {
			$('#NumTxt').val(function () {
				return "请输入休息间隔(默认为" + Break + "s): ";
			});
		}, this, true);
		$('#dom_overlay_container').on('click', '#BreakTxt', BreakTxt_clicked.bind(this));
		if(!this.BreakTxt_change_cbk) {
			$("#dom_overlay_container").on("change", "#BreakTxt", BreakTxt_change.bind(this));
			this.BreakTxt_change_cbk = true;
		}
		
		$('#dom_overlay_container').on('click', '#button', button_clicked.bind(this));
		
		function RndTxt_clicked() {
			$('#RndTxt').val('');
		}
		function RndTxt_change(evt) {
			Rnd = $('#RndTxt').val();
			console.log(evt.target.value);
		}
		
		function NumTxt_clicked() {
			$('#NumTxt').val('');
		}
		function NumTxt_change(evt) {
			Num = $('#NumTxt').val();
			Numc = Num;
			console.log(evt.target.value);
		}
		
		function SpeedTxt_clicked() {
			$('#SpeedTxt').val('');
			//$('#SpeedTxt').val('');
		}
		function SpeedTxt_change(evt) {
			Speed = $('#SpeedTxt').val();
			Speedc = Speed - 5;
			console.log(evt.target.value);
		}
		
		function BreakTxt_clicked() {
			$('#BreakTxt').val('');
		}
		function BreakTxt_change(evt) {
			Break = $('#BreakTxt').val();
			Breakc = Break;
			console.log(evt.target.value);
		}
		
		function button_clicked() {
			this.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.stop();
		Numc -= 1;
		Speedc = Speed - 5;
		if (Numc == -1) {
			Numc = Num;
			this.gotoAndPlay(20);
		}
		else {
			var point = Math.floor(Math.random()*6);
			if (point == 0) {
				this.gotoAndPlay(2);
			}
			if (point == 1) {
				this.gotoAndPlay(4);
			}
			if (point == 2) {
				Speedc = Math.round(Speedc-Speed*0.4+2);
				this.gotoAndPlay(6);
			}
			if (point == 3) {
				Speedc = Math.round(Speedc-Speed*0.4+2);
				this.gotoAndPlay(8);
			}
			if (point == 4) {
				this.gotoAndPlay(10);
			}
			if (point == 5) {
				this.gotoAndPlay(12);
			}
		}
	}
	this.frame_3 = function() {
		Speedc -= 1;
		if (Speedc == 0) {
			this.gotoAndPlay(14);
		}
		else {
			this.gotoAndPlay(2);
		}
	}
	this.frame_5 = function() {
		Speedc -= 1;
		if (Speedc == 0) {
			this.gotoAndPlay(14);
		}
		else {
			this.gotoAndPlay(4);
		}
	}
	this.frame_7 = function() {
		Speedc -= 1;
		if (Speedc==0) {
			this.gotoAndPlay(16);
		}
		else {
			this.gotoAndPlay(6);
		}
	}
	this.frame_9 = function() {
		Speedc -= 1;
		if (Speedc==0) {
			this.gotoAndPlay(16);
		}
		else {
			this.gotoAndPlay(8);
		}
	}
	this.frame_11 = function() {
		Speedc -= 1;
		if (Speedc==0) {
			this.gotoAndPlay(14);
		}
		else {
			this.gotoAndPlay(10);
		}
	}
	this.frame_13 = function() {
		Speedc -= 1;
		if (Speedc==0) {
			this.gotoAndPlay(14);
		}
		else {
			this.gotoAndPlay(12);
		}
	}
	this.frame_19 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_20 = function() {
		Rnd -= 1;
		if (Rnd == 0) {
			this.gotoAndPlay(0);
		}
	}
	this.frame_30 = function() {
		Breakc -= 1;
		if (Breakc == 0) {
			Breakc = Break;
			this.gotoAndPlay(1);
		}
		else {
			this.gotoAndPlay(21);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(6).call(this.frame_19).wait(1).call(this.frame_20).wait(10).call(this.frame_30).wait(1));

	// Points
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(42.55,44.3,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(428.5,44.3,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(48.5,274.5,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(454.5,274.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(42.55,546.3,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(430.5,546.3,0.5,0.5);

	this.instance_6 = new lib.CachedTexturedBitmap_7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(198.05,278.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[]},2).to({state:[{t:this.instance_6}]},6).wait(11));

	// Actions
	this.button = new lib.an_Button({'id': 'button', 'label':'Start', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.button.setTransform(301.2,595.9,2.01,2.01,0,0,0,50.1,11);

	this.BreakTxt = new lib.an_TextInput({'id': 'BreakTxt', 'value':'请输入休息间隔(默认为8s): ', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.BreakTxt.setTransform(301,493.35,3.81,3.81,0,0,0,50,11);

	this.SpeedTxt = new lib.an_TextInput({'id': 'SpeedTxt', 'value':'请输入速度大小(0.1s/个, 默认为30*0.1秒/个, 输入值需大于10): ', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.SpeedTxt.setTransform(301,371,3.81,3.81,0,0,0,50,11);

	this.NumTxt = new lib.an_TextInput({'id': 'NumTxt', 'value':'请输入步伐个数(默认为20个/组): ', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.NumTxt.setTransform(301,248.65,3.81,3.81,0,0,0,50,11);

	this.RndTxt = new lib.an_TextInput({'id': 'RndTxt', 'value':'请输入步伐组数(默认为6组): ', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.RndTxt.setTransform(301,126.3,3.81,3.81,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.RndTxt},{t:this.NumTxt},{t:this.SpeedTxt},{t:this.BreakTxt},{t:this.button}]}).to({state:[]},1).wait(30));

	// Background
	this.instance_7 = new lib.halfp("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(300.1,346.25,1.0309,1.0309,0,0,0,291.1,335.9);
	this.instance_7.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({y:346.5,alpha:1},0).wait(1).to({startPosition:0},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,346.5,300,346.5);
// library properties:
lib.properties = {
	id: '7C3BBD8BA888504DAEB444BB47C69B1B',
	width: 600,
	height: 693,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/步伐器H5版_atlas_.png", id:"步伐器H5版_atlas_"},
		{src:"jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/button.js", id:"an.Button"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7C3BBD8BA888504DAEB444BB47C69B1B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;