import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../Utils/Context'

describe('Card', () => {
  test('devrait retourner une image et un titre', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    )
    const cardPicture = screen.getByRole('img')
    const cardTitle = screen.getByText(/Harry/i)
    expect(cardPicture.src).toBe('http://localhost/myPicture.png')
    expect(cardTitle.textContent).toBe(' Harry Potter ')
  })
  test('devrait ajouter ⭐️ autour du titre de la Card', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    )
    const cardTitle = screen.getByText(/Harry/i)
    const parentNode = cardTitle.closest('div') //On cherche la div parente du composant Card
    fireEvent.click(parentNode) //On clique dessus
    expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')// on vérifie que les étoiles s'ajoutent, autour du cardTitle, après le clique (freelances favoris)
  })
})