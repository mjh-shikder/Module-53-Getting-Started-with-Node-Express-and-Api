import './App.css'
import Users from './components/Users';

const userPromise = fetch('http://localhost:4000/user')
    .then(res => res.json());

function App() {

  return (
    <>
      <h1>Users Management</h1>
      <Users userPromise={userPromise}></Users>
    </>
  )
}

export default App
