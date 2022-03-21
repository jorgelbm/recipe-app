import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    max-width: 1080px;
`
const Navbar = styled.nav`
    
display: flex;
flex-direction: row;
justify-content: space-around;
align-item:center;
padding: 0.5em 0.3em;

background-color: #EF233C;
color: #EDF2F4;
`;

const NavbarLogo = styled.h1`
font-size: 2rem;
margin: 0;
`
const NavbarLinkList = styled.ul`
display: flex;
justify-content: space-between;
align-items:center;
list-style: none;
`

const NavbarLink = styled.li`
padding: 0 0.5em;
font-size: 1.125rem;
color: black;
`
export default function SiteNavbar(){

    return(
        <Navbar>
          <Container>
          <NavbarLogo>
            <img src={process.env.PUBLIC_URL + '/recipes_app_logo.png'} style={{width: '75px'}}></img>
          </NavbarLogo>
          <NavbarLinkList>
            <NavbarLink><Link to="/almoco" style={{textDecoration: 'none', color: '#EDF2F4'}}>Almoco</Link></NavbarLink>
            <NavbarLink><Link to="/cafe-da-manha" style={{textDecoration: 'none', color: '#EDF2F4'}}>Café da manhã</Link></NavbarLink>
            <NavbarLink><Link to="/jantar" style={{textDecoration: 'none', color: '#EDF2F4'}}>Jantar</Link></NavbarLink>
          </NavbarLinkList>
          </Container>
        </Navbar>
    )
}