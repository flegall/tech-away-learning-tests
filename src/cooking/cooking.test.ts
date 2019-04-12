import { cook, PizzaRecipe } from "./cooking";
import { aPizzaRecipe, aDough } from "./test-builders";
// import { aPizzaRecipe, aDough } from "./test-builders";

describe("cook()", () => {
  beforeEach(() => {});

  it(`should cook a marguarita pizza when ingredients are 
      - tomato sauce
      - mozza
      - tomato`, () => {
    // given
    const recipe: PizzaRecipe = aPizzaRecipe({
      sauce: "CREAM",
      ingredients: ["MOZZA", "TOMATO"]
    });

    // when
    const pizza = cook(recipe);

    // then
    expect(pizza.name).toEqual("marguarita");
  });

  it(`should cook an hawaian pizza when ingredients are 
  - tomato sauce
  - ham
  - ananas`, () => {
    // given
    const recipe: PizzaRecipe = aPizzaRecipe({
      sauce: "TOMATO",
      ingredients: ["HAM", "ANANAS"]
    });

    // when
    const pizza = cook(recipe);

    // then
    expect(pizza.name).toEqual("HAWAIAN");
  });

  it(`should cook a weird pizza when ingredients are 
  - brocoli
  - dough corn`, () => {
    // given
    const recipe: PizzaRecipe = aPizzaRecipe({
      dough: aDough({ flourType: "CORN" }),
      ingredients: ["BROCOLI"]
    });

    // when
    const pizza = cook(recipe);

    // then
    expect(pizza.name).toEqual("weird");
  });
});
