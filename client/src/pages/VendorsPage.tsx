import { useEffect, useState } from "react";
import type { Vendor } from "../types/vendor";

import { getVendors } from "../services/vendorService";

import VendorCard from "../components/VendorCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

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

  const filteredVendors = vendors.filter((vendor) =>
    vendor.businessName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return <h2>Loading vendors...</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl
          font-bold mb-4">
        All Wedding Vendors
      </h1>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter />

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
      >
        {filteredVendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
          />
        ))}
      </div>

    </div>
  );
}