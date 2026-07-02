import { useState } from "react";
import { Wheat } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Recipe {
  id: string;
  name: string;
  title: string;
  instructions: string[];
  nutrition: {
    calories: {
      value: string;
      unit: string;
    };
    fat: string;
    protein: string;
    carbohydrates: string;
    fiber: string;
    sugar: string;
  };
  color: string;
  image: string;
}

const RecipeShowcase = () => {
  const { pageContent, locale } = useLanguage();
  const content = pageContent.home.recipes;
  const titleInstructionSeparator = locale === "ar" ? "، " : ", ";
  const instructionStepSeparator = locale === "ar" ? "، " : " ";
  const recipeDisplay = [
    { color: "bg-orange-500", image: "/assets/breads/london_white_cropped.webp" },
    { color: "bg-amber-500", image: "/assets/muffins/vanilla_keksy_15pcs_cropped.webp" },
    { color: "bg-yellow-600", image: "/assets/muffins/choco_keksy_muffin_15pcs_cropped.webp" },
    { color: "bg-orange-400", image: "/assets/rolls_n_buns/krem_bun_cropped.webp" },
    { color: "bg-yellow-500", image: "/assets/keksy/vanille_keksy_15pcs_cropped.webp" },
    { color: "bg-orange-600", image: "/assets/keksy/choco_keksy_15pcs_cropped.webp" },
    { color: "bg-yellow-400", image: "/assets/rolls_n_buns/fruta_bun_cropped.webp" },
  ];
  const recipes: Recipe[] = content.items.map((recipe, index) => ({
    ...recipe,
    ...recipeDisplay[index],
  }));

  const [activeRecipeId, setActiveRecipeId] = useState(recipes[0].id);
  const activeRecipe = recipes.find((recipe) => recipe.id === activeRecipeId) || recipes[0];

  const formatRecipeInstructions = (recipe: Recipe) => {
    const steps = recipe.instructions.join(instructionStepSeparator);
    const title = locale === "ar" ? recipe.title : recipe.title.toLowerCase();

    if (locale === "en" && steps.startsWith("Prepare")) {
      return steps;
    }

    return `${content.instructionPrefix} ${title}${titleInstructionSeparator}${steps}`;
  };

  const recipeInstructions = formatRecipeInstructions(activeRecipe);

  return (
    <section className="pt-8 pb-8 md:pt-16 md:pb-16 bg-slate-50 relative overflow-hidden">
      {/* Top Left Quarter Circle */}
      <div className="absolute top-0 left-0 w-32 h-32 -translate-x-[10rem] -translate-y-[10rem] hidden md:block">
        <div className="w-[23rem] h-[23rem] md:w-[20rem] md:h-[20rem] bg-yellow-400 rounded-full"></div>
      </div>

      {/* Bottom Right Quarter Circle */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-24 md:h-24 translate-x-[-4rem] translate-y-[-4rem] hidden md:block">
        <div className="w-[23rem] h-[23rem] bg-yellow-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 md:px-32 lg:px-32 xl:px-32">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wheat className="text-orange-500" size={24} />
            <span className="text-orange-500 font-medium">{content.kicker}</span>
          </div>
          <h2 className="text-2xl md:text-5xl s:text-[30px] font-bold text-gray-900">
            {content.titleLineOne} <br /> {content.titleLineTwo}
          </h2>
        </div>

        {/* Mobile Stack Layout */}
        <div className="lg:hidden space-y-8">
          {/* Mobile Dropdown Navigation */}
          <div className="pt-8">
            <select
              value={activeRecipe.id}
              onChange={(e) => setActiveRecipeId(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none"
            >
              {recipes.map((recipe) => (
                <option key={recipe.id} value={recipe.id}>
                  {recipe.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Content - Stack image and details */}
          <div className="space-y-8">
            {/* Mobile Product Image */}
            <div className="flex justify-center">
              <img
                src={activeRecipe.image}
                alt={activeRecipe.title}
                className="w-[16rem] h-[24rem] object-contain"
              />
            </div>

            {/* Mobile Recipe Details */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 s:text-[20px]">
                {activeRecipe.title}
              </h3>

              {/* Recipe Instructions */}
              <div className="mb-8">
                <p className="text-gray-600 text-sm leading-relaxed s:text-base">
                  {recipeInstructions}
                </p>
              </div>

              {/* Nutritional Information */}
              <div className="space-y-2 max-w-sm mx-auto lg:max-w-none">
                <div className="flex justify-between">
                  <span className="text-gray-600 s:text-sm">{content.nutritionLabels.calories}</span>
                  <span className="font-medium text-gray-900 s:text-sm inline-flex items-center gap-1 whitespace-nowrap" dir="ltr">
                    <span>{activeRecipe.nutrition.calories.value}</span>
                    <span>{activeRecipe.nutrition.calories.unit}</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 s:text-sm">{content.nutritionLabels.fat}</span>
                  <span className="font-medium text-gray-900 s:text-sm">{activeRecipe.nutrition.fat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 s:text-sm">{content.nutritionLabels.protein}</span>
                  <span className="font-medium text-gray-900 s:text-sm">{activeRecipe.nutrition.protein}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 s:text-sm">{content.nutritionLabels.carbohydrates}</span>
                  <span className="font-medium text-gray-900 s:text-sm">{activeRecipe.nutrition.carbohydrates}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 s:text-sm">{content.nutritionLabels.fiber}</span>
                  <span className="font-medium text-gray-900 s:text-sm">{activeRecipe.nutrition.fiber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 s:text-sm">{content.nutritionLabels.sugar}</span>
                  <span className="font-medium text-gray-900 s:text-sm">{activeRecipe.nutrition.sugar}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop 3-4-5 Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 min-h-[600px] items-center">
          {/* Left Side - Recipe Navigation (3 columns) */}
          <div className="lg:col-span-3 flex flex-col h-full justify-center">
            {/* Desktop Navigation */}
            <div className="hidden lg:block space-y-2">
              {recipes.map((recipe) => {

                return (
                  <div
                    key={recipe.id}
                    onMouseEnter={() => setActiveRecipeId(recipe.id)}
                    className="w-full text-left p-[7px] flex items-center gap-3 cursor-pointer"
                  >
                    <div
                      className={`w-1 h-8 rounded-full transition-all duration-300 ${activeRecipe.id === recipe.id ? recipe.color : "bg-gray-300"}`}
                    ></div>
                    <span
                      className={`font-medium transition-colors duration-300 ${activeRecipe.id === recipe.id
                        ? "text-gray-900"
                        : "text-gray-500 group-hover:text-gray-900"}`}
                    >
                      {recipe.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center - Product Image (4 columns) */}
          <div className="lg:col-span-4 flex flex-col h-full">
            <div className="flex-grow flex items-center justify-center">
              <img
                src={activeRecipe.image}
                alt={activeRecipe.title}
                className="w-[20rem] h-[32rem] object-contain"
              />
            </div>
          </div>

          {/* Right Side - Recipe Details (5 columns) */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {activeRecipe.title}
              </h3>

              {/* Recipe Instructions */}
              <div className="mb-8">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {recipeInstructions}
                </p>
              </div>

              {/* Nutritional Information */}
              <div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{content.nutritionLabels.calories}</span>
                    <span className="font-medium text-gray-900 inline-flex items-center gap-1 whitespace-nowrap" dir="ltr">
                      <span>{activeRecipe.nutrition.calories.value}</span>
                      <span>{activeRecipe.nutrition.calories.unit}</span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{content.nutritionLabels.fat}</span>
                    <span className="font-medium text-gray-900">{activeRecipe.nutrition.fat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{content.nutritionLabels.protein}</span>
                    <span className="font-medium text-gray-900">{activeRecipe.nutrition.protein}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{content.nutritionLabels.carbohydrates}</span>
                    <span className="font-medium text-gray-900">{activeRecipe.nutrition.carbohydrates}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{content.nutritionLabels.fiber}</span>
                    <span className="font-medium text-gray-900">{activeRecipe.nutrition.fiber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{content.nutritionLabels.sugar}</span>
                    <span className="font-medium text-gray-900">{activeRecipe.nutrition.sugar}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeShowcase;
