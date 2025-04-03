import styles from "./Navbar.module.css";
import { FaApple } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <FaApple />
      </div>

      <ul className={styles.menu}>
        <li>Mac</li>
        <li>iPhone</li>
        <li>iPad</li>
        <li className={styles.active}>iWatch</li>
        <li>Support</li>
      </ul>

      <div className={styles.icons}>
        <span>
          <FaSearch />
        </span>
        <span className={styles.separator}>|</span> {/* Add class here */}
        <span>
          <FiShoppingBag />
        </span>
      </div>
    </nav>
  );
}
