export interface Article {
    title: string;
    description: string;
    content: string;
    image: string;
    alt: string;
    link: string;
}

const articles: Article[] = [
    {
        title: "articles.1.title",
        description: "articles.1.description",
        content: "articles.1.content",
        image: "/articles/artigo 1.jpeg",
        alt: "articles.1.alt",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7314790864902328320",
    },
    {
        title: "articles.2.title",
        description: "articles.2.description",
        content: "articles.2.content",
        image: "/articles/artigo 2.jpeg",
        alt: "articles.2.alt",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7280970877309980672",
    },
    {
        title: "articles.3.title",
        description: "articles.3.description",
        content: "articles.3.content",
        image: "/articles/artigo 3.jpeg",
        alt: "articles.3.alt",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7265739496581709824",
    },
];

export function getAllArticles(): Article[] {
    return articles;
}