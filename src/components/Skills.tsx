import Skill from "./Skill";
export default function Skills({ skills }: any) {
  // skills: [{skill: '1'},{skill: '2'}]
  if (!skills) return null;

  return (
    <ul className="flex gap-4">
      {skills.map((skill: any) => {
        return <Skill key={skill.id} skill={skill} />;
      })}
    </ul>
  );
}
