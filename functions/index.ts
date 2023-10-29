// import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
// import * as cors from "cors";

// import express = require("express");
// import { RequestHandler } from "express";

import * as serviceAccount from "./src/config.json";
import { onRequest } from "firebase-functions/v2/https";
import { onDocumentCreated } from "firebase-functions/v2/firestore";

import { logger } from "firebase-functions";

import { v4 as uuidv4 } from "uuid";


const ServiceAccountPARAMS = {
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

admin.initializeApp({
    credential: admin.credential.cert(ServiceAccountPARAMS),
    storageBucket: `${serviceAccount.project_id}.appspot.com`,
});

const db = admin.firestore();

export const signupUser = onRequest(async (req, response) => {
    console.log(req.body);
    const id = uuidv4();
    logger.info("Hello logs!", { structuredData: true });
    const doc = await db.doc(`/users/${id}`).create({ uid: id });
    console.log(doc);
    response.send(doc);
});

export const testDocCreate = onDocumentCreated("users/{uid}", async (event) => {
    console.log("called !!! API");
    if (event) {
        console.log("TEST DOC ADD", event.data?.data());
    }
    console.log("-------- DONE !! ");
});
