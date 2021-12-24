import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ItemSchedule from './ItemSchedule';



export default function ShowListScheduleMaker() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div className="show-list-schedule-maker">
            <h3 class="text-center mt-4 mb-4 title">All Schedule Maker</h3>
            <div className="show-list-schedule">
                <div className="text-center w-100 m-auto">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="text-center w-100 m-auto">
                                <TabList onChange={handleChange} aria-label="lab API tabs example"  >
                                    <Tab label="One" value="1" />
                                    <Tab label="Two" value="2" />
                                    <Tab label="Three" value="3" />
                                    <Tab label="Four" value="4" />
                                    <Tab label="Five" value="5" />
                                    <Tab label="Six" value="6" />
                                    <Tab label="Seven" value="7" />
                                    <Tab label="Eight" value="8" />
                                    <Tab label="Nine" value="9" />
                                    <Tab label="Ten" value="10" />
                                    <Tab label="Eleven" value="11" />
                                    <Tab label="Twelve" value="12" />
                                </TabList>
                            </Box>
                            <TabPanel value="1"><ItemSchedule /></TabPanel>
                            <TabPanel value="2"><ItemSchedule /></TabPanel>
                            <TabPanel value="3"><ItemSchedule /></TabPanel>
                        </TabContext>
                    </Box>

                </div>


            </div>


        </div>
    )

}