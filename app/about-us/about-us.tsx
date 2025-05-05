import { Check, ChevronRight } from "lucide-react"
import { getPartnersLogos } from "~/lib/partners-logos";

export default function AboutUs() {
  const partners = getPartnersLogos();

  return (
    <div className="w-full bg-gradient-to-br from-[#0a1525] to-[#0a0f18] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-white">SOBRE</span> <span className="text-[#1e6cd3]">NÓS</span>
            </h1>
            <div className="w-24 h-1 bg-[#1e6cd3]"></div>
            <p className="text-gray-300 text-lg">
              A BRQueiroz foi idealizada com base no crescimento constante que o mundo digital tem tido, que gera a
              necessidade de soluções objetivas e confiáveis na estruturação e crescimento de uma empresa.
            </p>
            <p className="text-gray-300 text-lg">
              Agora com mais de 20 anos no mercado, a BRQueiroz se mostra como referência em soluções de tecnologia da
              informação, trazendo o que há de melhor em soluções de T.I. para Ribeirão Preto e região.
            </p>
            <a
              href="mailto:contato@brqueiroz.com.br"
              className="inline-flex items-center bg-[#1e6cd3] hover:bg-[#155ab9] transition-colors px-6 py-3 rounded-md font-medium"
            >
              Entre em contato
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Tecnologia BRQueiroz"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1e6cd3] p-4 rounded-lg">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm uppercase">Anos no mercado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "Confiabilidade", desc: "Compromisso com soluções confiáveis" },
                { name: "Experiência", desc: "Mais de 20 anos no mercado de TI" },
                { name: "Engajamento", desc: "Comprometimento com cada projeto" },
                { name: "Segurança", desc: "Proteção de dados e infraestrutura" },
              ].map((value, index) => (
                <div key={index} className="bg-[#111a2e] p-6 rounded-lg hover:bg-[#1a2540] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#1e6cd3] flex items-center justify-center mb-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#1e6cd3]">VALORES QUE</span>
              <br />
              <span className="text-white">NOS GUIAM</span>
            </h2>
            <div className="w-24 h-1 bg-[#1e6cd3] mb-6"></div>
            <p className="text-gray-300 text-lg mb-8">
              Na BRQueiroz, nossos valores são os pilares que sustentam todas as nossas operações e relacionamentos.
              Eles refletem quem somos e como trabalhamos para oferecer as melhores soluções em tecnologia da
              informação.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">NOSSOS</span> <span className="text-[#1e6cd3]">PARCEIROS</span>
          </h2>
          <div className="w-24 h-1 bg-[#1e6cd3] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trabalhamos com as melhores empresas de tecnologia do mundo para oferecer soluções de alta qualidade para
            nossos clientes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* <div className="w-32 h-16 bg-[#111a2e] rounded-lg flex items-center justify-center p-4">
            <p className="font-bold text-sm text-center">Microsoft</p>
          </div>
          <div className="w-32 h-16 bg-[#111a2e] rounded-lg flex items-center justify-center p-4">
            <p className="font-bold text-sm text-center">VMware</p>
          </div>
          <div className="w-32 h-16 bg-[#111a2e] rounded-lg flex items-center justify-center p-4">
            <p className="font-bold text-sm text-center">Cisco</p>
          </div>
          <div className="w-32 h-16 bg-[#111a2e] rounded-lg flex items-center justify-center p-4">
            <p className="font-bold text-sm text-center">Legrand</p>
          </div> */}
          {partners.map((partner) => (
            <div
              key={partner.alt}
              className="w-32 h-16 bg-[#111a2e] rounded-lg flex items-center justify-center p-4"
            >
              <p className="font-bold text-sm text-center">{partner.alt}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-[#1e6cd3] to-[#3b82f6] rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para elevar sua tecnologia?</h2>
              <p className="text-white/90 mb-0 md:mb-0 md:pr-8">
                Entre em contato conosco e descubra como podemos ajudar sua empresa a atingir o próximo nível com nossas
                soluções de tecnologia.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href="mailto:contato@brqueiroz.com.br"
                className="inline-flex items-center bg-white text-[#1e6cd3] hover:bg-gray-100 transition-colors px-6 py-3 rounded-md font-medium"
              >
                Fale Conosco
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
