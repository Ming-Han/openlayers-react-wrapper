import * as React from 'react';

let defaultValue = {
	Component : {},
	map : {}
}

let MapContext = React.createContext(defaultValue);

export default MapContext;