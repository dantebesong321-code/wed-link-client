import {
  FiCamera,
  FiHeart,
  FiMusic,
 
  FiMap

} from "react-icons/fi";
import { GrRestaurant, GrMusic,
  GrSpa, GrMapLocation, GrUserFemale 
  
} from "react-icons/gr";



function CategoryFilter() {
  const categories = [
  {
    name: "Photography",
    icon: FiCamera,
  },
  {
    name: "Decoration",
    icon: GrSpa,
  },
  {
    name: "DJ",
    icon: GrMusic,
  },
  {
    name: "Makeup",
    icon: GrUserFemale,
  },
  {
    name: "Venue",
    icon: GrMapLocation ,
  },
  {
    name: "Catering",
    icon: GrRestaurant,
  },
];


  return (
    <section className="categoryFilter mb-16">

      <h2
        className="
          text-2xl
          font-semibold
          mb-4
        "
      >
        Browse By Category
      </h2>

      <div className="flex justify-center flex-wrap lg:gap-4 gap-2">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              className="
                flex
                items-center
                gap-2

                px-5
                py-3

                bg-white

                border
                border-zinc-200

                rounded-full

                hover:bg-black
                hover:text-white

                transition
              "
            >
              <Icon size={18} />

              {category.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default  CategoryFilter