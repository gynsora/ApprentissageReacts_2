import { useState, useEffect } from 'react'
import Card from '../../Components/Card'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'
import { Loader } from '../../Utils/Styles/Atoms'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`



function Freelances() {
  // ici pour nommée les constante d'un usestate il faut faire attention au type données que l'ont manipule
  const [freelancersList, setFreelancesList] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  const [error,setError] = useState(false)

  async function fetchFreelances() {
    setDataLoading(true)
    try {
      const response = await fetch(`http://localhost:8000/freelances`)
      const { freelancersList } = await response.json()
      setFreelancesList(freelancersList)
    } catch (err) {
      console.log('===== error =====', err)
      setError(true)
    } finally {
      setDataLoading(false)
    }
  }

  useEffect(() => {
    fetchFreelances()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancersList.map((profile,index) => (
            <Card
              key={`${profile.name}`}
              label={profile.jobTitle}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}

    </div>
  )
}

export default Freelances