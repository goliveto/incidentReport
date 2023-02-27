
import React from 'react'
import { useAppSelector } from './hooks';

export const useConstantsHooks = () => {
    
    const userList:Map<number,string> = new Map(useAppSelector((state)=>state.userList.userList).map(x=>[x.Id,x.Name]));
    const incidentType:Map<number,string> = new Map(useAppSelector((state)=>state.enumsDropdown.data.IncidentType).map(x=>[x.Id,x.Label]));
    const treatmentType:Map<number,string> = new Map(useAppSelector((state)=>state.enumsDropdown.data.TreatmentType).map(x=>[x.Id,x.Label]));
    const incidentStatus:Map<number,string> = new Map(useAppSelector((state)=>state.enumsDropdown.data.IncidentStatus).map(x=>[x.Id,x.Label]));
    const injuryType:Map<number,string> = new Map(useAppSelector((state)=>state.enumsDropdown.data.InjuryType).map(x=>[x.Id,x.Label]));

  return ( {
        userList,
        incidentStatus,
        incidentType,
        treatmentType,
        injuryType
    }

  )
}
