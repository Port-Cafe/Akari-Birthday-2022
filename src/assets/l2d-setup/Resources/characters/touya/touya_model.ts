import { TouyaExpressions } from "./touya_expressions";
import { TouyaMotions } from "./touya_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class TouyaModel {
  public static characterName = "Touya";
  public static character: PuroSekaiChar = PuroSekaiChar.Touya;
  public static directoryIndex = 1;
  public static motions = new TouyaMotions();
  public static expressions = new TouyaExpressions();
}