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
import TextField from "@mui/material/TextField";
import * as React from "react";

function App() {
  const [userInput, setUserInput] = React.useState("");

  const handleSubmit = () => {
    console.log(userInput);
  };

  function handleUserInput(e) {
    const { value } = e.target;
    setUserInput(value);
  }

  const search_filter = my_data.filter(
    (item) => item.location.toLowerCase().includes(userInput.toLowerCase()),
    console.log(userInput),
  );

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
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

        <Button sx={{ m: 1 }} onClick={handleSubmit}>
          Submit
        </Button>

        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "100ch" }, py: 3 }}
          noValidate
          autoComplete="off"
          align="center"
        >
          <TextField
            id="outlined-controlled"
            label="Search for location"
            value={userInput}
            onChange={handleUserInput}
          />
        </Box>

        <Box>
          {search_filter.length > 0 ? (
            <Grid container spacing={3} sx={{ py: 1 }}>
              {search_filter.map((data) => (
                <DataCard
                  img={data.img}
                  location={data.location}
                  rating={data.rating}
                  bullet_point={data.bullet_point_data}
                />
              ))}
            </Grid>
          ) : (
            <Typography align="center" sx={{ py: 10 }} variant="h3">
              {" "}
              NOTHING MATCHED YOUR SEARCH
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
}

export default App;
