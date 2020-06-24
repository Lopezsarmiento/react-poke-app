import React from "react";

const Pagination = ({ next, prev }) => {
  return (
    <div>
      {prev && <button onClick={prev}>prev</button>}
      {next && <button onClick={next}>next</button>}
    </div>
  );
};

export default Pagination;
