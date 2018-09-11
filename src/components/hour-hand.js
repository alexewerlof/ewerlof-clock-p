import { h, Component } from 'preact';
import { computeXY, hour2deg, perc } from '../util';
import { color } from '../settings';

export default class HourHand extends Component {

    render({ hour, cx, cy, r, filter }) {
        const rotation = hour2deg(hour);
        const start = computeXY(cx, cy, perc(r, -20), rotation);
        const end = computeXY(cx, cy, perc(r, 67), rotation);
        return (
            <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                filter={filter}
                style={{ stroke: color.hour, 'stroke-width': perc(r, 10) }}
            />
        )
    }
}