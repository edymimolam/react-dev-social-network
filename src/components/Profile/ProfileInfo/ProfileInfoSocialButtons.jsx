import React from "react";
import Fab from "@material-ui/core/Fab";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flexbox",
    "& > *": {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
}));

export default ({ contacts }) => {
  const { facebook, github, instagram, twitter, youtube } = contacts;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab
        size="small"
        target="_blank"
        href={`https://${github}`}
        disabled={!github}
        color="primary"
      >
        <GitHubIcon />
      </Fab>
      <Fab
        size="small"
        target="_blank"
        href={`https://${facebook}`}
        disabled={!facebook}
        color="primary"
      >
        <FacebookIcon />
      </Fab>
      <Fab
        size="small"
        target="_blank"
        href={`https://${instagram}`}
        disabled={!instagram}
        color="primary"
      >
        <InstagramIcon />
      </Fab>
      <Fab
        size="small"
        target="_blank"
        href={`https://${twitter}`}
        disabled={!twitter}
        color="primary"
      >
        <TwitterIcon />
      </Fab>
      <Fab
        size="small"
        target="_blank"
        href={`https://${youtube}`}
        disabled={!youtube}
        color="primary"
      >
        <YouTubeIcon />
      </Fab>
    </div>
  );
};
