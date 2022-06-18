import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import {createNewInfo} from './jqlFunctions/instruction';
import awsconfig from './aws-exports';
import Amplify, { Auth, Storage } from 'aws-amplify';

Amplify.configure({
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
    }
});



function App() {
  const dnTxtFile = () => {
    const element = document.createElement("a");
    //console.log(element);
    const file = new Blob([document.getElementById("input").value],{type : "text/plain"});
    //console.log(file);
    const a =element.href = URL.createObjectURL(file);
    //console.log(a);
    const b=element.download = "myFile.txt";
    //console.log(b);
    const {data} =  Storage.put(filename,content, {
      contentType: "text/plain", // contentType is optional
    });
    console.log("data is",data);
    const c=document.body.appendChild(element);
    //console.log(c);
    const d=element.click();
    //console.log(d);
  }
  
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const data = await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
      console.log("data is", data)
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  
  <input type="file" onChange={onChange} />;
  
  const hardData={phoneNumber:"8888888888",name:"soumadeep"};
  const [filename,setfilename]=useState(null);
  const [content,setcontent]=useState(null);
  return (
    <div className="App">
      <h1>S3 test</h1>

      <input id ="input" onChange={(Var)=>setfilename(Var.target.value)}/>
      <input id ="input" onChange={(Var1)=>setcontent(Var1.target.value)}/>
      <button onClick={dnTxtFile}>send text to s3</button><br/><br/>
      {/*<button onClick={()=>createNewInfo(hardData)}>create new info</button><br/><br/>*/}
      <input type="file" onChange={onChange} />;


      
    </div>
  );
}

export default App;
