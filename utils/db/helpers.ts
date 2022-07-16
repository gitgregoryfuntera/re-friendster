import { doc, DocumentReference, getDoc } from "firebase/firestore";
import { db } from ".";


const getReferenceDoc = async (documentReference: DocumentReference) => {
    const refData = await documentReference;
    const refDataId = refData.id;
    const collectionName = refData.path.split('/')[0];
    const refDoc = await doc(db, collectionName, refDataId);
    const refDocSnap = await getDoc(refDoc);
    return {
        id: refDataId,
        ...refDocSnap.data()
    };
};

export {
    getReferenceDoc
}