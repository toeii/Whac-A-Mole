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
var Hammer = /** @class */ (function (_super) {
    __extends(Hammer, _super);
    function Hammer() {
        return _super.call(this) || this;
    }
    Hammer.prototype.onStart = function () {
        this.visible = true;
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onHammerDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onHammerMove);
        this.onHammerMove();
    };
    Hammer.prototype.onEnd = function () {
        this.visible = false;
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onHammerDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onHammerMove);
    };
    Hammer.prototype.onHammerDown = function () {
        this.onHammerMove();
        this.hit.play(0, false);
    };
    Hammer.prototype.onHammerMove = function () {
        this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 3);
    };
    return Hammer;
}(ui.HammerUI));
//# sourceMappingURL=Hammer.js.map