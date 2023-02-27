import {callAPI} from "./ApiHook"


export const useRequestAPIHooks = () => {
    
    
    const INCIDENTS = 'Incidents';
    const ENUMS = 'GetEnums';
    const USERS = 'GetUsers';

    return {
        // createIncident: () => callApi((status, role), config),
        getIncidents: () => callAPI('GET', INCIDENTS),
        getEnums:()=>callAPI('GET', ENUMS),
        getUsers:()=>callAPI('GET', USERS),
    };
  };    

  