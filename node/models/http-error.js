class HttpError extends Error {
  constructor(message, errrorCode) {
    super(message); // Add a 'message' property
    this.code = errrorCode; // Adds a 'code' property
  }
}

module.exports = HttpError;
