//import { useState } from "react";

export default function Background({component, i18nKeyPrefix = "background"}) {

  const navList = [
    { label: "Home", url: "#" },
    { label: "Social Cash", url: "#" },
    { label: "Disaster Relief", url: "#" },
    { label: "Farmers Input", url: "#" },    
    { label: "About Us", url: "#" },
    { label: "Contact Us", url: "#" },
  ];

  return (
    <>
      <section className="flex flex-col h-screen">
        <nav className="bg-white border-gray-500 ml-6 mr-6">
          <div className="flex items-center grid grid-cols-3 md:order-2 justify-center mb-2 mt-2">
            <div className="flex items-center justify-center col-start-2">
              <img src="images/coat.png" alt="coat of arms" className="w-12 h-12 mr-4" />
              <span className="title-font text-3xl text-gray-900 font-medium">
                Dummy Portal Edited
              </span>
            </div>
          </div>
          <div className="bg-[#198A00] border-gray-200 px-2 sm:px-4 py-3 rounded mr-8 ml-8">
            <div className="flex items-center">
              <div className="flex w-full justify-evenly space-x-8 text-xl font-medium">
                {navList.map((nav) => {
                  return (
                    <div key={nav.label}>
                      <a
                        href={window.origin + nav.url}
                        className="text-white-900 text-white hover:underline"
                        aria-current="page"
                      >
                        {nav.label}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
        <div className="container flex flex-grow md:flex-row flex-col h-fit">
          <div className="flex flex-col shadow-lg rounded-tr-[64px] bg-[#FAFAFC] md:w-1/2">
            <div className="h-3/5 mt-5 flex justify-center">
              <img alt="util" src="images/illustartion.png" />
            </div>
            
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
            {component}
          </div>
        </div>
      </section>
    </>
  );
}
