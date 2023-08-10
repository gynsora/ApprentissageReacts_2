import { useContext } from 'react'
import { ThemeContext } from '../../Utils/Context'
import styled from 'styled-components'
import colors from '../../Utils/Styles/colors'
import EmailInput from '../EmailInput'
 
const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`
 
const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
    &:hover{
        color: palevioletred;
    }
`
 
function Footer() {
    const { toggleTheme, theme } = useContext(ThemeContext)
    //console.log(theme)
    return (
        <FooterContainer>
            <EmailInput theme={theme} />
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
        </FooterContainer>
    )
}
 
export default Footer