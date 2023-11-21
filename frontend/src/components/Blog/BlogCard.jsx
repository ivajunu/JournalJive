import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import { useState } from "react";

export default function MultiActionAreaCard() {
  //   const [logedIn, setLogedIn] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent></CardContent>
      </CardActionArea>
      {/* Ternery operator */}
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
