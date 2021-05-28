import styles from "./styles.module.scss";

type SquareCardProps = {
  src: string;
};

export function SquareCard(props: SquareCardProps) {
  return (
    <div className={styles.card}>
      <img src={props.src} alt="" />
    </div>
  );
}
