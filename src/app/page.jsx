import Image from "next/image";
import style from "./page.module.css";

function Page() {
  return (
    <div className={style.container}>
      <div className={style["hero-wrapper"]}>
        <div className={style["hero-title"]}>
          <h1>We are changing the way people shop</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button>our products</button>
        </div>
        <div className={style["hero-slider"]}>
          <Image
            src="/hero-img.webp"
            width={350}
            height={416}
            alt="Hero Image"
          />
          <Image
            src="/hero-img.webp"
            width={350}
            height={416}
            alt="Hero Image"
          />
          <Image
            src="/hero-img.webp"
            width={350}
            height={416}
            alt="Hero Image"
          />
        </div>
      </div>
      <header />

      <div className={style.feature}>
        <h2>Featured Products</h2>
        <hr />
        <div className={style["item-wrapper"]}>
          <div className={style.item}>
            <Image src="/hero-img.webp" width={350} height={200}></Image>
            <h3>Avant-Garde-Lamp</h3>
            <span>price 102$</span>
          </div>
          <div className={style.item}>
            <Image src="/hero-img.webp" width={350} height={200}></Image>
            <h3>Avant-Garde-Lamp</h3>
            <span>price 102$</span>
          </div>
          <div className={style.item}>
            <Image src="/hero-img.webp" width={350} height={200}></Image>
            <h3>Avant-Garde-Lamp</h3>
            <span>price 102$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
