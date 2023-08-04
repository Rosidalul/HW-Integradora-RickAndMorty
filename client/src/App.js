import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/NavBar/Navbar.jsx';
import Favorites from './components/Favorites/Favorites.jsx'
import {  Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/detail/Detail';
import Login from './components/Login/Login.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

   const [ characters, setCharacters ] = useState([])

   const [ access, setAccess ] = useState(false)
 
   //const username = 'rosi@gmail.com'
   //const password = 'rosario1234'
 
   const location = useLocation()
   const navigate = useNavigate()
 
  // const login = (userData) => {
  //   if(userData.username === username && userData.password === password  ) {
   //    setAccess(true)
   //    navigate('/home')
  //   }
  // }

  function login(userData) {
    console.log(userData);
    const { username, password } = userData;
    console.log('userData',username, password);
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${username}&password=${password}`).then(({ data }) => {
       const { access } = data;
       console.log(access);
       setAccess(data);
       access && navigate('/home');
    });
 }
 
   useEffect(()=> {
     !access && navigate('/')
   }, [access])


   function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
          const characterFind = characters.find((char) => char.id === Number(id))
          console.log('metodo find',characterFind);

          if(characterFind) {
            console.log('entre al if, ya esta en la lista', characterFind);
            alert('Already in the list!')
          }
          
          else if(data.id !== undefined) {
            setCharacters((character) => [...character, data]);
          }
        })

        .catch((error)=> {
          console.log('soy el catch', error);
          alert('Intenta con otro ID')
        })
   }

 function onClose(id) {
  setCharacters(
    characters.filter((character) => {
      return character.id !== Number(id)
    })
  )
 }



   return (
      <div className='App'>
        {
         location.pathname !== '/' && <Navbar onSearch={onSearch}/>
         }
        <Routes>
          <Route path='/' element={<Login login={login}/>}/>
          <Route path='/details/:id' element={<Detail/>}/>
          <Route path='/home' element={<Cards characters={characters}
          onClose={onClose}/>}/>
           <Route 
            path='/favorites'
            element= { <Favorites/>}
          />

        </Routes>
      </div>
   );
}

export default App;