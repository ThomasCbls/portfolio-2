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
// import { ReactComponent as TypescriptIcon } from "~/icons/typescript-icon.svg";

export const SkillPage = () => {
  return (
    <section className="skill-page">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
        Voici mes compétences :
      </div>
      {/* <div className="particles-container"> */}
      {/* <Particles
          particleColors={["#ffffffff", "#fafafaff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        /> */}
      <OrbitingItems3D
        duration={30}
        radiusX={150}
        radiusY={100}
        tiltAngle={20}
        items={[
          <Banana key="banana" className="h-12 w-12" />,
          <Bolt key="bolt" className="h-12 w-12" />,
          <BadgeX key="badge-x" className="h-12 w-12" />,
          <BadgeCent key="badge-cent" className="h-12 w-12" />,
          <BadgeInfo key="badge-info" className="h-12 w-12" />,
          <Github key="github" className="h-12 w-12" />,
          <File key="file" className="h-12 w-12" />,
          <Settings key="settings" className="h-12 w-12" />,
          <Search key="search" className="h-12 w-12" />,
          // <TypescriptIcon key="typescript" className="h-12 w-12" />,
        ]}
      />
      {/* </div> */}
    </section>
  );
};
