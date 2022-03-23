import styled from 'styled-components'

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
export default function FavoriteButton(props){


    return(
        <BotaoAddFavoritos onClick={props.addMealToFavorites}>
            <i className={props.isFavorite?'bi-heart-fill' : 'bi-heart'}></i>
        </BotaoAddFavoritos>
    )
}