import logo from '../../images/globo.png';
import NavbarStyled from './NavbarStyled.jsx';

export function Navbar() {
    return (
        <>
            <NavbarStyled.Nav>
                <NavbarStyled.InputSpace>
                    <i className="bi bi-search"></i>
                    <input type="text" className="input-search-space" placeholder="Pesquise títulos" />
                </NavbarStyled.InputSpace>

                <NavbarStyled.Img src={logo} alt="Logo" />

                <NavbarStyled.Button>Entrar</NavbarStyled.Button>
            </NavbarStyled.Nav>
        </>
    )
}
