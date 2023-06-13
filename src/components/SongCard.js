import React from "react";
import { createStyles, Text, Paper, Title, rem, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(260),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    ":hover": {
      cursor: "grab",
    },
  },

  title: {
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(20),
    marginTop: theme.spacing.xs,
    [theme.fn.smallerThan("md")]: {
      fontSize: rem(20),
    },
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const SongCard = ({ image, artist, songUrl, title }) => {
  const { classes } = useStyles();

  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size='xs'>
          {artist}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button
        variant='white'
        color='dark'
        onClick={() => window.open(songUrl, "_blank")}
      >
        Listen
      </Button>
    </Paper>
  );
};

export default SongCard;
