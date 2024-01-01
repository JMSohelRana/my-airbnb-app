import React from "react";

const Filter = ({ filter }) => {
  const { name, icon } = filter;
  return (
    <div>
      <div>
        {icon}
        {name}
      </div>
    </div>
  );
};

export default Filter;
