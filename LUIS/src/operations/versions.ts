/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/versionsMappers";
import * as Parameters from "../models/parameters";
import { LuisAuthoringContext } from "../luisAuthoringContext";

/** Class representing a Versions. */
export class Versions {
  private readonly client: LuisAuthoringContext;

  /**
   * Create a Versions.
   * @param {LuisAuthoringContext} client Reference to the service client.
   */
  constructor(client: LuisAuthoringContext) {
    this.client = client;
  }

  /**
   * Creates a new version using the current snapshot of the selected application version.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {VersionsCloneOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  cloneWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: Models.VersionsCloneOptionalParams): Promise<msRest.HttpOperationResponse<string>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        options
      },
      cloneOperationSpec);
  }

  /**
   * Gets the application versions info.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {VersionsListOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, options?: Models.VersionsListOptionalParams): Promise<msRest.HttpOperationResponse<Models.VersionInfo[]>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        options
      },
      listOperationSpec);
  }

  /**
   * Gets the version info.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VersionInfo>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        options
      },
      getOperationSpec);
  }

  /**
   * Updates the name or description of the application version.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {TaskUpdateObject} versionUpdateObject A model containing Name and Description of the
   * application.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  updateWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatus>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        versionUpdateObject,
        options
      },
      updateOperationSpec);
  }

  /**
   * Deletes an application version.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethodWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatus>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        options
      },
      deleteMethodOperationSpec);
  }

  /**
   * Exports a LUIS application to JSON format.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  exportMethodWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LuisApp>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        options
      },
      exportMethodOperationSpec);
  }

  /**
   * Imports a new version into a LUIS application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {LuisApp} luisApp A LUIS application structure.
   *
   * @param {VersionsImportMethodOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  importMethodWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, luisApp: Models.LuisApp, options?: Models.VersionsImportMethodOptionalParams): Promise<msRest.HttpOperationResponse<string>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        luisApp,
        options
      },
      importMethodOperationSpec);
  }

  /**
   * Deleted an unlabelled utterance.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {string} utterance The utterance text to delete.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteUnlabelledUtteranceWithHttpOperationResponse(azureRegion: Models.AzureRegions, appId: string, versionId: string, utterance: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatus>> {
    return this.client.sendOperationRequest(
      {
        azureRegion,
        appId,
        versionId,
        utterance,
        options
      },
      deleteUnlabelledUtteranceOperationSpec);
  }

  /**
   * Creates a new version using the current snapshot of the selected application version.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {VersionsCloneOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  clone(azureRegion: Models.AzureRegions, appId: string, versionId: string): Promise<string>;
  clone(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: Models.VersionsCloneOptionalParams): Promise<string>;
  clone(azureRegion: Models.AzureRegions, appId: string, versionId: string, callback: msRest.ServiceCallback<string>): void;
  clone(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: Models.VersionsCloneOptionalParams, callback: msRest.ServiceCallback<string>): void;
  clone(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: Models.VersionsCloneOptionalParams, callback?: msRest.ServiceCallback<string>): any {
    return msRest.responseToBody(this.cloneWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, options, callback);
  }

  /**
   * Gets the application versions info.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {VersionsListOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.VersionInfo[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(azureRegion: Models.AzureRegions, appId: string): Promise<Models.VersionInfo[]>;
  list(azureRegion: Models.AzureRegions, appId: string, options: Models.VersionsListOptionalParams): Promise<Models.VersionInfo[]>;
  list(azureRegion: Models.AzureRegions, appId: string, callback: msRest.ServiceCallback<Models.VersionInfo[]>): void;
  list(azureRegion: Models.AzureRegions, appId: string, options: Models.VersionsListOptionalParams, callback: msRest.ServiceCallback<Models.VersionInfo[]>): void;
  list(azureRegion: Models.AzureRegions, appId: string, options?: Models.VersionsListOptionalParams, callback?: msRest.ServiceCallback<Models.VersionInfo[]>): any {
    return msRest.responseToBody(this.listWithHttpOperationResponse.bind(this), azureRegion, appId, options, callback);
  }

  /**
   * Gets the version info.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.VersionInfo} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.VersionInfo} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(azureRegion: Models.AzureRegions, appId: string, versionId: string): Promise<Models.VersionInfo>;
  get(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: msRest.RequestOptionsBase): Promise<Models.VersionInfo>;
  get(azureRegion: Models.AzureRegions, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.VersionInfo>): void;
  get(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VersionInfo>): void;
  get(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VersionInfo>): any {
    return msRest.responseToBody(this.getWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, options, callback);
  }

  /**
   * Updates the name or description of the application version.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {TaskUpdateObject} versionUpdateObject A model containing Name and Description of the
   * application.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.OperationStatus} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.OperationStatus} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  update(azureRegion: Models.AzureRegions, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject): Promise<Models.OperationStatus>;
  update(azureRegion: Models.AzureRegions, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject, options: msRest.RequestOptionsBase): Promise<Models.OperationStatus>;
  update(azureRegion: Models.AzureRegions, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  update(azureRegion: Models.AzureRegions, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  update(azureRegion: Models.AzureRegions, appId: string, versionId: string, versionUpdateObject: Models.TaskUpdateObject, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationStatus>): any {
    return msRest.responseToBody(this.updateWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, versionUpdateObject, options, callback);
  }

  /**
   * Deletes an application version.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.OperationStatus} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.OperationStatus} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string): Promise<Models.OperationStatus>;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatus>;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationStatus>): any {
    return msRest.responseToBody(this.deleteMethodWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, options, callback);
  }

  /**
   * Exports a LUIS application to JSON format.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.LuisApp} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.LuisApp} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  exportMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string): Promise<Models.LuisApp>;
  exportMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: msRest.RequestOptionsBase): Promise<Models.LuisApp>;
  exportMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, callback: msRest.ServiceCallback<Models.LuisApp>): void;
  exportMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LuisApp>): void;
  exportMethod(azureRegion: Models.AzureRegions, appId: string, versionId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LuisApp>): any {
    return msRest.responseToBody(this.exportMethodWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, options, callback);
  }

  /**
   * Imports a new version into a LUIS application.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {LuisApp} luisApp A LUIS application structure.
   *
   * @param {VersionsImportMethodOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {string} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  importMethod(azureRegion: Models.AzureRegions, appId: string, luisApp: Models.LuisApp): Promise<string>;
  importMethod(azureRegion: Models.AzureRegions, appId: string, luisApp: Models.LuisApp, options: Models.VersionsImportMethodOptionalParams): Promise<string>;
  importMethod(azureRegion: Models.AzureRegions, appId: string, luisApp: Models.LuisApp, callback: msRest.ServiceCallback<string>): void;
  importMethod(azureRegion: Models.AzureRegions, appId: string, luisApp: Models.LuisApp, options: Models.VersionsImportMethodOptionalParams, callback: msRest.ServiceCallback<string>): void;
  importMethod(azureRegion: Models.AzureRegions, appId: string, luisApp: Models.LuisApp, options?: Models.VersionsImportMethodOptionalParams, callback?: msRest.ServiceCallback<string>): any {
    return msRest.responseToBody(this.importMethodWithHttpOperationResponse.bind(this), azureRegion, appId, luisApp, options, callback);
  }

  /**
   * Deleted an unlabelled utterance.
   *
   * @param {AzureRegions} azureRegion Supported Azure regions for Cognitive Services endpoints.
   * Possible values include: 'westus', 'westeurope', 'southeastasia', 'eastus2', 'westcentralus',
   * 'westus2', 'eastus', 'southcentralus', 'northeurope', 'eastasia', 'australiaeast', 'brazilsouth'
   *
   * @param {string} appId The application ID.
   *
   * @param {string} versionId The version ID.
   *
   * @param {string} utterance The utterance text to delete.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.OperationStatus} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.OperationStatus} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteUnlabelledUtterance(azureRegion: Models.AzureRegions, appId: string, versionId: string, utterance: string): Promise<Models.OperationStatus>;
  deleteUnlabelledUtterance(azureRegion: Models.AzureRegions, appId: string, versionId: string, utterance: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatus>;
  deleteUnlabelledUtterance(azureRegion: Models.AzureRegions, appId: string, versionId: string, utterance: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteUnlabelledUtterance(azureRegion: Models.AzureRegions, appId: string, versionId: string, utterance: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  deleteUnlabelledUtterance(azureRegion: Models.AzureRegions, appId: string, versionId: string, utterance: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationStatus>): any {
    return msRest.responseToBody(this.deleteUnlabelledUtteranceWithHttpOperationResponse.bind(this), azureRegion, appId, versionId, utterance, options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const cloneOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/clone",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: [
      "options",
      "versionCloneObject"
    ],
    mapper: Mappers.TaskUpdateObject
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "luis/api/v2.0/apps/{appId}/versions",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId
  ],
  queryParameters: [
    Parameters.skip,
    Parameters.take
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VersionInfo"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VersionInfo
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "versionUpdateObject",
    mapper: {
      ...Mappers.TaskUpdateObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const exportMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/export",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LuisApp
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const importMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "luis/api/v2.0/apps/{appId}/versions/import",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId
  ],
  queryParameters: [
    Parameters.versionId1
  ],
  requestBody: {
    parameterPath: "luisApp",
    mapper: {
      ...Mappers.LuisApp,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "String"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteUnlabelledUtteranceOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "luis/api/v2.0/apps/{appId}/versions/{versionId}/suggest",
  urlParameters: [
    Parameters.azureRegion,
    Parameters.appId,
    Parameters.versionId0
  ],
  requestBody: {
    parameterPath: "utterance",
    mapper: {
      required: true,
      serializedName: "utterance",
      type: {
        name: "String"
      }
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
