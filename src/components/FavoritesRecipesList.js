import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import RecipeCard from "./RecipeCard";
import SearchBox from "../components/SearchBox"


const DivReceitas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default function FavoritesRecipesList(props){

    const [mealsIdList, setMealsIdList] = useState(props.favoriteMeals)
    const [meals, setMeals] = useState([])

    useEffect(
        () =>{
            
            const fetchSearch = async () => {
                let fetch_array = []

                for (const mealId of mealsIdList){
                    const res = await axios.get(
                        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
                    );
                    fetch_array = [...fetch_array, res.data.meals[0]]
                }

                setMeals(fetch_array)
                };
            fetchSearch()
        }, []);
        

    
    return(
        <div style={{width: '100'}}>
            <DivReceitas>
                {
                    meals.map(
                        (meal)=>{
                            return <RecipeCard key={meal.idMeal} meal={meal} />
                        }
                    )
                }
            </DivReceitas>
        </div>
    )
}