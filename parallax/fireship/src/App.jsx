import "./App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <Parallax pages={3}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          backgroundColor: "#805E73",
        }}
      />
      <ParallaxLayer
        offset={1}
        speed={0.8}
        style={{
          backgroundColor: "#87BCDE",
        }}
      />
      <ParallaxLayer
        offset={2}
        speed={1.2}
        style={{
          backgroundColor: "#ECEBDB",
        }}
      />
      <ParallaxLayer
        offset={0}
        speed={0.3}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Welcome to My Website</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>About Us</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.7}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Contact</h1>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
