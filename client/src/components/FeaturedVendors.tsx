import type { Vendor } from "../types/vendor";
import VendorCard from "./VendorCard";

interface FeaturedProps {
  vendors: Vendor[];
}

export default function FeaturedVendors({
  vendors,
}: FeaturedProps) {
  return (
    <section className="mb-20">
      <div className="mb-8">
        <h2
          className="
          text-3xl
          font-bold
        "
        >
          Featured Vendors
        </h2>

        <p className="text-gray-500 mt-2">
          Discover talented wedding professionals.
        </p>
      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
      >
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            vendor={vendor}
          />
        ))}
      </div>
    </section>
  );
}