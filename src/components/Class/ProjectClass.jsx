export default class ProjectClass {
  constructor(
    name,
    project,
    photos = [],
    github
    // video
  ) {
    //new 2 things to add, most likely github porfolio if available, and another one link url to view that
    this.name = name;
    this.project = project;
    this.photos = photos;
    this.github = github;
    // this.video = video;
  }
}
