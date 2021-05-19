import styles from "./styles.module.scss";

type GameCardProps = {
  title: string;
  src: string;
  subtitle: string;
  platform: string;
  price: string;
  EAPlay?: boolean;
  PSPlus?: boolean;
  PSNow?: boolean;
};

export function GameCard(props: GameCardProps) {
  return (
    <div className={styles.containerNewReleases}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <img src={props.src} alt="" />
        </div>
        <div className={styles.cardBody}>
          <span>{props.title}</span>
          <p>{props.subtitle}</p>

          <div className={styles.platform}>
            <span>{props.platform}</span>
            {props.EAPlay ? <img src="/EAPlay.png" alt="" /> : ""}
            {props.PSPlus ? <img src="/PS+.png" alt="" /> : ""}
            {props.PSNow ? <img src="/PSNow.png" alt="" /> : ""}
          </div>
        </div>
        <div className={styles.cardFooter}>
          <a href="/">{props.price}</a>
        </div>
      </div>
    </div>
  );
}
