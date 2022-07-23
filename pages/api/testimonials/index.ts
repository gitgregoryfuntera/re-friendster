// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from "firebase-admin";
import { collection, DocumentData, DocumentReference, getDocs, QuerySnapshot } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { API_METHODS } from "../../../utils/constants";
import { db } from "../../../utils/db";
import { getReferenceDoc } from "../../../utils/db/helpers";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { method } = req;

  if (method === API_METHODS.GET) {
    const querySnapshot = await getDocs(collection(db, "testimonials"));
    // let data: any = [];
    // querySnapshot.forEach(async (doc) => {
    //     const testimonialUserRefId = doc.data().testimonialUserIdRef;
    //     // const testimonialUserRef = await getReferenceDoc(testimonialUserRefId);
    //     let testimonialData = {
    //         id: doc.id,
    //         // testimonialUserRef,
    //         ...doc.data(),
    //     }
    //     data.push(testimonialData);
    // });
    const data: any = await serializeSnapshot(querySnapshot);
    res.status(200).json(data);
  }
};

const serializeSnapshot =  async (querySnapshot: QuerySnapshot<DocumentData>) => {
    return new Promise((resolve, reject) => {
        let data: any = [];
        querySnapshot.forEach(async (doc) => {
            const documentReference: DocumentReference = doc.data().testimonialUserIdRef;
            console.log("🚀 ~ file: index.ts ~ line 43 ~ querySnapshot.forEach ~ documentReference", documentReference);
            
            let testimonialData = {
                id: doc.id,
                ...doc.data()
            }
            data.push(testimonialData);
        });
        resolve(data);
    });
}

export default handler;
