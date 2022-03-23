import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FavoriteButton from './FavoriteButton'
const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid #EF233C;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    max-width: 300px;
    margin: 1em 0.5em
` 
const Imagem = styled.img`
    width: 100%;
    height: auto;
`
const Titulo = styled.h4`
    text-align:center;
    color: #EF233C;
`
const Descricao = styled.div`
    margin: 0;
    padding: 0 1em;
    color: #2B2D42;
`


export default function RecipeCard(props){

    const [isFavorite, setIsFavorite] = useState(JSON.parse(localStorage.getItem("favorites")).includes(parseInt(props.meal.idMeal)) ? true : false)

    const addMealToFavorites = () => {
        let array_favoritos = JSON.parse(localStorage.getItem("favorites"))
        
        if(props.isSearch === false){
            if(isFavorite){
                array_favoritos = array_favoritos.filter(item => item !== parseInt(props.meal.idMeal))
                localStorage.setItem("favorites", JSON.stringify(array_favoritos))
                props.addToFavorites(array_favoritos)
                setIsFavorite(false)
            }
            else{
                array_favoritos = [...array_favoritos, parseInt(props.meal.idMeal)]
                console.log("Favoritos", array_favoritos)
                localStorage.setItem("favorites", JSON.stringify(array_favoritos));
                props.addToFavorites(array_favoritos)
                setIsFavorite(true)
                console.log("favoritou")
            }
        }
        else{
            if(isFavorite){
                array_favoritos = array_favoritos.filter(item => item !== parseInt(props.meal.idMeal))
                localStorage.setItem("favorites", JSON.stringify(array_favoritos))
                
                setIsFavorite(false)
            }
            else{
                array_favoritos = [...array_favoritos, parseInt(props.meal.idMeal)]
                console.log("Favoritos", array_favoritos)
                localStorage.setItem("favorites", JSON.stringify(array_favoritos));
                
                setIsFavorite(true)
                console.log("favoritou")
            }
        }
    }

    return(
        <Card key={props.meal.idMeal}>
            <FavoriteButton isFavorite={isFavorite} addMealToFavorites={addMealToFavorites}/>
            <Imagem src={props.meal.strMealThumb} />
            <Link to={`/meal/${props.meal.idMeal}`}  style={{textDecoration: 'none'}}><Titulo>{props.meal.strMeal}</Titulo></Link>
            <Descricao>
                <p><i className='bi-flag'></i> {props.meal.strArea}</p>
                <p>Category: {props.meal.strCategory}</p>
                <p><i className='bi-tags'></i> {props.meal.strTags ? props.meal.strTags : 'No tags'}</p>
            </Descricao>
        </Card>
    )
}