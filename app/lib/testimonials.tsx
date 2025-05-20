export interface Testimonial {
    title: string;
    position: string;
    testimonial: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        title: "testimonials.1.title",
        position: "testimonials.1.position",
        testimonial: "testimonials.1.testimonial",
        image: "/placeholder.svg"
    },
    {
        title: "testimonials.2.title",
        position: "testimonials.2.position",
        testimonial: "testimonials.2.testimonial",
        image: "/placeholder.svg"
    },
    {
        title: "testimonials.3.title",
        position: "testimonials.3.position",
        testimonial: "testimonials.3.testimonial",
        image: "/placeholder.svg"
    }
];

export function getAllTestimonials(t: (key: string) => string): Testimonial[] {
    return testimonials.map(item => ({
        ...item,
        title: t(item.title),
        position: t(item.position),
        testimonial: t(item.testimonial)
    }));
}