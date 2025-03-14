import React, { Suspense } from "react"

const CaseSix = () => {
  const LazyComponent = React.lazy(() => import('./LazyLoading'));
  return (
    <div>
      <Suspense fallback={<span className="text-2xl  text-blue-500">Loading...</span>}>
        <LazyComponent/>
      </Suspense>
    </div>
  )
}

export default CaseSix