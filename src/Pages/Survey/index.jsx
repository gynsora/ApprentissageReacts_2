
function Survey() {
    return (
      <div>
        <h1>Questionnaire 🧮</h1> 
      </div>
    )
  }
export default Survey

/* exemple pour un link outlet
import { Outlet, Link } from 'react-router-dom'

function Survey() {
  return (
    <div>
      <h1>Questionnaire 🧮</h1> 
      
      <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet />
    </div>
  )
}

ajouter les 2 imports dans index.jsx
//import ClientForm from './Components/ClientForm'
//import FreelanceForm from './Components/FreelanceForm'

imbriquer cest 2 balise dans index.jsx au niveau de la route survey
//<Route path="client" element={<ClientForm />} />
//<Route path="freelance" element={<FreelanceForm />} />
*/