import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}


function SearchBar({
  value,
  onChange,
}: SearchBarProps) {


  return (
    <div className="justify-center searchBar max-w-3xl mx-auto mb-12">
      <div className="relative">

        <FiSearch
          size={20}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-zinc-400
          "
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search vendors..."
          className="
            w-full
            bg-white
            border
            border-zinc-200
            rounded-4xl
            py-4
            pl-12
            pr-4
            focus:outline-none
            focus:ring-2
            focus:ring-taupe-600
        
          "
        />
      </div>
    </div>
  );
}

export default SearchBar