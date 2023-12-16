import { PAGE_BLOGS } from "../../constants";
import { Box, Typography, Divider, Button } from "@mui/material";
import { useDispatch } from 'react-redux'
import { getBlogList } from '../../state/actions';
import { useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import CustomBox from "../../organisms/custom-box";
import Breadcrumb from '../../organisms/breadcrumbs'
import PageSidebar from '../../organisms/sidebar';
import './Blogs.scss';

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
                            <Divider className="divider" light />
                            <Divider className="divider" light />
                            <Typography className="content">
                                {e?.description}
                            </Typography>
                            <Divider className="divider" light />
                            <Box className="post-footer">
                                asd
                            </Box>
                            <Divider className="divider" light />
                            <Box className="post-footer">
                                <Button className="read-more" variant="outlined">Read More</Button>
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