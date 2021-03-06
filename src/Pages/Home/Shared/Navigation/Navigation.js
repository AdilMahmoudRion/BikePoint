import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Navigation = () => {



  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "#fff",
      textDecoration: "none",
    },
    navLogo: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    navHeader: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right !important",
      },
    },
    mobileNavIteam: {
      textDecoration: 'none',
      color: "#000",
    }
  });

  const { navItem, navLogo, navContainer, navHeader, mobileNavIteam } =
    useStyle();

const [state, setState] = React.useState(false);


const list = (
  <Box sx={{ width: 250 }} role="presentation">
    <List>
      <ListItem button>
        <ListItemText>
          <Link className={mobileNavIteam} to="/home">Home</Link>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText>
          <Link className={mobileNavIteam} to="/about">About</Link>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText>
          <Link className={mobileNavIteam} to="/services">Services</Link>
        </ListItemText>
      </ListItem>
      <Divider />
    </List>
  </Box>
);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navLogo}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={navHeader}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              News
            </Typography>

            <Box className={navContainer}>
              <Link className={navItem} to="/home">
                <Button color="inherit">Home</Button>
              </Link>
              <Link className={navItem} to="/services">
                <Button color="inherit">Services</Button>
              </Link>
              <Link className={navItem} to="/about">
                <Button color="inherit">About</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>

        <div>
          <React.Fragment>
            <Drawer open={state} onClose={() => setState(false)}>
              {list}
            </Drawer>
          </React.Fragment>
        </div>
      </Box>
    </>
  );
};

export default Navigation;
