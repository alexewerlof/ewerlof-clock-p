import { h } from 'preact';
import style from './style';
import Clock from '../../components/clock'

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component. yom</p>
		<Clock />
	</div>
);

export default Home;
