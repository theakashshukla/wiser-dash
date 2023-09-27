
const BottomNavigation = () => {
    return (
      <nav className="fixed bottom-0 left-0 md:w-full bg-gray-900 p-4 flex justify-between">
        <a href="/hello" className="text-white flex flex-col items-center">
          <i className="fas fa-home text-xl mb-1"></i>
          Home
        </a>
        <a href="/hello" className="text-white flex flex-col items-center">
          <i className="fas fa-search text-xl mb-1"></i>
          Search
        </a>
        <a href="/hello" className="text-white flex flex-col items-center">
          <i className="fas fa-user text-xl mb-1"></i>
          Profile
        </a>
      </nav>
    );
  };
  
  export default BottomNavigation;