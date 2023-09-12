const Header = () => {
  return (
    <div>
      <div className="nav-container flex justify-between">
        <div className="left-con">
            <h2 className="text-4xl font-black">Knowladge Cafe</h2>
        </div>
        <div className="right-con">
        <div className="w-10 rounded-full">
          <img src="../../public/images/profile.png" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
