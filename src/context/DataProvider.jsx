import { createContext, useState, useEffect } from 'react'

export const DataContext = createContext()

const DataProvider = ({children}) => {

  const [pizzas, setPizzas] = useState([])
  
      useEffect(() => {
        fetch('http://localhost:5000/api/pizzas')
        .then(response => response.json())
        .then(data => setPizzas(data))
  
      }, []);

  return (
    <DataContext.Provider
    value={{
      pizzas
    }
    }>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider