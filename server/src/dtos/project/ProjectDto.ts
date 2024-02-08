import {ProjectDocumentData} from "#src/db/models";

class ProjectDto {
	id: number;
	name: string;
	description: string;
	repoUrl: string;

	constructor(doc: ProjectDocumentData) {
		this.id = doc.id;
		this.name = doc.name;
		this.description = doc.description;
		this.repoUrl = doc.repoUrl;
	}
}

export default ProjectDto;
