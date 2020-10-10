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


import { Action } from './action';
import { ActionStatus } from './action-status';
import { Environment } from './environment';
import { Project } from './project';
import { Server } from './server';
import { ServiceInitialState } from './service-initial-state';
import { User } from './user';

/**
 * 
 * @export
 * @interface Service
 */
export interface Service {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof Service
     */
    id: number;
    /**
     * The service name
     * @type {string}
     * @memberof Service
     */
    name: string;
    /**
     * Formatted/human readable version of the service name
     * @type {string}
     * @memberof Service
     */
    name_human_readable?: string;
    /**
     * The service current installed version
     * @type {string}
     * @memberof Service
     */
    version?: string | null;
    /**
     * Indicates if the service was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof Service
     */
    auto_generated: boolean;
    /**
     * Indicates if the service is marked for start automatically on operating system boot
     * @type {boolean}
     * @memberof Service
     */
    auto_start: boolean;
    /**
     * 
     * @type {ServiceInitialState}
     * @memberof Service
     */
    initial_state: ServiceInitialState;
    /**
     * A text describing the service, provided by the service author
     * @type {string}
     * @memberof Service
     */
    description?: string | null;
    /**
     * 
     * @type {ActionStatus}
     * @memberof Service
     */
    status?: ActionStatus;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Service
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Service
     */
    updated_at: string;
    /**
     * The list of related actions
     * @type {Array<Action>}
     * @memberof Service
     */
    actions?: Array<Action>;
    /**
     * 
     * @type {Array<Environment>}
     * @memberof Service
     */
    environments?: Array<Environment>;
    /**
     * 
     * @type {User}
     * @memberof Service
     */
    created_by_user?: User;
    /**
     * 
     * @type {Project}
     * @memberof Service
     */
    project?: Project;
    /**
     * 
     * @type {Array<Server>}
     * @memberof Service
     */
    servers?: Array<Server>;
}

