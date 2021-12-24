import Header from "../Header";
import './HeaderMain.scss';
import { Container, Nav } from 'react-bootstrap'
import AddLocationIcon from '@mui/icons-material/AddLocation';

function HeaderMain() {
    return (
        <div className="header-main">
                <Header />
                <div className="time-running" >
                    <Nav as="ul" >
                        <Nav.Item as="li" className="time-oclock-cirle">
                            <div className="time-oclock">
                                <h3 className="date-current">29</h3>
                                <h3 className="current-month">NOVEMBER</h3>
                                <Nav defaultActiveKey="/home" as="ul" className="justify-content-center time-current">
                                    <Nav.Item as="li" >
                                        <Nav.Link href="/home">
                                            <h4>01</h4>
                                            <h5>Hours</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="link-1">
                                            <h4>26</h4>
                                            <h5>Minutes</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="link-2">
                                            <h4>00</h4>
                                            <h5>Seconds</h5>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Nav.Item>
                        <Nav.Item as="li" className="themes-main">
                            <Nav.Link>
                                <h2>
                                    Create Schedule
                                </h2>
                                <h1>
                                    Convenient
                                    <br />
                                    Notes
                                    <span>
                                        <b style={{ 'color': '#ec398b' }}> 2</b>
                                        <b style={{ 'color': '#efa506' }}>0</b>
                                        <b style={{ 'color': '#00acee' }}>2</b>
                                        <b>1</b>
                                    </span>
                                </h1>
                                <h5>
                                    <AddLocationIcon style={{ 'color': '#efa506', 'font-size': '30px' }}></AddLocationIcon>
                                    <span className="text-white">Dai Co Viet Street, Ha Noi, Viet Nam</span>
                                </h5>

                            </Nav.Link>
                        </Nav.Item>

                    </Nav>

                </div>
            
        </div>
    )

}

export default HeaderMain;