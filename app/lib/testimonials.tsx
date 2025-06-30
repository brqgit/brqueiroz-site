export interface Testimonial {
    title: string;
    position: string;
    testimonial: string;
    fullDescription: string | string[];
    image: string;
    images: string[];
}

const testimonials: Testimonial[] = [
    {
        title: "testimonials.4.title",
        position: "testimonials.4.position",
        testimonial: "testimonials.4.testimonial",
        image: "/placeholder.svg",
        fullDescription: "testimonials.4.fullDescription",
        images: [
            "/testimonials/0/1.jpg",
            "/testimonials/0/2.jpg",
            "/testimonials/0/3.jpg",
            "/testimonials/0/4.jpg",
            "/testimonials/0/5.jpg",
            "/testimonials/0/6.jpg",
            "/testimonials/0/7.jpg",
            "/testimonials/0/8.jpg",
            "/testimonials/0/9.jpg",
            "/testimonials/0/10.jpg",
            "/testimonials/0/11.jpg",
            "/testimonials/0/12.jpg",
            "/testimonials/0/13.jpg",
            "/testimonials/0/14.jpg",
            "/testimonials/0/15.jpg",
            "/testimonials/0/16.jpg",
            "/testimonials/0/17.jpg",
            "/testimonials/0/18.jpg",
            "/testimonials/0/19.jpg",
            "/testimonials/0/20.jpg",
            "/testimonials/0/21.jpg",
            "/testimonials/0/Data Center Migration.mp4",
        ],
    },
    {
        title: "testimonials.5.title",
        position: "testimonials.5.position",
        testimonial: "testimonials.5.testimonial",
        image: "/placeholder.svg",
        fullDescription: "testimonials.5.fullDescription",
        images: [
            "/testimonials/1/0.jpg",
            "/testimonials/1/1.jpg",
            "/testimonials/1/2.jpg",
            "/testimonials/1/3.jpg",
            "/testimonials/1/4.jpg",
            "/testimonials/1/5.jpg",
            "/testimonials/1/6.jpg",
            "/testimonials/1/7.jpg",
            "/testimonials/1/8.jpg",
            "/testimonials/1/9.jpg",
            "/testimonials/1/10.jpg",
            "/testimonials/1/11.jpg",
        ],
    },
    {
        title: "testimonials.6.title",
        position: "testimonials.6.position",
        testimonial: "testimonials.6.testimonial",
        image: "/placeholder.svg",
        fullDescription: "testimonials.6.fullDescription",
        images: [
            "/testimonials/2/0.jpg",
            "/testimonials/2/1.jpg",
            "/testimonials/2/2.jpg",
        ],
    }
];

export function getAllTestimonials(t: (key: string, options?: any) => any): Testimonial[] {
    return testimonials.map(item => ({
        ...item,
        title: t(item.title),
        position: t(item.position),
        testimonial: t(item.testimonial),
        fullDescription: typeof item.fullDescription === "string"
            ? t(item.fullDescription, { returnObjects: true })
            : item.fullDescription
    }));
}