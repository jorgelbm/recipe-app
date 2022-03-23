import { useState } from 'react';
import styled from 'styled-components'
import FavoritesRecipesList from './components/FavoritesRecipesList';
import RecipesList from './components/RecipesList';
import SearchBox from './components/SearchBox';
import SiteNavbar from './components/SiteNavbar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    max-width: 1080px;
    padding: 0 1em;
    color: #2B2D42;
`

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SearchDiv = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
`  
const Titulo = styled.h1`
  width: 100%;
  font-size: 2.5rem;
`
const FavoritesRecipes = styled.div`
  width:100%;
` 
const RandomRecipes = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
`
function App() {

  const [favoriteMeals, setFavoriteMeals] = useState([52772,52771, 52773])

  return (

      <div>
        <SiteNavbar></SiteNavbar>
        <Main>
          <Container>
            <SearchDiv>
              <Titulo>Search a meal</Titulo>
              <SearchBox></SearchBox>
            </SearchDiv>
            <FavoritesRecipes>
              <Titulo>Favorites Recipes</Titulo>
              <FavoritesRecipesList favoriteMeals={favoriteMeals}></FavoritesRecipesList>
            </FavoritesRecipes>
            <RandomRecipes>
              <Titulo>Random Recipe</Titulo>
              <RecipesList></RecipesList>
            </RandomRecipes>
          </Container>
        </Main>
      </div>
  );
}

export default App;
