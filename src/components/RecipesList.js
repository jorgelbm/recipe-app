import { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import axios from "axios";
import styled from 'styled-components'
import RecipeCard from "./RecipeCard";
import SearchBox from "../components/SearchBox"


const DivReceitas = styled.div`
    padding: 0 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 768px){
        justify-content: center;
    }
`

export default function RecipesList(props){

    const [meals, setMeals] = useState([])
    const [isSearch, setIsSearch] = useState(props.isSearch)
    let params = useParams()

    useEffect(
        () =>{
            const fetchSearch = async () => {
                const res = await axios.get(
                    isSearch ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.searchQuery}` : 'https://www.themealdb.com/api/json/v1/1/random.php'
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
                            return(<RecipeCard key={meal.idMeal} meal={meal} favoriteMeals={props.favoriteMeals} addToFavorites={props.addFavoriteMeal} isSearch={isSearch}/>)
                        }
                    )
                }
            </DivReceitas>
        </div>
    )
}