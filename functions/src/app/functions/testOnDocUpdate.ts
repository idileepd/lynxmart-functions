import { onDocumentCreated } from "firebase-functions/v2/firestore";

export const testOnDocUpdate = onDocumentCreated("users/{uid}", async (event) => {
    console.log("called !!! API");
    if (event) {
        console.log("TEST DOC ADD", event.data?.data());
    }
    console.log("-------- DONE !! ");
});
