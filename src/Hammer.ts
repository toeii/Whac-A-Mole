class Hammer extends ui.HammerUI {

    constructor(){
        super();
    }

    onStart(): void{
        this.visible = true;
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.onHammerDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onHammerMove);

        this.onHammerMove();
    }

    onEnd(): void{
        this.visible = false;
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.onHammerDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.onHammerMove);
    }

    onHammerDown(): void{
        this.onHammerMove();
        this.hit.play(0,false);
    }

    onHammerMove(): void{
        this.pos(Laya.stage.mouseX - this.width/2, Laya.stage.mouseY - this.height/3);
    }

}
