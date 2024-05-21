import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "https://www.stoman.me/",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/bhaktisharma26",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/stfubhakti?t=cWbKK7JzSbwVi2RMZa9yUw&s=09",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/bhakti-sharma-2611bs",
  },
];

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="sm:text-6xl text-3xl font-medium title-font text-white mb-4">
            Follow me
          </p>
          <ul className="flex gap-7 py-5 sm:gap-8 ">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className=" text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl bg-gray-800">
                  {link.icon}
                </i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
