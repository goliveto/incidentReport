import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface DataEnumState {
  Id:number;
  Label: string;
  Order: number;
  Is_Active: boolean;
}

export interface EnumsAppState {
  data: {
    IncidentStatus: DataEnumState[];
    IncidentType: DataEnumState[];
    InjuryType: DataEnumState[] ;
    TreatmentType: DataEnumState[];
  };
}

const initialState:EnumsAppState = {
  data: {
    IncidentStatus: [],
    IncidentType: [],
    InjuryType: [] ,
    TreatmentType: []
  }
}

const enumSlice = createSlice({
    name: 'enumsDropdown',
    initialState: initialState,
    reducers: {
      updateEnums (state, action:PayloadAction<EnumsAppState>) {
        state.data= { 
           IncidentStatus: action.payload.data.IncidentStatus?.filter((x:DataEnumState)=>x.Is_Active).sort((a:DataEnumState,b:DataEnumState)=>a.Order-b.Order),
           IncidentType : action.payload.data.IncidentType?.filter((x:DataEnumState)=>x.Is_Active).sort((a:DataEnumState,b:DataEnumState)=>a.Order-b.Order),
           InjuryType : action.payload.data.InjuryType?.filter((x:DataEnumState)=>x.Is_Active).sort((a:DataEnumState,b:DataEnumState)=>a.Order-b.Order),
           TreatmentType : action.payload.data.TreatmentType?.filter((x:DataEnumState)=>x.Is_Active).sort((a:DataEnumState,b:DataEnumState)=>a.Order-b.Order) 
        };
      },
    },
  }) 

  export const { updateEnums } = enumSlice.actions;
  export default enumSlice.reducer;