interface ServiceCaseCardProps {
  companyName: string;
  serviceName: string;
  description: string;
  companyLogo?: string;
}

export default function ServiceCaseCard({
  companyName,
  serviceName,
  description,
  companyLogo,
}: ServiceCaseCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full">
      <div className="flex items-center gap-4 mb-4">
        {companyLogo && (
          <img
            src={companyLogo || "public/placeholder.svg"}
            alt={companyName}
            width={60}
            height={60}
            className="rounded-full"
          />
        )}

        <div>
          <h3 className="font-bold text-lg">{companyName}</h3>
          <p className="text-gray-600 text-sm">{serviceName}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{description}"</p>
    </div>
  );
}
