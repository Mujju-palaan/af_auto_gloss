import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { FaInstagram,FaFacebook,FaDiscord, FaTwitter, FaYoutube   } from "react-icons/fa";

const LegalFooter = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);
  const socialData = [
    {
      color: "text-[#ee2a7b]",
      href: "https://www.instagram.com/af_autogloss/#",
      icon: FaInstagram,
    },
    {
      color: "text-indigo-800",
      href: "https://www.facebook.com/people/Afautogloss/61581263850786/",
      icon: FaFacebook,
    },
    {
      color: "text-[#5865F2]",
      href: "",
      icon: FaDiscord,
    },
    {
      color: "text-blue-500",
      href: "",
      icon: FaTwitter ,
    },
    {
      color: "text-red-600",
      href: "",
      icon: FaYoutube ,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="py-8 border-t border-gray-700 items-center justify-between sm:flex">
        <Fragment>
          <p className="text-xs md:text-lg text-center">{`© ${year} Southwave Entertainment LTD. All rights reserved.`}</p>
        </Fragment>

        <div className="flex justify-center gap-x-6 hover:text-gray-400 mt-6 md:pr-15">
          {socialData.map(({ icon: Icon, href, color }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${color} text-3xl hover:scale-110 transition-transform cursor-pointer`}
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalFooter;