import { useState } from "react"

const CaseNine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const eventHandler = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[100vh]">
      <div
        className={`flex w-48 h-48 bg-amber-600 rounded transition-all duration-1000 shadow-2xl ${
          isVisible ? 'scale-100 opacity-100' : 'opacity-0 scale-25'
        }`}
        style={{
          display: isVisible || isVisible === undefined ? 'block' : 'hidden',
        }}
      ></div>
      <button
        className={`bg-blue-500 text-white py-5 px-10 rounded-2xl`}
        onClick={eventHandler}
      >
        {!isVisible ? 'Show' : 'Hide'} Box
      </button>
    </div>
  );
}

export default CaseNine