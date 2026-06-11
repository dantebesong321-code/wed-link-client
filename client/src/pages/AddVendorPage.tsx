import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { createVendor } from "../services/vendorService";


interface Category {
  id: string;
  name: string;
}
export interface VendorFormData {
  name: string;
  businessName: string;
  description: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  country: string;
  imageUrl: string;
  priceRange: string;
  categoryId: string;
}

const initialFormState = {
  name: "",
  businessName: "",
  description: "",
  email: "",
  phone: "",
  website: "",
  address: "",
  city: "",
  country: "",
  imageUrl: "",
  priceRange: "",
  categoryId: "",
};
function AddVendorPage() {

const [categories, setCategories] =
  useState<Category[]>([]);


useEffect(() => {
  const fetchCategories =
    async () => {
      const response =
        await fetch(
          "http://localhost:5005/categories"
        );

      const data =
        await response.json();

      setCategories(data);
    };

  fetchCategories();
}, []);



const navigate = useNavigate();
const [formData, setFormData] =
  useState(initialFormState);

const [loading, setLoading] =
  useState(false);

const [error, setError] =
  useState<string | null>(null);

  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};






const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    setLoading(true);

    const vendor = await createVendor(
      formData
    );

    navigate(`/vendors/${vendor.id}`);
  } catch (error) {
    console.error(error);

    setError(
      "Failed to create vendor"
    );
  } finally {
    setLoading(false);
  }
};

 return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Add Vendor</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Owner Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Owner Name"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Business Name</label>
          <input
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full border p-3 rounded-lg"
          />
        </div>
        <div>
  <label className="block text-sm font-medium mb-1">
    Category
  </label>

  <select
    name="categoryId"
    value={formData.categoryId}
    onChange={(e) =>
      setFormData({
        ...formData,
        categoryId: e.target.value,
      })
    }
    className="
      w-full
      border
      p-3
      rounded-lg
      bg-white
    "
    required
  >
    <option value="">
      Select Category
    </option>

    {categories.map((category) => (
      <option
        key={category.id}
        value={category.id}
      >
        {category.name}
      </option>
    ))}
  </select>
</div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={4}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Website</label>
          <input
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full border p-3 rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price Range</label>
          <input
            name="priceRange"
            value={formData.priceRange}
            onChange={handleChange}
            placeholder="Price Range"
            className="w-full border p-3 rounded-lg"
          />
        </div>

       <button
  type="submit"
  disabled={loading}
  className="
    bg-black
    text-white
    px-6
    py-3
    rounded-lg
    font-medium
    hover:bg-gray-800
    transition-colors
    disabled:opacity-50
  "
>
  {loading
    ? "Creating Vendor..."
    : "Create Vendor"}
</button>
      </form>
    </div>
  );
}
export default AddVendorPage