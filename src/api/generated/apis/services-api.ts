/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
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
import { ApiError } from '../../generated/models';
import { ExtraBodyParams } from '../../generated/models';
import { Service } from '../../generated/models';

/**
 * ServicesApiService - Auto-generated
 */
export class ServicesApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given service
     * @param {number} serviceId The Id of the service to be deleted
     */
    public async deleteService(serviceId: number): Promise<ApiResponse<void>> {
        if (serviceId === null || serviceId === undefined) {
            throw new ArgumentNullException('serviceId', 'deleteService');
        }
        const queryString = [].join('&');
        const requestUrl = '/services/{service_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"service_id"}}`, encodeURIComponent(String(serviceId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get details of a single service
     * @param {number} serviceId Unique ID of the service to get
     */
    public async getService(serviceId: number): Promise<ApiResponse<Service>> {
        if (serviceId === null || serviceId === undefined) {
            throw new ArgumentNullException('serviceId', 'getService');
        }
        const queryString = [].join('&');
        const requestUrl = '/services/{service_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Service>(requestUrl.replace(`{${"service_id"}}`, encodeURIComponent(String(serviceId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Reload a service
     * @param {number} serviceId The unique id of the service
     * @param {ExtraBodyParams} [extraBodyParams] A JSON object containing list of additional parameters
     */
    public async reloadService(serviceId: number, extraBodyParams?: ExtraBodyParams): Promise<ApiResponse<void>> {
        if (serviceId === null || serviceId === undefined) {
            throw new ArgumentNullException('serviceId', 'reloadService');
        }
        const queryString = [].join('&');
        const requestUrl = '/services/{service_id}/reload' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, ExtraBodyParams>(requestUrl.replace(`{${"service_id"}}`, encodeURIComponent(String(serviceId))), extraBodyParams);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Restart a service
     * @param {number} serviceId The unique id of the service
     * @param {ExtraBodyParams} [extraBodyParams] A JSON object containing list of additional parameters
     */
    public async restartService(serviceId: number, extraBodyParams?: ExtraBodyParams): Promise<ApiResponse<void>> {
        if (serviceId === null || serviceId === undefined) {
            throw new ArgumentNullException('serviceId', 'restartService');
        }
        const queryString = [].join('&');
        const requestUrl = '/services/{service_id}/restart' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, ExtraBodyParams>(requestUrl.replace(`{${"service_id"}}`, encodeURIComponent(String(serviceId))), extraBodyParams);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Start a service
     * @param {number} serviceId The unique id of the service
     * @param {ExtraBodyParams} [extraBodyParams] A JSON object containing list of additional parameters
     */
    public async startService(serviceId: number, extraBodyParams?: ExtraBodyParams): Promise<ApiResponse<void>> {
        if (serviceId === null || serviceId === undefined) {
            throw new ArgumentNullException('serviceId', 'startService');
        }
        const queryString = [].join('&');
        const requestUrl = '/services/{service_id}/start' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, ExtraBodyParams>(requestUrl.replace(`{${"service_id"}}`, encodeURIComponent(String(serviceId))), extraBodyParams);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Stop a service
     * @param {number} serviceId The unique id of the service
     * @param {ExtraBodyParams} [extraBodyParams] A JSON object containing list of additional parameters
     */
    public async stopService(serviceId: number, extraBodyParams?: ExtraBodyParams): Promise<ApiResponse<void>> {
        if (serviceId === null || serviceId === undefined) {
            throw new ArgumentNullException('serviceId', 'stopService');
        }
        const queryString = [].join('&');
        const requestUrl = '/services/{service_id}/stop' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, ExtraBodyParams>(requestUrl.replace(`{${"service_id"}}`, encodeURIComponent(String(serviceId))), extraBodyParams);
        return new ApiResponse(response);
    }

    /**
     * Trigger a status update action for a service in all project servers asynchronously. To get the output of service status update action the endpoint [getServiceStatusLog](/#operation/getServiceStatusLog) should be invoked. 
     * @summary Update status of a service
     * @param {number} serviceId The unique id of the service
     * @param {ExtraBodyParams} [extraBodyParams] A JSON object containing list of additional parameters
     */
    public async updateServiceStatus(serviceId: number, extraBodyParams?: ExtraBodyParams): Promise<ApiResponse<void>> {
        if (serviceId === null || serviceId === undefined) {
            throw new ArgumentNullException('serviceId', 'updateServiceStatus');
        }
        const queryString = [].join('&');
        const requestUrl = '/services/{service_id}/update-status' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, ExtraBodyParams>(requestUrl.replace(`{${"service_id"}}`, encodeURIComponent(String(serviceId))), extraBodyParams);
        return new ApiResponse(response);
    }
}
