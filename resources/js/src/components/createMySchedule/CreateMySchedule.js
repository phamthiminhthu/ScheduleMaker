import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, Row, Col } from "react-bootstrap";
import Button from '@mui/material/Button';
import './CreateMySchedule.scss';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';



export default function CreateMySchedule() {


    const [listSubject, setListSubject] = React.useState({});
    const [listClass, setListClass] = React.useState([]);
    const handleChange = (props) => (e) => {
        let newListClass = [...listClass];
        newListClass[props] = e.target.value;
        setListClass(newListClass);

    };
    const history = useNavigate();


    React.useEffect(function effectFunction() {
        async function fetchData() {
            await axios.get(`/api/schedule/my-subject-schedule`).then((res) => {
                setListSubject(res.data.listClassBySubjectCode);
            })
        }
        fetchData()
    }, []);

    const convertTime = (time) => {
        return moment(time, 'HH:mm').format("HH:mm");

    }





    const mapData = (listSubject) => {

        return (
            Object.keys(listSubject).map((key, index) => {
                return (
                    <Col xs="6" className="mb-2 mt-2" key={key}>
                        <p className="title-course-id mb-2"> {key} </p>
                        <Box >
                            <FormControl fullWidth>
                                <InputLabel>Lớp</InputLabel>
                                <Select
                                    label="class"
                                    value={listClass[index] ? listClass[index] : ''}
                                    onChange={handleChange(index)}
                                >
                                    {listSubject[key].map((items) => {
                                        return (
                                            <MenuItem value={items.id} key={items.id}>{items.clazz_code}({items.clazz_code_sub}) &nbsp;
                                                {items.name_clazz},  Thứ {items.week_day}, Thời gian: {convertTime(items.startime)} - {convertTime(items.endtime)}</MenuItem>
                                        )
                                    })
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </Col>
                )


            })
        )
    }



    const handleSave = async () => {
        const data = {
            'listClass': listClass
        }

        axios.post(`/api/schedule/my-list-class-register`, data).then((res) => {
            history('/student/my-schedule')
        });

    }

    return (
        <Container className="mb-5">

            <Row>
                <h3 className="title text-center mt-3 mb-5">
                    Create My Schedule
                </h3>
                {mapData(listSubject)}


            </Row>

            <div className="text-center mt-5 mb-5">
                <Button variant="contained" onClick={handleSave}>Save</Button>
            </div>
        </Container>
    )
}