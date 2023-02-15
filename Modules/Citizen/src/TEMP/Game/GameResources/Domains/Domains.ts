import { TimesModule } from "../../../Times/йцу/Times.module";
import { SoundsModule } from "./Sounds/Sounds.module";

export class Domains {
	public times: TimesModule;
	public sound: SoundsModule;

	constructor() {
		this.times = new TimesModule();
		this.sound = new SoundsModule();
	}
}
