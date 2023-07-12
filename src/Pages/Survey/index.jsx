import { useParams, Link } from 'react-router-dom'

 
function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>

      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>

      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
  // trouvé un moyen de rediriger l'utilisateur lorsqu'il saisit une url avec un nombre invalide
  // exemple: /survey/164
}

export default Survey

/* exemple pour un link outlet
//<Route path="/survey" element={<Survey />} />
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
