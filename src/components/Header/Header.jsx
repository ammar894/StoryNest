import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Logo, LogoutBtn } from '../index';


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', url: '/', active: true },
    { name: 'Login', url: '/login', active: !authStatus },
    { name: 'Signup', url: '/signup', active: !authStatus },
    { name: 'All Posts', url: '/all-posts', active: authStatus },
    { name: 'Add Post', url: '/add-post', active: authStatus },
  ];

  return (
    <header className="py-4 shadow  border-b-3 bg-purple-50/50  border-gray-400 sticky top-0 z-1">
      <div className="w-full max-w-screen mx-auto px-4">
        <nav className="flex items-center">
          <div className="ml-4 hover:scale-90 transition-transform duration-400 
          hover:border-2 border-gray-600 rounded-xl p-1">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <h1 className='text-5xl font-bold ml-2 mb-2 tracking-wide text-gray-700'></h1>

       
          <ul className="flex ml-auto gap-4 items-center">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.url)}
                      className="inline-block px-6 py-2 text-white font-medium rounded-full border border-gray-600
                      bg-gradient-to-l from-cyan-600 to-purple-800 hover:text-white 
                      hover:drop-shadow-[0_0_4px_#000] transition duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
 

            {/* Logout Button (shown only if logged in) */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
