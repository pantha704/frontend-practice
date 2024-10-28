import { useRef } from "react";
import moon from "./assets/moon.png";
import land from "./assets/land.png";
import cat from "./assets/cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div className="min-h-screen min-w-screen overflow-hidden p-0 m-0 bg-black border-black">
      <Parallax
        pages={4}
        ref={ref}
        style={{ backgroundColor: "black", padding: 0, margin: 0 }}
      >
        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} />
        </ParallaxLayer>

        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}
        <div className="h-screen w-full">
          <ParallaxLayer
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${moon})`,
              backgroundSize: "contain",
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url(${land})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={0.2}
            speed={0.05}
            onClick={() => ref.current.scrollTo(3)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              fontSize: "4rem",
              fontWeight: "bold",
            }}
          >
            <h1>Welcome to my website</h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={2}
            onClick={() => ref.current.scrollTo(0)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "white",
              fontSize: "4rem",
              fontWeight: "bold",
            }}
          >
            <h2>Hi Mom!</h2>
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
