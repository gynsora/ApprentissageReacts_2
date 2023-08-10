import Footer from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../Utils/Context'

describe('Footer', () => {
    test('Change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button') // nightModeButton correspond au bouton dans le footer (NightModeButton)
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️') //on compare le test présent dans le bouton à l'intérieur de Footer
        fireEvent.click(nightModeButton) // on simule le clique du bouton (NightModeButton)
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙') // on vérifie que le texte à bien changé après que le site soit passé en dark mode
    })
})
