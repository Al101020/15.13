import {
    SERVICES_UPLOAD_SUCCESS,
    SERVICES_UPLOAD_REQUEST,
    SERVICES_UPLOAD_FAILURE,
    SERVICE_DETAILS_UPLOAD_REQUEST,
    SERVICE_DETAILS_UPLOAD_FAILURE,
    SERVICE_DETAILS_UPLOAD_SUCCESS,
} from './actionTypes'

export function servicesUploadRequest(search) {
    return { type: SERVICES_UPLOAD_REQUEST, payload: { search } }
}

export function servicesUploadSuccess(items) {
    return { type: SERVICES_UPLOAD_SUCCESS, payload: { items } }
}

export function servicesUploadFailure(error) {
    return { type: SERVICES_UPLOAD_FAILURE, payload: { error } }
}


export function serviceDetailsUploadRequest(searchDetails) {
    return { type: SERVICE_DETAILS_UPLOAD_REQUEST, payload: { searchDetails } }
}

export function serviceDetailsUploadSuccess(items) {
    return { type: SERVICE_DETAILS_UPLOAD_SUCCESS, payload: { itemDetails } }
}

export function serviceDetailsUploadFailure(error) {
    return { type: SERVICE_DETAILS_UPLOAD_FAILURE, payload: { errorDetails } }
}