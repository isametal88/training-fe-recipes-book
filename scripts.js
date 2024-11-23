import { RECIPES } from "./data/data.js";
document.querySelector("#recipes-list").innerHTML = RECIPES.map(
  (recipe, index) => {
    return `<li><a href="#" onclick="selectRecipe(${index})">${recipe.name}</a></li>`;
  }
).join("");

function renderRecipe(recipe) {
  document
    .getElementById("recipe")
    .setAttribute("recipe", btoa(JSON.stringify(recipe)));
}

window.selectRecipe = (recipeIndex) => {
  const recipe = RECIPES[recipeIndex];
  renderRecipe(recipe);
};

let internetRecipes = [];

window.selectRecipeFromInternet = (recipeIndex) => {
  const recipe = internetRecipes[recipeIndex];
  renderRecipe(recipe);
};

window.loadFromInternet = () => {
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then(({ recipes }) => {
      return recipes.map((r) => {
        return mapRecipe(r);
      });
    })
    .then((recipes) => {
      internetRecipes = recipes;
      document.querySelector("#recipes-list-2").innerHTML = recipes
        .map((recipe, index) => {
          return `<li><a href="#" onclick="selectRecipeFromInternet(${index})">${recipe.name}</a></li>`;
        })
        .join("");
    });
};

function mapRecipe(r) {
  return {
    ...r,
    preparation: r.instructions,
    preparation_time: r.prepTimeMinutes + "min",
    difficulty: ((d) => {
      switch (d) {
        case "Easy":
          return "Facile";
        case "Medium":
          return "Media";
        case "Hard":
          return "Difficile";
      }
    })(r.difficulty),
    ingredients: r.ingredients.map((i) => {
      return {
        name: i,
        quantity: "",
      };
    }),
  };
}
