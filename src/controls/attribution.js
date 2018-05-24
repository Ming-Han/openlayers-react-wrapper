import * as React from 'react';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control_Attribution from 'ol/control/attribution';

export class Attribution extends React.Component {
    constructor(props) { 
        super(props); 
        this._attribution = undefined;
        this.options = {
            className: undefined,
            target: undefined,
            collapsible: undefined,
            collapsed: undefined,
            tipLabel: undefined,
            label: undefined,
            collapseLabel: undefined,
            render : undefined
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
        this._attribution = new ol_control_Attribution(options);
        var key = this._name | (Object.keys(this.props.mapComponent.map.controls).length+1);
        this.props.mapComponent.map.controls[key] = this;
        this.props.mapComponent.map.addControl(this._attribution);

        let olEvents = Method.getEvents(this.events, this.props);
        for(let eventName in olEvents) {
        this._attribution.on(eventName, olEvents[eventName]);
        }
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<Attribution {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );