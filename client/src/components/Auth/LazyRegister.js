import React, { Suspense, Fragment } from "react";

const Register = React.lazy(() => import("./Register"));

const LazyRegister = props => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Register />
    </Suspense>
  );
};

export default LazyRegister;
