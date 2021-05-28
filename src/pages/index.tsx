import Link from "next/link";
import { GetStaticProps } from "next";
import { GameCard } from "../components/GameCard";
import { SquareCard } from "../components/SquareCard";
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
  gamesNewReleases: Game[];
  gamesNewReleases2: Game[];
  gamesComingSoon: Game[];
  gamesWithDiscount: Game[];
  gamesFreeToPlay: Game[];
};

export default function Home({
  gamesWithDiscount,
  gamesNewReleases,
  gamesNewReleases2,
  gamesComingSoon,
  gamesFreeToPlay,
}: HomeProps) {
  return (
    <>
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
            {gamesNewReleases.map((game) => {
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
            {gamesNewReleases2.map((game) => {
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

      <div className={styles.psnowPubli}>
        <div className={styles.psnowContainer}>
          <img src="/PSNow-logo.png" alt="" />
          <h3>Hundreds of incredible games on demand, what will play first?</h3>
          <a href="#">LEARN MORE</a>
        </div>
        <img src="/tlou-psnow.png" alt="" />
      </div>

      <div className={styles.container}>
        <div className={styles.containerComingSoon}>
          <div className={styles.title}>
            <h1>Coming Soon</h1>

            <h2>VIEW ALL +</h2>
          </div>

          <div className={styles.row}>
            {gamesComingSoon.map((game) => {
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

          <div className={styles.title}>
            <h1>Sales & Deals</h1>

            <h2>VIEW ALL +</h2>
          </div>

          <div className={styles.dealsCards}>
            <div
              className={styles.card}
              style={{
                backgroundImage: `url('/playstation-studios-background.png')`,
              }}
            >
              <img src="/playstation-studios.png" alt="" />
              <span>PLAYSTATION STUDIOS SUPER SALE</span>
            </div>
            <div className={styles.cardMiddle}>
              <div className={styles.cardHeader}>
                <span>GAMES UNDER</span>
              </div>
              <div className={styles.cardBody}>
                <span>$20</span>
              </div>
              <div className={styles.cardFooter}>
                <span>ENDS 12/02</span>
              </div>
            </div>
            <div
              className={styles.card}
              style={{
                backgroundImage: `url('/capcom-background.png')`,
              }}
            >
              <img src="/capcom-logo.png" alt="" />
              <span>UP TO 40%</span>
            </div>
          </div>

          <div className={styles.row}>
            {gamesWithDiscount.map((game) => {
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

          <div className={styles.title}>
            <h1>Free To Play</h1>

            <h2>VIEW ALL +</h2>
          </div>

          <div className={styles.row}>
            {gamesFreeToPlay.map((game) => {
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
        <div className={styles.psplusPubli}>
          <div className={styles.psplusContainer}>
            <img src="/psplus-banner-logo.png" alt="" />
            <span>
              Enhance your PlayStation experience with access to online
              multiplayer, monthly games, exclusive discounts and more.
            </span>
            <a href="#">LEARN MORE</a>
          </div>
          <img src="/games-psplus-publi.png" alt="" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerComingSoon}>
          <div className={styles.title}>
            <h1>Collections</h1>

            <h2>VIEW ALL +</h2>
          </div>
          <div className={styles.squareCardContainer}>
            <div className={styles.bigSquareCard}>
              <img src="/ps-indies.png" alt="" />
            </div>
            <SquareCard src="/editors-choice.png" />
            <SquareCard src="/super-heroes.png" />
            <SquareCard src="/ps-vr.png" />
            <SquareCard src="/essentials.png" />
          </div>

          <div className={styles.title}>
            <h1>Genres</h1>

            <h2>VIEW ALL +</h2>
          </div>

          <div className={styles.squareCardContainer}>
            <SquareCard src="/action.png" />
            <SquareCard src="/arcade.png" />
            <SquareCard src="/fighting.png" />
            <SquareCard src="/horror.png" />
            <SquareCard src="/kids.png" />
            <SquareCard src="/party.png" />
          </div>
          <div className={styles.squareCardContainer}>
            <SquareCard src="/platform.png" />
            <SquareCard src="/driving.png" />
            <SquareCard src="/rpg.png" />
            <SquareCard src="/shooter.png" />
            <SquareCard src="/simulation.png" />
            <SquareCard src="/sports.png" />
          </div>
          <div className={styles.title}>
            <h1>More</h1>
          </div>
        </div>
      </div>
    </>
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

  const gamesNewReleases = games.slice(0, 6);
  const gamesNewReleases2 = games.slice(6, 12);

  const gamesComingSoon = games.slice(12, 18);
  const gamesWithDiscount = games.slice(18, 24);
  const gamesFreeToPlay = games.slice(24, 30);

  return {
    props: {
      games,
      gamesNewReleases,
      gamesNewReleases2,
      gamesComingSoon,
      gamesWithDiscount,
      gamesFreeToPlay,
    },
    revalidate: 60 * 60 * 8,
  };
};
