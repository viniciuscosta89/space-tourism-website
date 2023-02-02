import { Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from '../types/slide';

export default ({ slides }) => {
	return (
		<Swiper
			modules={[EffectFade, Pagination]}
			effect="fade"
			fadeEffect={{ crossFade: true }}
			slidesPerView={1}
			slideClass="crew-slide"
			slideActiveClass="crew-slide--active"
			pagination={{
				clickable: true,
				el: '.crew-slide__pagination',
				bulletClass: 'crew-slide__bullet',
				bulletActiveClass: 'crew-slide__bullet--active',
			}}
		>
			{slides.map((slide: Slide, index: number) => (
				<SwiperSlide className="crew-slide" key={index}>
					<img className="crew-slide__img" src={slide.images.webp} alt={slide.name} />

					<div className="crew-slide__pagination"></div>

					<div className="crew-slide__text">
						<h3 className="crew-slide__subtitle">{slide.role}</h3>
						<h2 className="crew-slide__title">{slide.name}</h2>
						<p className="crew-slide__description">{slide.bio}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
