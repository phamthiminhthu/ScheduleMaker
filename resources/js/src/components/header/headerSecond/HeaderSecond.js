import Header from '../Header';
import './HeaderSecond.scss';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { Container, Row, Col } from 'react-bootstrap';

function HeaderSecond() {
    return (
        <div className="header-second">
            <Header />
            <div className="bread-crumbs">
                <Container>
                    <Row>
                        <Col xs="12">
                            <h3 className="text-white themes-header">ABOUT US</h3>
                        </Col>
                        <Col xs="12">
                            <Breadcrumbs aria-label="breadcrumb" className="bread-crumbs-details">
                                <Link underline="hover" color="inherit" href="/"  className="text-white">
                                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> MUI
                                </Link>
                                {/* <Link
                                    underline="hover"
                                    color="inherit"
                                    href="/getting-started/installation/"
                                    className="text-white"
                                >
                                    Core
                                </Link> */}
                                <Typography color="text.primary" className="text-white">ABOUT</Typography>
                            </Breadcrumbs>

                        </Col>
                    </Row>
                </Container>
            </div>


        </div>
    )

}

export default HeaderSecond;