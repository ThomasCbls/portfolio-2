import GooeyNav from "./components/navBar";
import Particles from "./components/particules";
import TextType from "./components/TexteType";
import { DarkMode } from "./components/darkMode";
import { SmoothCursor } from "~/components/ui/smooth-cursor";

export const WelcomePage = () => {
  const items = [
    { label: "Home", href: "#" },
    { label: "Présentation", href: "#" },
    { label: "Compétences", href: "/competence" },
    { label: "Projets", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#121212",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
      className="particles-container"
    >
      <SmoothCursor />
      <div
        className="nav-wrapper"
        style={{ alignItems: "flex-start", top: "20px" }}
      >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
        <DarkMode />
      </div>

      <Particles
        particleColors={["#ffffffff", "#fafafaff"]}
        particleCount={1000}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="text-overlay">
        <TextType
          text={["Hello bienvenue sur cette page !", "phrase 2", "phrase 3"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </div>
  );
};
