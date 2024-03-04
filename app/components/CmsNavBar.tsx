import Link from "next/link";

import { Permanent_Marker } from "next/font/google";
import { BackArrowRounded } from "./IconsSvg";
const font = Permanent_Marker({ weight: "400", subsets: ["latin"] });

export default function CmsNavBar() {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowRounded w={'30px'} h={'30px'} c={'#81689D'}/>
      </Link>
      <div className={`${font.className} text-3xl text-black4 dark:text-whitec`}><span className="text-3xl text-green1 dark:text-purple1">ALPHA</span>MADE</div>
    </div>
  );
}
