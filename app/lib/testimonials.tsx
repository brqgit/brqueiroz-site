export interface Testimonial {
    title: string;
    position: string;
    testimonial: string;
    fullDescription: string | string[];
    image: string;
    images: string[];
}

const testimonials: Testimonial[] = [
    // {
    //     title: "testimonials.1.title",
    //     position: "testimonials.1.position",
    //     testimonial: "testimonials.1.testimonial",
    //     fullDescription: "testimonials.1.fullDescription",
    //     image: "/placeholder.svg",
    //     images: [
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //     ]
    // },
    // {
    //     title: "testimonials.2.title",
    //     position: "testimonials.2.position",
    //     testimonial: "testimonials.2.testimonial",
    //     fullDescription: "testimonials.2.fullDescription",
    //     image: "/placeholder.svg",
    //     images: [
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //     ]
    // },
    // {
    //     title: "testimonials.3.title",
    //     position: "testimonials.3.position",
    //     testimonial: "testimonials.3.testimonial",
    //     fullDescription: "testimonials.3.fullDescription",
    //     image: "/placeholder.svg",
    //     images: [
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //         "/placeholder.svg",
    //     ]
    // },
    {
        title: "testimonials.4.title",
        position: "testimonials.4.position",
        testimonial: "testimonials.4.testimonial",
        image: "/placeholder.svg",
        fullDescription: "testimonials.4.fullDescription",
        images: [
            "/articles/0/1.jpg",
            "/articles/0/2.jpg",
            "/articles/0/3.jpg",
            "/articles/0/4.jpg",
            "/articles/0/5.jpg",
            "/articles/0/6.jpg",
            "/articles/0/7.jpg",
            "/articles/0/8.jpg",
            "/articles/0/9.jpg",
            "/articles/0/10.jpg",
            "/articles/0/11.jpg",
            "/articles/0/12.jpg",
            "/articles/0/13.jpg",
            "/articles/0/14.jpg",
            "/articles/0/15.jpg",
            "/articles/0/16.jpg",
            "/articles/0/17.jpg",
            "/articles/0/18.jpg",
            "/articles/0/19.jpg",
            "/articles/0/20.jpg",
            "/articles/0/21.jpg",
            "/articles/0/Data Center Migration.mp4",
        ],
    },
    {
        title: "testimonials.5.title",
        position: "testimonials.5.position",
        testimonial: "testimonials.5.testimonial",
        image: "/placeholder.svg",
        fullDescription: "testimonials.5.fullDescription",
        images: [
            "/articles/1/0.jpg",
            "/articles/1/1.jpg",
            "/articles/1/2.jpg",
            "/articles/1/3.jpg",
            "/articles/1/4.jpg",
            "/articles/1/5.jpg",
            "/articles/1/6.jpg",
            "/articles/1/7.jpg",
            "/articles/1/8.jpg",
            "/articles/1/9.jpg",
            "/articles/1/10.jpg",
            "/articles/1/11.jpg",
        ],
    },
    {
        title: "testimonials.6.title",
        position: "testimonials.6.position",
        testimonial: "testimonials.6.testimonial",
        image: "/placeholder.svg",
        fullDescription: "testimonials.6.fullDescription",
        images: [
            "/articles/2/0.jpg",
            "/articles/2/1.jpg",
            "/articles/2/2.jpg",
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