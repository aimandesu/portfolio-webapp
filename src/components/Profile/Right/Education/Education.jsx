import { useState } from "react";
import CertificationClass from "../../../Class/CertificationClass";
import EducationBuilder from "./EducationBuilder";
import classes from "./Education.module.css";
import { Tabs } from "../../../reusableComponents/Tabs";
import TabsClass from "../../../reusableComponents/TabsClass";

const Education = () => {
  const diplomaCert = "./Images/Education/Diploma/diploma.pdf";
  const degreeCert = "./Images/Education/Degree/degree.pdf";
  // const which = "diploma";

  // const [isDiploma, setisDiploma] = useState(true);
  // const [cert, setisCert] = useState(diplomaCert);
  // const [isWhich, setIsWhich] = useState(which);

  const openPDF = (location) => {
    window.open(location, "_blank");
  };

  const diploma = [
    new CertificationClass(
      "semester one",
      "./Images/Education/Diploma/sem1.jpg"
    ),
    new CertificationClass(
      "semester two",
      "./Images/Education/Diploma/sem2.jpg"
    ),
    new CertificationClass(
      "semester three",
      "./Images/Education/Diploma/sem3.jpg"
    ),
    new CertificationClass(
      "semester four",
      "./Images/Education/Diploma/sem4.jpg"
    ),
  ];
  const degree = [
    new CertificationClass("PC", "./Images/Education/Degree/pc.jpg"),
    new CertificationClass(
      "semester three",
      "./Images/Education/Degree/sem3.jpg"
    ),
    new CertificationClass(
      "semester four",
      "./Images/Education/Degree/sem4.jpg"
    ),
    new CertificationClass(
      "semester five",
      "./Images/Education/Degree/sem5.jpg"
    ),
  ];

  const tabs = [
    new TabsClass("Diploma", <EducationBuilder education={diploma} />, () =>
      openPDF(diplomaCert)
    ),
    new TabsClass("Degree", <EducationBuilder education={degree} />, () =>
      openPDF(degreeCert)
    ),
  ];

  // const viewEducation = (educationView) => {
  //   educationView == "diploma" ? setisDiploma(true) : setisDiploma(false);
  //   educationView == "diploma" ? setisCert(diplomaCert) : setisCert(degreeCert);
  //   educationView == "diploma" ? setIsWhich("diploma") : setIsWhich("degree");
  // };

  return (
    <>
      {/* <button onClick={() => viewEducation("diploma")}>Diploma</button>
      <button onClick={() => viewEducation("")}>Degree</button> */}
      <Tabs tabs={tabs} />
      {/* <div className={classes.certificate} onClick={() => openPDF(cert)}>
        <p>View/Download {isWhich}</p>
        <span className="material-symbols-outlined">download</span>
      </div> */}

      {/* {isDiploma ? (
        <EducationBuilder education={diploma} />
      ) : (
        <EducationBuilder education={degree} />
      )} */}
    </>
  );
};

export default Education;
