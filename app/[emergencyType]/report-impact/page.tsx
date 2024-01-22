import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavigateHome } from "@/components/NavigateHome";
import { HeaderGroup } from "@/components/HeaderGroup";

export default function ReportImpact({
  params,
}: {
  params: { emergencyType: string };
}) {
  return (
    <div>
      <ReportImpact.Navigation />
      <Impacts emergencyType={params.emergencyType} />
      <ReportImpact.Footer />
    </div>
  );
}

const Navigation = () => {
  return (
    <div className="py-4 text-base font-semibold pb-16">
      <NavigateHome />
      <HeaderGroup>
        <p className="text-[60%]">Report your impact ❤️</p>
      </HeaderGroup>
    </div>
  );
};
ReportImpact.Navigation = Navigation;

const Impacts = ({ emergencyType }: { emergencyType: string }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <ReportImpact.ImpactCard>
        <Link
          href={"confirm-blood-donation"}
          className="flex flex-col items-center"
        >
          <div className="relative w-20 h-20">
            <Image
              alt=""
              src="/bloodDonor.png"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div>
            <span> I Made Blood </span>
            <span>Donation</span>
          </div>
        </Link>
      </ReportImpact.ImpactCard>
      <ReportImpact.ImpactCard>
        <span> I heard the </span>
        <span>Sound</span>
      </ReportImpact.ImpactCard>
      <ReportImpact.ImpactCard>
        <span> I Visited </span>
        <span>Ground 0</span>
      </ReportImpact.ImpactCard>
    </div>
  );
};

const Card: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
}) => (
  <div className="border border-em-red rounded-md p-2.5 flex flex-col justify-center  items-center min-h-40 font-semibold w-[70%] md:w-[30%]">
    {children}
  </div>
);
ReportImpact.ImpactCard = Card;

const Footer = () => {
  return (
    <div className="text-center text-em-black text-xs pt-8">
      Updates are real time, Last Website Update : 10:07AM
    </div>
  );
};
ReportImpact.Footer = Footer;
