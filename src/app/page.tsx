import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const sidebar_items = [
    {
      title: "Home",
      icon: BiHomeCircle,
    },
    {
      title: "Explore",
      icon: HiOutlineHashtag,
    },
    {
      title: "Notifications",
      icon: BsBell,
    },
    {
      title: "Messages",
      icon: BsEnvelope,
    },
    {
      title: "Bookmarks",
      icon: BsBookmark,
    },
    {
      title: "Profile",
      icon: BiUser,
    },
  ];
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col h-screen items-stretch space-y-4 ">
          <Link href={"/"} className="text-2xl py-2 px-6">
            <FaXTwitter />
          </Link>
          <div className="flex flex-col h-full items-stretch space-y-4 mt-4">
            {sidebar_items.map((item) => (
              <Link
                className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                <div>{item.title}</div>
              </Link>
            ))}
            <button className="w-full rounded-3xl bg-primary py-3 px-6 text-center text-xl font-bold hover:bg-opacity-90 transition duration-200">
              Post
            </button>
          </div>
          <button className="w-full rounded-full flex items-center space-x-2 py-3 px-6 text-center bg-transparent font-bold hover:bg-opacity-90 transition duration-200 hover:bg-white/10  justify-between">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-slate-400 w-8 h-8"></div>
              <div className="text-left text-sm">
                <div className="font-semibold">Krishna Saxena</div>
                <div className="">@rhytxmDev</div>
              </div>
            </div>

            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  );
}
