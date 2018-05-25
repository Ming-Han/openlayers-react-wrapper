import FullScreen from './fullScreen';
import Controls from './controls';
import Attribution from './attribution';
import MousePosition from './mousePosition';
import OverviewMap from './overviewMap';
import Rotate from './rotate';
import ScaleLine from './scaleLine';
import Zoom from './zoom';
import ZoomSilder from './zoomSilder';
import ZoomToExtent from './zoomToExtent';
let Control = {
    FullScreen : FullScreen,
    Controls : Controls,
    Attribution : Attribution,
    MousePosition: MousePosition,
    OverviewMap : OverviewMap,
    Rotate : Rotate,
    ScaleLine : ScaleLine,
    Zoom : Zoom,
    ZoomSilder : ZoomSilder,
    ZoomToExtent : ZoomToExtent
}

export {
    Controls,
    Control
}