import { NavLink } from "react-router-dom";
 
function Header() {
    return (
        <nav id="sidebar">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/survey/1">Questionnaire</NavLink>
          <NavLink to="/freelances">Freelances</NavLink>
        </nav>
    )
}



export default Header