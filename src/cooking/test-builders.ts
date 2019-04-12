import { PizzaRecipe, Dough } from "./cooking";

export const aPizzaRecipe = (
  pizzaRecipe: Partial<PizzaRecipe> = {}
): PizzaRecipe => ({
  dough: aDough(),
  sauce: "CREAM",
  ingredients: ["MOZZA", "TOMATO"],
  ...pizzaRecipe
});

export const aDough = (dough: Partial<Dough> = {}): Dough => ({
  flourType: "WHEAT",
  quantityInGrams: 200,
  ...dough
});
