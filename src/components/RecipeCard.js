import styled from 'styled-components'
import { Link } from 'react-router-dom'
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

const BotaoAddFavoritos = styled.button`
    position: absolute;
    top: 1%;
    right: 1%;
    cursor: pointer;
    border: none;
    background-color: none;
    border-radius: 50%;
    padding: 0.45em;
    color: #EF233C;
`
export default function RecipeCard(props){

    const addMealToFavorites = () => {
         const favoriteMeals = [...props.favoriteMeals]
         console.log(favoriteMeals)
        const newFavoriteMeals = [...favoriteMeals, parseInt(props.meal.idMeal)]
        console.log(newFavoriteMeals)
        props.addToFavorites(newFavoriteMeals)
        console.log(props.favoriteMeals)
    }
   
    return(
        <Card key={props.meal.idMeal}>
            <BotaoAddFavoritos onClick={addMealToFavorites}>
                <i className='bi-heart'></i>
            </BotaoAddFavoritos>
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