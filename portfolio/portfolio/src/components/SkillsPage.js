function SkillsPage() {
  const skillsList = ['Python','Javascript','CSS','HTML','Jenkins','Java','ReactJs','NodeJs','MongoDB','Polymer','D3Js','MaterialUI'];
  return (
    <div className="SkillsPage">
      {skillsList.map(skill => (
        <div className='skill-wrapper'>
          {skill.toUpperCase()}
        </div>
    ))}
    </div>
  );
}

export default SkillsPage;