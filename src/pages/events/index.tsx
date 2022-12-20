import { UITitle } from "@components/UI/atoms/UITitle";
import React from "react";
import { Catagory } from "src/models/Catagory";
import Image from "next/image";
import Link from "next/link";
import UIPageTitle from "@components/UI/atoms/UIPageTitle";
interface EventsPageProps {
  Catagories: Catagory[];
}

const EventsPage = ({ Catagories }: EventsPageProps) => {
  return (
    <>
       <UIPageTitle title="Event Catagories page" />           
      <div className="flex flex-col p-10 gap-7">
        {Catagories.map((Catagory) => (
          <>
            <div key={Catagory.Id} className="relative cursor-pointer">
              <Link
                key={Catagory.Id}
                href={["/events", Catagory.Id].join("/")}
                passHref
              >
                  <div className="h-52" key={Catagory.Id}>
                    <Image
                      alt={Catagory.Title}
                      src={Catagory.Image}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <div className="absolute text-3xl font-extrabold text-uxbee-white drop-shadow-lg items-end p-5">
                      {Catagory.Title}
                    </div>
                  </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  console.log("catagories getStaticProps triggerd.");
 
  const { Catagories }: EventsPageProps = await import(
    "../../../data/eventsdata.json"
  );
 
  return {
    props: {
      Catagories: Catagories,
    },
  };
}
