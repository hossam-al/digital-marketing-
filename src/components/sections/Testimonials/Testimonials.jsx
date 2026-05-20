import { useEffect, useState } from "react";

import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaQuoteLeft,
} from "react-icons/fa";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Aero Marketing transformed our online presence completely.",
    name: "Ahmed Mohammed",
    role: "CEO, PACKGO",
    stars: 5,
  },
  {
    text: "Working with Aero Marketing was the best decision.",
    name: "Sarah Al-Rashid",
    role: "Marketing Director, SHAHY",
    stars: 5,
  },
  {
    text: "The team's creativity and professionalism is unmatched.",
    name: "Khalid Al-Fahad",
    role: "Founder, LEATHER MATE",
    stars: 4.5,
  },
  {
    text: "Strategic approach boosted our visibility.",
    name: "Mohammed Al-Saud",
    role: "CEO, AQUA COOL",
    stars: 4.5,
  },
  {
    text: "Exceptional service and outstanding results.",
    name: "Fatima Al-Omar",
    role: "Director, SAMA ACADEMY",
    stars: 5,
  },
  {
    text: "They became true partners in growth.",
    name: "Omar Al-Harbi",
    role: "Business Owner, PACKGO",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className={styles.starRating}>
      {[1,2,3,4,5].map((i)=>{
        const full = i <= Math.floor(count);

        const half =
          !full &&
          i === Math.ceil(count) &&
          count % 1 !== 0;

        if(full)
          return <FaStar key={i} className={styles.starActive}/>;

        if(half)
          return <FaStarHalfAlt key={i} className={styles.starActive}/>;

        return <FaRegStar key={i} className={styles.starEmpty}/>;
      })}
    </div>
  );
}

export default function Testimonials() {
  const [index,setIndex] = useState(0);

  const visible = 3;

  useEffect(()=>{
    const timer = setInterval(()=>{
      setIndex(
        prev =>
          (prev + 1) %
          (testimonials.length - visible + 1)
      );
    },4000);

    return ()=>clearInterval(timer);
  },[]);

  const next = ()=>{
    setIndex(prev =>
      prev >= testimonials.length-visible
        ? 0
        : prev+1
    );
  };

  const prev = ()=>{
    setIndex(prev =>
      prev <=0
        ? testimonials.length-visible
        : prev-1
    );
  };

  return (
    <section
      id="testimonials"
      className={styles.testimonials}
    >
      <div className={styles.contenar}>

        <div className={styles.contentTestimonials}>
          <div className={styles.titSec}>
            <FaQuoteLeft className={styles.titIcon}/>
            <h2 className={styles.titLabel}>
              Testimonials
            </h2>
          </div>

          <h3 className={styles.heading}>
            What Our Clients Say
          </h3>

        </div>

        <div className={styles.sliderWrap}>

          <button
            className={styles.arrow}
            onClick={prev}
          >
            <ChevronLeft size={18}/>
          </button>

          <div className={styles.viewport}>

            <div
              className={styles.track}
              style={{
                transform:
                `translateX(-${index * (100/3)}%)`
              }}
            >
              {testimonials.map((t,i)=>(
                <div
                  key={i}
                  className={styles.slide}
                >
                  <div className={styles.testimonialCard}>

                    <FaQuoteLeft
                      className={styles.quoteIcon}
                    />

                    <p>
                      "{t.text}"
                    </p>

                    <div
                      className={
                        styles.testimonialAuthor
                      }
                    >
                      <div
                        className={
                          styles.authorInfo
                        }
                      >
                        <h4>{t.name}</h4>

                        <span>
                          {t.role}
                        </span>
                      </div>

                      <StarRating
                        count={t.stars}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

          <button
            className={styles.arrow}
            onClick={next}
          >
            <ChevronRight size={18}/>
          </button>

        </div>

      </div>
    </section>
  );
}