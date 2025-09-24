import LetterGlitch from "~/components/LetterGlitch";
import GooeyNav from "./components/navBar";
import TextType from "./components/TexteType";
import { SmoothCursor } from "~/components/ui/smooth-cursor";
import { color } from "framer-motion";
import { ArcTimeline } from "~/components/ui/arc-timeline";

export function loader() {
  return null;
}

export default function SkillPage() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Présentation", href: "/presentation" },
    { label: "Compétences", href: "/competence" },
    { label: "Projets", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const data = [
    {
      time: "2025",
      steps: [
        { icon: <span>🚀</span>, content: "Launched v1" },
        { icon: <span>✨</span>, content: "Improved UX" },
      ],
    },
    {
      time: "2026",
      steps: [{ icon: <span>📈</span>, content: "Growth" }],
    },
    {
      time: "2026",
      steps: [{ icon: <span>📈</span>, content: "Growth" }],
    },
    {
      time: "2026",
      steps: [{ icon: <span>📈</span>, content: "Growth" }],
    },
    {
      time: "2026",
      steps: [{ icon: <span>📈</span>, content: "Growth" }],
    },
    {
      time: "2026",
      steps: [{ icon: <span>📈</span>, content: "Growth" }],
    },
    {
      time: "2026",
      steps: [{ icon: <span>📈</span>, content: "Growth" }],
    },
    {
      time: "2026",
      steps: [{ icon: <span>📈</span>, content: "Growth" }],
    },
    {
      time: "2026",
      steps: [{ icon: <span>📈</span>, content: "Growth" }],
    },
    {
      time: "2028",
      steps: [{ icon: <span>📈</span>, content: "Growth" }],
    },
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
      {/* <SmoothCursor /> */}
      <div
        className="nav-wrapper"
        style={{ alignItems: "flex-start", top: "20px" }}
      >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={1}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <div className="text-overlay">
        <ArcTimeline
          data={data}
          defaultActiveStep={{ stepIndex: 0 }}
          arcConfig={{
            circleWidth: 3000,
            angleBetweenMinorSteps: 0.5,
            lineCountFillBetweenSteps: 10,
            boundaryPlaceholderLinesCount: 75,
          }}
        />{" "}
      </div>
    </div>
  );
}
