const errorHandler = (error, _req, res, _next) => {
    if (error.name === "SequelizeValidationError") {
        const error = {};
        error.errors.map(err => {
            errObj(err.path) = err.message
        })
        return res.status(400).json(errObj);
    }
    return res.status(500).json({
        message: error.message,
        error: error
    });
}

module.exports = errorHandler