/**Created by the LayaAirIDE,do not modify.*/
package game.ui {
	import laya.ui.*;import laya.display.*; 

	public class GameStartUI extends View {
		public var btn_start:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{},"child":[{"type":"Image","props":{"width":800,"skin":"ui/help.png","height":600}},{"type":"Button","props":{"y":493,"x":318,"var":"btn_start","stateNum":2,"skin":"ui/btn_start.png"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}