import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVendor } from "../services/vendorService";
import { GrLanguage, GrMap, GrPhone, GrCurrency } from "react-icons/gr";





function VendorDetailPage(){
const { id } = useParams();
const [vendor, setVendor] = useState<any>(null);

useEffect(() => {
  if (!id) return;

  getVendor(id).then(setVendor);
}, [id]);


return (
  <div className="max-w-3xl mx-auto px-6 py-12 min-h-svh">


    <img
      src={vendor.imageUrl}
      className="
        w-150
        h-300px
        object-cover
        rounded-2xl
      "
    />

    <div className="mt-8">

      <div className="mb-12">
      <h1 className="flex items-center gap-3 text-3xl font-bold">
        {vendor.businessName}
      </h1>

      <p className="flex items-center gap-3 mt-4 text-gray-600">
        {vendor.description}
      </p>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <GrMap size={18} /> {vendor.city}
      </div>

      <div className="flex items-center gap-3 mt-3">
        <GrCurrency size={18} /> {vendor.priceRange}
      </div>

      <div className="flex items-center gap-3 mt-3">
        <GrPhone size={18}/> {vendor.phone}
      </div>

      <div className="flex items-center gap-2 mt-3">
     
        <GrLanguage size={18} /> {vendor.website}
      </div>

    </div>

  </div>
);
}

export default VendorDetailPage