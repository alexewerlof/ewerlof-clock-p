import { h, Component } from 'preact';
import { computeXY, min2deg, perc } from '../util';
import * as motor from '../motor';
import { color } from '../settings';

export default class MinuteHand extends Component {

    render({ cx, cy, r, filter }) {
        const rotation = min2deg(motor.getMinute());
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
