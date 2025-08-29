import React from "react";
import { cocktailLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Cocktails() {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });

    parallaxTimeline.from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
  }, []);

  return (
    <section id="cocktails" className="noisy">
      <img src="/images/hero-left-leaf.png" alt="left-leaf" id="c-left-leaf" />

      <img
        src="/images/hero-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most Popular cocktails :</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved cocktails :</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cocktails;
