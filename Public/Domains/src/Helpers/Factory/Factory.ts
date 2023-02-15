export interface ICreator<CLASS, PROPS> {
	factoryMethod(props?: PROPS): CLASS;
}

class Factory<TFactoryCreators> {
	private creators: Map<keyof TFactoryCreators, TFactoryCreators[keyof TFactoryCreators]> = new Map();

	/**
	 * Регестрация класса создания экземпляра
	 * @param key - ключ для класса создания экземпляра
	 * @param creator - класс создания экземпляра
	 */
	public register<T extends keyof TFactoryCreators>(key: T, creator: TFactoryCreators[T]): void {
		this.creators.set(key, creator);
	}

	/**
	 * Возвращает класс создания экземпляра
	 * @param key - ключ для класса создания экземпляра
	 */
	public create<H, T extends keyof TFactoryCreators>(key: T): TFactoryCreators[T] {
		const creator = this.creators.get(key);
		if (!creator) {
			throw new Error(`${String(key)} не зарегестрирован.`);
		}
		// @ts-ignore
		return creator;
	}
}

export default Factory;