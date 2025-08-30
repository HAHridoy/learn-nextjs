
import Link from 'next/link';
import MealSearchInput from './components/MealSearchInput';
import Image from 'next/image';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
})
export const metadata = {
  title: 'All Meals',
  description: "Meals search using server components and TheMealDB API",
};


export default async function MealsPage(  {searchParams}) {
    const query = await searchParams;

    const fetchMeals = async () => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
        const data = await res.json();
        return data.meals;  
        } 
        catch(error){
            console.log(error); 
            return [];
        }         

    }

    const meals = await fetchMeals();
  return (
    <div>
        <div className='flex flex-col items-center justify-center my-4'>   
            <MealSearchInput/>
        </div>
        <div className="space-y-8 grid grid-cols-3 gap-4">

        
        {
            meals?.map(meal => {
                return(
                <div key={meal.idMeal} className={`p-4 border rounded shadow border-slate-300 ${roboto.className}`}>
                    <Image src ={meal?.strMealThumb} alt={meal?.strMeal} width={640} height={640}/>
                    <h2 className="text-2xl font-bold">{meal?.strMeal}</h2>
                    <p className="font-semibold">{meal?.strInstructions}</p>
                    <Link href={`/meals/${meal.idMeal}`}>Details</Link>
                 </div>
                )}
        )}
    </div>

    </div>
    
  )
}
