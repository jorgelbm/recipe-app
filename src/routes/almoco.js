import RecipesList from "../components/RecipesList"
import styled from 'styled-components'

const Titulo = styled.h1`
        font-size: 2.5rem;
        color: #2B2D42
    `
    
export default function Almoco(){

    
    return(
        <div>
            <Titulo>Almoço</Titulo>
            <RecipesList />
        </div>
    )
}