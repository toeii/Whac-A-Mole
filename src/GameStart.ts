class GameStart extends ui.GameStartUI {

    constructor(){
        super();
        this.btn_start.on(Laya.Event.CLICK,this,this.onStartGame);   
    }

    private onStartGame(): void{
        this.removeSelf();
        var game: Game = new Game();
        Laya.stage.addChild(game);
    };

}