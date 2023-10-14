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
        "./Images/Mobile/1.jpg",
        "./Images/chibi1.png",
        "./Images/chibi1.png",
        "./Images/Mobile/1.jpg",
      ]
    ),
    new ProjectClass(
      "Family",
      "Family is a mobile application built on Flutter framework",
      ["./Images/chibi1.png", "./Images/chibi1.png"]
    ),
    new ProjectClass(
      "Notely",
      "Notely is a mobile application built on Flutter framework",
      ["./Images/Mobile/1.jpg"]
    ),
    new ProjectClass(
      "Rents Car",
      "Rents car is a mobile application built on Jetpack Compose",
      ["./Images/Mobile/1.jpg"]
    ),
  ];
  const web = [];

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
