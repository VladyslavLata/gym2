import Link from "next/link";

import { Container } from "../Container/Container";
import { LinckBtn } from "../LinckBtn/LinckBtn";
import { LinkAddress } from "../LinkAddress/LInkAddress";

import youtube from "/public/youtube.svg";
import twitter from "/public/twitter.svg";
import dribbble from "/public/dribbble.svg";
import instagram from "/public/instagram.svg";
import emailIcon from "/public/message.svg";
import phoneIcon from "/public/calling.svg";
import locationIcon from "/public/location.svg";
import { manrope, poppins } from "../../fonts/fonts";
import styles from "./Footer.module.css";

const socials = [
  { name: "instagram", icon: instagram, link: "https://www.instagram.com/" },
  { name: "dribbble", icon: dribbble, link: "https://dribbble.com/" },
  { name: "twitter", icon: twitter, link: "https://twitter.com/" },
  { name: "youtube", icon: youtube, link: "https://www.youtube.com/" },
];

const address = [
  {
    info: "admin@goodlyfe.co",
    icon: emailIcon,
    name: "E-mail",
    link: "mailto:admin@goodlyfe.co",
  },
  {
    info: "+88 987654 3210",
    icon: phoneIcon,
    name: "phone number",
    link: "tel:+889876543210",
  },
  {
    info: "90210 Beverly Hills California USA",
    icon: locationIcon,
    name: "address",
    link: "https://maps.app.goo.gl/PpEj1r5uoQ4BHykJ9",
  },
];

const downloadFiles = [
  {
    name: "Privacy Policy",
    file: "/privacy.pdf",
  },
  {
    name: "Disclaimer",
    file: "/disclaimer.docx",
  },
];
export const Footer = () => {
  return (
    <footer
      className={`${manrope.variable} ${styles.footer}`}
      role="contentinfo"
    >
      <Container>
        <div className={styles.mainContentWrapp}>
          <div>
            <Link href="/" className={`${poppins.variable} ${styles.logo}`}>
              Good<span className={styles.logoAccent}>lyfe</span>
            </Link>
            <p className={styles.text}>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
              placerat.
            </p>
            <ul className={styles.socialList}>
              {socials.map(({ name, icon, link }) => (
                <LinckBtn
                  key={name}
                  name={name}
                  href={link}
                  icon={icon}
                  currentLink={"second"}
                />
              ))}
            </ul>
          </div>
          <div className={styles.reachWrapp}>
            <p className={styles.reach}>Reach us</p>
            <address>
              <ul className={styles.addressList}>
                {address.map(({ icon: Icon, info, name, link }) => (
                  <li key={name} className={styles.addressItem}>
                    <LinkAddress href={link} type={name === "address"}>
                      <div className={styles.addressIconWrapp}>
                        <Icon alt={name} width={"20px"} height={"20px"} />
                        <p className={styles.addressText}>{info}</p>
                      </div>
                    </LinkAddress>
                  </li>
                ))}
              </ul>
            </address>
          </div>
        </div>
        <div className={styles.downloadWrapp}>
          <ul className={styles.downloadList}>
            {downloadFiles.map(({ name, file }) => (
              <li key={name} className={styles.downloadItem}>
                <Link
                  href={file}
                  download={name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.copyringSign}>
            &#169; 2020 GoodLyfe. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};
