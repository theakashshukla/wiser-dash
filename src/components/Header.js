const Header = () => {
    return (
        <header className="bg-white border-b border-gray-300 py-2 px-4 flex justify-between items-center">
      <div className="flex-grow">
        <h1 className="text-xl text-blue-800 font-bold">Hi, Username</h1>
        <p className="text-gray-600">Venue Name</p>
      </div>
      <div className="ml-4">
        <img
          src="https://example.com/profile-pic.jpg" // Replace with the URL of the user's profile picture
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
    );
}

export default Header;