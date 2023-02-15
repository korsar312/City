import StoreCreator from "./Variables/FactoryStore";
import ModulesCreator from "./Variables/FactoryModules";
import { LanguageInterface } from "../../Modules/Language/Language.interface";
import { LanguageService } from "../../Modules/Language/Implementation/Service/Language.service";
import { LanguageDomain } from "../../Modules/Language/Implementation/Domain/Language.domain";
import { StylesInterface } from "../../Modules/Styles/Styles.interface";
import { StylesService } from "../../Modules/Styles/Implementation/Service/Styles.service";
import { StylesDomain } from "../../Modules/Styles/Implementation/Domain/Styles.domain";
import Factory from "./Factory";


export type TFactoryCreators = {
	LanguageModule: ModulesCreator<LanguageDomain, LanguageService>;
	LanguageStore: StoreCreator<LanguageInterface.TLanguageObj>;

	StyleModule: ModulesCreator<StylesDomain, StylesService>;
	StyleStore: StoreCreator<StylesInterface.TStyleObj>;

};

export function registerModules() {
	factory.register("LanguageModule", new ModulesCreator());
	factory.register("LanguageStore", new StoreCreator());

	factory.register("StyleModule", new ModulesCreator());
	factory.register("StyleStore", new StoreCreator());
}

const factory = new Factory<TFactoryCreators>()

registerModules()

export default factory

