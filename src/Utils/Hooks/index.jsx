import { useState, useEffect,useContext  } from 'react'
import { ThemeContext } from  '../Context'

// on crée un hook pour récuperer des donnée présente dans l'url d'un API
// on renvoi la data que le lien contient et une variable isLoading pour savoir si les donnée sont en train de charger


export function useFetch(url) {

    const [data, setData] = useState({})
    
    const [isLoading, setLoading] = useState(true)
    
    const [error, setError] = useState(false)
    
     
    
    useEffect(() => {
    
    if (!url) return
    
    setLoading(true)
    
    async function fetchData() {
    
        try {
        
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        
        } catch (err) {
        
            console.log(err)
            setError(true)
        
        } finally {
            
            setLoading(false)
        
        }
    
    }
    
    fetchData()
    
    }, [url])
    
    return { isLoading, data, error }
    
}

export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
  }