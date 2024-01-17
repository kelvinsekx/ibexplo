import Link from "next/link";
import { Button } from "./ui/button";

export const ReportImpactBtn = () => (
  <Link href={"/report-impact"}>
    <Button>Report your impact ❤️</Button>
  </Link>
);
