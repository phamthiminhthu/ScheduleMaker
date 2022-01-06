import {Button} from '@mui/material';
import './ButtonClickCommon.scss';
import {Link} from 'react-router-dom';

export default function ButtonClickCommon() {
    return (
        <div className="w-100 text-center btn-view-more margin-bottom-items mt-5 mb-5 ">
           <Link to="/register"> <Button className="button hvr-grow">Views More News</Button></Link>
        </div>
    )


}