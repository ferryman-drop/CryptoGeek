
import { Routes, Route, } from 'react-router-dom'
import './App.css'
import { SignIn } from './components/signIn/SingIn'
import NotFound from './components/NotFound/NotFound'
import { HomePage } from './pages/homePage/HomePage'
import { SignUp } from './components/SignUp/signUp'

export default function App(){
  return(
    <div>



<Routes>

        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/register' element={<SignUp/>}/>
      
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
         <Route path="*" element={<NotFound />} />
      </Routes>
  

</div>
)
};

