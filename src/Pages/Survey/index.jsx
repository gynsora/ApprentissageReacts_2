import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'
import { Loader } from '../../Utils/Styles/Atoms'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error,setError] = useState(null)

  // Cette syntaxe permet aussi bien de faire des calls API.
  // Mais pour utiliser await dans une fonction, il faut que celle-ci soit async (pour asynchrone).
  // Comme la fonction passée à useEffect ne peut pas être asynchrone,
  // il faut utiliser une fonction qui est appelée dans useEffect et déclarée en dehors, comme ici 👇.
  // Essayez de commenter le code créé dans le chapitre et de décommenter fetchData pour voir.

  async function fetchData() {
    setDataLoading(true)
    try{
      const response = await fetch(`http://localhost:8000/survey`)
      const { surveyData } = await response.json()
      setSurveyData(surveyData)
    }
    catch (err){
      console.log('===== error =====', err)
      setError(true)
    }
    finally{
      setDataLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])



  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
      )}
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
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
