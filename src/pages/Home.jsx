import { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';
import Text from '../components/Text';
import authService from '../appwrite/auth';
import { Query } from 'appwrite';
import { Puff } from 'react-loading-icons'

function Home() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    authService.getCurrentUser()
      .then((user) => {
        if (user) {
          setUserId(user.$id);
          return appwriteService.getPosts([
            Query.equal("userId", user.$id),
            Query.equal("status", "active"),
          ]);
        }
      })
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        console.log("Error getting user or posts", error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);


  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-purple-50">
        <p className="text-xl text-gray-600"><Puff className="animate-spin bg-gray-600 h-10 w-10" /></p>
      </div>
    );
  }


  if (posts.length > 0) {
    return (
      <div className="w-full p-2 bg-gradient-to-l from-blue-200 to-purple-300 min-h-screen">
        <Container>
          <div className='flex flex-wrap p-2'>
            {posts.map((post) => (
              <div key={post.$id} className='w-1/3 p-2'>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }


  if (userId && posts.length === 0) {
    return (
      <div className="w-full p-2 bg-gradient-to-l from-blue-200 to-purple-300 min-h-screen">
        <Container>
          <div className='flex flex-col items-center justify-center h-full'>
            <h2 className='text-2xl font-bold mb-4'>No posts found</h2>
            <Link to="/add-post" className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200'>
              Create Your First Post
            </Link>
          </div>
        </Container>
      </div>
    );
  }


  return (
    <div className='w-full flex h-screen items-center bg-purple-50'>
      <div className='w-2/3 mx-auto'>
        <Text
          className="text-7xl font-bold ml-15 mb-5 mr-10 w-2/3"
          text={["Discover Stories That Sparks Your Mind."]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        <p className='text-gray-700 text-xl ml-15 mb-10'>
          Read, reflect and share your thoughts with the world.
        </p>
        <Link to="/signup" className='bg-gray-900 text-white px-6 py-3 rounded-xl ml-15 hover:bg-gray-600 transition duration-300'>
          Get Started
        </Link>
      </div>
      <div className='w-1/3 mx-auto mr-16'>
        <img src="/src/assets/hero.jpg" alt="Hero" className='w-full h-screen object-contain opacity-90 ml-20' />
      </div>
    </div>
  );
}

export default Home;
