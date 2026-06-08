import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="font-bold text-xl"
        >
          WedLink
        </Link>

        <Link
          to="/vendors/new"
          className="
            bg-black
            text-white
            px-4
            py-2
            rounded-lg
          "
        >
          Add Vendor
        </Link>

      </div>
    </header>
  );
}