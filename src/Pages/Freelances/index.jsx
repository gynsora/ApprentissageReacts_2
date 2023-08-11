import { useContext } from 'react'
import { ThemeContext } from '../../Utils/Context'
import { Link } from 'react-router-dom'
import Card from '../../Components/Card'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'
import { Loader } from '../../Utils/Styles/Atoms'
import { useFetch } from '../../Utils/Hooks'


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
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`



function Freelances() {
  // ici pour nommée les constante d'un usestate il faut faire attention au type données que l'ont manipule
  const { theme } = useContext(ThemeContext)
  
  const { data, isLoading, error } = useFetch(`http://localhost:8000/freelances`)
  const { freelancersList } = data
  

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} />
        </LoaderWrapper>
      ) : (
        <CardsContainer theme={theme}>
          {freelancersList.map((profile,index) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                key={`${profile.name}`}
                label={profile.jobTitle}
                title={profile.name}
                picture={profile.picture}
              />
            </Link>
          ))}
        </CardsContainer>
      )}

    </div>
  )
}

export default Freelances