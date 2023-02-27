import * as yup from 'yup';

const requiredStringField = yup.string().trim().required('Required Field');
const requiredNumberField = yup.number().required('Required Field');

export const registerIncidentSchema = yup.object().shape({

    PersonInvolved: requiredStringField,
    IncidentDate: yup.date().required('Required Field'),
    Location: requiredStringField,
    IncidentType: requiredStringField,
    InjuryType:  requiredStringField,
    TreatmentType: requiredStringField,
    Description: requiredStringField,
    AssignedTo: requiredNumberField,
    IncidentStatus: requiredNumberField,
    OtherInjuryType: yup.string()
        .when('InjuryType', {
            is: "2" ,
            then: (schema)=>schema.required('Required when Injury Type "Other" is selected')
        }),
        OtherTreatmentType: yup.string()
        .when('TreatmentType', {
        is: "1", 
        then: (schema) => schema.required('Required when Treatment Type "Other" is selected'),
    }),
      

});
