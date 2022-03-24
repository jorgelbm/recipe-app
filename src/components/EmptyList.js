import styled from 'styled-components'

const Titulo = styled.h1`
  width: 100%;
  font-size: 2.5rem;
`
export default function EmptyList(){


    return(
        <div style={{textAlign: 'center', backgroundColor: '#EDF2F4', padding: '1.5em 1em', borderRadius: '5px'}}>
            <i className='bi-info-circle' style={{fontSize: '3rem'}}></i>
            <Titulo>Favorite a meal to populate your list</Titulo>
        </div>
    )
}