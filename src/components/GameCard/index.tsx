import { useState } from "react";
import styles from "./styles.module.scss";

type GameCardProps = {
  title: string;
  src: string;
  subtitle: string;
  platform: string;
  price: number;
  EAPlay?: boolean;
  PSPlus?: boolean;
  PSNow?: boolean;
  free_to_play?: boolean;
  add_on?: boolean;
  discount?: number;
  purchased?: boolean;
  id: string;
};

export function GameCard(props: GameCardProps) {
  return (
    <div className={styles.containerNewReleases}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          {props.discount > 0 && <span>-{props.discount}%</span>}
          <img src={props.src} alt="" />
        </div>
        <div className={styles.cardBody}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtitle}>{props.subtitle}</p>

          <div className={styles.platform}>
            <span>{props.platform}</span>
            {props.EAPlay ? <img src="/EAPlay.png" alt="" /> : ""}
            {props.PSPlus ? <img src="/PS+.png" alt="" /> : ""}
            {props.PSNow ? <img src="/PSNow.png" alt="" /> : ""}
            {props.add_on ? <span className={styles.addOn}>Add-on</span> : ""}
          </div>
        </div>
        <div className={styles.cardFooter}>
          {props.purchased ? (
            <a href="">
              <span>PURSHASED</span>
            </a>
          ) : (
            ""
          )}

          {props.PSPlus ? (
            <a href="">
              <div className={styles.priceAditional}>
                <span>${props.price}</span>
                <span style={{ fontWeight: "bold" }}>FREE</span>
              </div>
            </a>
          ) : (
            ""
          )}

          {props.PSNow ? (
            <a href="">
              <div className={styles.priceAditionalPSNow}>
                <span>${props.price}</span>
                <span style={{ fontWeight: "bold" }}>FREE</span>
              </div>
            </a>
          ) : (
            ""
          )}

          {props.price > 0 &&
            props.purchased === false &&
            props.PSPlus === false &&
            props.PSNow === false && <a href="">${props.price}</a>}

          {props.price == 0 && <a href="">DOWNLOAD</a>}
        </div>
      </div>
    </div>
  );
}
