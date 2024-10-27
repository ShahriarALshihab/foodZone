import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Recipes = ({addRecipeToQueue}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes.JSON")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div
        className="grid
            grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {recipes.map((recipe) => (
          <div
            key={recipe.recipe_id}
            className="border rounded-md pt-1 card overflow-hidden   shadow-xl"
          >
            <figure className=" object-cover p-4 h-[15rem] md:h-[20rem] md:w-full">
              <img
                src={recipe.recipe_image}
                alt="food"
                className="object-cover w-full h-full rounded-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-gray-800 text-2xl font-semibold">
                {recipe.recipe_name}
              </h2>
              <p className="text-gray-500 text-base">
                {recipe.short_description}
              </p>
              <hr />
              <h3 className="font-semibold text-gray-700">
                Ingredients: {recipe.ingredients.length}
              </h3>

              <div>
                <ul className="ml-4">
                  {recipe.ingredients.map((item, index) => (
                    <li className="list-disc text-gray-600" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <hr />

              <div className="flex gap-6 mb-5">
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-clock text-2xl"></i>
                  {recipe.preparing_time}{" "}
                        </div>
                        <div className="flex items-center gap-2">
                        <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                  {recipe.calories}{" "}
                </div>
              </div>

              <div className="card-actions justify-start">
                <button onClick={()=>addRecipeToQueue(recipe)} className="btn text-white bg-green-500 text-xl rounded-2xl">Want To Cook</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
