export default function handleClick(verificar, caminho, id) {
  const iniciar = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!verificar) {
    if (caminho.includes('comidas')) {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ ...iniciar, meals: { ...iniciar.meals, [id]: [] } }));
    }
    if (caminho.includes('bebidas')) {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ ...iniciar, cocktails: { ...iniciar.cocktails, [id]: [] } })); // a
    }
  }
}
