import * as React from 'react';

let defaultValue = {
	map : {},
}

let MapContext = React.createContext(defaultValue);

export default MapContext;