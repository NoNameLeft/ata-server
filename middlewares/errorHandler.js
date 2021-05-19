function errorHandler(err, req, res, next) {
    if (!err) return;

    res.json({ error: err })
}

export default errorHandler;