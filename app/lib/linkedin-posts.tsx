import api from "~/api";

export interface LinkedinPost {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  postReshare: {
    image: string;
  };
  image: string;
  link: string;
}

export async function getPostsLinkedinAPI(): Promise<LinkedinPost[]> {
  const response = await api.get("/linkedin/posts");

  return response.data.map((item: any) => {
    const titleMatch = item.text.match(/^(.+?[-.])\s*/);
    let title,
      description,
      fullDescription = item.text;

    if (titleMatch) {
      title = titleMatch[1].replace(/[-.]$/, "").trim();
      description = item.text.substring(titleMatch[0].length).trim();
    }

    if (description !== undefined && description.length > 140) {
      description = description.substring(0, 140) + "...";
    }

    if (fullDescription !== undefined && fullDescription.length > 190) {
      fullDescription = fullDescription.substring(0, 190) + "...";
    }

    return {
      title,
      description,
      fullDescription,
      postReshare: {
        image: item.postReshare?.imageUrls[0] || "",
      },
      image: item.imageUrls[0] || "",
      link: `https://www.linkedin.com/feed/update/${item.id}`,
    };
  });
}