export default class ResponseService {
    static success(res, data,message ) {
        return res.status(200).json({ data, message });
    }

    static error( res, error ) {
       
        return res.status(200).json({ error });
    }

    static update( res, data) {
        return res.status(201).json({ data });
    }

    static deleted( res, data ) {
        return res.status(202).json({ data });
    }


    static serverError(res, error) {
       
        return res.status(500).json({ error });
    }


    static unAuthorized( res ) {
        return res.status(403).json({ error: "Unauthorized access!" });
    }
}