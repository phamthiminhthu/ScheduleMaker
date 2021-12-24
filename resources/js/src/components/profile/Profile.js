import * as React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import HttpsIcon from '@mui/icons-material/Https';
import ProfileDetails from './profileDetails/ProfileDetails';
import UpdateProfile from './updateProfile/UpdateProfile';
import ChangePassword from './changePassword/ChangePassword';
import TitlePage from '../titlePage/TitlePage';
import './Profile.scss';


export default function Profile() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="profile">
      <TitlePage/>
      <Container>
        <Row>
          <Col xs="12">
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab icon={<AccountCircleIcon />} iconPosition="start" label="MY PROFILE" value="1" />
                    <Tab icon={<TextSnippetIcon />} iconPosition="start" label="UPDATE PROFILE" value="2" />
                    <Tab icon={<HttpsIcon />} iconPosition="start" label="CHANGE PASSWORD" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1"> <ProfileDetails /> </TabPanel>
                <TabPanel value="2"> <UpdateProfile /> </TabPanel>
                <TabPanel value="3"> <ChangePassword /></TabPanel>
              </TabContext>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
}