import React from "react";
import { HashRouter } from "react-router-dom";
import BaseLayout from "./Layouts/BaseLayout/BaseLayout";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { RouteActivator } from "./RouteActivator";

const App = () => {
	return (
		<HashRouter>
			<div>
				<ThemeSwitcher />
				<RouteActivator />
				<BaseLayout />
			</div>
		</HashRouter>
	);
};

export default App;
