
//var Demo = function() {
//}
var sippeKerroin=0;
	var bpm = 125;
	var beat = 60/bpm;
	var pattern = beat*8;
	var tick = beat/4;
var flashtexts = [
		"kiky.png",
		"chempolis.png",
		"yle.png",
		"koulutuslupaus.png",
		"terrafame.png",
		"vakuutuskuori.png",
		"suomi.png",
		"jumalauta.png"
		
];
	var currentText = 0;

Demo.prototype.init = function()
{
  const settings = new Settings();
  settings.demo.compatibility.old2dCoordinates = true; // when true 2d coordinates x: 0 - 1920, y: 0 - 1080; when false 2d coordinates are -0.5 - 0.5 range
  settings.demo.compatibility.oldColors = true; // when true colors are in 0-255 range, when false colors are in 0-1 range
  settings.demo.image.texture.wrapS = 'RepeatWrapping';
  settings.demo.image.texture.wrapT = 'RepeatWrapping';
	settings.demo.screen.width = 1280;
	settings.demo.screen.height = 720;
	settings.demo.camera = {
		type: 'Perspective',
		fov: 75,
		// aspectRatio calculated below
		near: 0.1,
		far: 1000,
		position: { x: 0.0, y: 0.0, z: 0.0 },
		lookAt: { x: 0.0, y: 0.0, z: -1.0 },
		up: { x: 0.0, y: 1.0, z: 0.0 }
	};
  settings.demo.lights = [
    {
      type: 'Ambient',
      color: { r: 1.0, g: 1.0, b: 1.0 },
      intensity: 10.0,
    }/*,
    {
      type: 'Directional',
      castShadow: false,
      color: { r: 1.0, g: 1.0, b: 1.0 },
      intensity: 1.0,
      position: { x: 0.0, y: 1.0, z: 2.0 },
    },*/
  ];

			this.loader.addAnimation([
		{
			"start": 0, "duration":1*pattern
			,"layer": 1, "image": ["jumalauta.png"]
			,"scale":[{"x":1.1,"y":1.1}
			, {"duration":pattern,"x":0.9,"y":0.9}]
		}]);

					this.loader.addAnimation([
		{
			"start": pattern, "duration":pattern
			,"layer": 1, "image": ["presents.png"]
			,"scale":[{"x":1.1,"y":1.1}
			, {"duration":pattern,"x":0.9,"y":0.9}]
		}]);
		
					this.loader.addAnimation([
		{
			"start": 2*pattern, "duration":pattern
			,"layer": 1, "image": ["juha.png"]
			,"scale":[{"x":1.1,"y":1.1}
			, {"duration":pattern,"x":0.9,"y":0.9}]
		}]);
		
					this.loader.addAnimation([
		{
			"start": 3*pattern, "duration":pattern
			,"layer": 1, "image": ["white.png"]
			,"color":[{"a":55}]
			,"scale":[{"x":1.0,"y":1.0}]
		}]);
		
		
	this.loader.addAnimation([
		{
			"start": 0, "duration":42*pattern
			,"layer": 49999, "image": ["vignette.png"]
			,"scale":[{"x":1.0,"y":1.0}]
		}]);
	
	this.loader.addAnimation([
    {
         "start": 8*pattern, "duration":4*pattern
        ,"layer": 300, "image": ["suomikuntoon.png"]
		,"scale":[{"x":3.0,"y":3.0}]
     ,"shader":{
            "name":"shader/mirrorscroll.fs",
            "variable":[
                  {"name":"time","value":[()=>getSceneTimeFromStart()]}
				 ,{"name":"speedX","value":[1.0]}
				 ,{"name":"speedY","value":[1.0]}
            ]
        }
		
    }
]);

	

	this.loader.addAnimation([
    {
         "start": 6*pattern, "duration":2*pattern
        ,"layer": 300, "image": ["keskustalogo2.png"]
		,"scale":[{"x":3.0,"y":3.0}]
     ,"shader":{
            "name":"shader/mirrorscroll.fs",
            "variable":[
                  {"name":"time","value":[()=>getSceneTimeFromStart()]}
				 ,{"name":"speedX","value":[0]}
				 ,{"name":"speedY","value":[1]}
            ]
        }
		
    }
]);



	this.loader.addAnimation([
    {
         "start": 20*pattern, "duration":4*pattern
        ,"layer": 300, "image": {"name":"suomikuntoon2.mp4", "video":{"speed":.9} }
		,"scale":[{"x":4.0,"y":4.0}]
			,"angle": [{"degreesZ":()=>Math.sin(getSceneTimeFromStart()*.5)*360}]
     ,"shader":{
            "name":"shader/mirrorscroll.fs",
            "variable":[
                  {"name":"time","value":[()=>getSceneTimeFromStart()]}
				 ,{"name":"speedX","value":[1.0]}
				 ,{"name":"speedY","value":[2.0]}
	
            ]
        }
		
    }
]);

for(var i=0;i<24;i++)
{

currentText++;
if(currentText>5)currentText=0;

			this.loader.addAnimation([
		{
			"start": 20*pattern+i*beat, "duration":1*beat
			,"layer": 1200, "image": [flashtexts[currentText]]
			,"scale":[{"x":1.0,"y":1.0}]
		}]);
}

for(var i=0;i<4;i++)
{


		this.loader.addAnimation([
		{
			"start": 23*pattern+i*2*beat, "duration":1*beat
			,"layer": 1200, "image": ["suomi.png"]
			,"scale":[{"x":2.0,"y":2.0}]
		}]);
		
		this.loader.addAnimation([
		{
			"start": 23*pattern+i*2*beat+beat, "duration":1*beat
			,"layer": 1200, "image": ["kuntoon.png"]
			,"scale":[{"x":2.0,"y":2.0}]
		}]);
}

// vitun seko skene
for(var i=0;i<128;i++)
{
currentText=Math.round(Math.random()*7);

			this.loader.addAnimation([
		{
			"start": 24*pattern+tick*i, "duration":2*tick
			,"layer": 32200, "image": [flashtexts[currentText]]
			,"scale":[{"x":1.0,"y":1.0}
			,{"duration":1*beat,"x":0.0,"y":0.0}]
			,"position":[{"x":Math.random()*1080+100,"y":Math.random()*520+100,"z":0}]
		}]);
}

for(var i=0;i<16;i++)
{
	this.loader.addAnimation([
		{
			"start": 24*pattern+i*2*beat+beat, "duration":1*beat
			,"layer": 40500, "image": ["sipi.png"]
			,"beat": beat
			,"color":[{"a":200}]
			,"angle": [{"degreesZ":Math.random()*360}
			,{"duration":1*pattern,"degreesZ":Math.random()*360}]
			,"scale":[{"x":()=> (getSceneTimeFromStart()-24*pattern)-((getSceneTimeFromStart())%beat)*(getSceneTimeFromStart()-24*pattern)*1.2,"y":()=>(getSceneTimeFromStart()-24*pattern)-((getSceneTimeFromStart())%beat)*(getSceneTimeFromStart()-24*pattern)*1.2}]
			,"position":[{"x":640,"y":360,"z":0}]
			}
		]);
}	

	this.loader.addAnimation([
    {
         "start": 24*pattern, "duration":4*beat
        ,"layer": 30000, "image": ["sipi.png"]
		,"scale":[{"x":14.0,"y":14.0}]
		,"angle": [{"degreesZ":()=>(1+Math.sin(getSceneTimeFromStart()*.5))*360}]
     ,"shader":{
            "name":"shader/tile.fs",
            "variable":[
                  {"name":"time","value":[()=>4*getSceneTimeFromStart()]}
            ]
        }
		
    }
]);



// vitun seko skene part 2
this.fullScreenNoise(4*beat+24*pattern,4*beat,5,0.5);

			this.loader.addAnimation([
					{
					"start": 4*beat+24*pattern, "duration": 4*beat, "object":"triplatorus.obj"
					,"layer": 20000
					,"position": [{"z":-90,"y":0.0,"x":0.0}]
					,"angle": [{"degreesX":Math.random()*720-360,"degreesY":Math.random()*720-360,"degreesZ":()=>((getSceneTimeFromStart()%1.0))*360}]

					,"scale": [
							{"x":100,"y":100,"z":100}
						]
					}]);

				this.loader.addAnimation([
					{
					"start": 4*beat+24*pattern, "duration": 4*beat, "object":"triplatorus.obj"
					,"layer": 20000
					,"position": [{"z":-90,"y":0.0,"x":0.0}]
					,"angle": [{"degreesX":Math.random()*720-360,"degreesY":()=>((getSceneTimeFromStart()%1.0))*360,"degreesZ":Math.random()*720-360}]

					,"scale": [
							{"x":100,"y":100,"z":100}
						]
					}]);
				
// vitun seko part 3			

	this.loader.addAnimation([
    {
         "start": 25*pattern, "duration":4*beat
        ,"layer": "0002", "image": ["keskustalogo2.png"]
		,"scale":[{"x":2.5,"y":2}]
     ,"shader":{
            "name":"shader/tunnel2.fs",
            "variable":[
                  {"name":"time","value":[()=>getSceneTimeFromStart()]},

            ]
        }
		
    }
]);

// vitun seko part 4

	this.loader.addAnimation([
    {
         "start": 4*beat+25*pattern, "duration":4*beat
        ,"layer": 300, "image": ["keskustalogo2.png"]
		,"scale":[{"x":3.0,"y":3.0}]
     ,"shader":{
            "name":"shader/mirrorscroll.fs",
            "variable":[
                  {"name":"time","value":[()=>getSceneTimeFromStart()]}
				 ,{"name":"speedX","value":[-2.0]}
				 ,{"name":"speedY","value":[2.0]}
            ]
        }
		
    }
]);

	this.loader.addAnimation([
    {
         "start": 26*pattern, "duration":4*beat
        ,"layer": "0002", "image": ["sipi.png"]
		,"scale":[{"x":6.5,"y":4}]
     ,"shader":{
            "name":"shader/tunnel2.fs",
            "variable":[
                  {"name":"time","value":[()=>getSceneTimeFromStart()]},

            ]
        }
		
    }
]);

	this.loader.addAnimation([
    {
         "start": 26*pattern+4*beat, "duration":4*beat
        ,"layer": 30000, "image": ["keskustatekstuuri.png"]
		,"scale":[{"x":14.0,"y":14.0}]
		,"angle": [{"degreesZ":()=>(1+Math.sin(getSceneTimeFromStart()*.5))*360}]
     ,"shader":{
            "name":"shader/tile.fs",
            "variable":[
                  {"name":"time","value":[()=>4*getSceneTimeFromStart()]}
            ]
        }
		
    }
]);

this.loader.addAnimation([
	{
		"start": 27*pattern, "duration": 4*beat

	,"image": {"name":"suomikuntoon2.mp4", "video":{"speed":4.0} }
	,"scale":[{"x":1.9,"y":1.9}]
		,"layer": 1
	}]);

		this.loader.addAnimation([
    {
         "start": 27*pattern+4*beat, "duration":4*beat
        ,"layer": "0002", "image": ["keskustatekstuuri.png"]
		,"scale":[{"x":2.5,"y":2}]
     ,"shader":{
            "name":"shader/tunnel2.fs",
            "variable":[
                  {"name":"time","value":[()=>getSceneTimeFromStart()]},

            ]
        }
		
    }
]);

for (var i=0;i<10;i++)
{
	this.loader.addAnimation([
		{
			"start": 27*pattern+4*beat, "duration":4*beat
			,"layer": 500+i, "image": ["sipi.png"]
			,"scale":[{"x":1.0,"y":1.0}]
			//,"position":[{"x":()=>(Math.sin(getSceneTimeFromStart()*2))*320+640;}","y":()=>(Math.abs(-.5+Math.sin(getSceneTimeFromStart())))*180+360;}"}]
			,"position":[{"x":()=> sippeScrollX(),"y":()=> sippeScrollY()}]
			//,"position":[{"x":()=>sipiScrollX(getSceneTimeFromStart())}","y":()=>(Math.abs(Math.sin(getSceneTimeFromStart())))*360+180;}"}]
		}]);
}
/*
for(var i=0;i<8)
{
	this.pomppuObu(25*beat,200, -200, -200, "spikeball.obj");
}	
	*/	
this.fullScreenNoise(0,pattern*40,49995,0.15);


for(var i=0;i<30;i++)
{
	this.loader.addAnimation([
		{
			"start": 8*pattern+0+i*beat, "duration":1*beat
			,"layer": 500, "image": ["sipi.png"]
			,"beat": beat
			
			,"angle": [{"degreesZ":Math.random()*360}
			,{"duration":1*pattern,"degreesZ":Math.random()*360}]
			,"scale":[{"x":()=>(getSceneTimeFromStart()-8*pattern)-((getSceneTimeFromStart())%beat)*(getSceneTimeFromStart()-8*pattern)*1.2,"y":()=>(getSceneTimeFromStart()-8*pattern)-((getSceneTimeFromStart())%beat)*(getSceneTimeFromStart()-8*pattern)*1.2}]
			,"position":[{"x":640,"y":360,"z":0}]
			}
		]);
}	
for(var i=30;i<32;i++)
{
	this.loader.addAnimation([
		{
			"start": 8*pattern+0+i*beat, "duration":1*beat
			,"layer": 500, "image": ["berner.png"]
			,"angle": [{"degreesZ":Math.random()*360}]
			,"beat": beat
			,"scale":[{"x":()=> 5-((getSceneTimeFromStart())%beat)*5.0,"y":()=> 5-((getSceneTimeFromStart())%beat)*5.0}]
			,"position":[{"x":640,"y":360,"z":0}]
			}
		]);
}	
	
this.piikkiPallo(pattern*4);
this.piikkiPallo(pattern*6);


		/*
			this.loader.addAnimation([
		{
			"start": 0, "duration":42*pattern
			,"layer": 1, "image": ["white.png"]
			,"scale":[{"x":1.0,"y":1.0}]
		}]);
		*/
		
		







this.loader.addAnimation([
	{
		"start": 12*pattern, "duration": 8*pattern

	,"image": {"name":"suomikuntoon2.mp4", "video":{"speed":0.48825} }
	,"scale":[{"x":1.7,"y":1.7}]
		,"layer": 1
	}]);



this.distortion(0,pattern*38.5,0,50000,50002);
this.loader.addAnimation([
		{
			"start": 38*pattern+2*beat, "duration":4*pattern
			,"layer": 49999, "image": ["end.png"]
			,"scale":[{"x":1.3,"y":1.3}]
		}]);
		

		
			this.loader.addAnimation([
		{
			"start": 28*pattern, "duration":0.49*pattern
			,"layer": 1, "image": ["kekkonen.png"]
			,"scale":[{"x":0.7,"y":0.7}
			, {"duration":.49*pattern,"x":0.5,"y":0.5}]
		}]);
		
		this.loader.addAnimation([
		{
			"start": 28.5*pattern, "duration":0.49*pattern
			,"layer": 1, "image": ["mannerheim.png"]
			,"scale":[{"x":0.6,"y":0.6}
			, {"duration":.49*pattern,"x":0.45,"y":0.45}]
		}]);

			this.loader.addAnimation([
		{
			"start": 29*pattern, "duration":0.49*pattern
			,"layer": 1, "image": ["aatu.png"]
						,"scale":[{"x":0.5,"y":0.5}
			, {"duration":.49*pattern,"x":0.43,"y":0.43}]
		}]);
		
		this.loader.addAnimation([
		{
			"start": 29.5*pattern, "duration":pattern
			,"layer": 1, "image": ["juhasipila.png"]
						,"scale":[{"x":0.7,"y":0.7}
			, {"duration":pattern,"x":1.0,"y":1.0}]
		}]);
		
		
//this.glow(0,pattern*38.5,50006,50010,50019);
this.hackGlow(0,pattern*38.5,50006,50008,50010);
this.brightnessContrast(0,pattern*38.5,50001,50004,50007,0.5,3.5);


}

