import { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'
import RecipeCard from "./RecipeCard";
import SearchBox from "../components/SearchBox"


const Subtitulo = styled.h2`
        font-size: 1.8rem;
        color: #2B2D42;
    `
const DivReceitas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

export default function RecipesList(){

    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState('')
    const axios = require('axios');

    useEffect(
        () =>{
            const fetchSearch = async () => {
                const res = await axios.get(
                    `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
                );
                const meals = await res.data.meals;
                setMeals(meals)
                };
            fetchSearch();
        }, []);
        

    
    return(
        <div style={{width: '100'}}>
            <SearchBox setSearch={setSearch} meals={meals} setMeals={setMeals}></SearchBox>
            <Subtitulo>Lista de Receitas</Subtitulo>
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