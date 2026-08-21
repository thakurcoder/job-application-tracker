import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-200 text-4xl text-amber-50 rounded-2xl p-3 flex justify-between ">
        <div>
          <h1 className="">Job Application Tracker</h1>
        </div>
        <div className=" flex gap-7 mr-7">
          <Link to="/"><h1>HOME</h1></Link>
          <Link to="/add" ><h1>ADD</h1></Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
