import { h, Component } from 'preact';
import { computeXY, perc } from '../util';
import { color } from '../settings';

export default class SecondHand extends Component {

    render({ cx, cy, rotation, r, width, length }) {
        const start = computeXY(cx, cy, r - length, rotation);
        const end = computeXY(cx, cy, perc(r, 95), rotation);
        return (
            <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                style={{ stroke: color.indicator, 'stroke-width': width }}
            />
        )
    }
}