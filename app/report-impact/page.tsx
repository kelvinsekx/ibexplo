import * as React from "react";

export default function ReportImpact() {
  return (
    <div>
      <ReportImpact.Navigation />
      <div></div>
      <ReportImpact.Footer />
    </div>
  );
}

const Navigation = () => {
  return (
    <div>
      <div>ARROW</div>
      <div>Report your impact ❤️</div>
    </div>
  );
};
ReportImpact.Navigation = Navigation;

const Impacts = () => {
  return <div></div>;
};

const Card: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  children,
}) => <div className="border-2 border-em-red rounded-md">{children}</div>;

const Footer = () => {
  return <div>Updates are real time, Last Website Update : 10:07AM</div>;
};
ReportImpact.Footer = Footer;
