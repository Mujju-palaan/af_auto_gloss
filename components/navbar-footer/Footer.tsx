"use client";
import Image from "next/image";
import LegalFooter from "./LegalFooter";

const Footer = () => {
  const navigation = {
    sale: [
      { name: "Home", href: "/" },
      { name: "Events", href: "/events" },
      { name: "Service", href: "/services" },
      // { name: "Register Discounts", href: "/comingsoon" },
    ],
    about: [
      { name: "About us", href: "/about" },
      // { name: "Work With Us", href: "/comingsoon" },
      { name: "Blogs", href: "/blog" },
      { name: "Testimonials", href: "/testimonials" },
    ],
    buy: [
      { name: "Terms & Condition", href: "/terms&condition" },
      { name: "Privacy Policy", href: "/privacypolicy" },
      { name: "Refund Policy", href: "/refundpolicy" },
      // { name: "Shipping Policy", href: "/shippingpolicy" },
    ],
    help: [
      { name: "Contact", href: "/contact" },
      // { name: "How to Buy", href: "/comingsoon" },
      { name: "Support", href: "/support" },
      { name: "FAQ", href: "/faqs" },
    ],
  };
  return (
    <footer className="text-white" aria-labelledby="footer-heading">
      <div>
        <div
          className="xs:flex xs:flex-wrap mx-auto max-w-screen-2xl px-6 lg:px-8 pt-10 md:pb-8 pb-4 
                      justify-center items-center"
        >
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
              src="/company/AF_logo.png"
              alt="Southwave logo"
              width={250}
              height={250}
              //   className="h-auto w-auto"
            />
            <div className="mt-6 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 items-center">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xl font-bold leading-6 text-red-600">
                    Sale
                  </h3>
                  <ul
                    role="list"
                    className="md:mt-6 mt-4 md:space-y-4 text-[12px] md:text-lg"
                  >
                    {navigation.sale.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 md:mt-0">
                  <h3 className="text-xl font-bold leading-6 text-red-600">
                    About Us
                  </h3>
                  <ul
                    role="list"
                    className="md:mt-6 mt-4 md:space-y-4 text-[12px] md:text-lg"
                  >
                    {navigation.about.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xl font-bold leading-6 text-red-600">
                    Buying
                  </h3>
                  <ul
                    role="list"
                    className="md:mt-6 mt-4 md:space-y-4 text-[12px] md:text-lg"
                  >
                    {navigation.buy.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 md:mt-0">
                  <h3 className="text-xl font-bold leading-6 text-red-600">
                    Support
                  </h3>
                  <ul
                    role="list"
                    className="md:mt-6 mt-4 md:space-y-4 text-[12px] md:text-lg"
                  >
                    {navigation.help.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------- */}
      <LegalFooter />
    </footer>
  );
};

export default Footer;
