import * as React from 'react';
import PropTypes from 'prop-types';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control from 'ol/control';

class Controls extends React.Component{
    constructor(props) {
        super(props);
        this.options = {
            attribution  : undefined,
            attributionOptions: undefined,
            rotate: undefined,
            rotateOptions: undefined,
            zoom: undefined,
            zoomOptions: undefined
        };
    }

    render() {
        let options = Method.getOptions(Object.assign(this.options, this.props));
        this.props.mapComponent.map.getControls().clear();
        var defaultControls = ol_control.defaults(options);
        defaultControls.forEach((element)=>{
            this.props.mapComponent.map.addControl(element);
        })
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<Controls {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );