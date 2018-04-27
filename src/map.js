import * as React from 'react';
import MapContext from './mapContext';
import ol_map from 'ol/map';
import ol_view from 'ol/view';
import ol_source_OSM from 'ol/source/osm';
import ol_layer_Tile from 'ol/layer/tile';
import style from './Map.css';


class Map extends React.Component{
	constructor(props){
		super(props);
		this.mapDiv ; 
		this.map = {} ;
		this.option;
	}

	componentDidMount() {
		this.map.setTarget(this.mapDiv);
	}

	render(){
		this.map = new ol_map(this.options);
		const mapComponent = {
			component : this,
			map : this.map
		}
		return (
			<div>
				<div className = {style["openlayers-map"]} ref={(el) => {this.mapDiv = el ;}} >
					<MapContext.Provider value={mapComponent}>
	          			{this.props.children}
	        		</MapContext.Provider>
				</div>
			</div>
		)
	}
}

export default Map;