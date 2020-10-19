import React from 'react';
import { PlaylistPlay, VolumeDown, Repeat, Shuffle, SkipNext, SkipPrevious, PlayCircleOutline } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__left">
			<img className="footer__albumLogo" src="https://images.genius.com/458e35fd34bbdf395958636042d5295f.1000x1000x1.png" alt=""/>
			<div className="footer__songInfo">
				<h4>Off White</h4>
				<p>Lil Gotit</p>
			</div>
							
			</div>
			<div className="footer__center">
				<Shuffle className="footer__green" />
				<SkipPrevious className="footer__icon" />
				<PlayCircleOutline fontSize="large" className="footer__icon" />
				<SkipNext className="footer__icon" />
				<Repeat className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlay />
					</Grid>
					<Grid item>
						<VolumeDown />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider"/>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default Footer;