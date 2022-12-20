import React from "react";
import { GetStaticPropsResult, GetStaticProps } from "next";
import { EventModel } from "src/models/Event";
import Image from "next/image";
import Link from "next/link";
import { UITitle } from "@components/UI/atoms/UITitle";
import UIPageTitle from "@components/UI/atoms/UIPageTitle";

interface EventsPageProps {
  Events: EventModel[];
  //PageName : string;
}

const CatagoryEventsPage = ({ Events }: EventsPageProps) => {
  return (
    <>
       <UIPageTitle title="Events page" />           
      <div className="px-4 py-6 sm:px-0">
        <div className=" rounded-lg p-3 bg-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Events.map((event) => {
              return (
                <Link key={event.Id} className="cursor-pointer" href={["/events",event.city,event.Id].join("/")}>
                  <div className="card">
                    <div className="p-5 flex flex-col">
                      <div className="mb-2 rounded-xl overflow-hidden">
                        <Image
                          src={event.Image}
                          alt=""
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="mx-2">
                        <UITitle Text={event.Title} Type="h2" />
                        <p className="mt-1">{event.Description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {

  console.log("catagoriesevents getStaticPaths triggerd.");

  const { Catagories } = await import("../../../../data/eventsdata.json");
  const allPaths = Catagories.map((cat) => {
    return {
      params: {
        CatagoryId: cat.Id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { CatagoryId: string };
}): Promise<GetStaticPropsResult<EventsPageProps>> {
  
  console.log("catagoriesevents getStaticProps triggerd.");

  const { Events }: EventsPageProps = await import(
    "../../../../data/eventsdata.json"
  );
  
  const id = context?.params.CatagoryId;
  const data = Events.filter((ev) => ev.city === id);

  return {
    props: {
      Events: data,
    },
  };
}

export default CatagoryEventsPage;
