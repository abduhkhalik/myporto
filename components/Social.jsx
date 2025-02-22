import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/abduhkhalik" },
  { icons: <FaLinkedinIn />, path: "https://www.linkedin.com/in/abduh-khalik-47088b175/" },
  { icons: <FaInstagram />, path: "https://www.instagram.com/abduhkhalik/" },
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
