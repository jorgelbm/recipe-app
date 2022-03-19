import styled from 'styled-components'
import RecipesList from "../components/RecipesList";
import SiteNavbar from "../components/SiteNavbar";

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    width: 100%;
    max-width: 1080px;
`
const Titulo = styled.h1`
  font-size: 2.5rem;
`
export default function Meals(){

    return(
        <main>
            <SiteNavbar></SiteNavbar>
            <Container>
                <Titulo>Results</Titulo>
                <RecipesList isSearch={true}></RecipesList>
            </Container>
        </main>
    )
}