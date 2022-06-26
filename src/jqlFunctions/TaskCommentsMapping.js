import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import {Amplify, Auth, Storage } from 'aws-amplify';

export const createNewCommentData = async (data) => {
    try {
        const addCommentData = await API.graphql({ query: mutations.createTaskCommentsMapping, variables: { input: data } })
        console.log("Notif has been added", addCommentData);
    } catch (error) {
        console.log("error in creating ", error);
        throw new Error(error)

    }
}

export const updateCommentData = async (data) => {
    try {
        const updateCommentData = await API.graphql({ query: mutations.updateTaskCommentsMapping, variables: { input: data } })
        console.log("Notif has been added", updateCommentData);
    } catch (error) {
        console.log("error in creating ", error);
        throw new Error(error)

    }
}

export const deleteCommentData = async (data) => {
    try {
        const deleteCommentData = await API.graphql({ query: mutations.deleteTaskCommentsMapping, variables: { input: data } })
        console.log("Notif has been added", deleteCommentData);
    } catch (error) {
        console.log("error in creating ", error);
        throw new Error(error)

    }
}

export const listCommentsByFile = async (data) =>{
    try{
        const listComment=await API.graphql({query:queries.commentByFilePath, variables: {filePath: data.filePath }});
        console.log(listComment);
        const listCommentItems = listComment.data.commentByFilePath.items;
        //const keyRetrieving = listComment.split("public/")
        for(var i=0 ; i<listCommentItems.length ; i++)
        {
            //console.log(i)
            //console.log(listCommentItems[i].commentPath)
            const uri = listCommentItems[i].commentPath
            const keyRetrieving = uri.split("public/")
            const key= keyRetrieving[1]
            //console.log(key)
            const result = await Storage.get(key, { download: true });
            result.Body.text().then(string => { 
                console.log(string)
              });
            /*const toBeDownloadedData = {
                c: listItems[i].email,                  
                }
            const deleteTheUser = await API.graphql({ query: mutations.deleteUser, variables: { input: deleteList} });
            console.log("Deleted User is ", deleteTheUser.data.deleteUser);*/
        }
    }catch(error){
        console.log("Error in list by status",error)
        throw new Error(error)
    }
}