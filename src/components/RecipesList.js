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

export default function RecipesList(){

    const [meals, setMeals] = useState([])
    let params = useParams()

    useEffect(
        () =>{
            const fetchSearch = async () => {
                const res = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.searchQuery}`
                );
                const meals = await res.data.meals;
                setMeals(meals)
                };
            fetchSearch();
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