import {callAPI} from "./ApiHook"


export const useRequestAPIHooks = () => {
    
    
    const INCIDENTS = 'Incidents';
    const ENUMS = 'GetEnums';
    const USERS = 'GetUsers';

    return {
        createIncident: (body:any) => callAPI('POST',INCIDENTS,body),
        updateIncident: (body:any) => callAPI('PUT',INCIDENTS,body),
        getIncidents: () => callAPI('GET', INCIDENTS),
        getEnums:()=>callAPI('GET', ENUMS),
        getUsers:()=>callAPI('GET', USERS),
    };
  };    
