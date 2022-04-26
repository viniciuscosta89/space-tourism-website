import { Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default ({ slides }) => {
	return (
		<Swiper
			modules={[EffectFade, Pagination]}
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
			{slides.map((slide, index) => (
				<SwiperSlide className="crew-slide" key={index}>
					<img className="crew-slide__img" src={slide.images.webp} alt={slide.name} />

					<div className="crew-slide__pagination"></div>

					<div className="crew-slide__text">
						<h3 className="crew-slide__role">{slide.role}</h3>
						<h2 className="crew-slide__name">{slide.name}</h2>
						<p className="crew-slide__bio">{slide.bio}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
