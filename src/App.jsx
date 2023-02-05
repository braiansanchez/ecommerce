import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => {

  return (
  <div className="App">
    <NavBar exampleProp="test"/>
    <ItemListContainer/>
  </div>
  )
}

export default App
