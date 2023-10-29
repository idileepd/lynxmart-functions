import { FirestoreEvent, QueryDocumentSnapshot } from "firebase-functions/v2/firestore";

export const testOnDocUpdate = async (
    event: FirestoreEvent<QueryDocumentSnapshot | undefined, {
        uid: string;
    }>
) => {
    console.log("called !!! API");
    if (event) {
        console.log("TEST DOC ADD", event.data?.data());
    }
    console.log("-------- DONE !! ");
};
