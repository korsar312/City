import { LanguageDomain } from "./Implementation/Domain/Language.domain";
import { LanguageService } from "./Implementation/Service/Language.service";

export namespace LanguageInterface {
	/**
	 * Список языков
	 */
	export enum ELanguageType {
		RU = "RU",
		EN = "EN",
	}

	/**
	 * Список обычных слов
	 */
	export enum ELanguageSimpleWord {
		EXIT = "EXIT",
		NO_PAGE = "NO_PAGE",
		TEMP_WORD_REMOVE_THIS = "TEMP_WORD_REMOVE_THIS",
	}

	/**
	 * Список всех слов
	 */
	export const allLanguageWord = {
		...ELanguageSimpleWord,
	};

	export type TAllLanguageWord = keyof typeof allLanguageWord;

	/**
	 * Список языков для словаря
	 */
	type TWord = {
		[key in ELanguageType]: string;
	};

	/**
	 * Список слов для словаря
	 */
	export type TLanguage = {
		[key in TAllLanguageWord]: TWord;
	};

	/**
	 * Основной языковой объект
	 */
	export type TLanguageObj = {
		model: ELanguageType;
	};

	/**
	 * Домен и сервис
	 */
	export interface IModules {
		domain: LanguageDomain;
		service: LanguageService;
	}
}
