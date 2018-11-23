
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public show:Laya.FrameAnimation;
		public scoreNums:Laya.Box;
		public timeBar:Laya.ProgressBar;
		public count:Laya.TextArea;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":5,"x":10,"width":800,"skin":"ui/back.png","pivotX":4,"height":600}},{"type":"Box","props":{"y":227,"x":150,"name":"item0"},"child":[{"type":"Image","props":{"y":-20,"skin":"ui/mouse_normal_1.png","name":"blue_normal"},"compId":6},{"type":"Image","props":{"y":0,"x":3,"skin":"ui/mouse_hit_1.png","name":"blue_hit"}},{"type":"Image","props":{"y":-30,"x":13,"skin":"ui/score_1.png","name":"code"}},{"type":"Image","props":{"y":54,"x":-3,"skin":"ui/mask-01.png"}}]},{"type":"Box","props":{"y":225,"x":350,"name":"item1"},"child":[{"type":"Image","props":{"y":-20,"skin":"ui/mouse_normal_1.png","name":"blue_normal"}},{"type":"Image","props":{"y":-3,"x":3,"skin":"ui/mouse_hit_1.png","name":"blue_hit"}},{"type":"Image","props":{"y":54,"x":-4,"width":144,"skin":"ui/mask-01.png","height":46}},{"type":"Image","props":{"y":-30,"x":13,"skin":"ui/score_1.png","name":"code"}}]},{"type":"Box","props":{"y":233,"x":563,"name":"item2"},"child":[{"type":"Image","props":{"y":-20,"skin":"ui/mouse_normal_1.png","name":"blue_normal"}},{"type":"Image","props":{"y":0,"x":3,"skin":"ui/mouse_hit_1.png","name":"blue_hit"}},{"type":"Image","props":{"y":54,"x":-3,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":-30,"x":13,"skin":"ui/score_1.png","name":"code"}}]},{"type":"Box","props":{"y":329,"x":124,"name":"item3"},"child":[{"type":"Image","props":{"y":-20,"skin":"ui/mouse_normal_1.png","name":"blue_normal"}},{"type":"Image","props":{"y":0,"x":3,"skin":"ui/mouse_hit_1.png","name":"blue_hit"}},{"type":"Image","props":{"y":54,"x":-3,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":-30,"x":13,"skin":"ui/score_1.png","name":"code"}}]},{"type":"Box","props":{"y":326,"x":354,"name":"item4"},"child":[{"type":"Image","props":{"y":-20,"skin":"ui/mouse_normal_1.png","name":"blue_normal"}},{"type":"Image","props":{"y":0,"x":0,"skin":"ui/mouse_hit_1.png","name":"blue_hit"}},{"type":"Image","props":{"y":56,"x":-5,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":-30,"x":13,"skin":"ui/score_1.png","name":"code"}}]},{"type":"Box","props":{"y":326,"x":564,"name":"item5"},"child":[{"type":"Image","props":{"y":-20,"skin":"ui/mouse_normal_1.png","name":"blue_normal"}},{"type":"Image","props":{"y":0,"x":3,"skin":"ui/mouse_hit_1.png","name":"blue_hit"}},{"type":"Image","props":{"y":54,"x":-3,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":-30,"x":13,"skin":"ui/score_1.png","name":"code"}}]},{"type":"Box","props":{"y":434,"x":118,"name":"item6"},"child":[{"type":"Image","props":{"y":-20,"skin":"ui/mouse_normal_1.png","name":"blue_normal"}},{"type":"Image","props":{"y":0,"x":3,"skin":"ui/mouse_hit_1.png","name":"blue_hit"}},{"type":"Image","props":{"y":54,"x":-3,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":-30,"x":13,"skin":"ui/score_1.png","name":"code"}}]},{"type":"Box","props":{"y":442,"x":353,"name":"item7"},"child":[{"type":"Image","props":{"y":-20,"x":3,"skin":"ui/mouse_normal_1.png","name":"blue_normal"}},{"type":"Image","props":{"y":0,"x":3,"skin":"ui/mouse_hit_1.png","name":"blue_hit"}},{"type":"Image","props":{"y":54,"x":-3,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":-30,"x":13,"skin":"ui/score_1.png","name":"code"}}]},{"type":"Box","props":{"y":440,"x":588,"name":"item8"},"child":[{"type":"Image","props":{"y":-20,"x":2,"skin":"ui/mouse_normal_1.png","name":"blue_normal"}},{"type":"Image","props":{"y":0,"x":0,"skin":"ui/mouse_hit_1.png","name":"blue_hit"}},{"type":"Image","props":{"y":54,"x":-3,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":-30,"x":13,"skin":"ui/score_1.png","name":"code"}}]},{"type":"Box","props":{"y":25,"x":19,"width":237,"var":"scoreNums","height":23},"child":[{"type":"ProgressBar","props":{"y":0,"x":-2,"width":190,"var":"timeBar","value":1,"skin":"ui/progress_time.png","height":23}},{"type":"TextArea","props":{"y":27,"x":1,"width":178,"var":"count","text":"0","height":38,"fontSize":30,"editable":false,"disabled":false,"color":"#fff","align":"right"}}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"y":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0}]}}],"name":"show","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}

module ui {
    export class GameEndUI extends View {
		public mark:Laya.TextArea;
		public btn_restart:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":179,"x":110,"skin":"ui/total Score.png"}},{"type":"TextArea","props":{"y":260,"x":295,"width":378,"var":"mark","height":118,"fontSize":100,"editable":false,"disabled":false,"color":"#FFF"}},{"type":"Button","props":{"y":471,"x":305,"var":"btn_restart","stateNum":2,"skin":"ui/btn_restart.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameEndUI.uiView);

        }

    }
}

module ui {
    export class GameStartUI extends View {
		public btn_start:Laya.Button;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Image","props":{"width":800,"skin":"ui/help.png","height":600}},{"type":"Button","props":{"y":493,"x":318,"var":"btn_start","stateNum":2,"skin":"ui/btn_start.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);

        }

    }
}

module ui {
    export class HammerUI extends View {
		public hit:Laya.FrameAnimation;
		public hammer:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":90,"height":80},"child":[{"type":"Image","props":{"y":50,"x":57,"width":90,"var":"hammer","skin":"ui/hammer.png","rotation":-20,"pivotY":50,"pivotX":57,"height":80},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":2},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HammerUI.uiView);

        }

    }
}
