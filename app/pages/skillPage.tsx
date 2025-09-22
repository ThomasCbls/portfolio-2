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

export const SkillPage = () => {
  return (
    <section className="skill-page">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
        Voici mes compétences :
      </div>
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
    </section>
  );
};