Demo.prototype.kuva = function(startTime, duration, pic)
{
	this.loader.addAnimation([
		{
			"start": startTime, "duration":duration
			,"layer": 65500, "image": [pic]
			,"scale":[{"x":1.5,"y":1.5}]
		}]);
}

/*
	this.loader.addAnimation([
    {
         "start": startTime, "duration":6*pattern
        ,"layer": 40000, "image": ["noise.png","noise.png"]
		,"scale":[{"x":1.0,"y":1.0}]
     ,"shader":{
            "name":"shader/fire.fs",
            "variable":[
                  {"name":"time","value":[()=>()=>getSceneTimeFromStart();}"]}
            ]
        }
		
    }
]);
*/


Demo.prototype.distortion = function(startTime, duration, startLayer, endLayer, layer)
{
	this.loader.addAnimation ([
	{
	"start": startTime, "duration": duration
	,"layer": startLayer
	,"fbo":{"name":"fbodist","action":"begin"}
	},
	{
	"start": startTime, "duration": duration
	,"layer": endLayer,"fbo":{"name":"fbodist","action":"unbind"}
	}
	]);
	this.loader.addAnimation ([
	{
		 "start": startTime, "duration": duration
		,"image": "fbodist.color.fbo"
		,"layer": layer
		,"shader":{"name":"shader/distortion.fs",
			"variable":[
				 {"name":"time","value":[()=> getSceneTimeFromStart()]}
				,{"name":"timeMultiplier","value":[20.9]}
				,{"name":"pixelSize","value":[()=> Math.random()*0.02,0.001]}
				,{"name":"canvasSize","value":[1280,720]}
				,{"name":"noiseWaveSpeed","value":[-3]}
				,{"name":"noiseWaveSize","value":[1]}
				,{"name":"noiseLuminance","value":[1]}
				,{"name":"noiseAlpha","value":[0.0]}
				,{"name":"colorComponentDistortionX","value":[0.02,0.02,0.02,0.02]}
				,{"name":"colorComponentDistortionY","value":[0.02,0.02,0.02,0.02]}
			]
			}
		}]);
}

