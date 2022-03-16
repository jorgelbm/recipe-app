import { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'
import RecipeCard from "./RecipeCard";


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

    const axios = require('axios');

    useEffect(
        () =>{
            // Faz uma requisição a um usuarío com um ID expecifico
            axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=arr')
                .then((response) => {
                    // manipula o sucesso da requisição
                    console.log(response.data.meals)
                    const response_data = response.data.meals
                    setMeals(response_data);
                
                })
                .catch((error) => {
                    // manipula erros da requisição
                    console.error(error);
                }
            )
        }, []);
        

    
    return(
        <div>
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