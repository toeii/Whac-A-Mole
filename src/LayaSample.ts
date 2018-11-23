import WebGL = Laya.WebGL;
class GameMain{
    constructor()
    {
        Laya.init(800,600, WebGL);
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.screenAdaptationEnabled = true;
        Laya.stage.bgColor = "#588107";
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

    }
}
new GameMain();

function beginLoad(){
	Laya.loader.load("res/atlas/ui.atlas", Laya.Handler.create(null, onLoaded));
}

function onLoaded(){
    var gameStart: GameStart = new GameStart();
    Laya.stage.addChild(gameStart);
}