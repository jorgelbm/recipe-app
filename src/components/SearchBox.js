import styled from 'styled-components'
import axios from 'axios'

const SearchDiv = styled.div`
    display: flex;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #EF233C;
    overflow: hidden;
`
const TextInput = styled.input`
    width: 100%;
    padding: 0.5em 1em;
    border: none;
    background-color: #FFFFFF;
    font-size: 1.125rem;
`
const SearchButton = styled.button`
    border: none;
    padding: 0.5em 1em;
    background-color: #EF233C;
    color: #FFFFFF;
    font-size: 1.125rem;
    cursor: pointer;
`

export default function SearchBox(props){

    const handleSearch = () => {
        const searchInput = document.getElementById('search-input')
        const inputValue = searchInput.value
        const fetchSearch = async () => {
            const res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
            );
            const meals = await res.data.meals;
            props.setMeals(meals)
            };
        fetchSearch();
    }

    return(
        <SearchDiv>
            <TextInput id='search-input'></TextInput>
            <SearchButton onClick={handleSearch}>
                <i className="bi bi-search"></i>
            </SearchButton>
        </SearchDiv>
    )
}