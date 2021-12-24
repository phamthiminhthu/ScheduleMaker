import * as React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import './UpdateProfile.scss';

export default function UpdateProfile() {
    const [value, setValue] = React.useState(new Date());
    const [gender, setGender] = React.useState('Female');

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    return (
        <div className="update-profile">
            <Container>
                <Row>
                    <Col xs="6">
                        <div className="persional-information">
                            <Card border="light" >
                                <Card.Header className="text-profile">Persional Information</Card.Header>
                                <Card.Body>

                                    <TextField
                                        sx={{ m: 1 }}
                                        required
                                        label="FirstName"
                                        defaultValue="Pham"
                                    />
                                    <TextField
                                        sx={{ m: 1 }}
                                        required
                                        label="LastName"
                                        defaultValue="Minh Thu"
                                    />
                                    <div className="m-2">
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                views={['day', 'month', 'year']}
                                                label="Date Of Birth"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} helperText={null} />}
                                            />
                                        </LocalizationProvider>
                                    </div>

                                    <FormControl sx={{ m: 1 }} style={{ 'width': '30%' }}>
                                        <InputLabel id="demo-simple-select-label" required>Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            value={gender}
                                            label="Gender"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value='Female'>Female</MenuItem>
                                            <MenuItem value='Male'>Male</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        sx={{ m: 1 }}
                                        fullWidth
                                        disabled
                                        id="outlined-disabled"
                                        label="Education"
                                        defaultValue="HaNoi University Techonlogy and Science"
                                    />


                                </Card.Body>

                            </Card>
                        </div>
                    </Col>
                    <Col xs="6">
                        <Card border="light">
                            <Card.Header className="text-profile">Contact Information</Card.Header>
                            <Card.Body>
                                <TextField
                                    sx={{ m: 1 }}
                                    required
                                    label="Contact Phone"
                                    defaultValue="0362989028"
                                />
                                <TextField
                                    className="w-50"
                                    sx={{ m: 1 }}
                                    required
                                    label="Email"
                                    defaultValue="minhthutb111@gmail.com"
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
                            <Button className="mx-1 mt-3 button-profile" variant="primary">Update profile</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}