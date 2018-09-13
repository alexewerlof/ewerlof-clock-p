import { h, Component } from 'preact';
import Indicator from './indicator';
import { color } from '../settings';
import { min2deg, perc, diffProps } from '../util';

export default class Face extends Component {

    render({ cx, cy, r }) {
        const indicators = [];
        for (let i = 0; i < 60; i++) {
            if (i % 5) {
                // the little ones
                indicators.push(<Indicator
                    cx={cx}
                    cy={cy}
                    r={r}
                    length={perc(r, 12)}
                    width={perc(r, 2.7)}
                    rotation={min2deg(i)}
                />);
            } else {
                // the big ones
                indicators.push(<Indicator
                    cx={cx}
                    cy={cy}
                    r={r}
                    length={perc(r, 25)}
                    width={perc(r, 6)}
                    rotation={min2deg(i)}
                />);
            }
        }
        return (
            <g>
                <circle cx={cx} cy={cy} r={r} fill={color.face} />
                {indicators}
            </g>
        )
    }
}
