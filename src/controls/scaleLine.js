import * as React from 'react';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control_ScaleLine from 'ol/control/scaleline';

export class ScaleLine extends React.Component {
    constructor(props) { 
        super(props); 
        this._scaleLine = undefined;
        this.options = {
            className: undefined,
            minWidth: undefined,
            render: undefined,
            target: undefined,
            units: undefined,
        };
        this.events =  {
            'change': undefined,
            'change:units' : undefined,
            'propertychange': undefined
        };
    }

    render() { 
        return null; 
    }

    componentDidMount () {
        let options = Method.getOptions(Object.assign(this.options, this.props));
        this._scaleLine = new ol_control_ScaleLine(options);
        var key = this._name | (Object.keys(this.props.mapComponent.map.controls).length+1);
        this.props.mapComponent.map.controls[key] = this;
        this.props.mapComponent.map.addControl(this._scaleLine);

        let olEvents = Method.getEvents(this.events, this.props);
        for(let eventName in olEvents) {
        this._scaleLine.on(eventName, olEvents[eventName]);
        }
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<ScaleLine {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );