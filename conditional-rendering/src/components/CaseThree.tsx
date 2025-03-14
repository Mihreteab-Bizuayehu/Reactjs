import { useState } from "react"

const CaseThree = () => {

  const intialState = [
    'HTML',
    'CSS(Bootstrap,Tailwindcss)',
    'JavaScript',
    'TypeScript',
    'React(js,Native)',
    'Node/Express.js',
    'MongoDB/Mongoose',
    'ORM(prisma,drizzle)',
    'Validator(zod)',
    'Spring Boot',
  ];

  const [skills, setSkills] = useState(intialState);
  
  const clearSkills = () =>setSkills([]);
  const reloadSkills = () => setSkills(intialState);

  return (
    <div>
      <h3 className="text-[28px] font-bold mb-5">List of My Skills</h3>
      {skills.length ? (
        <div className="flex flex-col gap-5">
          <ul>
            {skills.map((skill, index) => (
              <li className="text-lg" key={index}>
                {skill}
              </li>
            ))}
          </ul>
          <button
            className="py-[10px] px-[25px] text-white font-bold text-lg bg-blue-500 rounded"
            onClick={clearSkills}
          >
            Clear Skills
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <h4>No Skills Avalable!</h4>
          <button
            className="py-[10px] px-[25px] text-white font-bold text-lg bg-blue-500 rounded"
            onClick={reloadSkills}
          >
            Reload
          </button>
        </div>
      )}
    </div>
  );
}

export default CaseThree