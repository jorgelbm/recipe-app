import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import SiteNavbar from "../components/SiteNavbar"

const Container = styled.div`
    padding: 0 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    max-width: 1080px;
    color: #2B2D42;
`
const Titulo = styled.h1`
    width: 100%;
    font-size: 2.5rem;
`
const ReceitaImagem = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
`
const ReceitaInfos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const ReceitaIngredientes = styled.div`
    width: 100%;
    
    display:flex;
    flex-direction: column;
`
const Ingrediente = styled.div`
    width: 100%;
    padding: 1em 0;
    display: flex;
    justify-content: space-between;
    align-items: end;
`
const Texto = styled.p`
    width: fit-content;
    margin: 0;
    font-size: 1.125rem;
`
const LinhaPontilhada = styled.div`
    flex: auto;
    align-self: strech;
    height: 5px;
    border-bottom: 2px dotted #000;
`
const Preparo = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    margin-bottom: 2em;
`

export default function Meal(){

    const [meal, setMeal] = useState([])
    let params = useParams()

    useEffect(
        () => {
            const fetchMeal = async() =>{
                const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`);
                const res_meal = await res.data.meals;
                setMeal(res_meal);

            };
            fetchMeal();
        }, []);
    const ListarIngredientes = (meal_obj) => {
        const meal_keys = Object.keys(meal_obj)
        return (
            meal_keys.map(
                key =>{
                    if(key.includes('strIngredient')){
                        if(meal_obj[key]!==null && meal_obj[key]!==""){
                            const ingredient_measure_key = key.replace('Ingredient','Measure')
                            return(
                                <Ingrediente key={key}>
                                    <Texto>{meal_obj[key]}</Texto>
                                    <LinhaPontilhada />
                                    <Texto>{meal_obj[ingredient_measure_key]}</Texto>
                                </Ingrediente>
                            )
                        }
                    }
                    return(null)
                }
            )
        )
    }
    return(
        <div>
            <SiteNavbar></SiteNavbar>
            {meal.map(
                (meal)=>{
                    return (
                        <Container key={meal.idMeal}>
                            <Titulo>{meal.strMeal}</Titulo>
                            <ReceitaImagem src={meal.strMealThumb} alt={meal.setMeal} />
                            <ReceitaIngredientes>
                                <Titulo>Ingredients</Titulo>
                                {ListarIngredientes(meal)}
                            </ReceitaIngredientes>
                            <Preparo>
                                <Titulo>Method</Titulo>
                                <Texto>{meal.strInstructions}</Texto>
                            </Preparo>
                        </Container>
                    )
                }
            )}
        </div>
    )
}