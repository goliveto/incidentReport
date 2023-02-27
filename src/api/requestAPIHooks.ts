import {callAPI} from "./ApiHook"


export const useRequestAPIHooks = () => {
    
    
    const INCIDENTS = 'Incidents';
    const ENUMS = 'GetEnums';
    const USERS = 'GetUsers';

    return {
        createIncident: (body:any) => callAPI('POST',INCIDENTS,body),
        updateIncident: (body:any) => callAPI('PUT',INCIDENTS,body),
        getIncidents: () => callAPI('GET', INCIDENTS),
        getIncident: (incidentId:number) => callAPI('GET', INCIDENTS+'/'+incidentId),
        removeIncident:(incidentId:number)=> callAPI('DELETE', INCIDENTS+'/'+incidentId),
        getEnums:()=>callAPI('GET', ENUMS),
        getUsers:()=>callAPI('GET', USERS),
    };
  };    
