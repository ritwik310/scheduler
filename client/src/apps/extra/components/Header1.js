import React from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

const Header1 = ({ pathName }) => {
	return (
		<div className="Header1-c-00">
			<div className="Header1-Left-Div-01">
				<Link to="/">
					<h2 className="Theme-gradient-text">
						<ReactSVG
							src="/calendar.svg"
							svgStyle={{
								height: '25px',
								marginTop: '3px',
								marginRight: '10px',
								width: 'auto'
							}}
						/>
						Schedular
					</h2>
				</Link>
			</div>
			<div className="Header1-Links-Container-01">
				<Link to="/about">
					<p className={`${pathName === 'about' && 'Header1-Links-Active'}`}>ABOUT</p>
				</Link>
				<Link to="/login">
					<p className={`${(pathName === 'login' || pathName === 'signup') && 'Header1-Links-Active'}`}>
						LOGIN
					</p>
				</Link>
				<Link to="/contact">
					<p className={`${pathName === 'contact' && 'Header1-Links-Active'}`}>CONTACT</p>
				</Link>
				<Link to="/todo">
					<p className={`${pathName === 'todo' && 'Header1-Links-Active'}`}>TODO</p>
				</Link>
			</div>
		</div>
	);
};

export default Header1;
