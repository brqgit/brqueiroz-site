export interface FeaturedArticles {
    title: string;
    description: string;
    content: string;
    image: string;
    media: string;
    alt: string;
    link: string;
}

const featuredArticles: FeaturedArticles[] = [
    {
        title: "articles.1.title",
        description: "articles.1.description",
        content: "articles.1.content",
        image: "/articles/1.png",
        media: "",
        alt: "articles.1.alt",
        link: "https://tiinside.com.br/29/09/2025/o-invisivel-que-sustenta-a-tecnologia-das-empresas/",
    },
    {
        title: "",
        description: "",
        content: "",
        image: "",
        media: "/articles/2.mp4",
        alt: "",
        link: "",
    }
];

export function getAllFeaturedArticles(): FeaturedArticles[] {
    return featuredArticles;
}
