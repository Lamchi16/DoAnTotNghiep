/** @format */
import React, { useState } from "react";
import RootNavigation from "./src/navigations/index";
import Context from "./src/screens/Context";
export default function App() {
	const [context, setContext] = useState([]);
	return (
		<Context.Provider value={[context, setContext]}>
			<RootNavigation></RootNavigation>
		</Context.Provider>
	);
}
