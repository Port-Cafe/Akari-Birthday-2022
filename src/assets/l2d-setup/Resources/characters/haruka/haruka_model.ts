import { HarukaExpressions } from "./haruka_expressions";
import { HarukaMotions } from "./haruka_motions";
import { PuroSekaiChar } from '@l2d-setup/lappdefine';


export class HarukaModel {
  public static characterName = "Haruka";
  public static character: PuroSekaiChar = PuroSekaiChar.Haruka;
  public static directoryIndex = 1;
  public static motions = new HarukaMotions();
  public static expressions = new HarukaExpressions();
}
