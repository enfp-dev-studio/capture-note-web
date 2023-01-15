import React from "react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = (props: Props) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={props.onClick}
        type="button"
        className="inline-block px-6 py-2.5 bg-secondary text-accent auto-center leading-12 leading-tight rounded shadow-md hover:shadow-lg  focus:shadow-lg focus:outline-none active:shadow-lg transition hover:opacity-90 duration-150 ease-in-out"
      >
        {props.children}
      </button>
    </div>
  );
  // return <button className="bg-secondary auto-center leading-12 px-2 rounded h-12 hover:opacity-50 shadow-xl">{props.children}</button>
};

export default Button;
