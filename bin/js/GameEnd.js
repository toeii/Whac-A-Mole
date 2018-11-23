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
var GameEnd = /** @class */ (function (_super) {
    __extends(GameEnd, _super);
    function GameEnd() {
        var _this = _super.call(this) || this;
        _this.btn_restart.on(Laya.Event.CLICK, _this, _this.onStartEnd);
        _this.mark.editable = false;
        return _this;
    }
    GameEnd.prototype.onStartEnd = function () {
        this.removeSelf();
        var gameStart = new GameStart();
        Laya.stage.addChild(gameStart);
    };
    ;
    return GameEnd;
}(ui.GameEndUI));
//# sourceMappingURL=GameEnd.js.map