import * as React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import moment from 'moment';

import './UpdateProfile.scss';
import {instance} from '../../../App';

export default function UpdateProfile() {
    const [dataUser, setDataUser] = React.useState(
        {
            name: '',
            email: '',
            phone: '',
            gender: '',
            education: '',
            birthday: null
        }
    );
    const [loading, setLoading] = React.useState(false);


    React.useEffect(() => {
        let load = true;
        if (load) {
            instance.get(`/api/current-user`).then(res => {
                setDataUser(
                    {
                        name: res.data.name,
                        email: res.data.email,
                        phone: res.data.phone,
                        gender: res.data.gender,
                        education: res.data.education,
                        birthday: res.data.birthday,
                    }
                );
            });
        }
        return (() => {
            load = false;
        })

    }, []);


    const handleChange = (props) => (e) => {
        setDataUser({ ...dataUser, [props]: e.target.value });
    }
    const handleChangeTime = (props) => (e) => {
        setDataUser({ ...dataUser, [props]: e });
    }
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const onEditSubmit = async (e) => {
        e.preventDefault();
        if(moment(dataUser.birthday, 'YYYY-dd-mm', true).isValid()){
            dataUser.birthday.setHours(dataUser.birthday.getHours() + 7);
            dataUser.birthday = dataUser.birthday.toISOString().slice(0, 10);
        }
       
        const data = {
            name: dataUser.name,
            email: dataUser.email,
            phone: dataUser.phone,
            gender: dataUser.gender,
            education: dataUser.education,
            birthday: dataUser.birthday
        }
        setLoading(true);
        try {
            await instance.post(`/api/update-profile`, data).then(res => {
                if (res.status === 200) {
                    console.log("update successfully")
                    setOpen(true);
                }
            });
        } catch {
            console.log("update fails");

        } finally {
            setLoading(false);

        }

    }


    return (
        <div className="update-profile">
            <Container>
                <Row>
                    <Col xs="6" md="12" lg="6" sm="12">
                        <div className="persional-information">
                            <Card border="light" >
                                <Card.Header className="text-profile">Persional Information</Card.Header>
                                <Card.Body>

                                    <TextField
                                        sx={{ m: 1 }}
                                        label="FullName"
                                        variant="outlined"
                                        fullWidth
                                        value={dataUser.name}
                                        onChange={handleChange('name')}

                                    />
                                    <div className="m-2">
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                views={['day', 'month', 'year']}
                                                label="Date Of Birth"
                                                value={dataUser.birthday != null ? dataUser.birthday : null}
                                                onChange={handleChangeTime('birthday')}
                                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                            />
                                        </LocalizationProvider>
                                    </div>

                                    <FormControl sx={{ m: 1 }} style={{ 'width': '30%' }}>
                                        <InputLabel id="demo-simple-select-label" required>Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            label="Gender"
                                            value={dataUser.gender != null ? dataUser.gender : ""}
                                            onChange={handleChange('gender')}

                                        >
                                            <MenuItem value='Female'>Female</MenuItem>
                                            <MenuItem value='Male'>Male</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        sx={{ m: 1 }}
                                        fullWidth
                                        variant="outlined"
                                        disabled
                                        label="Education"
                                        value={dataUser.education}
                                    />


                                </Card.Body>

                            </Card>
                        </div>
                    </Col>
                    <Col xs="6" md="12" lg="6" sm="12">
                        <Card border="light">
                            <Card.Header className="text-profile">Contact Information</Card.Header>
                            <Card.Body>
                                <TextField
                                    sx={{ m: 1 }}
                                    required
                                    label="Contact Phone"
                                    value={dataUser.phone != null ? dataUser.phone : null}
                                    onChange={handleChange('phone')}
                                    fullWidth
                                />
                                <TextField
                                    className="w-50"
                                    sx={{ m: 1 }}
                                    required
                                    disabled
                                    label="Email"
                                    value={dataUser.email}
                                    fullWidth

                                />

                                <TextField
                                    fullWidth
                                    sx={{ m: 1 }}
                                    required
                                    label="URL Facebook"
                                    defaultValue="https://www.facebook.com/minhthu1112k"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="12">
                        <div className="float-end">
                            <Button onClick={onEditSubmit} className="mx-1 mt-3 button-profile" variant="primary" disabled={loading}>
                                {loading ? "Loading" : "Update profile"}
                            </Button>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                   Update profile successfully!
                                </Alert>
                            </Snackbar>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}