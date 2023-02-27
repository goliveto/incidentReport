import { DataGridProps, Select, Button,  Dialog,
  DialogTrigger,
  DialogSurface, 
  DataGrid, TableColumnDefinition, createTableColumn, DataGridHeader, DataGridBody, DataGridRow, DataGridHeaderCell,DataGridCell} from '@fluentui/react-components';
import React from 'react'
import { useRequestAPIHooks } from '../api/requestAPIHooks';
import { useConstantsHooks } from '../app/useConstantsHooks';

import CreateIncidentPage from './CreateIncidentPage';

type Item = {
  Id: number;
  IncidentDate: Date;
  IncidentType: number;
  PersonInvolved : string;
  TreatmentType: number;
  Location: string;
  AssignedTo: number;
  IncidentStatus: number;
  ReportedBy: number;
  Description: string
}

const ListIncidentPage : React.FC = () =>  {
  const [sortState, setSortState] = React.useState<Parameters<NonNullable<DataGridProps["onSortChange"]>>[1]>({
        sortColumn: "Id",
        sortDirection: "ascending",
      });
  const onSortChange: DataGridProps["onSortChange"] = (e, nextSortState) => { setSortState(nextSortState);};

  const [items, setItems] = React.useState([]);
  
  const {incidentType, treatmentType, userList, incidentStatus } = useConstantsHooks();  

  const {getIncidents} = useRequestAPIHooks();
  React.useEffect(() => {
    getIncidents().then(setItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateOption = (listMap : Map<number,string>) => Array.from(listMap, ([key, value]) => ({key,value})).map(x => (<option value={x.key}>{x.value}</option>))


  const columns: TableColumnDefinition<Item>[] = [ 
    createTableColumn<Item>({columnId: 'Id', renderHeaderCell: () => ('Incident'), renderCell: (item)=> (<text className='listItemId'>{item.Id}</text>), compare:(a,b)=>(a.Id-b.Id)}),
    createTableColumn<Item>({columnId: 'IncidentDate', renderHeaderCell: () => ('Incident Date'), renderCell: (item)=> (item.IncidentDate)}),
    createTableColumn<Item>({columnId: 'PersonInvolved', renderHeaderCell: () => ('Person Involved'), renderCell: (item)=> (item.PersonInvolved)}),
    createTableColumn<Item>({columnId: 'IncidentType', renderHeaderCell: () => ('Incident Type'), renderCell: (item)=> (incidentType.get(item.IncidentType))}),
    createTableColumn<Item>({columnId: 'TreatmentType', renderHeaderCell: () => ('Treatment Type'), renderCell: (item)=> (treatmentType.get(item.TreatmentType))}),
    createTableColumn<Item>({columnId: 'ReportedBy', renderHeaderCell: () => ('Reported By'), renderCell: (item)=> (userList.get(item.ReportedBy))}),
    createTableColumn<Item>({columnId: 'AssignedTo', renderHeaderCell: () => ('Assigned To'), renderCell: (item)=> (userList.get(item.AssignedTo))}),
    createTableColumn<Item>({columnId: 'Status', renderHeaderCell: () => ('Status'), renderCell: (item)=> (incidentStatus.get(item.IncidentStatus))}),
  ];

  return (
    <div className="ms-Grid">
      <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-lg3" >
              <h2>Incident Register</h2>
            </div>
            <div className="ms-Grid-col ms-lg8" ></div>
            <div className="ms-Grid-col ms-lg1" >
              <Dialog modalType="alert">
                <DialogTrigger disableButtonEnhancement>
                  <Button appearance='primary'>New Incident</Button>
                </DialogTrigger>
                <DialogSurface>
                  <CreateIncidentPage />
                </DialogSurface>
              </Dialog>
            </div>        
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-ms6 ms-lg2">
            <Select defaultValue="All Status" appearance="outline"  >
              <option value="" >All Status</option>
              {incidentStatus && generateOption(incidentStatus)}
            </Select>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-ms6 ms-lg2">
              <Select defaultValue="All Incident Type">
                <option value="">All Incident Type</option>
                {incidentType && generateOption(incidentType)}
              </Select>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-lg12">
              <DataGrid items={items} columns={columns} sortable onSortChange={onSortChange} sortState={sortState} >
                <DataGridHeader>
                  <DataGridRow>
                    {({ renderHeaderCell }) => (
                      <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
                    )}
                  </DataGridRow>
                </DataGridHeader>
                <DataGridBody<Item>>
                  {({ item, rowId }) => (
                    <DataGridRow<Item> key={rowId}>
                      {({ renderCell }) => ( <DataGridCell>{renderCell(item)}</DataGridCell>)}
                    </DataGridRow>
                  )}
                </DataGridBody>
              </DataGrid>
            </div> 
        </div>
    </div>
   )
}

export default ListIncidentPage