import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Meal(){

    const [meal, setMeal] = useState([])
    let params = useParams()

    useEffect(
        () => {
            const fetchMeal = async() =>{
                const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`);
                const res_meal = await res.data.meals;
                console.log(res_meal);
                setMeal(res_meal);

            };
            fetchMeal();
        }, []);
    
    return(
        <div>
            {meal.map(
                (meal)=>{
                    return (
                        <div>
                            <p>{meal.strMeal}</p>
                            <p>{meal.idMeal}</p>
                            <p>{meal.strCategory}</p>
                            <p>{meal.strArea}</p>
                            <img src={meal.strMealThumb}></img>
                            <p>{meal.strInstructions}</p>
                        </div>
                    )
                }
            )}
        </div>
    )
}