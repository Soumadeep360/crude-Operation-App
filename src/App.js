import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import {createNewInfo} from './jqlFunctions/instruction';
import awsconfig from './aws-exports';
import {Amplify, Auth, Storage } from 'aws-amplify';
import { createNewCommentData, deleteTask, updateCommentData, getTaskbyId } from './jqlFunctions/TaskCommentsMapping';

/*Amplify.configure({
  Auth: {
        identityPoolId: 'us-east-1:af6ffad4-71cc-472c-a04a-4a5ebe558834', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-1', // REQUIRED - Amazon Cognito Region
        // userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
        // userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        AWSS3: {
            bucket: 'docsxyz170911-staging', //REQUIRED -  Amazon S3 bucket name
            region: 'us-east-1', //OPTIONAL -  Amazon service region
        }
    },

    myAppConfig : {
      
      'aws_appsync_graphqlEndpoint': "https://xw6fycalcbhnfje2o67djkat3e.appsync-api.us-east-1.amazonaws.com/graphql",
      'aws_appsync_region': 'us-east-1',
      'aws_appsync_authenticationType': 'API_KEY',
      'aws_appsync_apiKey': "da2-gqbt2cbmbndprga3kyaadlh5ba",
      
  }
});*/

Amplify.configure(awsconfig)


function App() {
  const dnTxtFile = async() => {
    const element = document.createElement("a");
    //console.log(element);
    const file = new Blob([document.getElementById("input").value],{type : "text/plain"});
    //console.log(file);
    const a =element.href = URL.createObjectURL(file);
    //console.log(a);
    const b=element.download = "myFile.txt";
    //console.log(b);
    //const dataReturn = async() => {
      const data = await Storage.put(filename,content, {
        contentType: "text/plain", // contentType is optional
      });
      console.log(data);
    //}
    const c=document.body.appendChild(element);
    //console.log(c);
    const d=element.click();
    //console.log(d);
    const get = await Storage.get(data.key);
    console.log(get);
  }
  
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const data = await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
      console.log("data is", data)
      const get = await Storage.get(data.key);
      console.log(get);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  const cdata = {
    commentPath: "xyabb",
    filePath: "xtz",
    orderID: "abc"
  }
  
  //<input type="file" onChange={onChange} />;
  
  //const hardData={phoneNumber:"8888888888",name:"soumadeep"};
  const [filename,setfilename]=useState(null);
  const [content,setcontent]=useState(null);
  return (
    <div className="App">
      <h1>S3 test</h1>
      <input type="file" onChange={onChange} /><br/><br/>


      <input id ="input" onChange={(Var)=>setfilename(Var.target.value)}/>
      <input id ="input" onChange={(Var1)=>setcontent(Var1.target.value)}/>
      <button onClick={dnTxtFile}>send text to s3</button><br/><br/>
      {/*<button onClick={()=>createNewInfo(hardData)}>create new info</button><br/><br/>*/}
      <h1>order task</h1>
      <button onClick={() => createNewCommentData(cdata)}>Create new Task</button><br/><br/>
      <button onClick={() => updateCommentData()}>update new Task</button><br/><br/>


      
    </div>
  );
}

export default App;
