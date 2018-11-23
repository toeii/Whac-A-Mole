class Game extends ui.GameUI {

    private hammer : Hammer;
    private box : Laya.Node;
    private numberCount = 0;
    private time = 30000;
    private week = 0;

    constructor(){
        super();
        
        this.hammer = new Hammer();
        this.addChild(this.hammer);
        this.hammer.onStart();
        this.initViews();

        Laya.timer.loop(2000,this,this.initRandom);
        Laya.timer.loop(1000,this,this.initTime)
    }

    private initViews(): void{
        this.numberCount = 0;
        this.count.editable = false;
        for(var i = 0;i < 9; i++){
            var boxLayout : Laya.Box  = this.getChildByName("item"+i) as Laya.Box;
            var normalImage : Laya.Image = boxLayout.getChildByName("blue_normal") as Laya.Image;
            var hitImage : Laya.Image = boxLayout.getChildByName("blue_hit") as Laya.Image;
            var code : Laya.Image = boxLayout.getChildByName("code") as Laya.Image;

            normalImage.visible = false;
            hitImage.visible = false;
            code.visible = false;
        }
    }

    private initTime(): void{
        this.week += 1000;
        this.timeBar.value = 1 - (this.week / this.time);
        if(this.timeBar.value<=0){
            this.hammer.onEnd();
            Laya.timer.clearAll(this);
            this.removeSelf();
            var gameEnd: GameEnd = new GameEnd();
            gameEnd.mark.text = ""+this.numberCount;
            Laya.stage.addChild(gameEnd);
        }
    }

    private initRandom(): void{
        var randomNum = Math.floor(Math.random()*8);
        var randomNum2 = Math.random();
        var type = randomNum2<0.5?1:2;
    
        var boxLayout : Laya.Box  = this.getChildByName("item"+randomNum) as Laya.Box;
        var normalImage : Laya.Image = boxLayout.getChildByName("blue_normal") as Laya.Image;
        var hitImage : Laya.Image = boxLayout.getChildByName("blue_hit") as Laya.Image;
        var code : Laya.Image = boxLayout.getChildByName("code") as Laya.Image;

        normalImage.skin = "ui/mouse_normal_"+ type + ".png";
        if(!normalImage.visible){
            normalImage.visible = true;
            boxLayout.on(Laya.Event.MOUSE_DOWN,this, () => this.boxClick(boxLayout,normalImage,hitImage,code,type));
            Laya.timer.once(1500,this, () => this.hideMouse(normalImage,hitImage));
        }
    }
  
    private boxClick(box : Laya.Box, image : Laya.Image, hitImage : Laya.Image, code : Laya.Image, type : number): void{
        if(image.visible){
            if(type==1){
                this.numberCount -= 100;
            }else{
                this.numberCount += 100;
            }
            this.count.text = ""+this.numberCount;
            hitImage.skin = "ui/mouse_hit_"+ type + ".png";
            code.skin = "ui/score_"+ type + ".png";

            image.visible = false;
            hitImage.visible = true;
            code.visible = true;

            Laya.timer.once(500,this, () => this.hideMouse(hitImage,code)); 
        }
    }

    private hideMouse(image : Laya.Image,hintImage : Laya.Image): void{
        image.visible = false;
        hintImage.visible = false;
    }


}
   