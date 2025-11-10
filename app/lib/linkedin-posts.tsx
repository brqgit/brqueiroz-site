import api from "~/api";

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export async function getPostsLinkedinAPI(): Promise<Article[]> {
  const response = await api.get("/linkedin/posts");

  return response.data.map((item: any) => {
    const titleMatch = item.text.match(/^(.+?[-.])\s*/);
    let title = item.text;
    let description = item.text;

    if (titleMatch) {
      title = titleMatch[1].replace(/[-.]$/, "").trim();
      description = item.text.substring(titleMatch[0].length).trim();
    }

    if (description.length > 80) {
      description = description.substring(0, 80) + "...";
    }

    return {
      title,
      description,
      image: item.imageUrls[0] || "",
      link: `https://www.linkedin.com/posts/${item.id}`,
    };
  });
}
