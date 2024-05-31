import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="Loader">
      <ThreeCircles
        visible={true}
        height="200"
        width="200"
        color="#000"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
