import React from "react";
import internal from "stream";
import { UITitle } from "./UITitle";

interface PageTitleProps {
  title: string;
}

const UIPageTitle = ({ title }: PageTitleProps) => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h1> */}
        <UITitle Type="h1"  Text={title} /> 
      </div>
    </header>
  );
};

export default UIPageTitle;
