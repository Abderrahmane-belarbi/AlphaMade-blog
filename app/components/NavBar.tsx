import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Permanent_Marker } from "next/font/google";
const font = Permanent_Marker({ weight: "400", subsets: ["latin"] });

export default function NavBar() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div
            className={`${font.className} text-3xl text-black4 dark:text-whitec`}
          >
            <span className="text-3xl text-green1 dark:text-purple1">
              ALPHA
            </span>
            MADE
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
}
