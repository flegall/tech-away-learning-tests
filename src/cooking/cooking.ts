export type Dough = {
  flourType: "CORN" | "WHEAT";
  quantityInGrams: number;
};

type Ingredients =
  | "TOMATO"
  | "ZUCCHINI"
  | "BROCOLI"
  | "MEAT"
  | "EGGS"
  | "HAM"
  | "ANANAS"
  | "MOZZA";

export type PizzaRecipe = {
  dough: Dough;
  sauce: "TOMATO" | "CREAM";
  ingredients: Ingredients[];
};

type Pizza = {
  name: string;
};

export function cook(recipe: PizzaRecipe): Pizza {
  if (recipe.dough.flourType === "CORN") {
    return { name: "weird" };
  }
  if (recipe.ingredients.includes("ANANAS")) {
    return { name: "HAWAIAN" };
  }
  return { name: "marguarita" };
}
