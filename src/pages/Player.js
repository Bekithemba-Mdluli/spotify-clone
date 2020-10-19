import React from 'react';

import './Player.css';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Player = () => {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Body spotify/>
			</div>
			<Footer />
		</div>
	)
}

export default Player;