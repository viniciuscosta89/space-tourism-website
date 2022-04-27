import { Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default ({ slides }) => {
	return (
		<Swiper
			modules={[EffectFade, Pagination]}
			effect="fade"
			fadeEffect={{ crossFade: true }}
			slidesPerView={1}
			slideClass="technology-slide"
			slideActiveClass="technology-slide--active"
			pagination={{
				clickable: true,
				el: '.technology-slide__pagination',
				bulletClass: 'technology-slide__bullet',
				bulletActiveClass: 'technology-slide__bullet--active',
				renderBullet: function (index: number, className: string) {
					return `<span class="${className}">${index + 1}</span>`;
				},
			}}
		>
			{slides.map((slide, index) => (
				<SwiperSlide className="technology-slide" key={index}>
					<picture className="technology-slide__img">
						<source srcSet={slide.images.portrait} type="image/jpg" media="(min-width: 75rem)" />
						<img src={slide.images.landscape} alt={slide.name} />
					</picture>

					<div className="technology-slide__pagination"></div>

					<div className="technology-slide__text">
						<h3 className="technology-slide__subtitle">The Terminology…</h3>
						<h2 className="technology-slide__title">{slide.name}</h2>
						<p className="technology-slide__description">{slide.description}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
