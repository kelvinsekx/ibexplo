import Link from "next/link";
import { Button } from "./ui/button";

export const ReportImpactBtn = ({ type }: { type: string }) => (
  <Link href={"/" + type + "/report-impact"}>
    <Button>Report your impact ❤️</Button>
  </Link>
);
