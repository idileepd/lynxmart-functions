import { db } from "../config/admin";
import { AuthBlockingEvent } from "firebase-functions/v2/identity";

export const createUserDoc = async (event: AuthBlockingEvent) => {
    console.log("create User record !!");
    const { uid, email } = event.data;
    const doc = await db.doc(`/users/${uid}`).create({ uid, email, roles: ["USER"] });
    console.log("--- CREATED USER DOC -----", doc);
};
