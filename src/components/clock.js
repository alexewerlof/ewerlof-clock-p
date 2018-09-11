import { h, Component } from 'preact';
import * as motor from '../motor';
import Face from './face';
import HourHand from './hour-hand';
import MinuteHand from './minute-hand';
import SecondHand from './second-hand';
import { perc } from '../util';
import { color } from '../settings';

const margin = 20;

export default class Clock extends Component {
    constructor() {
        super();
        this.state.now = new Date
        motor.ontick(() => {
            this.setState({ now: new Date });
        })
    }
    componentDidMount() {
        motor.start();
    }
    componentWillUnmount() {
        motor.stop();
    }
    render(props, { now }) {
        const second = now.getSeconds() + now.getMilliseconds() / 1000;
        const minute = now.getMinutes() + second / 60;
        const hour = now.getHours() + minute / 60;
        const width = document.body.clientWidth - margin * 2;
        const height = document.body.clientHeight - margin * 2;
        const cx = width / 2;
        const cy = height / 2;
        const r = Math.min(width, height) / 2;
        return (
            <svg
                width={width}
                height={height}
                style={`margin:${margin}px`}>
                <defs>
                    <filter id='hourShadow' x='-50%' y='-50%' width='200%' height='200%' filterUnits='userSpaceOnUse'>
                        <feDropShadow dx='0' dy={perc(r, 1)} stdDeviation='3' floodColor={color.shadow} floodOpacity='0.5' />
                    </filter>
                    <filter id='minuteShadow' x='-50%' y='-50%' width='200%' height='200%' filterUnits='userSpaceOnUse'>
                        <feDropShadow dx='0' dy={perc(r, 2)} stdDeviation='3' floodColor={color.shadow} floodOpacity='0.5' />
                    </filter>
                    <filter id='secondShadow' x='-50%' y='-50%' width='200%' height='200%' filterUnits='userSpaceOnUse'>
                        <feDropShadow dx='0' dy={perc(r, 4)} stdDeviation='3' floodColor={color.shadow} floodOpacity='0.5' />
                    </filter>
                </defs>
                <Face cx={cx} cy={cy} r={r} />
                <HourHand hour={hour} cx={cx} cy={cy} r={r} filter='url(#hourShadow)' />
                <MinuteHand minute={minute} cx={cx} cy={cy} r={r} filter='url(#minuteShadow)' />
                <SecondHand second={second} cx={cx} cy={cy} r={r} filter='url(#secondShadow)' />
            </svg>
        );
    }
}
