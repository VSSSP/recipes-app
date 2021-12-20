export default function handleComponents(ingredientesChecked,
  name, setIngredientesChecked, setClick) {
  const isChecked = ingredientesChecked.some((ingredient) => ingredient === name);
  if (isChecked) {
    const checkedIngredients = ingredientesChecked.filter((ing) => (ing !== name));
    setIngredientesChecked(checkedIngredients);
    setClick(false);
  } else {
    const checkedIngredients = ingredientesChecked;
    checkedIngredients.push(name);
    setIngredientesChecked(checkedIngredients);
    setClick(true);
  }
}
