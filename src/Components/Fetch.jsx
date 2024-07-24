import React, { useContext, useReducer } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { progressContext } from './ProgressProvider';
import { Typography } from '@mui/material';
const initialState = {
  oauth:"",
  apiKey:"",
  workspaceId:""
}

const reducer = (state,action)=>{
switch(action.type){
  case "SET_OAUTH":
    return {...state, oauth:action.payload}
  case "API_KEY":
    return {...state, apiKey:action.payload}   
  case "WORKSPACE_ID":
    return {...state, workspaceId:action.payload}  
  case 'RESET':
    return initialState
  default:
    return state     
}
}
const Fetch = () => {

  const [state,dispatch] = useReducer(reducer,initialState);
  const {setProgress} = useContext(progressContext);

  async function handleSubmit(e){

    e.preventDefault();
    const { oauth, apiKey, workspaceId } = state;

    console.log(`This is oauth ${oauth}, this is api key ${apiKey}, this is workspace ${workspaceId}`);
    setProgress(50);

  }

  return (
    <Box sx={{margin:"0 auto"}}>
        <Typography variant='body1' style={{display:"flex",justifyContent:"center",paddingBottom:"15px"}}>
          Please enter you oauth token, api key and Workspace Id from Admin Console

        </Typography>
   <form onSubmit={handleSubmit}>
      <Box sx={{display:"flex",flexDirection:"column",gap:"20px"}}>


<TextField id="oauth" label="Please enter the oauth token" variant="outlined" required={true}  onChange={(e)=>dispatch({type:"SET_OAUTH",payload:e.target.value,})} />
<TextField id="key" label="Please enter API key" variant="outlined" required={true} onChange={(e)=>dispatch({type:"API_KEY",payload:e.target.value,})} />
<TextField id="workspace" label="Please enter the workspace ID" variant="outlined" required={true} onChange={(e)=>dispatch({type:"WORKSPACE_ID",payload:e.target.value,})}  />
      </Box>
  <div style={{display:"flex",justifyContent:"center",paddingTop:"20px"}}>

      <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
  </div>
      </form>


    </Box>
  )
}

export default Fetch