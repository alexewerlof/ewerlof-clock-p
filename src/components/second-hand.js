import { h, Component } from 'preact';
import { computeXY, sec2deg, perc } from '../util';
import * as motor from '../motor';
import { color } from '../settings';

export default class SecondHand extends Component {

    render({ cx, cy, r, filter }) {
        const rotation = sec2deg(motor.getSecond());
        const start = computeXY(cx, cy, perc(r, -20), rotation);
        const end = computeXY(cx, cy, perc(r, 95), rotation);
        return (
            <g filter={filter}>
                <line
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    style={{ stroke: color.second, 'stroke-width': r / 40 }}
                />
                <circle cx={cx} cy={cy} r={r / 20} fill={color.second} />
            </g>
        )
    }
}