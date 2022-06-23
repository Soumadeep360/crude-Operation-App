import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';

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