import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductsHero from '../components/products/products-hero';
import WhatIsChitosan from '../components/products/what-is-chitosan';
import ProductRange from '../components/products/product-range';
import ProductForms from '../components/products/product-forms';
import AgriculturalSpecific from '../components/products/agricultural-specific';
import ProductSpecsTable from '../components/products/product-specs-table';
import ProductsCTA from '../components/products/products-cta';

const ProductsPage: React.FC = () => {
  // Ensure we start at the top of the page on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Header />
      <ProductsHero />
      <WhatIsChitosan />
      <ProductRange />
      <ProductForms />
      <AgriculturalSpecific />
      <ProductSpecsTable />
      <ProductsCTA />
      <Footer />
    </div>
  );
};

export default ProductsPage;
