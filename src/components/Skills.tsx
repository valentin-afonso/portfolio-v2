import Skill from "./Skill";
export default function Skills({ skills, isLight }: any) {
  if (!skills) return null;
  const class_light = isLight ? "is_light" : "";
  return (
    <ul
      className={`flex flex-wrap gap-y-4 gap-x-2 xs:gap-y-4 xs:gap-x-4 w-max ${class_light}`}
    >
      {skills.map((skill: any) => {
        return <Skill key={skill.id} skill={skill} />;
      })}
    </ul>
  );
}
