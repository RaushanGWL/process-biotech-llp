import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductsHero from '../components/products/products-hero';
import WhatIsChitosan from '../components/products/what-is-chitosan';
import ProductRange from '../components/products/product-range';
import ProductForms from '../components/products/product-forms';
import AgriculturalSpecific from '../components/products/agricultural-specific';
import ProductSpecsTable from '../components/products/product-specs-table';
import ProductsCTA from '../components/products/products-cta';
import EnquiryModal from '../components/enquiry-modal';

const ProductsPage: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Ensure we start at the top of the page on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      <Header />
      <ProductsHero />
      <WhatIsChitosan />
      <ProductRange />
      <ProductForms />
      <AgriculturalSpecific />
      <ProductSpecsTable />
      <ProductsCTA onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />
      <Footer />

      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
      />
    </div>
  );
};

export default ProductsPage;
