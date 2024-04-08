function Edu({ info }) {
  return (
    <div className="eduDetails">
      <h2>{info.std}</h2>
      <p>{info.instituteName}</p>
      <p>{info.year}</p>
      <p>{info.place}</p>
    </div>
  );
}

const eduData = [
  {
    std: "SSC",
    year: "2016",
    instituteName: "Renuka High School",
    place: "Aurangabad ,Maharashtra,India",
  },
  {
    std: "HSC",
    year: "2018",
    instituteName: "Renuka Jr. College",
    place: "Aurangabad ,Maharashtra,India",
  },
  {
    std: "BCS",
    year: "2023",
    instituteName: "SBES COLLEGE OF SCIENCE",
    place: "Aurangabad ,Maharashtra,India",
  },
  {
    std: "MCA",
    year: "2023-Persuing",
    instituteName: "ATES TECHNICAL CAMPUS",
    place: "Sangamner Akole ,Maharashtra,India",
  },
];

export default function Education() {
  return (
    <div className="content education">
      <div>
        <h1>Education</h1>
      </div>
      <div className="eduContainer">
        {eduData.map((data, index) => (
          <Edu key={index} info={data} />
        ))}
      </div>
    </div>
  );
}

// college name + year of passing + mark(opt) +place
