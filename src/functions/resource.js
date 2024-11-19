const validate = (schema) => (req,res, next) => {
    try {
        schema.parse(
                {
                    body: req.body,
                    query: req.query,
                    params: req.params
                }
        );

        return next()
    } catch (e) {
        return res.status(200).send(e.errors);
    }
}

export default validate;