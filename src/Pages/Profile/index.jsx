import {  useContext } from 'react'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'
import { ThemeContext } from '../../Utils/Context'
import { Loader } from '../../Utils/Styles/Atoms'
import { useFetch } from '../../Utils/Hooks'
import { useParams } from 'react-router-dom'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 90px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`

const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  font-weight: 500;
`

const JobTitle = styled.h2`
  padding-top: 10px;
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`

const Location = styled.span`
  margin-left: 15px;
  color: ${colors.secondary};
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Price = styled.span`
  padding-top: 10px;
  font-weight: 500;
  font-size: 20px;
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`

const Skill = styled.span`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`

const Availability = styled.span`
  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ available }) => (available ? 'green' : 'red')};
    content: '';
  }
  padding-left: 20px;
  position: relative;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Profile() {
    const { theme } = useContext(ThemeContext)
    const { id } = useParams()
    const { data, isLoading, error } = useFetch(`http://localhost:8000/freelance?id=${id}`) 
    const { freelanceData } = data
    if (error) {
        console.log(error)
        return <span>Oups il y a eu un problème</span>
    }
    //Faire attention au changement des images toujours verifié que l'image est chargée avant de la placé dans le DOM
    //{freelanceData.picture && 
    //<Picture src={freelanceData.picture} alt={freelanceData.name} height={150} width={150} />}

    return (
        <div>
        {isLoading ? (
            <LoaderWrapper>
              <Loader theme={theme} />
            </LoaderWrapper>
          ) : (
        <ProfileWrapper theme={theme}>
            {freelanceData.picture && 
                <Picture src={freelanceData.picture} alt={freelanceData.name} height={150} width={150} />
            }
            
            <ProfileDetails theme={theme}>
              <TitleWrapper>
                <Title>{freelanceData.name}</Title>
                <Location>{freelanceData.location}</Location>
              </TitleWrapper>
              <JobTitle>{freelanceData.job}</JobTitle>
              <SkillsWrapper>
                {freelanceData.skills &&
                  freelanceData.skills.map((skill) => (
                    <Skill key={`skill-${freelanceData.skill}-${freelanceData.id}`} theme={theme}>
                      {freelanceData.skill}
                    </Skill>
                  ))}
              </SkillsWrapper>
              <Availability available={freelanceData.available}>
                {freelanceData.available ? 'Disponible maintenant' : 'Indisponible'}
              </Availability>
              <Price>{freelanceData.tjm} € / jour</Price>
            </ProfileDetails>
          </ProfileWrapper>
          )}
        </div>

    )

}

export default Profile