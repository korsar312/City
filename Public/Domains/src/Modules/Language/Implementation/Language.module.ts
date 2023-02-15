import factory from "../../../Helpers/Factory/Factory.enam";
import { LanguageDomain } from "./Domain/Language.domain";
import { LanguageService } from "./Service/Language.service";

const LanguageModules = () =>
	factory.create("LanguageModule").factoryMethod({
		domain: new LanguageDomain(),
		service: new LanguageService(),
	});

export default LanguageModules;
