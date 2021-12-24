import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

export default function TitlePage() {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    return (
        <div className="title-page">
            <Container>
                <Row>
                    <Col xs="6">
                        <div className="name-title">
                            <h3>Profile</h3>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className="bread-crumbs float-end">
                            <div role="presentation" onClick={handleClick}>
                                <Breadcrumbs aria-label="breadcrumb"
                                    separator={<NavigateNextIcon fontSize="small" />}>
                                    <Link underline="hover" color="inherit" href="/">
                                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> MUI
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="inherit"
                                        href="/getting-started/installation/"
                                    >
                                        Core
                                    </Link>
                                    <Typography color="text.primary">Breadcrumbs</Typography>
                                </Breadcrumbs>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}