import { PAGE_BLOGS } from "../../constants";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux'
import { getBlogList } from '../../state/actions';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import CustomBox from "../../organisms/custom-box";
import Breadcrumb from '../../organisms/breadcrumbs'
import PageSidebar from '../../organisms/sidebar';
import './Blogs.scss';
import CustomButton from "../../../common/atoms/button";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SportsCricketOutlinedIcon from '@mui/icons-material/SportsCricketOutlined';
import { getPostDate } from "../../../common/helper/utils";

const Blogs = () => {
    const [blogData,setBlogData] = useState([]);
    const [searchString, setSearchString] = useState("");
    const dispatch = useDispatch();
    const blogsResponse = useSelector((state)=>state.clientReducer?.blogResponse);

    useEffect(()=>{
       dispatch(getBlogList());
    },[dispatch]);

    useEffect(()=>{
        blogsResponse?.length && setBlogData(blogsResponse);
    },[blogsResponse]);

    const searchAction = (val) =>{
        setSearchString(val);
    };

    const readMore = ()=>{
        console.log("search string",searchString);
    }

    return(<Box sx={{ flexGrow: 1 }} className="blogPage">
                <Breadcrumb title={PAGE_BLOGS.TITLE} />
                <Box className="container">
                <Grid container spacing={2}>
                <Grid xs={8}>
                    {blogData?.length > 0 && blogData?.map((e,key)=>
                        <CustomBox key={key} elevation={3}>
                            <img className="blog-image" src={e?.url} alt={e?.name} title={e?.name} />
                            <Typography className="title" variant={"h2"} gutterBottom>
                                {e?.name}
                            </Typography>
                            <Box className="post-meta">
                                <Box className="post-date">
                                    <SportsCricketOutlinedIcon className="icon" /> Sports
                                </Box>
                                <span className="slash"></span>
                                <Box className="post-date">
                                    <AccessTimeIcon className="icon" /> {getPostDate()}
                                </Box>
                            </Box>
                            <Box className="post-body">
                                <Typography className="content">
                                    {e?.description}
                                </Typography>
                            </Box>
                            <Box className="post-footer">
                                <CustomButton value={"Read More"} btnClick={()=> readMore() } />
                            </Box>
                        </CustomBox>
                    )}
                </Grid>
                <Grid xs={4} className="sidebar">
                    <PageSidebar data={blogData} pageType="blogs" searchAction={searchAction} />
                </Grid>
                </Grid>
            </Box>
        </Box>)
      
}

export default Blogs;