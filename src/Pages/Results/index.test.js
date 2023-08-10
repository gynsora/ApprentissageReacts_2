// import des fonctions a tester NE PAS OUBLIER d'ajouter export pour chaque fonction a tester
import { formatJobList, formatFetchParams } from './' 


//test de la fonction  formatJobList
describe('La fonction formatJobList', () => {
    it('ajoute une virgule à un item', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    it('ne met pas de virgule pour le dernier élément', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

//test de la fonction  formatFetchParams
describe('La fonction formatFetchParams ', () => {
    it('devrait retourner le bon format', () => {
      const expectedState = 'a1=answer1'
      expect(formatFetchParams({ 1: 'answer1' })).toEqual(expectedState)
    })

    it('devrait concatener les parametre avec &', () => {
      const expectedState = 'a1=answer1&a2=answer2'
      expect(formatFetchParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
        expectedState
      )
    })
  })
