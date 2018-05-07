function getPropsKey(eventName) {
  return eventName
    .replace(/(\:[a-z])/g, $1 => $1.toUpperCase())
    .replace(/^[a-z]/, $1 => $1.toUpperCase())
    .replace(':','')
}

function getPropsKeyWithOn(eventName) {
  return 'on' + eventName
    .replace(/(\:[a-z])/g, $1 => $1.toUpperCase())
    .replace(/^[a-z]/, $1 => $1.toUpperCase())
    .replace(':','')
}


export class Method {
  static getOptions(props) {
    let options = {};
    for(let key in props) {
    	if (
        	key !== 'children' && typeof props[key] !== 'undefined' //exclude undefined ones
        	&& !key.match(/^on[A-Z]/)     //exclude events
      	) {
        	options[key] = props[key];
      	}
    }
    return options;
	}

  static  getEvents(events, props) {
  	let prop2EventMap = {};
  	for(let key in events) {
  		prop2EventMap[getPropsKeyWithOn(key)] = key;
  	}	 

  	let ret = {};
  	for(let propName in props) {
    	let eventName = prop2EventMap[propName];
    	let prop = props[propName];
    	if (typeof prop !== 'undefined' && propName.match(/^on[A-Z]/) && eventName) {
      		ret[eventName] = prop;
    	}
		}

  	return ret;
	}	
}