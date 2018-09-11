import { h } from 'preact';
import style from './style';
import Clock from '../../components/clock'

const Home = () => (
	<div class={style.home}>
		<Clock />
	</div>
);

export default Home;
