import { useEffect } from "react";

export default function useSectionObserver(
  selector = "section",
  threshold = 0.2,
  styles
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const isEven = [...el.parentNode.children].indexOf(el) % 2 === 1;

            el.classList.add(isEven ? styles.visibleEven : styles.visibleOdd);
            obs.unobserve(el);
          }
        });
      },
      { threshold }
    );

    const targets = document.querySelectorAll(selector);
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold, styles]);
}
