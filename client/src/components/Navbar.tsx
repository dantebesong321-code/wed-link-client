import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHeart,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="font-bold text-2xl"
        >
          WedLink
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          <Link
            to="/about"
            className="hover:text-zinc-500 transition"
          >
            About
          </Link>

          {/* Categories */}

          <div className="relative">

            <button
              onClick={() =>
                setCategoryOpen(!categoryOpen)
              }
              className="
                flex
                items-center
                gap-2
                hover:text-zinc-500
              "
            >
              Categories
              <FaChevronDown size={12} />
            </button>

            {categoryOpen && (
              <div
                className="
                  absolute
                  top-10
                  left-0
                  bg-white
                  border
                  rounded-xl
                  shadow-lg
                  w-56
                  py-2
                "
              >
                <Link
                  to="/categories/photography"
                  className="block px-4 py-2 hover:bg-zinc-100"
                >
                  Photography
                </Link>

                <Link
                  to="/categories/florist"
                  className="block px-4 py-2 hover:bg-zinc-100"
                >
                  Florists
                </Link>

                <Link
                  to="/categories/planner"
                  className="block px-4 py-2 hover:bg-zinc-100"
                >
                  Planners
                </Link>

                <Link
                  to="/categories/venue"
                  className="block px-4 py-2 hover:bg-zinc-100"
                >
                  Venues
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/favorites"
            className="
              flex
              items-center
              gap-2
              hover:text-zinc-500
            "
          >
            <FaHeart />
            Favorites
          </Link>

          <Link
            to="/vendors/new"
            className="
              bg-black
              text-white
              px-4
              py-2
              rounded-md
              hover:bg-zinc-800
              transition
            "
          >
            Add Vendor
          </Link>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden text-xl"
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
            md:hidden
            border-t
            bg-white
          "
        >
          <div className="px-6 py-4 flex flex-col gap-4">

            <Link
              to="/about"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              About
            </Link>

            <button
              onClick={() =>
                setCategoryOpen(!categoryOpen)
              }
              className="
                flex
                justify-between
                items-center
              "
            >
              Categories

              <FaChevronDown />
            </button>

            {categoryOpen && (
              <div className="pl-4 flex flex-col gap-2">

                <Link
                  to="/categories/photography"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  Photography
                </Link>

                <Link
                  to="/categories/florist"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  Florists
                </Link>

                <Link
                  to="/categories/planner"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  Planners
                </Link>

                <Link
                  to="/categories/venue"
                  onClick={() =>
                    setMenuOpen(false)
                  }
                >
                  Venues
                </Link>

              </div>
            )}

            <Link
              to="/favorites"
              onClick={() =>
                setMenuOpen(false)
              }
              className="flex items-center gap-2"
            >
              <FaHeart />
              Favorites
            </Link>

            <Link
              to="/vendors/new"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                bg-black
                text-white
                rounded-md
                py-3
                text-center
              "
            >
              Add Vendor
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}