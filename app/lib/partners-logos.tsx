export interface PartnerLogo {
  id: number;
  src: string;
  alt: string;
}

export function getPartnersLogos(): PartnerLogo[] {
  return [
    { id: 1, src: "./partners/1.png", alt: "Acronis" },
    { id: 2, src: "./partners/2.png", alt: "Cisco" },
    { id: 3, src: "./partners/3.png", alt: "Fortinet" },
    { id: 4, src: "./partners/4.png", alt: "Microsoft" },
    { id: 5, src: "./partners/5.png", alt: "Mikrotik" },
    { id: 6, src: "./partners/6.png", alt: "Ubiquiti" },
    { id: 7, src: "./partners/7.png", alt: "Veeam" },
    { id: 8, src: "./partners/8.png", alt: "Vmware" },
  ];
}