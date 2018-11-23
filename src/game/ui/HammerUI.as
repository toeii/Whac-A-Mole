/**Created by the LayaAirIDE,do not modify.*/
package game.ui {
	import laya.ui.*;import laya.display.*; 

	public class HammerUI extends View {
		public var hit:FrameAnimation;
		public var hammer:Image;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":90,"height":80},"child":[{"type":"Image","props":{"y":50,"x":57,"width":90,"var":"hammer","skin":"ui/hammer.png","rotation":-20,"pivotY":50,"pivotX":57,"height":80},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":2},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":1}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}