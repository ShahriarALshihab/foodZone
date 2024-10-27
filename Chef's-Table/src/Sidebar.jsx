/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const Sidebar = ({
    recipeQueue,
    handleRemove,
    preparedRecipe,
    calculateTimeAndCalories,
    totalTime,
    totalCalories,
  }) => {
    return (
      <div className="w-full lg:w-1/3 border rounded-xl">
        {/* want to cook table  */}
        <div>
          <h3 className="text-center text-gray-800 font-semibold text-2xl py-4">
            Want To Cook: {recipeQueue.length}
          </h3>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recipeQueue.map((recipe, index) => (
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        handleRemove(recipe.recipe_id),
                          calculateTimeAndCalories(
                            parseInt(recipe.preparing_time.replace(/\D/g, "")),
                            parseInt(recipe.calories.replace(/\D/g, ""))
                          );
                      }}
                      className="btn text-white bg-green-500 text rounded-2xl"
                    >
                      Processing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* prepared Table  */}
  
        <div className="mt-12">
          <h3 className="text-center text-gray-800 font-semibold text-2xl py-4">
            Currently cooking: {preparedRecipe.length}
          </h3>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {preparedRecipe.map((recipe, index) => (
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                </tr>
              ))}
              <tr className="border-none font-semibold">
                <td></td>
                <td></td>
                <td>Total Time: {totalTime} min</td>
                <td>Total Calories: {totalCalories} cal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  