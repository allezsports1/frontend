import { PAGE_NOT_FOUND } from "../../constants";
import { Box } from '@mui/material';

export default function NotFound() {

  return (<Box className="container">
      {PAGE_NOT_FOUND.TITLE}
    </Box>);
}
