import {doDelete, doGet, doPost, doPut} from "./ApiService";

const serviceUrl = "/departments"

export const getActiveDepartments = () => {
    return doGet(serviceUrl)
}

export const getArchivedDepartments = () => {
    return doGet(`${serviceUrl}/archives`);
}

export const getDepartmentById = (departmentId) => {
    return doGet(`${serviceUrl}/${departmentId}`)
}

export const createDepartment = (department) => {
    return doPost(serviceUrl, department);
}

export const updateDepartment = (id, department) => {
    return doPut(`${serviceUrl}/${id}`, department)
}

export const deleteDepartment = (departmentId) => {
    return doDelete(`${serviceUrl}/${departmentId}`)
}
