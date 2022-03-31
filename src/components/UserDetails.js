import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
} from '@mui/material';


export default function UserDetails ({ rank, first_name, last_name, work_email, phone_number }) { //need to add rank to the migration
    return (
          <Card className="postcard" sx={{
            height: 150,
            width: 300,
            // maxWidth: 350,
            backgroundColor: "#203246",
            justifyContent: "center",
            alignItems: 'center'
         }}>
            <CardActionArea>
                <CardContent >
                    <Typography  sx={{fontFamily: "monospace", color: "white"}} data-testid="img-title" gutterBottom variant="h5" maxHeight="300" >
                        {rank} {first_name} {last_name}
                    </Typography>
                    <Typography sx={{fontFamily: "monospace", color: "#c3890b"}} variant="body2" color="text.secondary" >
                        {work_email}
                    </Typography>
                    <br></br>
                    <Typography sx={{fontFamily: "monospace", color: "#c3890b"}} variant="body2" color="text.secondary" >
                        {phone_number}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}