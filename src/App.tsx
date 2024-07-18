import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Grid, Paper } from '@mui/material';




function App() {
  return (
    <Grid
      container
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >



      <Grid
        container
        width={"500px"}
        height={"700px"}
        justifyContent={"center"}
        alignItems={"center"}
      >



        <Paper
          elevation={2}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "cemter",
            justifyContent: "flex",
          }}
        >


        </Paper>
      </Grid>
    </Grid>
  )
}

export default App
