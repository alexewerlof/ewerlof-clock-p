import { h, Component } from 'preact';
import { computeXY, min2deg, perc } from '../util';
import { color } from '../settings';

export default class MinuteHand extends Component {

    render({ minute, cx, cy, r, filter }) {
        const rotation = min2deg(minute);
        const start = computeXY(cx, cy, perc(r, -20), rotation);
        const end = computeXY(cx, cy, perc(r, 95), rotation);
        return (
            <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                filter={filter}
                style={{ stroke: color.minute, 'stroke-width': r / 16 }}
            />
        )
    }
}
