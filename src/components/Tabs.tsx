import { useState } from 'react';

interface TabsProps {
	tabs: TabsData[],
}

interface TabsData {
	name: string,
	images: {
		webp: string
	},
	description: string,
	distance: string,
	travel: string
}

const Tabs = ({ tabs }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index: number) => {
		setActiveTab(index);
	};
	return (
		<div className="tabs">
			<div className="tabs__content">
				{tabs.map((tab, index) => (
					<div className={`tab__content ${activeTab === index ? 'tab__content--active' : ''}`} key={index}>
						<img className="tab__img" src={`/${tab.images.webp}`} alt={tab.name} />

						<ul className="tabs__list">
							{tabs.map((tab, index) => (
								<li key={index}>
									<button
										className={`tab ${activeTab === index ? 'tab--active' : ''}`}
										onClick={() => handleTabClick(index)}
									>
										{tab.name}
									</button>
								</li>
							))}
						</ul>

						<section className="tab__text">
							<h2 className="tab__name">{tab.name}</h2>
							<p className="tab__description">{tab.description}</p>
							<hr className="tab__divider"></hr>

							<footer className="tab__footer">
								<div className="tab__column grid">
									<span className="uppercase text-accent ff-sans-cond letter-spacing-3 fs-200">Avg. Distance</span>
									<span className="uppercase text-white ff-serif fs-500">{tab.distance}</span>
								</div>

								<div className="tab__column grid">
									<span className="uppercase text-accent ff-sans-cond letter-spacing-3 fs-200">Est. Travel Time</span>
									<span className="uppercase text-white ff-serif fs-500">{tab.travel}</span>
								</div>
							</footer>
						</section>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;