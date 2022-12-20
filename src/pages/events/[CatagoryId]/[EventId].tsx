import UIPageTitle from "@components/UI/atoms/UIPageTitle";
import { UITitle } from "@components/UI/atoms/UITitle";
import { GetStaticPropsResult } from "next";
import { EventModel } from "src/models/Event";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FormEvent, useRef, useState } from "react";

interface EventDetailPageProps {
  Event: EventModel;
}

interface EventsProps {
  Events: EventModel[];
}

const EventDetailPage = ({ Event }: EventDetailPageProps) => {
  const inputEmail = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValue = inputEmail.current?.value;
    const eventId = router?.query.id;
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue || !emailValue.match(validRegex)) {
      setMessage("Email address is not correct.");
    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      //inputEmail.current.value = "";
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <div>
      <div className="relative h-96 w-full">
        <Image
          className="rounded-lg"
          src={Event.Image}
          alt={Event.Title}
          fill
        />
      </div>
      <UITitle Text={Event.Title} Type="h1" />
      <p>{Event.Description}</p>
      <div className="relative block">
        <form onSubmit={onSubmit} className="">
          <label> Get Registered for this event!</label>
          <div className="mt-2">
            <input
              ref={inputEmail}
              type="Email"
              id="Email"
              placeholder="Please insert your email here"
              className="rounded-lg p-3 w-96"
            />
            <button
              className="ml-3 rounded-xl p-3 font-bold bg-uxbee-black text-uxbee-white hover:text-uxbee-yellow"
              type="submit"
            > Submit</button>
          </div>
        </form>
      </div>
      <p className="text-red-600 font-extrabold">{message}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const { Events }: EventsProps = await import(
    "../../../../data/eventsdata.json"
  );

  console.log("EventDetail getStaticPaths triggerd.");

  const allPaths = Events.map((path) => {
    return {
      params: {
        CatagoryId: path.city,
        EventId: path.Id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { EventId: string };
}): Promise<GetStaticPropsResult<EventDetailPageProps>> {
  console.log("EventDetail getStaticProps triggerd.");

  const { Events }: EventsProps = await import(
    "../../../../data/eventsdata.json"
  );

  const id = context?.params.EventId;
  var data = Events.find((ev) => ev.Id === id);

  if (data === undefined) {
    // make a not found detail page
    data = new EventModel("notfoud", "Eventdetail not found", "", "", "");
  }

  return {
    props: {
      Event: data,
    },
  };
}

export default EventDetailPage;
