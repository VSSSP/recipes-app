import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyContext from '../../Context';
import { getMealName } from '../../services/API';
import FoodCategories from './Components/FoodCategories';
import Foods from './Components/Foods';

export default function Comidas() {
  const { setPageName, setShowButton, food, setFood } = useContext(MyContext);
  // const [load, setLoad] = useState(false);

  useEffect(() => {
    setPageName('Foods');
  }, [setPageName]);

  useEffect(() => {
    setShowButton(true);
  }, [setShowButton]);

  useEffect(() => {
    async function fetchMeals() {
      const mealsInfo = await getMealName('');
      if (food.length === 0) {
        setFood(mealsInfo.meals);
      }
    }
    fetchMeals();
  }, [setFood, food]);

  // useEffect(() => {
  //   const DOIS_SEGUNDO = 2000;
  //   setTimeout(() => {
  //     setLoad(true);
  //   }, DOIS_SEGUNDO);
  // }, []);

  // if (!load) return <img className='loadImg' src='https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif'/>;

  return (
    <div>
      <Header />
      <FoodCategories />
      <div className="recipeCardsDiv">
        { food ? <Foods food={ food } /> : null }
      </div>
      <Footer />
    </div>
  );
}
