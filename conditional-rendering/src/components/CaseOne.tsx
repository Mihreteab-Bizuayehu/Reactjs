import { useState } from "react";

const CaseOne = () => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleHandler = () =>setIsVisible(!isVisible) ;
  return (
    <div className="flex h-[100vh] flex-col justify-center items-center text-center p-5 my-5 mb-5 gap-5">
      <div className="w-200 p-3">
        {isVisible && (
          <p className="text-lg font-bold text-green-600 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias necessitatibus, rem accusantium placeat dolorum ullam reiciendis exercitationem modi minima fugiat ad quae ut nemo obcaecati, reprehenderit sapiente! Cupiditate, animi ad?
          </p>
        )}
      </div>
      <button
        className="bg-blue-500 text-white font-bold px-5 py-3  self-center rounded-sm"
        onClick={toggleHandler}
      >
        {!isVisible ? 'Show' : 'Hide'} Message
      </button>
    </div>
  );
}

export default CaseOne