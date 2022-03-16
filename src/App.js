import styled from 'styled-components'
import {Link, Outlet} from 'react-router-dom'

const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em 0.3em;
  `;

  const NavbarLink = styled.h1`
    font-size: 1.125rem;
    color: black;
  `
  
function App() {

  
  return (
    <div>
      <Navbar>
        <Link to="/almoco">
          <NavbarLink>Almoco</NavbarLink>
        </Link>
        <Link to="/cafe-da-manha">
          <NavbarLink>Café da manhã</NavbarLink>
        </Link>
        <Link to="/jantar">
          <NavbarLink>Jantar</NavbarLink>
        </Link>
      </Navbar>
      <Outlet />
    </div>
    // <Wrapper>
    //   <Title>
    //     Hello World!
    //   </Title>
    // </Wrapper>
  );
}

export default App;
