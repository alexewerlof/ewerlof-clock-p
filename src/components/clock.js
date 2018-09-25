import { h, Component } from 'preact';
import * as motor from '../motor';
import Face from './face';
import ShadowFilter from './shadow-filter';
import HourHand from './hour-hand';
import MinuteHand from './minute-hand';
import SecondHand from './second-hand';
import { perc } from '../util';

export default class Clock extends Component {
    constructor() {
        super();
        this.state.now = new Date
        if (typeof document !== "undefined") {
            this.state.clientWidth = document.body.clientWidth
            this.state.clientHeight = document.body.clientHeight
        } else {
            this.state.clientWidth = 100
            this.state.clientHeight = 100
        }
        this.onResize = this.onResize.bind(this)
        motor.ontick(() => {
            this.setState({ now: new Date });
        })
    }
    onResize() {
        this.setState({ 
            clientWidth: document.body.clientWidth,
            clientHeight: document.body.clientHeight,
        });
    }
    componentDidMount() {
        this.onResize()
        if (typeof window !== "undefined") {
            window.addEventListener('resize', this.onResize)
        }
        motor.start();
    }
    componentWillUnmount() {
        if (typeof window !== "undefined") {
            window.removeEventListener('resize', this.onResize)
        }
        motor.stop();
    }
    render({ shadow = false, continuous = true }, { now, clientWidth, clientHeight }) {
        let second = now.getSeconds() + now.getMilliseconds() / 1000;
        let minute = now.getMinutes() + second / 60;
        let hour = now.getHours() + minute / 60;
        if (!continuous) {
            second = Math.floor(second)
            minute = Math.floor(minute)
            hour = Math.floor(hour)
        }
        const margin = Math.min(clientWidth, clientHeight) / 20
        const width = clientWidth - margin * 2;
        const height = clientHeight - margin * 2;
        const cx = width / 2;
        const cy = height / 2;
        const r = Math.min(width, height) / 2;
        return (
            <svg
                width={width}
                height={height}
                style={`margin:${margin}px`}>
                {shadow && <defs>
                    <ShadowFilter id='hourShadow' dy={perc(r, 1)} />
                    <ShadowFilter id='minuteShadow' dy={perc(r, 2)} />
                    <ShadowFilter id='secondShadow' dy={perc(r, 3)} />
                </defs>}
                <Face cx={cx} cy={cy} r={r} />
                <HourHand hour={hour} cx={cx} cy={cy} r={r} filter={shadow && 'url(#hourShadow)'} />
                <MinuteHand minute={minute} cx={cx} cy={cy} r={r} filter={shadow && 'url(#minuteShadow)'} />
                <SecondHand second={second} cx={cx} cy={cy} r={r} filter={shadow && 'url(#secondShadow)'} />
            </svg>
        );
    }
}
