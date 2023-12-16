
import './Paper.scss'
import {Box, Paper} from '@mui/material/Box';

const CustomPaper = ({
    data= [],
    elevationType = 3,
    width = 300,
    height = 300
})=>{

    return (<Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: width,
          height: height,
        },
      }}
    >
        {data?.length > 0 && data?.map((e,key)=>
            <Paper key={key} elevation={elevationType} >
                    {e.title}
            </Paper>
        )}
      
    </Box>)

}

export default CustomPaper;