import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import './ListSubject.scss';

const rows: GridRowsProp = [
    { id: 1, col1: 'MI1010', col2: 'Giải tích 1', col3 :'5', col4 : '3', col5 : '0.7' },
    { id: 2, col1: 'MI1030', col2: 'Đại số' , col3 :'5', col4 : '3', col5 : '0.7'},
    { id: 3, col1: 'IT100', col2: 'Tin học đại cương', col3 :'6', col4 : '2' , col5 : '0.7'},
    { id: 4, col1: 'MI1010', col2: 'Giải tích 1', col3 :'5', col4 : '3', col5 : '0.7' },
    { id: 5, col1: 'MI1030', col2: 'Đại số' , col3 :'5', col4 : '3', col5 : '0.7'},
    { id: 6, col1: 'IT100', col2: 'Tin học đại cương', col3 :'6', col4 : '2' , col5 : '0.7'},
    { id: 7, col1: 'MI1010', col2: 'Giải tích 1', col3 :'5', col4 : '3', col5 : '0.7' },
    { id: 8, col1: 'MI1030', col2: 'Đại số' , col3 :'5', col4 : '3', col5 : '0.7'},
    { id: 9, col1: 'IT100', col2: 'Tin học đại cương', col3 :'6', col4 : '2' , col5 : '0.7'},
];
const columns: GridColDef[] = [
    { field: 'col1', headerName: 'CourseID', width: 250 },
    { field: 'col2', headerName: 'Course Name', width: 250 },
    { field: 'col3', headerName: 'Tín chỉ học phí', width: 250 },
    { field: 'col4', headerName: 'Tín chỉ học phần', width: 250 },
    { field: 'col5', headerName: 'Hệ số điểm', width: 250 }

];
export default function ListSubject() {

    return (
        <div className="list-subject text-center mb-4">
            <h3 class="title text-center mb-5 mt-5">Danh sách học phần</h3>
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} />
            </div>

        </div>
    );
}