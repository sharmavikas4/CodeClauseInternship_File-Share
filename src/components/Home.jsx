import {auth,storage} from "../config/firebase";
import { useState } from "react";
import {uploadBytes,ref,getDownloadURL} from "firebase/storage";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './Home.css'
function Home() {
  const [file,setFile] = useState(null);
  const [url,setUrl] = useState("");
  const [d,setD] = useState(false);
  const [isCopied,setIsCopied] = useState(false);
  const change = (e)=>{
    setFile(e.target.files[0]);
  }
  const gen = async()=>{
    console.log(file);
    const fileRefernce = ref(storage,`${auth?.currentUser?.uid}/${file.name}`);
    await uploadBytes(fileRefernce,file).then((res)=>{console.log(res)}).catch((err)=>{console.log(err.code)});
    await getDownloadURL(fileRefernce).then((u)=>{setUrl(u);setD(true);console.log(u)}).catch((err)=>{console.log(err.code)});
  }
  const copy = ()=>{
    navigator.clipboard.writeText(url);
    setIsCopied(true);
  }
  return (
    <div className="main">
    <h1 className="title">File Share</h1>
    <div className="input">
    <label htmlFor="inputFile" className="file">
    <UploadFileIcon className="icon" fontSize="large"/>
        <span className="select">{file?file.name:"Select File"}</span>
    </label>
      <input
       id="inputFile"
        type="file"
        onChange={change}
        style={{ display: 'none' }}
      /></div>
    <div className="urlGen">
    <button className="gen" onClick={gen}>Generate Link</button>
    {d&&<button className="copy">{isCopied?<span>Copied</span>:<ContentCopyIcon onClick={copy} />}</button>}
    </div>
    </div>

  )
}
export default Home