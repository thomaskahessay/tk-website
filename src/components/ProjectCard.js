import React from "react";
import {
  createStyles,
  Text,
  Title,
  rem,
  Button,
  Card,
  Group,
  useMantineColorScheme,
  Image,
  Center,
  Badge,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(550),
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors["dark-brown"][7]
        : theme.colors["light-beige"][1],
    color:
      theme.colorScheme === "dark"
        ? theme.colors["light-beige"][2]
        : theme.colors["dark-brown"][7],
    ":hover": {
      cursor: "grab",
    },
    [theme.fn.largerThan("xl")]: {
      height: rem(550),
      marginRight: rem(10),
    },
    [theme.fn.largerThan("lg") && theme.fn.smallerThan("xl")]: {
      height: rem(620),
    },
    [theme.fn.largerThan("xs") && theme.fn.smallerThan("sm")]: {
      height: rem(420),
    },
    [theme.fn.smallerThan("xs")]: {
      height: rem(630),
    },
  },
  cardImage: {
    backgroundColor: "white",
  },
  cardTitle: {
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
  },
  cardText: {
    marginBottom: "3em",
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
  },
  cardBtn: {
    width: "90%",
    position: "absolute",
    bottom: 15,
  },
}));

const ProjectCard = ({ image, badges, title, description, link, linkText }) => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Card className={classes.card} radius='lg'>
      <Card.Section className={classes.cardImage}>
        <Image src={image} height={160} />
      </Card.Section>
      <Group position='apart' mt='md' mb='xs'>
        <Title className={classes.cardTitle} order={4}>
          {title}
        </Title>
        <Group>
          {badges.map((tag) => {
            return (
              <Badge
                color='brown'
                variant={dark ? "filled" : "light"}
                className={classes.badge}
              >
                {tag}
              </Badge>
            );
          })}
        </Group>
      </Group>
      <Text className={classes.cardText}>{description}</Text>
      <Center>
        <Button
          fullWidth
          mt='md'
          radius='md'
          className={classes.cardBtn}
          onClick={() => window.open(link, "_blank")}
        >
          {linkText}
        </Button>
      </Center>
    </Card>
  );
};

export default ProjectCard;
