import "./App.css";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DataCard from "./DataCard";
import my_data from "./locations.json";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          s
          color="text.primary"
          sx={{ py: 2 }}
        >
          Bay Area Nature
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          Shawn Seo's
          <Box component="span" sx={{ color: "error.main" }}>
            {" "}
            Gatekept
          </Box>{" "}
          Locations
        </Typography>

        <Grid container spacing={3} sx={{ py: 7 }}>
          {my_data.map((data) => (
            <DataCard
              img={data.img}
              location={data.location}
              rating={data.rating}
              bullet_point={data.bullet_point_data}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
