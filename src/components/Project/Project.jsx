import ProjectBuilder from "./ProjectBuilder";
import ProjectClass from "../Class/ProjectClass";
import classes from "./Project.module.css";

const Project = () => {
  //put all our project logic in map or array?

  const mobile = [
    new ProjectClass(
      "Natural Hazard Assistance Hub",
      "Natural Hazard Assistance is mobile application built on Flutter framework",
      [
        "./Images/Mobile/natural_hazard_hub/0.png",
        "./Images/Mobile/natural_hazard_hub/1.png",
        "./Images/Mobile/natural_hazard_hub/2.png",
        "./Images/Mobile/natural_hazard_hub/3.png",
        "./Images/Mobile/natural_hazard_hub/0.png",
        "./Images/Mobile/natural_hazard_hub/1.png",
        "./Images/Mobile/natural_hazard_hub/0.png",
        "./Images/Mobile/natural_hazard_hub/1.png",
        "./Images/Mobile/natural_hazard_hub/2.png",
        "./Images/Mobile/natural_hazard_hub/3.png",
        "./Images/Mobile/natural_hazard_hub/0.png",
        "./Images/Mobile/natural_hazard_hub/1.png",
      ],
      "https://www.youtube.com/",
      "youtube.com"
    ),
    new ProjectClass(
      "Family",
      "Family is a mobile application built on Flutter framework",
      ["./Images/chibi1.png", "./Images/chibi1.png"],
      "youtube.com",
      "youtube.com"
    ),
    new ProjectClass(
      "Notely",
      "Notely is a mobile application built on Flutter framework",
      ["./Images/Mobile/1.jpg"],
      "youtube.com",
      "youtube.com"
    ),
    new ProjectClass(
      "Rents Car",
      "Rents car is a mobile application built on Jetpack Compose",
      [
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
      ],
      "youtube.com",
      "youtube.com"
    ),
  ];
  const web = [
    new ProjectClass(
      "Natural Hazard Assistance - Admin",
      "Natural Hazard Assistance - Admin is a flutter web application built on Flutter framework",
      [
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
        "./Images/Web/test.jpg",
      ],
      "youtube.com",
      "youtube.com"
    ),
  ];

  const desktop = [];

  return (
    <>
      <h1 className={classes.title}>Mobile App</h1>
      <ProjectBuilder projects={mobile} />
      <h1 className={classes.title}>Web App</h1>
      <ProjectBuilder projects={web} />
      <h1 className={classes.title}>Desktop App</h1>
      <ProjectBuilder projects={desktop} />
    </>
  );
};

export default Project;
