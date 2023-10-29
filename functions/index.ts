import { createUserDoc } from "./src/app";
import { beforeUserCreated } from "firebase-functions/v2/identity";

export const onUserCreated = beforeUserCreated(createUserDoc);
