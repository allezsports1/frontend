import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from '@mui/material';



const AccordionWrapper = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}} />}
      {...props}
    />
  ))(({theme}) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const CustomAccordions = ({
    data = [],
    isOpen = false,
    containerClass = '',
    titleClass = '',
    descClass = ''
}) => {
    const [open, setOpen] = useState(false)
    const handleChange = (panel) => (_, newVal) => setOpen(newVal ? panel : false);

    useEffect(()=>{
        isOpen && setOpen(0);
    },[isOpen]);

    return(<div className={`customAccordions ${containerClass}`}>
        {
         data?.length && data?.map((el,key) =>
            <AccordionWrapper key={key} expanded={open===key} onChange={handleChange(key)}>
                <AccordionSummary className={titleClass} aria-controls={`content-${key}`} id={`header-${key}`}>
                    {el?.question}
                </AccordionSummary>
                <AccordionDetails className={descClass}>
                    <Typography>
                        {el?.answer}
                    </Typography>
                </AccordionDetails>
            </AccordionWrapper>
            )
        }
      </div>
);
}

export default CustomAccordions;