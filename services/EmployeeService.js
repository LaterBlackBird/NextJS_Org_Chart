import {doDelete, doGet, doPost, doPut} from "./ApiService";

const serviceUrl = "/employees"

export const getEmployees = () => {
    return doGet(serviceUrl)
}

export const getArchivedEmployees = () => {
    return doGet(`${serviceUrl}/archives`);
}

export const getEmployeesByManagerId = (managerId) => {
    return doGet(`${serviceUrl}/manager/${managerId}`)
}

export const getEmployeeById = (employeeId) => {
    return doGet(`${serviceUrl}/${employeeId}`)
}

export const createEmployee = (employee) => {
    return doPost(serviceUrl, employee);
}

export const updateEmployee = (employee, id) => {
    return doPut(`${serviceUrl}/${id}`, employee)
}

export const deleteEmployee = (employeeId) => {
    doDelete(`${serviceUrl}/${employeeId}`)
}

export const getTopEmployee = () => {
    return doGet(`${serviceUrl}/noManager`)
}
