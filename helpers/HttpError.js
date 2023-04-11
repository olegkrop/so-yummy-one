const errorMessageList = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not found',
    409: 'Conflict'
}

const HttpBaseError = (status) => {
    const error = new Error(errorMessageList[status]);
    error.status = status;
    return error;
}

const HttpError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
}

module.exports = { HttpBaseError, HttpError };