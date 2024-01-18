import { NavigateHome } from "@/components/NavigateHome";
import { FindHospital } from "@/components/FindHospital";
import { hospitals } from "@/lib/static-db";

export default function FindDonate() {
  return (
    <div className="space-y-[26px] py-6">
      <NavigateHome />
      <hgroup className="text-2xl leading-7 md:text-4xl font-medium text-center">
        <p>Where to donate Blood</p>
        <p className="text-em-black text-[72%]">
          Donate blood to help victim of the blast
        </p>
      </hgroup>
      <div className="space-y-[32px]">
        {hospitals.map((hospital, index) => (
          <div className="w-[90%] mx-auto" key={index}>
            <article id="missing-person-components" className="space-y-3">
              <div className="inline-flex flex-col px-[22px] pb-8 pt-[17px] rounded-xl align-center w-full gap-2 border-2 border-em-grey">
                <p className="text-xl">{hospital.name}</p>
                <p className="text-sm">{hospital.address}</p>
                <p className="text-sm text-em-red">{hospital.phone}</p>
                <FindHospital address={hospital.address} />
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
