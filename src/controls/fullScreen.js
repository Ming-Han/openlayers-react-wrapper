import * as React from 'react';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control_FullScreen from 'ol/control/fullscreen';

export class FullScreen extends React.Component {
    constructor(props) { 
        super(props); 
        this._fullScreen = undefined;
        this.options = {
            className: undefined,
            label: undefined,
            labelActive: undefined,
            tipLabel: undefined,
            keys: undefined,
            target: undefined,
            source: undefined
        };
        this.events =  {
            'change': undefined,
            'propertychange': undefined
        };
    }

    render() { 
        return null; 
    }

    componentDidMount () {
        let options = Method.getOptions(Object.assign(this.options, this.props));
        this._fullScreen = new ol_control_FullScreen(options);
        var key = this._name | (Object.keys(this.props.mapComponent.map.controls).length+1);
        this.props.mapComponent.map.controls[key] = this;
        this.props.mapComponent.map.addControl(this._fullScreen);

        let olEvents = Method.getEvents(this.events, this.props);
        for(let eventName in olEvents) {
        this._fullScreen.on(eventName, olEvents[eventName]);
        }
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<FullScreen {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );