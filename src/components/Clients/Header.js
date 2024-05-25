import * as React from "react";

function Header(props) {
  return (
    <div className="flex flex-col items-center self-stretch px-5 pb-5 w-full bg-indigo-900 max-md:max-w-full">
      <div className="mt-9 text-4xl font-medium leading-10 text-center text-white capitalize w-[765px] max-md:max-w-full">
        {props.title}
      </div>
      <div className="mt-5 text-md text-center text-gray-300 w-[936px] max-md:max-w-full">
        {props.description}
      </div>
    </div>
  );
}

export default Header;
