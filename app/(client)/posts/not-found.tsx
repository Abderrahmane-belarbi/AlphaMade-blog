import Header from "@/app/components/Header";
import Link from "next/link";

export default function NotFound(){
    return <div>
        <Header title="404 - Page Not Found" />
        <div className="text-xl dark:text-purple3 hover:dark:text-purple1">
            <Link className="p-1 px-2 rounded bg-purple4" href='/'>Home</Link>
        </div>
    </div>
}