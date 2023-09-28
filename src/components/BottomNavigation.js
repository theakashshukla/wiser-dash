const BottomNavigation = () => {
  return (
    <nav className="fixed rounded-tl-lg rounded-tr-lg bottom-0 left-0 w-full bg-gray-600 p-4 flex justify-between">
      <a href="/" className="text-white flex flex-col items-center">
        <i className="fas fa- text-xl mb-1"></i>
        Ongoing
      </a>
      <a href="/hello" className="text-white flex flex-col items-center">
        <i className="fas fa-create text-xl mb-1"></i>
        Create
      </a>
      <a href="/hello" className="text-white flex flex-col items-center">
        <i className="fas fa-user text-xl mb-1"></i>
        Existing
      </a>
    </nav>
  );
};

export default BottomNavigation;
