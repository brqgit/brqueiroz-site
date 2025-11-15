import { Linkedin } from "lucide-react";
import Skeleton from "react-loading-skeleton";

interface ThirdPartyCardProps {
  idx: number;
  title: string;
  description: string;
  fullDescription: string;
  postReshare: {
    image: string;
  };
  image: string;
  link: string;
  loading: boolean;
}

export default function ThirdPartyCard({ idx, title, description, fullDescription, image, postReshare, link, loading = true}: ThirdPartyCardProps) {

  if (loading) {
    return (
      <div
        key={idx}
        className="group relative flex flex-col md:flex-row md:min-w-[500px] w-85 h-90 md:h-64 overflow-hidden rounded-2xl border border-border bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] max-w-lg mx-auto mt-4 md:mt-0"
      >
        <div className="relative h-36 w-full md:w-48 md:h-64 flex-shrink-0 overflow-hidden">
          <Skeleton
            height="100%"
            width="100%"
            className="object-cover rounded-l-2xl"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-3 md:p-6">
          <div>
            <Skeleton height={24} width="80%" className="mb-2" />
            <Skeleton height={16} width="100%" className="mb-1" />
            <Skeleton height={16} width="90%" className="mb-1" />
            <Skeleton height={16} width="70%" />
          </div>
          <Skeleton height={32} width={120} className="rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <div
      key={idx}
      className="group relative flex flex-col md:flex-row md:min-w-[500px] w-85 h-90 md:h-64 overflow-hidden rounded-2xl border border-border bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] max-w-lg mx-auto mt-4 md:mt-0"
    >
      <div className="relative h-36 w-full md:w-48 md:h-64 flex-shrink-0 overflow-hidden">
        <img
          src={postReshare?.image || image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20"></div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-3 md:p-6">
        {link.includes("linkedin.com") && (
          <Linkedin className="absolute top-2 right-2 w-6 h-6 text-[#1c5abd] z-10" />
        )}

        <div>
          {!postReshare.image && (
            <h3 className="text-base font-bold text-foreground">
              {title}
            </h3>
          )}

          <p className="mt-2 text-gray-700 text-pretty text-sm leading-relaxed text-muted-foreground">
            {!postReshare.image ? description : fullDescription}
          </p>
        </div>

        <button
          className="rounded-md bg-[#1c5abd] max-w-[120px] px-4 py-2 text-sm font-medium text-white hover:bg-[#1a4fa8] focus:outline-none focus:ring-2 focus:ring-[#1c5abd] focus:ring-offset-2"
          onClick={() => {
            if (link) window.open(link, "_blank");
          }}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
}