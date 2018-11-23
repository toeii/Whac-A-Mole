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
var GameStart = /** @class */ (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        var _this = _super.call(this) || this;
        _this.btn_start.on(Laya.Event.CLICK, _this, _this.onStartGame);
        return _this;
    }
    GameStart.prototype.onStartGame = function () {
        this.removeSelf();
        var game = new Game();
        Laya.stage.addChild(game);
    };
    ;
    return GameStart;
}(ui.GameStartUI));
//# sourceMappingURL=GameStart.js.map