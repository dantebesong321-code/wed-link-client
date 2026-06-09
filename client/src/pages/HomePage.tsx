import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import FeaturedVendors from "../components/FeaturedVendors";
import { useState, useEffect } from "react";
import type { Vendor } from "../types/vendor";
import { getVendors } from "../services/vendorService";
import InspirationCarousel from "../components/InspirationCarousel";
import CTA from "../components/CTA";

export default function HomePage() {
  const [search, setSearch] = useState("");

   const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchVendors = async () => {
      try {
        const data = await getVendors();

        setVendors(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

   if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
 <div className="max-w-7xl mx-auto px-6">
   <Hero />
      <div> <SearchBar
        value={search}
        onChange={setSearch}
      /></div>
     
       <CategoryFilter />
      

      <FeaturedVendors vendors={vendors} />
       <InspirationCarousel />
       <CTA />
    </div>

     

     
    </>
  );
}