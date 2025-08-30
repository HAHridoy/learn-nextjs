



const fetchSingleMeal = async (id) => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data.meals;  
        } 
        catch(error){
            console.log(error); 
            return [];
        }         

    }
// dynamic metadata
export async function generateMetadata({params}) {
  // read route params
  const { id } = (await params).id;
 
  // fetch data
  const [singleMeal] = await fetchSingleMeal(id)
 
  return {
    title: singleMeal.strMeal,
    description: singleMeal.strInstructions,
  }
}

export default async function MealsPage(  {params}) {
    const p = await params;

    const [singleMeal] = await fetchSingleMeal(p?.id);
  return (
    <div>
        <p>{JSON.stringify(singleMeal)}</p>

    </div>
    
  )
}
