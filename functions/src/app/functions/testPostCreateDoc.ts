import { v4 as uuidv4 } from "uuid";
import { Request, Response, logger } from "firebase-functions";
import { db } from "../config/admin";

export const testPostCreateDoc = async (req: Request, response: Response) => {
    console.log(req.body);
    const id = uuidv4();
    logger.info("Hello logs!", { structuredData: true });
    const doc = await db.doc(`/users/${id}`).create({ uid: id });
    console.log(doc);
    response.send(doc);
};
