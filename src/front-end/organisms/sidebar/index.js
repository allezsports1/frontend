
import './Sidebar.scss';
import { PAGE_BLOGS } from  "../../constants";
import { Box, Typography, Divider } from "@mui/material";
import CustomBox from "../../organisms/custom-box";
import CustomSearch from '../../../common/atoms/searchBox';


const PageSidebar = ({pageType,data,searchAction})=>{

    return(<Box className={`sidebar_${pageType}`}>
            <CustomBox>
                <CustomSearch search={searchAction} />
            </CustomBox>
            <CustomBox >
                <Typography variant="h5" className="title">{PAGE_BLOGS.RECENT_POSTS}</Typography>
                    <Divider className="divider" light />
                <Typography>
                <ul>
                    {
                        data?.slice(0, 5)?.map((e,i)=> <li key={i}><a>{e?.name}</a></li>) 
                    }
                </ul>
                </Typography>
            </CustomBox>
            <CustomBox className="widget">
                <Typography variant="h5" className="title">{PAGE_BLOGS.RECENT_NEWS}</Typography>
                    <Divider className="divider" light />
                <Typography>
                    <ul>
                    {
                        data?.slice(0, 5)?.map((e,i)=> <li key={i}><a>{e?.name}</a></li>) 
                    }
                    </ul>
                </Typography>
            </CustomBox>
    </Box>)

}

export default PageSidebar;