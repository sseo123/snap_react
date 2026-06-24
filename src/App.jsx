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
          <Grid>
            <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="src/assets/limantour_beach.jpeg"
                title="Best Bonfire Beach spot"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Limantour Beach
                </Typography>
                <Typography>
                  <ul>
                    <li>
                      <strong>Reason:</strong> Best secluded beach spot that
                      allows bonfires, and sunset is super pretty
                    </li>
                    <li>
                      <strong>Distance:</strong> 1.5 hr drive from San Francisco
                    </li>
                    <li>
                      <strong>Tip:</strong> Super pretty when the sun sets, but
                      bring flashlight since there's no streetlight{" "}
                    </li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Shawn's Rating: 9.4/10
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="src/assets/little_yosemite.jpeg"
                title="Little Yoesmite"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Little Yoesmite
                </Typography>
                <Typography>
                  <ul>
                    <li>
                      <strong>Reason:</strong> Best secluded hiking spot that
                      has a waterfall and a small lake
                    </li>
                    <li>
                      <strong>Distance:</strong> 1 hr drive from San Francisco
                    </li>
                    <li>
                      <strong>Tip:</strong> Bring 5 dollars in cash for parking
                      or go in before 7am to get free parking -- but it's niche
                      so dw ab parking space{" "}
                    </li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Shawn's Rating: 8.8/10
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid>
            <Card sx={{ maxWidth: 350 }}>
              <CardMedia
                sx={{ height: 250 }}
                image="src/assets/stinon_view_point.jpeg"
                title="Stinson View Point"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stinson Beach View Point
                </Typography>
                <Typography>
                  <ul>
                    <li>
                      <strong>Reason:</strong> Beach is popular but hiking up
                      mountain to see view point is secluded. Above clouds and
                      you can see the ocean and mountains
                    </li>
                    <li>
                      <strong>Distance:</strong> 1 hr drive from San Francisco
                    </li>
                    <li>
                      <strong>Tip:</strong> Bring a jacket since it can get
                      quite chilly at the top{" "}
                    </li>
                  </ul>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Shawn's Rating: 9.1/10
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
