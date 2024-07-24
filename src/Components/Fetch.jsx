import React, { useContext, useReducer } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { progressContext } from './ProgressProvider';
import { Typography } from '@mui/material';
import axios from 'axios';
const initialState = {
  oauth:"",
  apiKey:"",
  workspaceId:"",
  tenant: ""
}

const reducer = (state,action)=>{
switch(action.type){
  case "SET_OAUTH":
    return {...state, oauth:action.payload}
  case "API_KEY":
    return {...state, apiKey:action.payload}   
  case "WORKSPACE_ID":
    return {...state, workspaceId:action.payload}  
  case 'TENANT':
    return  {...state, tenant:action.payload}  
  default:
    return state     
}
}
const Fetch = () => {

  const [state,dispatch] = useReducer(reducer,initialState);
  const {setProgress} = useContext(progressContext);

  async function handleSubmit(e){

    e.preventDefault();
    const { oauth, apiKey, workspaceId,tenant } = state;

    const requestData = {
      tenant: state.tenant,
      bearerToken: state.oauth,
      apiKey: state.apiKey,
      workspaceId: state.workspaceId
  };

    console.log(`This is oauth ${oauth}, this is api key ${apiKey}, this is workspace ${workspaceId} this is tenant ${tenant}`);
    try{
      const response = await axios.post(`http://localhost:3000/fetch-activities`,{
        method: "POST",
        headers:{
          'Content-Type': "application/json" 
        },

        body: JSON.stringify(requestData)
      })

      const data = await response.json();
      setProgress(50);
    }
    catch(err){
      console.error('Error fetching activities:', err);
    }

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
<TextField id="tenant" label="Please enter the Tenant name" variant="outlined" required={true} onChange={(e)=>dispatch({type:"TENANT",payload:e.target.value,})}  />
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