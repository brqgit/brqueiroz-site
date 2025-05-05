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
        title: "O invisível que sustenta a tecnologia da sua empresa",
        description: "A integridade da infraestrutura de TI e automação é essencial para a estabilidade das operações.",
        content:
            "A BRQueiroz oferece inspeção óptica de alta precisão para garantir a integridade da infraestrutura de TI e automação industrial, prevenindo falhas invisíveis e aumentando a confiabilidade dos processos.",
        image: "/articles/artigo 1.jpeg",
        alt: "Imagem representando tecnologia invisível",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7314790864902328320",
    },
    {
        title: "BRQueiroz Inicia Uma Nova Era com o LanTEK IV-S",
        description: "Inovação e tecnologia de ponta para certificação de redes de dados.",
        content:
            "BRQueiroz inicia o processo de Trade In para adquirir o LanTEK IV-S da TREND Networks, o mais moderno equipamento para certificação de redes de dados em cobre e fibra óptica, mantendo o compromisso de alta qualidade na transmissão de dados.",
        image: "/articles/artigo 2.jpeg",
        alt: "Imagem do LanTEK IV-S",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7280970877309980672",
    },
    {
        title: "BRQueiroz: Tecnologia para Usinas de Açúcar e Álcool",
        description: "Soluções tecnológicas para aumentar a produtividade e segurança operacional das usinas.",
        content:
            "A BRQueiroz oferece soluções tecnológicas para usinas de açúcar e álcool, com infraestrutura de ponta, monitoramento 24/7, segurança digital robusta e suporte especializado. Garantimos eficiência, produtividade e segurança para sua operação.",
        image: "/articles/artigo 3.jpeg",
        alt: "Imagem representando usinas de açúcar e álcool",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7265739496581709824",
    },
];

export function getAllArticles(): Article[] {
    return articles;
}