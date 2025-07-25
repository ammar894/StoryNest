import { useDispatch } from 'react-redux';
import {Logout} from '../../store/authSlice';
import authService from '../../appwrite/auth';
import { useNavigate } from 'react-router-dom';
function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = ()=>{
    authService.logout().then(()=>{
        dispatch(Logout())
        navigate('/login');

    })
  }
    
  return (
    <button
    className='inline-block px-6 py-2 duration-200 text-gray-100 
    bg-gradient-to-l from-cyan-600 to-purple-800
    rounded-full color-green-300 font-medium border border-gray-600 
    hover:drop-shadow-[0_0_4px_#000] transition '
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn