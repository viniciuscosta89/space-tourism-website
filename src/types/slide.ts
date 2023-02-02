export interface Slide {
	bio: string;
	description: string;
	images: {
		landscape: string;
		portrait: string;
		webp: string;
	};
	name: string;
	role: string;
}
