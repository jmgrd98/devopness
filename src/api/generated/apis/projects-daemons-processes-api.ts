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
import { Process } from '../../generated/models';
import { ProcessCreate } from '../../generated/models';

/**
 * ProjectsDaemonsProcessesApiService - Auto-generated
 */
export class ProjectsDaemonsProcessesApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a background process to the given project
     * @param {number} projectId The project numeric Id
     * @param {ProcessCreate} processCreate A JSON object containing backgroud process data
     */
    public async addDaemonToProject(projectId: number, processCreate: ProcessCreate): Promise<ApiResponse<Process>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addDaemonToProject');
        }
        if (processCreate === null || processCreate === undefined) {
            throw new ArgumentNullException('processCreate', 'addDaemonToProject');
        }
        const response = await this.post <Process, ProcessCreate>(`/projects/{project_id}/processes`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), processCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Returns a list of all processes belonging to a project
     * @param {number} projectId Numeric ID of the project to get processes from
     */
    public async listProjectDaemons(projectId: number): Promise<ApiResponse<Array<Process>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectDaemons');
        }
        const response = await this.get <Array<Process>>(`/projects/{project_id}/processes`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
