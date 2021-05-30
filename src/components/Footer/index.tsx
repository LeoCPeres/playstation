import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/favicon.png" alt="" />
      <div>
        <a href="#">Support </a>
        <a href="#">| Privacy Policy </a>
        <a href="#">| Website </a>
        <a href="#">| Terms of Use </a>
        <a href="#">| Sitemap </a>
        <a href="#">| Legal </a>
        <a href="#">| About SIE </a>
        <a href="#">| PSN Terms of Service </a>
        <a href="#">| PS Store Cancellation Policy </a>
        <a href="#">| Health Warning </a>
        <a href="#">| About Ratings </a>
        <a href="#"> Facebook </a>
        <a href="#">| Twitter</a>
        <a href="#">| Youtube</a>
        <a href="#">| Instagram</a>
        <a href="#">| Android App</a>
        <a href="#">| iOS App</a>
      </div>
      <span>© 2020 Sony Interactive Entertainment LLC</span>
    </footer>
  );
}
