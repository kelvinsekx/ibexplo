import Link from "next/link";
import Image from "next/image";

import { Card } from "@/components/Card";
import { ActionBox } from "@/components/ActionBox";
import { Button } from "@/components/ui/button";
import { ReportImpactBtn } from "@/components/ReportImpact";

import { emergenciesType } from "@/models/emergencies.model";

async function getData() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/missing-persons",
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
export default async function Home() {
  const data: {
    _id: string;
    name: string;
    age: string;
    photo: string;
    skinColor: string;
    languages: string;
    reportedBy: string;
    phoneNumber: string;
    relationshipWithPerson: string;
  }[] = await getData();
  return (
    <div className="space-y-[26px] py-6">
      <p className="text-xl font-medium text-center">Naija Emergency channel</p>
      <div className="space-y-[32px]">
        <div className="lg:w-[70%] mx-auto space-y-6">
          {emergenciesType
            .filter((e) => e.urgent)
            .map((type) => {
              return <Card key={type.type} title={type.title} to={type.type} />;
            })}
        </div>

        <div className="lg:w-[80%] mx-auto">
          <article id="missing-person-components" className="space-y-3">
            <header className="text-xl font-semibold max-md:text-center md:pl-10">
              Missing persons
            </header>
            {data.length > 0 ? (
              data.map((person, index) => {
                return (
                  <Link
                    key={index}
                    href={"/missing-person/" + person._id}
                    className="flex px-[22px] pb-8 pt-[17px] rounded-xl items-center w-full gap-6 border border-em-grey"
                  >
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
                  </Link>
                );
              })
            ) : (
              <p className="text-center">No record yet</p>
            )}
          </article>
        </div>
        <footer className="text-center pt-40 flex flex-col justify-center">
          <small className="text-xs pt-10">
            Updates are real time, Last Website Update : 10:07AM
          </small>
        </footer>
      </div>
    </div>
  );
}
