import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Test() {
  const container = useRef();
  useGSAP(
    () => {
      if (container.current !== null) {
        gsap.set(container.current, { yPercent: 100, opacity: 0 });
        gsap.to(container.current, {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.inOut",
        });
      }
    },
    { scope: container }
  );
  return (
    <div ref={container} className="test">
      <p>Test</p>
    </div>
  );
}
