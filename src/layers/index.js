import Tile from './tile';
import Vector from './vector';
import {Layers} from './layers';
import Image from './image';
import HeapMap from './heapmap';
import VectorTile from './vectorTile';

let Layer = {
  Tile: Tile,
  Vector:Vector,
  Image : Image,
  HeapMap : HeapMap,
  VectorTile : VectorTile

};

export { 
  Layers,
  Layer,
};