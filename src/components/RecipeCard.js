import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #EF233C;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    max-width: 300px;
    margin-bottom: 1em;
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

   
    return(
        <Card key={props.meal.idMeal}>
            <Imagem src={props.meal.strMealThumb} />
            <Titulo>{props.meal.strMeal}</Titulo>
            <Descricao>
                <p>Origem: {props.meal.strArea}</p>
                <p>Categoria: {props.meal.strCategory}</p>
                <p>Tags: {props.meal.strTags}</p>
            </Descricao>
        </Card>
    )
}