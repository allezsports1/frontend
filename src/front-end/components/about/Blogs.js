import { PAGE_BLOGS } from "../../constants";
import { Box } from "@mui/material";
import { useDispatch } from 'react-redux'
import { getBlogList } from '../../state/actions';
import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import './Blogs';


const Blogs = () => {
    const dispatch = useDispatch();
    const blogsResponse = useSelector((state)=>state.clientReducer?.blogResponse);


    useEffect(()=>{
       dispatch(getBlogList());
    },[dispatch]);


    
    return(<div className="">
                <Box className="">{PAGE_BLOGS.TITLE}</Box>
                <div className="">
                    { JSON.stringify(blogsResponse)}
                </div>
            </div>)
      
}

export default Blogs;