Demo.prototype.brightnessContrast = function (startTime, duration, startLayer, endLayer, layer, brightness, contrast)
{
	this.loader.addAnimation ([
	{
	"start": startTime, "duration": duration
	,"layer": startLayer
	,"fbo":{"name":"fbobc","action":"begin"}
	},
	{
	"start": startTime, "duration": duration
	,"layer": endLayer,"fbo":{"name":"fbobc","action":"unbind"}
	}
	]);
	this.loader.addAnimation ([
	    {
	         "start": startTime, "duration":duration
	        ,"layer": layer, "image": ["fbobc.color.fbo"]
					//FIXME
		 //,"initFunction":"{fboBcImage = imageLoadImage('fbobc.color.fbo'); setTextureSizeToScreenSize(fboBcImage.ptr); }"
		 //,"runFunction":"{setTextureSizeToScreenSize(fboBcImage.ptr);}"
		 ,"brightness": brightness
		 ,"contrast": contrast
		 ,"beat": beat
	     ,"shader":{
	            "name":"shader/brightnesscontrast.fs",
	            "variable":[
	                  {"name":"time","value":[()=>getSceneTimeFromStart()]}
          ,{"name":"brightness","value":[()=>brightness-(getSceneTimeFromStart()%beat)*2]}
					 ,{"name":"contrast","value":[contrast]}
	            ]
	        }
	    }
	]);
}

