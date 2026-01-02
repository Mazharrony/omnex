import Products from "@/components/sections/Products";
import ProductCategories from "@/components/sections/ProductCategories";
import ProductBenefits from "@/components/sections/ProductBenefits";
import ProductCertifications from "@/components/sections/ProductCertifications";
import ProductPartners from "@/components/sections/ProductPartners";

export const metadata = {
  title: "Products — OMNEX",
  description: "Comprehensive product portfolio covering electrical supplies, control systems, and technology solutions.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <ProductHero />
      <ProductCategories />
      <Products />
      <ProductBenefits />
      <ProductCertifications />
      <ProductPartners />
    </div>
  );
}

function ProductHero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Product Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
            Comprehensive range of quality-certified products from leading manufacturers. 
            From electrical components to advanced control systems, we provide solutions 
            for every industrial and commercial application.
          </p>
          <p className="text-base text-white/80 leading-relaxed">
            Our product portfolio spans six major categories, each backed by technical expertise, 
            quality certifications, and global supply chain capabilities. All products meet or 
            exceed international standards and come with comprehensive documentation and support.
          </p>
        </div>
      </div>
    </section>
  );
}

