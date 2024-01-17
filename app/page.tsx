import Link from "next/link";

import { Card } from "@/components/Card";
import { ActionBox } from "@/components/ActionBox";
import { Button } from "@/components/ui/button";
import { ReportImpactBtn } from "@/components/ReportImpact";

export default function Home() {
  return (
    <div className="space-y-[26px] py-6">
      <p className="text-xl font-medium text-center">
        Ibadan Emergency channel
      </p>
      <div className="space-y-[32px]">
        <div className="lg:w-[70%] mx-auto">
          <Card />
        </div>
        <div className="lg:w-[70%] mx-auto flex gap-4 justify-center">
          <ActionBox
            title="Where to donate Blood"
            buttonText="Find"
            href="/find-donate"
          ></ActionBox>
          <ActionBox
            href="/report-missing-person"
            title="Report Missing Person"
            buttonText="Report"
          ></ActionBox>
        </div>
        <div className="lg:w-[80%] mx-auto">
          <article id="missing-person-components" className="space-y-3">
            <header className="text-xl font-semibold max-md:text-center md:pl-10">
              Missing persons
            </header>
            <Link
              href="/missing-person"
              className="flex px-[22px] pb-8 pt-[17px] rounded-xl align-center w-full gap-2.5 border border-em-grey"
            >
              <div className="w-[40%]">IMG</div>
              <div className="font-semibold text-sm">
                <p className="text-xl">John doe doe</p>
                <p>8yrs, Dark skin</p>
                <p>Speaks english and yoruba</p>
              </div>
            </Link>
          </article>
        </div>
        <footer className="text-center pt-40 flex flex-col justify-center">
          <ReportImpactBtn />
          <small className="text-xs pt-10">
            Updates are real time, Last Website Update : 10:07AM
          </small>
        </footer>
      </div>
    </div>
  );
}
