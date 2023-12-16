import { useState } from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.scss';


const CustomSearch = (props)=> {
    const [searchString,setSearchString] = useState("");
    return(<Box className="search-wrapper">
    <InputBase
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
        onChange={(e)=> e?.target?.value && setSearchString(e?.target?.value)}
    />
    <IconButton onClick={()=>props?.search(searchString)} type="button" aria-label="search" >
        <SearchIcon />
    </IconButton>
    </Box>)

}

export default CustomSearch;