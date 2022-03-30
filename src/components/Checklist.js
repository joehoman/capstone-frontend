import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
} from '@mui/material';


export default function Checklist ({ task }) { // need to have dueDate & completedDate
    return (
          <Card className="postcard" sx={{
            minHeight: 200,
            backgroundColor: "#ddd",
            justifyContent: "center",
            alignItems: 'center'
         }}>
            <CardActionArea>
                <CardContent >
                    <Typography  sx={{fontFamily: "monospace"}} data-testid="img-title" gutterBottom variant="h5" maxHeight="300" >
                        <h5>{task}</h5>
                    </Typography>
                    {/* <Typography sx={{fontFamily: "monospace"}} variant="body2" color="text.secondary" >
                        {content}
                    </Typography> */}
                    <br></br>
                    <br></br>
                    <Typography sx={{fontFamily: "monospace"}} variant="body2" color="text.secondary" >
                        Created on: {created_at}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}



