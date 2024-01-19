import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { HeaderGroup } from "@/components/HeaderGroup";

async function getData(id: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/missing-persons/" + id,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function SingleMissingPerson({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const person = await getData(id);
  return (
    <div className="space-y-[26px] py-6">
      <HeaderGroup>
        <p>Missing person</p>
        <p className="text-em-black text-base font-bold text=[50%]">
          Use this information to report missing person
        </p>
      </HeaderGroup>

      <div>
        <div className="lg:w-[80%] mx-auto space-y-[32px]">
          <article id="missing-person-components" className="space-y-3">
            <div className="flex px-[22px] pb-8 pt-[17px] rounded-xl items-center w-full gap-6 border border-em-grey">
              <div className="w-[40%] h-[8rem] relative">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover rounded"
                ></Image>
              </div>
              <div className="font-semibold text-sm">
                <p className="text-xl">{person.name}</p>
                <p>
                  {person.age} yrs, {person.skinColor}
                </p>
                <p>Speaks {person.languages}</p>
              </div>
            </div>
          </article>

          <div>
            <p className="text-em-red text-base pb-6">Contact details</p>
            <p>{person.reportedBy}</p>
            <p>{person.phoneNumber}</p>
            <p>{person.relationshipWithPerson} to missing person.</p>
          </div>

          <div className="flex justify-between">
            <button className="text-em-blue">Edit</button>
            <Button>Share</Button>
          </div>
        </div>

        <Link
          href={"/"}
          className="text-center pt-40 text-em-blue flex justify-center items-center gap-2"
        >
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6.00001L8 1.33334L14 6.00001V13.3333C14 13.687 13.8595 14.0261 13.6095 14.2762C13.3594 14.5262 13.0203 14.6667 12.6667 14.6667H3.33333C2.97971 14.6667 2.64057 14.5262 2.39052 14.2762C2.14048 14.0261 2 13.687 2 13.3333V6.00001Z"
                stroke="#1A73E8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 14.6667V8H10V14.6667"
                stroke="#1A73E8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span>go back home</span>
        </Link>
      </div>
    </div>
  );
}
