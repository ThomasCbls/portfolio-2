import {
  File,
  Settings,
  Search,
  BadgeCent,
  BadgeInfo,
  BadgeX,
  Banana,
  Bolt,
  Github,
} from "lucide-react";
import OrbitingItems3D from "~/components/animata/list/orbiting-items-3-d";
import Particles from "./components/particules";
import SvgTypeScript from "./svg/svgTypeScript";
import SvgHtml from "./svg/svgHtml";
import SvgTailwindCss from "./svg/svgTailwindcss";
import SvgCss from "./svg/svgCss";
import SvgMySql from "./svg/svgMysql";
import SvgPostgreSql from "./svg/svgPostgresql";
import SvgReact from "./svg/svgReact";
import SvgPhp from "./svg/svgPhp";
import SvgGitLab from "./svg/svgGitlab";
import { SmoothCursor } from "~/components/ui/smooth-cursor";
import GooeyNav from "./components/navBar";
import { BoxReveal } from "~/components/ui/box-reveal";
import Iridescence from "~/components/Iridescence";

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
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#121212",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
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
          initialActiveIndex={2}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
      <div className="div-center">
        <div className="text-skill">
          <BoxReveal>Voici mes compétences :</BoxReveal>
        </div>
      </div>
      <div className="text-overlay">
        <OrbitingItems3D
          duration={55}
          radiusX={150}
          radiusY={100}
          tiltAngle={20}
          items={[
            <Github key="github" className="h-12 w-12" />,
            <SvgTypeScript />,
            <SvgHtml />,
            <SvgTailwindCss />,
            <SvgCss />,
            <SvgMySql />,
            <SvgPostgreSql />,
            <SvgReact />,
            <SvgPhp />,
            <SvgGitLab />,
          ]}
        />
      </div>
    </div>
  );
}
