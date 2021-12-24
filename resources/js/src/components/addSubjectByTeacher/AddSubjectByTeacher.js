import React from 'react';
import { TextField, Button } from '@mui/material';
import './AddSubjectByTeacher.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Nav, Row, Col } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';


export default function AddSubjectByTeacher() {

    const [listClass, setListClass] = React.useState(
        [{
            maLop: "",
            teacher: "",
            weekDays: "",
            startime: null,
            endtime: null

        }]
    );
    function addClassSubject() {
        const newList = [...listClass, {
            maLop: "",
            teacher: "",
            weekDays: "",
            startime: null,
            endtime: null
        }]
        setListClass(newList)
    }
    function deleteClassSubject(classSub) {
        const index = listClass.findIndex(x => x.id === classSub.id);
        if (index < 0) return;
        const newListClass = [...listClass];
        newListClass.splice(index, 1);
        setListClass(newListClass);

    }

    const handleEditFieldOfItem = (event, itemIndex, fieldName) => {
        const value = event.target.value;
        setListClass({
            listClass: listClass.map((item, index) => {
                if (index === itemIndex) {
                    return { ...item, [fieldName]: value };
                }
                return item;
            })
        });
    };

    return (
        <div className="create-new-subject">
            <h3 className="mt-4 mb-4 text-center title">Create New Subject</h3>
            <div className="form-create-new-subject">
                <div className="form-input-subject">
                    <Row>
                        <Col xs="2">
                            <p className="name-title-form">Mã HP:</p>
                        </Col>
                        <Col xs="3 mb-3">
                            <TextField fullWidth label="Mã học phần" variant="outlined" />
                        </Col>
                        <Col xs="2">
                            <p className="name-title-form">Tên HP: </p>
                        </Col>
                        <Col xs="5">
                            <TextField fullWidth label="Tên học phần" variant="outlined" />
                        </Col>
                        <Col xs="2">
                            <p className="name-title-form">TC học phần: </p>
                        </Col>
                        <Col xs="2">
                            <TextField
                                fullWidth
                                type="number"
                                inputProps={{ inputMode: 'numeric', min: "0", pattern: '[0-9]*' }}
                                label="Tín chỉ"
                                variant="outlined" />
                        </Col>
                        <Col xs="2">
                            <p className="name-title-form">TC học phí: </p>
                        </Col>
                        <Col xs="2">
                            <TextField
                                fullWidth
                                type="number"
                                inputProps={{ inputMode: 'numeric', min: "0", pattern: '[0-9]*' }}
                                label="Tín chỉ"
                                variant="outlined" />
                        </Col>
                        <Col xs="2">
                            <p className="name-title-form">Hệ số điểm: </p>
                        </Col>
                        <Col xs="2">
                            <TextField
                                fullWidth
                                inputProps={{ min: "0", max: "1", pattern: '[0-1].[1-9]' }}
                                label="Hệ số"
                                variant="outlined" />
                        </Col>

                    </Row>
                </div>
                <div className="add-class-of-subject mt-4 mb-3">
                    <div className="d-flex flex-row-reverse bd-highlight mb-3">
                        <Button variant="contained" onClick={addClassSubject} className="bd-highlight" ><AddCircleOutlineIcon></AddCircleOutlineIcon> &nbsp; Add Class</Button>
                    </div>

                    <div>
                        {
                            listClass.map((item, index) => {
                                return (
                                    <div className="form-add-class mb-4 mt-4" key={index}>
                                        <h3 className="title text-center mb-3 mt-3">Thông tin lớp học {index + 1}</h3>

                                        <div>
                                            <Row>
                                                <Col xs="2 mb-3">
                                                    <p className="name-title-form">Mã lớp HP:</p>
                                                </Col>
                                                <Col xs="2">
                                                    <TextField fullWidth label="Mã lớp" variant="outlined" value={item.maLop} onChange={(event) => { handleEditFieldOfItem(event, index, 'maLop'); }} />
                                                </Col>
                                                <Col xs="2">
                                                    <p className="name-title-form">Giáo viên:</p>
                                                </Col>
                                                <Col xs="6">
                                                    <TextField fullWidth label="Teacher" variant="outlined" value={item.teacher} onChange={(event) => { handleEditFieldOfItem(event, index, 'teacher'); }} />
                                                </Col>
                                                <Col xs="2">
                                                    <p className="name-title-form">WeekDays:</p>
                                                </Col>
                                                <Col xs="2">
                                                    <Box>
                                                        <FormControl fullWidth >
                                                            <InputLabel>Day</InputLabel>
                                                            <Select
                                                                fullWidth
                                                                labelId="demo-simple-select-label"
                                                                value={item.weekDays}
                                                                label="weekday"
                                                                className="form-select-week"
                                                                onChange={(event) => { handleEditFieldOfItem(event, index, 'weekDays'); }}
                                                            >

                                                                <MenuItem value="2">Thứ 2</MenuItem>
                                                                <MenuItem value="3">Thứ 3</MenuItem>
                                                                <MenuItem value="4">Thứ 4</MenuItem>
                                                                <MenuItem value="5">Thứ 5</MenuItem>
                                                                <MenuItem value="6">Thứ 6</MenuItem>
                                                                <MenuItem value="7">Thứ 7</MenuItem>
                                                                <MenuItem value="8">Chủ Nhật</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                </Col>
                                                <Col xs="2">
                                                    <p className="name-title-form">TG bắt đầu:</p>
                                                </Col>
                                                <Col xs="2">
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <TimePicker
                                                            fullWidth
                                                            label="Startime"
                                                            value={item.startime}
                                                            renderInput={(params) => <TextField {...params} />}
                                                            onChange={(event) => { handleEditFieldOfItem(event, index, 'startime'); }}
                                                        />
                                                    </LocalizationProvider>
                                                </Col>
                                                <Col xs="2">
                                                    <p className="name-title-form">TG kết thúc:</p>
                                                </Col>
                                                <Col xs="2">
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <TimePicker
                                                            fullWidth
                                                            label="EndTime"
                                                            value={item.endtime}
                                                            renderInput={(params) => <TextField {...params} />}
                                                            onChange={(event) => { handleEditFieldOfItem(event, index, 'endtime'); }}
                                                        />
                                                    </LocalizationProvider>
                                                </Col>
                                            </Row>


                                        </div>

                                        <div>

                                        </div>

                                        <Nav className="justify-content-end" activeKey="/home">
                                            <Nav.Item>
                                                <Nav.Link onClick={deleteClassSubject}><DeleteIcon /></Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <Button variant="contained">Save</Button>
            </div>

        </div>



    )
}