import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.topOptions}>
        <div className={styles.leftOptions}>
          <a href="#">
            <h5 className={styles.active}>DISCOVER</h5>
          </a>
          <span>|</span>
          <a href="#">
            <h5>EXPLORE</h5>
          </a>
        </div>
        <div className={styles.rightOptions}>
          <a href="#">
            <h5>COLLECTIONS</h5>
          </a>
          <span>|</span>
          <a href="#">
            <h5>DEALS</h5>
          </a>
          <span>|</span>
          <a href="#">
            <h5>SUBSCRIPTIONS</h5>
          </a>
        </div>
      </div>

      <img src="/hero-image.png" alt="" className={styles.heroImage} />
      <div className={styles.containerStore}>
        <div className={styles.title}>
          <h1>Trending</h1>

          <h2>VIEW ALL +</h2>
        </div>

        <div className={styles.cardsContainer}>
          <div
            className={styles.card}
            style={{ backgroundImage: `url('/fallguys.png')` }}
          >
            <div className={styles.cardHeader}>
              <span>PS4</span>
            </div>
            <div className={styles.cardBody}>
              <Link href="/">
                <span>Fall Guys: Ultimate Knockout</span>
              </Link>
            </div>
            <div className={styles.cardFooter}>
              <span>$19.99</span>
              <a href="/">Add To Cart</a>
            </div>
          </div>
          <div
            className={styles.card}
            style={{ backgroundImage: `url('/playstation.png')` }}
          >
            <div className={styles.cardHeader}>
              <span>PS5</span>
            </div>
            <div className={styles.cardBody}>
              <Link href="/">
                <span>Deamon's Souls</span>
              </Link>
            </div>
            <div className={styles.cardFooter}>
              <span>$69.99</span>
              <a href="/">Add To Cart</a>
            </div>
          </div>
          <div
            className={styles.card}
            style={{ backgroundImage: `url('/COD.png')` }}
          >
            <div className={styles.cardHeader}>
              <span>PS4</span>
            </div>
            <div className={styles.cardBody}>
              <Link href="/">
                <span>Call of Duty®: Black Ops Cold War</span>
              </Link>
            </div>
            <div className={styles.cardFooter}>
              <span>$59.99</span>
              <a href="/">Add To Cart</a>
            </div>
          </div>
        </div>
        <div className={styles.title}>
          <h1>New Releases</h1>

          <h2>VIEW ALL +</h2>
        </div>
      </div>
    </div>
  );
}
