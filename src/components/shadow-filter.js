import { h, Component } from 'preact';
import { color } from '../settings';

export default class ShadowFilter extends Component {

    render({ id, dy }) {
        return (
            <filter id={id} x='0%' y='0%' width='100%' height='100%' filterUnits='userSpaceOnUse'>
                <feDropShadow dx='0' dy={dy} stdDeviation='2' floodColor={color.shadow} floodOpacity='0.9' />
            </filter>
        )
    }
}