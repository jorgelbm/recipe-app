import { useEffect, useState } from 'react';
import styled from 'styled-components'
import RecipesList from './components/RecipesList';
import SearchBox from './components/SearchBox';
import SiteNavbar from './components/SiteNavbar';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';
import EmptyList from './components/EmptyList';
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
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
` 
const RandomRecipes = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
`
function App() {

  if(!localStorage.getItem("favorites")){
    localStorage.setItem("favorites","[]")
  }
  
  const [favoriteMealsId, setFavoriteMealsId] = useState(JSON.parse(localStorage.getItem("favorites")))
  const [favoriteMeals, setFavoriteMeals] = useState([])

  useEffect(
    ()=>{
      console.log("useeffetct-app")
      const fetchSearch = async () => {
        let fetch_array = []
        for (const mealId of favoriteMealsId){
            const res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
            );
            fetch_array = [...fetch_array, res.data.meals[0]]
        }

        setFavoriteMeals(fetch_array)
        };
    fetchSearch()
    }, [favoriteMealsId]
  )
  return (

      <div>
        <SiteNavbar></SiteNavbar>
        <Main>
          <Container>
            <SearchDiv>
              <Titulo>Search a meal</Titulo>
              <SearchBox></SearchBox>
            </SearchDiv>
            <Titulo>Favorites Recipes</Titulo>
            <FavoritesRecipes>
              {favoriteMeals.map(
                (meal) => {
                  return( <RecipeCard key={meal.idMeal} meal={meal} favoriteMeals={favoriteMealsId} addToFavorites={setFavoriteMealsId} isSearch={false} />)
                }
                )
              }
              {
                favoriteMealsId.length==0?<EmptyList />: ''
              }
            </FavoritesRecipes>
            <RandomRecipes>
              <Titulo>Random Recipe</Titulo>
              <RecipesList favoriteMeals={favoriteMealsId} addFavoriteMeal={setFavoriteMealsId} isSearch={false}></RecipesList>
            </RandomRecipes>
          </Container>
        </Main>
      </div>
  );
}

export default App;