Demo.prototype.edgeGlow = function (startTime, duration, startLayer, endLayer, layer)
{
	this.loader.addAnimation ([
	{
	"start": startTime, "duration": duration
	,"layer": startLayer
	,"fbo":{"name":"fboeg","action":"begin"}
	},
	{
	"start": startTime, "duration": duration
	,"layer": endLayer,"fbo":{"name":"fboeg","action":"unbind"}
	}
	]);
	this.loader.addAnimation ([
	    {
	         "start": startTime, "duration":duration
	        ,"layer": layer, "image": ["fboeg.color.fbo"]
					//FIXME
		 //,"initFunction":"{fboegImage = imageLoadImage('fboeg.color.fbo'); setTextureSizeToScreenSize(fboegImage.ptr); }"
		 //,"runFunction":"{setTextureSizeToScreenSize(fboegImage.ptr);}"
	     ,"shader":{
	            "name":"shader/edgeglow.fs",
	            "variable":[
	                  {"name":"time","value":[()=>getSceneTimeFromStart()]}
	            ]
	        }
	    }
	]);
}

Demo.prototype.piikkiPallo = function (startTime)
{
		for(var i=0;i<4;i++)
		{
		this.pomppuObu(startTime+i*beat,200, 0, 0, "spikeball.obj");
		}
		
		for(var i=0;i<4;i++)
		{
		this.pomppuObu(4*beat+startTime+i*beat,180, -200, 0, "triplatorus.obj");
		this.pomppuObu(4*beat+startTime+i*beat,180, 200, 0, "triplatorus.obj");
		}
		
		for(var i=0;i<4;i++)
		{
		this.pomppuObu(8*beat+startTime+i*beat,200, -200, -200, "spikeball.obj");
		this.pomppuObu(8*beat+startTime+i*beat,200, 200, -200, "spikeball.obj");
		this.pomppuObu(8*beat+startTime+i*beat,200, -200, 200, "spikeball.obj");
		this.pomppuObu(8*beat+startTime+i*beat,200, 200, 200, "spikeball.obj");
		}
		for(var i=0;i<4;i++)
		{
		this.pomppuObu(12*beat+startTime+i*beat,150, -150, -150, "triplatorus.obj");
		this.pomppuObu(12*beat+startTime+i*beat,150, 150, -150, "spikeball.obj");
		this.pomppuObu(12*beat+startTime+i*beat,150, -150, 150, "spikeball.obj");
		this.pomppuObu(12*beat+startTime+i*beat,150, 150, 150, "triplatorus.obj");
		this.pomppuObu(12*beat+startTime+i*beat,150, -450, -150, "spikeball.obj");
		this.pomppuObu(12*beat+startTime+i*beat,150, 450, -150, "triplatorus.obj");
		this.pomppuObu(12*beat+startTime+i*beat,150, -450, 150, "triplatorus.obj");
		this.pomppuObu(12*beat+startTime+i*beat,150, 450, 150, "spikeball.obj");
		}
}

