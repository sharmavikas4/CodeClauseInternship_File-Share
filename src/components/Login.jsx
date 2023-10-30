import {app,auth,googleProvider,githubProvider,facebookProvider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Login.css';
import { useState } from "react";
function Login(props) {
  const [message,setMessage] = useState("");
  const navigate = useNavigate();
  const google = async ()=>{
    await signInWithPopup(auth,googleProvider).then((res)=>{
        if (auth?.currentUser){
            props.login(true);
            navigate("/");
        } }).catch((err)=>{
          if (err.code=="auth/account-exists-with-different-credential"){
            setMessage("Please log in with the authentication provider with which you logged in earlier.");
          }
          else{
            console.log(err.code);
          }
        });
  }
  const github = async ()=>{
    await signInWithPopup(auth,githubProvider).then((res)=>{
        if (auth?.currentUser){
            props.login(true);
            navigate("/");
        } }).catch((err)=>{
          if (err.code=="auth/account-exists-with-different-credential"){
            setMessage("Please log in with the authentication provider with which you logged in earlier.");
          }
          else{
            console.log(err.code);
          }
        });
  }
  const facebook = async ()=>{
    await signInWithPopup(auth,facebookProvider).then((res)=>{
        if (auth?.currentUser){
            props.login(true);
            navigate("/");
        } }).catch((err)=>{
          if (err.code=="auth/account-exists-with-different-credential"){
            setMessage("Please log in with the authentication provider with which you logged in earlier.");
          }
          else{
            console.log(err.code);
          }
        });
  }
  return (
    <div className="login">
        <h1 className="t">Login to continue...</h1>
        <button onClick={google} className="google">Login with Google <GoogleIcon className="googleIcon" fontSize="small"/></button>
        <button onClick={github} className="github">Login with GitHub <GitHubIcon className="githubIcon" fontSize="small"/></button>
        <button onClick={facebook} className="facebook">Login with Facebook <FacebookIcon className="facebookIcon" fontSize="small"/></button>
        <p>{message&&<><span className="star">*</span>{message}</>}</p>
    </div>
  )
}
export default Login