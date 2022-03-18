import styled from 'styled-components'
import RecipesList from "../components/RecipesList";
import SiteNavbar from "../components/SiteNavbar";

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    max-width: 1080px;
`

export default function Meals(){

    return(
        <main>
            <SiteNavbar></SiteNavbar>
            <Container>
                <RecipesList></RecipesList>
            </Container>
        </main>
    )
}