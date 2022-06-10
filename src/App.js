import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createNewInfo} from './jqlFunctions/instruction';
import awsconfig from './aws-exports';
import Amplify, { Auth, Storage } from 'aws-amplify';

Amplify.configure({
    Storage: {
        AWSS3: {
            bucket: 'docsxyz', //REQUIRED -  Amazon S3 bucket name
            region: 'us-east-1', //OPTIONAL -  Amazon service region
        }
    }
});



function App() {
  const dnTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value],{type : "text/plain"});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); 
    element.click();
  }
  
  async function onChange(e) {
    const file = e.target.files[0];
    try {
      await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
  
  <input type="file" onChange={onChange} />;

  const hardData={phoneNumber:"8888888888",name:"soumadeep"};
  return (
    <div className="App">
      <h1>S3 test</h1>

      <input id="input"/>
      <button onClick={dnTxtFile}>DN txt</button><br/><br/>
      <button onClick={()=>createNewInfo(hardData)}>create new info</button><br/><br/>
      <input type="file" onChange={onChange} />;


      
    </div>
  );
}

export default App;
