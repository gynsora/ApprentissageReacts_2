import { useContext } from 'react'
import { SurveyContext } from '../../Utils/Context'

function Results() {
    const { answers} = useContext(SurveyContext)
    console.log(answers)
    return (
      <div>
        <h1>Résultats</h1>
      </div>
    )
  }
  
  export default Results