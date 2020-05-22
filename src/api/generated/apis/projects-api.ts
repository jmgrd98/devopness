/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { Project } from '../../generated/models';

/**
 * ProjectsApiService - Auto-generated
 */
export class ProjectsApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new project
     * @param {Project} project A JSON object containing project data
     */
    public async addProject(project: Project): Promise<ApiResponse<void>> {
        if (project === null || project === undefined) {
            throw new ArgumentNullException('project', 'addProject');
        }
        const response = await this.post <void, Project>(`/projects`, project);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a project by ID
     * @param {number} projectId Numeric ID of the project to get
     */
    public async getProject(projectId: number): Promise<ApiResponse<Project>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'getProject');
        }
        const response = await this.get <Project>(`/projects/{project_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Returns a list of all projects belonging to current user
     */
    public async listProjects(): Promise<ApiResponse<Array<Project>>> {
        const response = await this.get <Array<Project>>(`/projects`);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing project
     * @param {number} projectId Numeric ID of the project to put
     * @param {Project} project A JSON object containing project data
     */
    public async updateProject(projectId: number, project: Project): Promise<ApiResponse<void>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'updateProject');
        }
        if (project === null || project === undefined) {
            throw new ArgumentNullException('project', 'updateProject');
        }
        const response = await this.put <void, Project>(`/projects/{project_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), project);
        return new ApiResponse(response);
    }
}
