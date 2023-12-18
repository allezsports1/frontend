import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import './CustomBox.scss';


const CustomBox = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    marginBottom : '1rem',
    color: theme.palette.text.secondary,
}));

const CustomPapper= ()=>{
    return (<Paper className="paperClass">square corners</Paper>)
}

export default CustomBox;