var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this.numberCount = 0;
        _this.time = 30000;
        _this.week = 0;
        _this.hammer = new Hammer();
        _this.addChild(_this.hammer);
        _this.hammer.onStart();
        _this.initViews();
        Laya.timer.loop(2000, _this, _this.initRandom);
        Laya.timer.loop(1000, _this, _this.initTime);
        return _this;
    }
    Game.prototype.initViews = function () {
        this.numberCount = 0;
        for (var i = 0; i < 9; i++) {
            var boxLayout = this.getChildByName("item" + i);
            var normalImage = boxLayout.getChildByName("blue_normal");
            var hitImage = boxLayout.getChildByName("blue_hit");
            var code = boxLayout.getChildByName("code");
            normalImage.visible = false;
            hitImage.visible = false;
            code.visible = false;
        }
    };
    Game.prototype.initTime = function () {
        this.week += 1000;
        this.timeBar.value = 1 - (this.week / this.time);
        if (this.timeBar.value <= 0) {
            this.hammer.onEnd();
            Laya.timer.clearAll(this);
            this.removeSelf();
            var gameEnd = new GameEnd();
            gameEnd.mark.text = "" + this.numberCount;
            Laya.stage.addChild(gameEnd);
        }
    };
    Game.prototype.initRandom = function () {
        var _this = this;
        var randomNum = Math.floor(Math.random() * 8);
        var randomNum2 = Math.random();
        var type = randomNum2 < 0.5 ? 1 : 2;
        var boxLayout = this.getChildByName("item" + randomNum);
        var normalImage = boxLayout.getChildByName("blue_normal");
        var hitImage = boxLayout.getChildByName("blue_hit");
        var code = boxLayout.getChildByName("code");
        normalImage.skin = "ui/mouse_normal_" + type + ".png";
        if (!normalImage.visible) {
            normalImage.visible = true;
            boxLayout.on(Laya.Event.MOUSE_DOWN, this, function () { return _this.boxClick(boxLayout, normalImage, hitImage, code, type); });
            Laya.timer.once(1500, this, function () { return _this.hideMouse(normalImage, hitImage); });
        }
    };
    Game.prototype.boxClick = function (box, image, hitImage, code, type) {
        var _this = this;
        if (image.visible) {
            if (type == 1) {
                this.numberCount -= 100;
            }
            else {
                this.numberCount += 100;
            }
            this.count.text = "" + this.numberCount;
            hitImage.skin = "ui/mouse_hit_" + type + ".png";
            code.skin = "ui/score_" + type + ".png";
            image.visible = false;
            hitImage.visible = true;
            code.visible = true;
            Laya.timer.once(500, this, function () { return _this.hideMouse(hitImage, code); });
        }
    };
    Game.prototype.hideMouse = function (image, hintImage) {
        image.visible = false;
        hintImage.visible = false;
    };
    return Game;
}(ui.GameUI));
//# sourceMappingURL=Game.js.map