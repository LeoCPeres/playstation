import styles from "./styles.module.scss";
import { Heart, ShoppingCart, Search, ChevronDown } from "react-feather";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.sonyBar}>
        <img src="/sony-logo.png" alt="" />
      </div>
      <div className={styles.navBar}>
        <img src="./ps-store-logo.png" alt="Playstation Store Logo" />

        <div className={styles.content}>
          <span>My Playstation</span>
          <ChevronDown
            color="#383838"
            width={21}
            className={styles.chevronDown}
          />
          <img src="/user-icon.png" alt="" />
          <Heart color="#383838" width={21} className={styles.icons} />
          <ShoppingCart color="#383838" width={21} className={styles.icons} />
          <div className={styles.searchBar}>
            <Search color="#383838" width={21} />
            <form action="">
              <input type="text" name="" id="" placeholder="Search" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
