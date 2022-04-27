import { useState } from 'react';

interface NavBarProps {
	items: ItemsData[],
	navId: string
}

interface ItemsData {
	id: string,
	path: string,
	label: string
}

export const NavBar = ({ items, navId }: NavBarProps) => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		document.body.classList.toggle('menu-opened');
		setMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<button className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`} onClick={toggleMenu}>
				<span className="hamburger__line"></span>
				<span className="hamburger__line"></span>
				<span className="hamburger__line"></span>
			</button>

			<div className={`navbar__menu ${isMenuOpen ? 'navbar__menu--opened' : ''}`}>
				<nav className="navbar">
					<ul className="navbar__list">
						{items.map((item, i) => (
							<li className="navbar__item" key={i}>
								<a className={`navbar__link ${item.id === navId ? 'navbar__link--active' : ''}`} href={item.path}>
									<strong className="navbar__number">0{i}</strong>
									<span className="navbar__label">{item.label}</span>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};

