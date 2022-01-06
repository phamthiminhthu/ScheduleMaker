import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './ListSubject.scss';
import { Container, Row } from 'react-bootstrap';
import { instance } from '../../App';


const columns = [
    { field: 'col1', headerName: 'Mã học phần', width: 200 },
    { field: 'col2', headerName: 'Tên học phần ', width: 250 },
    { field: 'col3', headerName: 'Tín chỉ học phần', width: 200 },
    { field: 'col4', headerName: 'Loại lớp ', width: 170 },
    { field: 'col5', headerName: 'Tuần học', width: 170 },
    { field: 'col6', headerName: 'Khoá', width: 130 }


];
export default function ListSubject() {

    const [row, setRow] = useState([]);

    useEffect(() => {
        let loading = true;
        if (loading) {
            instance.get(`api/subject/get-all-subject`).then((res) => {
                setRow(res.data.listSubject);

            }).catch(e => {
                console.log(e);
            });
        }

        return (() => {
            loading = false;
        });




    }, []);
    const rows = [];
    let i = 1;
    row.forEach(element => {
        rows.push({
            id: i,
            col1: element.code_subject,
            col2: element.name_subject,
            col3: element.amount_subject,
            col4: element.type_subject,
            col5: element.week_learn,
            col6: element.semester

        })
        i = i + 1;
    });


    return (
        <Container>
            <Row>
                <div className="list-subject text-center mb-4">
                    <h3 className="title text-center mb-5 mt-5">Danh sách học phần</h3>
                    <div style={{ height: 520, width: '100%' }}>
                        <DataGrid rows={rows} columns={columns}  />
                    </div>

                </div>
            </Row>
        </Container>
    );
}