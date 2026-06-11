import Hero from "../components/Hero";
import FeaturedVendors from "../components/FeaturedVendors";
import { useState, useEffect } from "react";
import type { Vendor } from "../types/vendor";
import { getVendors } from "../services/vendorService";
import InspirationCarousel from "../components/InspirationCarousel";
import CTA from "../components/CTA";
import Spinner from "../components/Spinner";
import DiscoverSection from "../components/DiscoverSection";



export default function HomePage() {
const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] =
  useState<string | null>(null);
  
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const data = await getVendors();
        setVendors(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchVendors();
  }, []);

  const filteredVendors = vendors.filter((vendor) => {
    // Basic safety check in case fields arrive undefined from your API
    const businessName = vendor.businessName || "";
    const city = vendor.city || "";
    const description = vendor.description || "";
    
  const matchesSearch =
  businessName
    .toLowerCase()
    .includes(search.toLowerCase()) ||

  city
    .toLowerCase()
    .includes(search.toLowerCase()) ||

  description
    .toLowerCase()
    .includes(search.toLowerCase());

    const matchesCategory =
      !selectedCategory || vendor.categoryId === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <Hero />
        
        <DiscoverSection
  search={search}
  setSearch={setSearch}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>
<div className="mb-8 text-center">
  <p className="text-zinc-500">
    {filteredVendors.length} vendors found
  </p>
</div>

{filteredVendors.length === 0 ? (
  <div className="text-center py-20">
    <h3 className="text-xl font-semibold mb-2">
      No vendors found
    </h3>

    <p className="text-zinc-500">
      Try another search term.
    </p>
  </div>
) : (
  <FeaturedVendors
    vendors={filteredVendors.slice(0, 6)}
  />
)}
        
       
        <InspirationCarousel />
        <CTA />
      </div>
    </>
  );
}