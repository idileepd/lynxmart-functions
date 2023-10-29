import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { testOnDocUpdate, testPostCreateDoc } from "./src/app";

export const signupUser = onRequest(testPostCreateDoc);
export const testDocCreate = onDocumentCreated("users/{uid}", testOnDocUpdate);
