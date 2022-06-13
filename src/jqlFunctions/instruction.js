/*import * as Mutations from '../graphql/mutations';
import {API} from 'aws-amplify';



export const createNewInfo  = async (infoData) => {
    
    try{
        const addInfo = await API.graphql({query:Mutations.createInstruction,variables:{input:infoData}})
        console.log("the information has been added",addInfo.data.createInstruction);
    }
    catch(error){
     console.log("error info:",error);
    }
}*/
 