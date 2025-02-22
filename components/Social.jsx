import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "" },
  { icons: <FaLinkedinIn />, path: "" },
  { icons: <FaInstagram />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, i) => {
        return (
          <Link key={i} href={social.path} className={iconStyles}>
            {social.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
