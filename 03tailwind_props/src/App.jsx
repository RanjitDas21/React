import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'

function App() {
  let myObj = {
    username: "ranjit",
    age: 20
  }

  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-500 p-5 rounded-2xl'>Tailwind CSS</h1>
      {/* <Card userid="chaiaurcode" someObj={myObj} someArr={myArr}/> */}
      <Card userid="chaiaurcode" btnText="Visit me"/>
      <br/>
      <Card userid="ranjit123" btnText="Click me"/>
      <br/>
      <Card2 userid="ranjitdas"/>
    </>
  )
}

export default App
