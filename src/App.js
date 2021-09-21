import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharachterGrid from './components/charachters/CharachterGrid'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharachterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