Demo.prototype.pomppuObu = function(startTime, scale, positionX, positionY, obu)
{
			this.loader.addAnimation([
					{
					"start": startTime, "duration": 3*tick, "object":obu
					,"layer": 20000
					,"position": [{"z":-900,"y":positionY,"x":positionX}]
					,"angle": [{"degreesX":Math.random()*720-360,"degreesY":Math.random()*720-360,"degreesZ":()=>(Math.sin(getSceneTimeFromStart()*.5))*360}]

					,"scale": [
							{"x":scale,"y":scale,"z":scale}
							, {"duration":beat,"x":scale*.25,"y":scale*.25,"z":scale*.25}
						]
					}]);
}

Demo.prototype.fullScreenNoise = function (sceneStartTime, duration, layer, alpha)
{
	this.loader.addAnimation([
    {
         "start": sceneStartTime, "duration":duration
        ,"layer": layer, "image": ["empty.png"]
     ,"shader":{
            "name":"shader/noise.fs",
            "variable":[
                  {"name":"time","value":[()=>getSceneTimeFromStart()]},
				  {"name":"alphaBlending","value":[alpha]}
            ]
        }
    }
]);
}

Demo.prototype.hackGlow = function (startTime, duration, startLayer, endLayer, layer)
{
	this.loader.addAnimation ([
	{
	"start": startTime, "duration": duration
	,"layer": startLayer
	,"fbo":{"name":"fbohg","action":"begin"}
	},
	{
	"start": startTime, "duration": duration
	,"layer": endLayer,"fbo":{"name":"fbohg","action":"unbind"}
	}
	]);
	this.loader.addAnimation ([
	    {
	         "start": startTime, "duration":duration
	        ,"layer": layer, "image": ["fbohg.color.fbo"]
					//FIXME
		 //,"initFunction":"{fbohgImage = imageLoadImage('fbohg.color.fbo'); setTextureSizeToScreenSize(fbohgImage.ptr); }"
		 //,"runFunction":"{setTextureSizeToScreenSize(fbohgImage.ptr);}"
	     ,"shader":{
	            "name":"shader/hackglow.fs",
	            "variable":[
	                  {"name":"time","value":[()=>getSceneTimeFromStart()]}
	            ]
	        }
	    }
	]);
}



function sippeScrollX()
{
sippeKerroin++;
if(sippeKerroin>11)sippeKerroin=0;
//print(sippeKerroin);
return ((sippeKerroin*.090909090909091+(.7*getSceneTimeFromStart()))%1.1*(1280));

}
function sippeScrollY()
{
return (Math.abs(Math.sin(sippeKerroin+getSceneTimeFromStart())))*360+180;
}