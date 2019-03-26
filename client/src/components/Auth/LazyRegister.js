import React, { Suspense, Fragment } from "react";

const Register = React.lazy(() => import("./Register"));

const LazyRegister = props => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Register register={props.register} errMsg={props.errMsg}/>
    </Suspense>
    </>
  );
};

export default LazyRegister;
