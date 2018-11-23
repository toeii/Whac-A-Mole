class GameEnd extends ui.GameEndUI {

    constructor(){
        super();
        this.btn_restart.on(Laya.Event.CLICK,this,this.onStartEnd);   
        this.mark.editable = false;
    }

    private onStartEnd(): void{
        this.removeSelf();
        var gameStart: GameStart = new GameStart();
        Laya.stage.addChild(gameStart);
        
    };

}