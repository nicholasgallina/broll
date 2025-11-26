import Link from "next/link";
import HomeButtonImg from "../app/assets/home-icon.png";
import AccountButtonImg from "../apps/assets/account-icon.png";
import styles from "./HeaderButton.module.css";

interface HeaderButtonProps {
  link?: string;
  image?: any;
  width?: number;
  height?: number;
}

export default function HeaderButton({
  link = "/account",
  image = HomeButtonImg,
  width = 75,
  height = 60,
}: HeaderButtonProps) {
  return (
    <Link href={link}>
      <img
        src={image}
        alt="Fix this"
        style={{ width: width, height: height }}
        className={styles.headerButton}
      />
    </Link>
  );
}
