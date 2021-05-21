import Link from "next/link";
import { GetStaticProps } from "next";
import { GameCard } from "../components/GameCard";
import { api } from "../services/api";
import styles from "./Home.module.scss";

type Game = {
  id: string;
  title: string;
  developer: string;
  platform: string;
  image_url: string;
  background_img: string;
  price: number;
  PSPlus: boolean;
  EAPlay: boolean;
  PSNow: boolean;
  purchased: boolean;
  add_on: boolean;
  discount: number;
  free_to_play: boolean;
};

type HomeProps = {
  games: Game[];
  gameRow: Game[];
  gameRow2: Game[];
};

export default function Home({ games, gameRow, gameRow2 }: HomeProps) {
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
        <div className={styles.slider}>
          <div className={styles.gameTitleSlider}>
            <img src="/gameTitle.png" alt="" />
          </div>
          <div className={styles.gamePropsSlider}>
            <span>PS5</span> <br />
            <a href="/">$49.99</a>
          </div>
        </div>
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

        <div className={styles.row}>
          {gameRow.map((game) => {
            return (
              <GameCard
                id={game.id}
                title={game.title}
                subtitle={game.developer}
                platform={game.platform}
                price={game.price}
                src={game.image_url}
                EAPlay={game.EAPlay}
                PSNow={game.PSNow}
                PSPlus={game.PSPlus}
                add_on={game.add_on}
                discount={game.discount}
                free_to_play={game.free_to_play}
                purchased={game.purchased}
              />
            );
          })}
        </div>
        <div className={styles.row}>
          {gameRow2.map((game) => {
            return (
              <GameCard
                id={game.id}
                title={game.title}
                subtitle={game.developer}
                platform={game.platform}
                price={game.price}
                src={game.image_url}
                EAPlay={game.EAPlay}
                PSNow={game.PSNow}
                PSPlus={game.PSPlus}
                add_on={game.add_on}
                discount={game.discount}
                free_to_play={game.free_to_play}
                purchased={game.purchased}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("games", {});

  const games = data.map((game) => {
    return {
      id: game.id,
      title: game.title,
      developer: game.developer,
      platform: game.platform,
      image_url: game.image_url,
      price: game.price,
      PSPlus: game.PSPlus,
      EAPlay: game.EAPlay,
      PSNow: game.PSNow,
      purchased: game.purchased,
      add_on: game.add_on,
      discount: game.discount,
      free_to_play: game.free_to_play,
    };
  });

  const gameRow = games.slice(0, 6);
  const gameRow2 = games.slice(7, 13);

  return {
    props: {
      games,
      gameRow,
      gameRow2,
    },
    revalidate: 60 * 60 * 8,
  };
};
