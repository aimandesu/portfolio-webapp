export default class ProjectClass {
  constructor(type, name, project, photos = []) {
    this.type = type;
    this.name = name;
    this.project = project;
    this.photos = photos;
  }
}
