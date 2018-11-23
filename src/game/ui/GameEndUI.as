/**Created by the LayaAirIDE,do not modify.*/
package game.ui {
	import laya.ui.*;import laya.display.*; 

	public class GameEndUI extends View {
		public var mark:TextArea;
		public var btn_restart:Button;

		public static var uiView:Object =/*[STATIC SAFE]*/{"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":179,"x":110,"skin":"ui/total Score.png"}},{"type":"TextArea","props":{"y":260,"x":295,"width":378,"var":"mark","height":118,"fontSize":100,"editable":false,"disabled":false,"color":"#FFF"}},{"type":"Button","props":{"y":471,"x":305,"var":"btn_restart","stateNum":2,"skin":"ui/btn_restart.png"}}]};
		override protected function createChildren():void {
			super.createChildren();
			createView(uiView);

		}

	}
}