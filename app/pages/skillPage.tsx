import { OrbitingCircles } from "~/components/ui/orbiting-circles";
import { File, Settings, Search } from "lucide-react";

export const SkillPage = () => {
  return (
    <section>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
        Voici mes compétences :
        <OrbitingCircles>
          <File />
          <Settings />
          <File />
        </OrbitingCircles>
        <OrbitingCircles radius={100} reverse>
          <File />
          <Settings />
          <File />
          <Search />
        </OrbitingCircles>
      </div>
    </section>
  );
};
