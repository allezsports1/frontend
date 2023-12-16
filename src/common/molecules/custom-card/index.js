import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Paper } from "@mui/material";


const CustomCard = ({
    image = '',
    alt = '',
    title = '',
    titleVariant = 'h5',
    content = '',
    maxWidth = 345
}) => {

    return (
        <Paper sx={{ maxWidth: maxWidth }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={alt}
            />
            <CardContent>
              <Typography gutterBottom variant={titleVariant} component="div">{title}</Typography>
              <Typography variant="body2" color="text.secondary">{content}</Typography>
            </CardContent>
          </CardActionArea>
        </Paper>
      );
}

export default CustomCard;