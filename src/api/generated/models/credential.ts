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



/**
 * 
 * @export
 * @interface Credential
 */
export interface Credential {
    /**
     * The unique cloud provider credential id
     * @type {number}
     * @memberof Credential
     */
    id: number;
    /**
     * The provider that this credential belongs to
     * @type {number}
     * @memberof Credential
     */
    provider_id: number;
    /**
     * The user id that created the credential
     * @type {number}
     * @memberof Credential
     */
    created_by: number;
    /**
     * The name of the credential
     * @type {string}
     * @memberof Credential
     */
    name: string;
    /**
     * Determines if the credential is current activated
     * @type {boolean}
     * @memberof Credential
     */
    active?: boolean;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Credential
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Credential
     */
    updated_at?: string;
}

