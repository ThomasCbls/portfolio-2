import Particles from "./components/particules";
import TextType from "./components/TexteType";

export const WelcomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#121212",
      }}
      className="particles-container"
    >
      <TextType
        text={[
          "Hello bienvenue sur cette page !",
          "Je m'apppelle Thomas Camboulas.",
          "Je suis développeur !",
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
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
    </div>
  );
};
