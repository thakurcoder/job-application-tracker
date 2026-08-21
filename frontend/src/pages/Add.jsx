import Navbar from "../components/Navbar";

const Add = () => {

    

  return (
    <>
      <div className="text-center mt-3 text-2xl">
        <form className="bg-amber-50 ">
            <input type="text" placeholder="company Name" />
            <div>
            <label>Date of apply</label>
            <input type="date" placeholder="date" />
            </div>

            <textarea rows={5} cols={50} placeholder="type  your message here..." />
        </form>
      </div>
    </>
  );
};

export default Add;
