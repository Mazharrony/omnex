export default function ProductPartners() {
  const partners = [
    {
      category: "HVAC & Valves",
      brands: [
        "Belimo",
        "Honeywell",
        "Siemens",
        "Johnson Controls",
        "Schneider Electric",
        "Danfoss",
      ],
    },
    {
      category: "Electrical Components",
      brands: [
        "ABB",
        "Siemens",
        "Schneider Electric",
        "Eaton",
        "Legrand",
        "Hager",
      ],
    },
    {
      category: "Cables & Wiring",
      brands: [
        "Nexans",
        "Prysmian",
        "General Cable",
        "Southwire",
        "LS Cable",
        "Havells",
      ],
    },
    {
      category: "Lighting",
      brands: [
        "Philips",
        "Osram",
        "Cree",
        "GE Lighting",
        "Acuity Brands",
        "Hubbell",
      ],
    },
    {
      category: "Safety & Protection",
      brands: [
        "Phoenix Contact",
        "Weidmüller",
        "DEHN",
        "Citel",
        "Eaton",
        "ABB",
      ],
    },
    {
      category: "Security & Automation",
      brands: [
        "Honeywell",
        "Bosch",
        "Axis",
        "Hikvision",
        "Johnson Controls",
        "Siemens",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Trusted Manufacturer Partners
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl">
            We partner with leading manufacturers worldwide to provide you with 
            the highest quality products and latest technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-5"
            >
              <h3 className="text-base font-semibold text-foreground mb-4">
                {partner.category}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {partner.brands.map((brand, brandIndex) => (
                  <div
                    key={brandIndex}
                    className="text-xs text-foreground/70 bg-white px-3 py-2 rounded border border-gray-100 text-center"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Partnership Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Direct Manufacturer Relationships
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Direct partnerships ensure competitive pricing, priority support, 
                and access to latest product releases and technology updates.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Technical Collaboration
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Close collaboration with manufacturer technical teams enables 
                custom solutions, rapid problem resolution, and specialized support.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Training & Certification
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Manufacturer-certified training programs ensure our team stays 
                current with latest technologies and installation best practices.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Warranty & Support
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Full manufacturer warranty coverage and direct access to 
                manufacturer support channels for technical assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




