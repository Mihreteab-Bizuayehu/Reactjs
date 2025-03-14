import { useEffect, useState } from "react";

const useScreenSize = () => {
  const getScreenSize = () => {
    const width = window.innerWidth;
    if (width < 640) return "Mobile";
    else if (width >= 640 && width < 768) return "Tablet";
    return "Desktop";
  }

  const [screenSize, setScreenSize] = useState(getScreenSize);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const resizeHandler = () => {
      setWidth(window.innerWidth);
      setScreenSize(getScreenSize());
    }
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return { width, screenSize };
}

const CaseSeven = () => {
  const { width, screenSize } = useScreenSize();
  return (
    <main>
      <section className="absolute bg-white text-2xl font-bold px-5 py-3 rounded-full top-5 right-10">
        {screenSize}({width})
      </section>

      <section>
        {screenSize === 'Mobile' && (
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl text-yellow-600 font-bold">
              {screenSize} Layout
            </h3>
            <p className="text-lg font-semibold">
              This screen is optimized for small size devices!
            </p>
          </div>
        )}
      </section>

      <section>
        {screenSize === 'Tablet' && (
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl text-yellow-600 font-bold">
              {screenSize} Layout
            </h3>
            <p className="text-lg font-semibold">
              This screen is optimized for medium size devices!
            </p>
          </div>
        )}
      </section>

      <section>
        {screenSize === 'Desktop' && (
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl text-yellow-600 font-bold">
              {screenSize} Layout
            </h3>
            <p className="text-lg font-semibold">
              This screen is optimized for large and extra large size devices!
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default CaseSeven