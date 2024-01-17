import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FindDonate() {
  return (
    <div className="space-y-[26px] py-6">
      <hgroup className="text-4xl font-medium text-center">
        <p>Missing person</p>
        <p className="text-em-black text-[72%]">
          Create a missing person record
        </p>
        <p className="text-base">Fill appropriately and accordingly</p>
      </hgroup>
      <div>
        <div className="lg:w-[80%] mx-auto space-y-[32px]">
          <article id="missing-person-components" className="space-y-3">
            <div className="flex px-[22px] pb-8 pt-[17px] rounded-xl align-center w-full gap-2.5 border-2 border-em-grey">
              <div className="w-[40%]">IMG</div>
              <div className="font-semibold text-sm">
                <p className="text-xl">John doe doe</p>
                <p>8yrs, Dark skin</p>
                <p>Speaks english and yoruba</p>
              </div>
            </div>
          </article>

          <div>
            <p className="text-em-red text-base pb-6">Contact details</p>
            <p>John clarK</p>
            <p>0800 000 0000</p>
            <p>Brother</p>
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
