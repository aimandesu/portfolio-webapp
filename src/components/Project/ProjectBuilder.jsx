import classes from "./Project.module.css";

const ProjectBuilder = (props) => {
  return (
    <>
      {props.projects.length === 0 ? (
        <h1 className={classes.no_project}>No project currently made...</h1>
      ) : (
        props.projects.map((project, index) => (
          <div className={classes.container} key={index}>
            <div className={`${classes.container_item} ${classes.item_one}`}>
              <h1 className={classes.project_name}>{project.name}</h1>
              <p className={classes.project_name}>{project.project}</p>
              <p>options here, 2 options</p>
            </div>
            <div className={`${classes.container_item} ${classes.item_two}`}>
              {project.photos.map((photo, photoIndex) => (
                <div key={photoIndex} className={classes.part_images}>
                  <img src={photo} alt={photoIndex} />
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ProjectBuilder;
