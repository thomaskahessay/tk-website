import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import {
  Box,
  Title,
  Group,
  Container,
  Image,
  Text,
  Space,
  ActionIcon,
  useMantineColorScheme,
  SimpleGrid,
  Card,
  Button,
  Paper,
  Timeline,
  Center,
  List,
  createStyles,
  AppShell,
  Navbar,
  Flex,
  Header,
  Burger,
  rem,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSun,
  IconMoonStars,
  IconCode,
  IconDeviceLaptop,
  IconBrush,
  IconBrandPython,
  IconBrandReact,
  IconSquareRoundedChevronUp,
} from "@tabler/icons-react";
import { projects } from "../static/info";
import ProjectCard from "../components/ProjectCard";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { TypeAnimation } from "react-type-animation";
import { getTopTracks } from "../components/Spotify";
import SongCard from "../components/SongCard";
import profileLight from "../images/memojiLight.png";
import profileDark from "../images/memojiDark.png";

/* Styling */
const useStyles = createStyles((theme) => ({
  navbar: {
    width: "21vw",
    backgroundColor:
      theme.colorScheme === "light"
        ? theme.colors["light-brown"][7]
        : theme.colors["light-beige"][3],
    borderRight: "none",
    [theme.fn.smallerThan("lg")]: {
      width: "100vw",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-brown"][7]
          : theme.colors["light-beige"][3],
    },
  },
  navbarItem: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors["light-brown"][7]
        : theme.colors["light-beige"][3],
    fontSize: "2.5vw",
    ":hover": {
      cursor: "pointer",
      color:
        theme.colorScheme === "light"
          ? theme.colors["dark-brown"][7]
          : theme.colors["light-beige"][1],
    },
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-brown"][6]
          : theme.colors["light-beige"][7],
    },
    [theme.fn.smallerThan("lg")]: {
      fontSize: "5vw",
      color:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][1]
          : theme.colors["light-brown"][10],
    },
  },
  openHeader: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors["light-brown"][7]
        : theme.colors["light-beige"][3],
    borderBottom: "none",
    padding: "1.5vw",
  },
  header: {
    borderBottom: "none",
    padding: "1.5vw",
    backgroundColor: "transparent",
  },
  burger: {
    outline:
      theme.colorScheme === "light"
        ? theme.colors["light-beige"][1]
        : theme.colors["light-brown"][10],
  },
  toggleButton: {
    border: "none",
    color: theme.colorScheme === "dark" ? "white" : "black",
    ":hover": {
      backgroundColor: "transparent",
    },
  },
  content: {
    marginLeft: "21vw",
    paddingLeft: "3vw",
    paddingRight: "3vw",
    [theme.fn.smallerThan("lg")]: {
      marginLeft: 0,
    },
  },
  landing: {
    paddingBottom: "15vh",
    height: "100vh",
    [theme.fn.smallerThan("lg")]: {
      marginLeft: 0,
      marginTop: "5vh",
      paddingBottom: 0,
    },
    [theme.fn.smallerThan("md")]: {
      marginLeft: 0,
      marginTop: "4vh",
    },
  },
  landingTitle: {
    fontSize: "2.8vw",
    fontWeight: 600,
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
    [theme.fn.smallerThan("lg")]: {
      fontSize: "4vw",
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: "5vw",
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: "7vw",
    },
  },
  landingImage: {
    boxShadow:
      theme.colorScheme === "dark"
        ? "0px 0px 75px 0px rgb(198, 186, 167, 0.7)"
        : "0px 0px 75px 0px rgb(128, 81, 48, 0.7)",
    borderRadius: "20%",
    [theme.fn.largerThan("md")]: {
      marginLeft: "4vw",
      marginRight: "8vw",
    },
    [theme.fn.smallerThan("lg")]: {
      marginBottom: "3vh",
      boxShadow:
        theme.colorScheme === "dark"
          ? "0px 0px 45px 0px rgb(198, 186, 167, 0.7)"
          : "0px 0px 45px 0px rgb(128, 81, 48, 0.7)",
    },
  },
  iconBtn: {
    ":hover": {
      backgroundColor: "transparent",
    },
  },
  iconBtnChild: {
    ":hover": {
      stroke:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][3]
          : theme.colors["light-brown"][7],
    },
  },
  about: {
    [theme.fn.largerThan("sm")]: {
      height: "100vh",
    },
  },
  headingText: {
    fontSize: "7rem",
    opacity: 0.3,
    marginBottom: "3vh",
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: "3.5rem",
    },
    [theme.fn.smallerThan("sm")]: {
      marginTop: "10vh",
    },
    [theme.fn.smallerThan("lg")]: {
      marginTop: "5vh",
    },
  },
  headingAboutText: {
    fontSize: "7rem",
    marginTop: "20vh",
    opacity: 0.3,
    lineHeight: 0,
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: "3.5rem",
    },
    [theme.fn.smallerThan("sm")]: {
      marginTop: "10vh",
    },
  },
  heading6Text: {
    fontSize: "3rem",
    fontWeight: 800,
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: "1.5rem",
    },
  },
  carousel: {
    marginTop: theme.spacing.xl,
    height: rem(260),
  },
  projects: {
    [theme.fn.largerThan("sm")]: {
      height: "100vh",
    },
    [theme.fn.smallerThan("xs")]: {
      marginTop: "10vh",
    },
  },
  projectCarousel: {
    height: rem(550),
    [theme.fn.largerThan("xl")]: {
      height: rem(550),
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
  skills: {
    [theme.fn.largerThan("sm")]: {
      height: "100vh",
    },
    [theme.fn.smallerThan("xl")]: {
      marginTop: "10vh",
    },
  },
  paper: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors["dark-brown"][7]
        : theme.colors["light-beige"][1],
    color:
      theme.colorScheme === "dark"
        ? theme.colors["tan"][1]
        : theme.colors["dark-brown"][7],
  },
  experience: {
    [theme.fn.largerThan("sm")]: {
      height: "100vh",
    },
    [theme.fn.smallerThan("xs")]: {
      marginTop: "10vh",
    },
  },
  listItem: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors["light-beige"][2]
        : theme.colors["dark-brown"][4],
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
  },
  experienceCard: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors["dark-brown"][7]
        : theme.colors["light-beige"][1],
  },
  timeline: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors["dark-brown"][7]
        : theme.colors["light-beige"][1],
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
  },
  title: {
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
  },
  text: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors["light-beige"][2]
        : theme.colors["dark-brown"][7],
    "::selection": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][7]
          : theme.colors["light-brown"][6],
    },
  },
  contact: {
    marginTop: "10vh",
    [theme.fn.smallerThan("md")]: {
      marginTop: "20vh",
    },
  },
  button: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors["light-beige"][3]
        : theme.colors["light-brown"][7],
    color:
      theme.colorScheme === "dark"
        ? theme.colors["light-brown"][7]
        : theme.colors["light-beige"][3],
    ":hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors["light-beige"][2]
          : theme.colors["light-brown"][8],
      color:
        theme.colorScheme === "dark"
          ? theme.colors["light-brown"][8]
          : theme.colors["light-beige"][2],
    },
  },
}));

/* Animation variants */
const variants = {
  hidden: {
    opacity: 0,
    transform: "translateX(-100%)",
  },
  visible: {
    opacity: 1,
    transform: "translateX(0%)",
  },
};

/* About Component */
function About() {
  const controls = useAnimation();
  const { classes } = useStyles();

  // Spotify
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSpotifyTracks = async () => {
      const response = await getTopTracks();
      const { items } = await response.json();

      const tracks = items.slice(0, 10).map((track) => ({
        image: track.album.images[0].url,
        artist: track.artists.map((_artist) => _artist.name).join(", "),
        songUrl: track.external_urls.spotify,
        title: track.name,
      }));

      return tracks;
    };

    getSpotifyTracks().then((tracks) => setSongs(tracks));
  }, []);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      whileInView={variants.visible}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={classes.about}>
        <Center id='about'>
          <Box>
            <Container ta='center'>
              <Title className={classes.headingAboutText}>ABOUT</Title>
              <Title order={6} className={classes.heading6Text}>
                MYSELF
              </Title>
            </Container>
            <Space h='lg' />
            <Container ta='center' fz={rem(16)}>
              <Text className={classes.text}>
                Currently, I am a Software Engineering new graduate from the
                University of Calgary. I have previously interned as a Software
                Developer at IBM, gaining experience in full-stack development.
                My interests encompass entrepreneurship, web development, and
                the intersection of technology and healthcare. Additionally, I
                am interested in soccer, sneakers/fashion, and music. I am
                always seeking new and exciting opportunities to learn and grow!
              </Text>
            </Container>
          </Box>
        </Center>
        {/* Spotify */}
        <Center className={classes.center}>
          <Box>
            <Container ta='center'>
              <Title sx={{ marginTop: "3vh" }} className={classes.title}>
                Recent Top 10 🎧
              </Title>
            </Container>
          </Box>
        </Center>
        <div className={classes.spotify}>
          <Carousel
            slideSize='33.333333%'
            slideGap='md'
            loop
            align='start'
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%" },
            ]}
            className={classes.carousel}
          >
            {songs.map((song) => {
              return (
                <Carousel.Slide>
                  <SongCard {...song} />
                </Carousel.Slide>
              );
            })}
          </Carousel>
          <Text fz='xs' ta='right'>
            *Using Spotify API
          </Text>
        </div>
      </div>
    </motion.div>
  );
}

/* Projects Component */
function Projects() {
  const controls = useAnimation();
  const { classes } = useStyles();
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      whileInView={variants.visible}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={classes.projects} id='projects'>
        <Center>
          <Box>
            <Container ta='center'>
              <Title className={classes.headingText}>Projects</Title>
            </Container>
          </Box>
        </Center>
        <Carousel
          slideSize='33.3333333%'
          slideGap='lg'
          loop
          align='start'
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%" },
          ]}
          className={classes.projectCarousel}
        >
          {projects.map((project) => {
            return (
              <Carousel.Slide>
                <ProjectCard {...project} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </motion.div>
  );
}

/* Skills Component */
function Skills() {
  const controls = useAnimation();
  const { classes } = useStyles();
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      whileInView={variants.visible}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={classes.skills}>
        <Center id='skills'>
          <Box>
            <Container ta='center'>
              <Title className={classes.headingText}>Skills</Title>
            </Container>
          </Box>
        </Center>
        <Center className={classes.section}>
          <SimpleGrid
            cols={3}
            breakpoints={[
              { minWidth: 0, cols: 1, spacing: "md" },
              { minWidth: "sm", cols: 2, spacing: "sm" },
              { minWidth: "lg", cols: 3, spacing: "sm" },
            ]}
          >
            <Paper shadow='md' p='md' radius='md' className={classes.paper}>
              <Group spacing='xs'>
                <Title order={4} className={classes.title}>
                  Front-end Development
                </Title>
                <IconDeviceLaptop size={18} />
              </Group>
              <Text className={classes.text}>
                Previous work in front-end development, using HTML, CSS and
                JavaScript to create responsive and scalable websites.
              </Text>
            </Paper>
            <Paper shadow='md' p='md' radius='md' className={classes.paper}>
              <Group spacing='xs'>
                <Title order={4} className={classes.title}>
                  Full Stack Development
                </Title>
                <IconDeviceLaptop size={18} />
              </Group>
              <Text className={classes.text}>
                Developed multiple full stack applications, using React and
                Python from the ground up.
              </Text>
            </Paper>
            <Paper shadow='md' p='md' radius='md' className={classes.paper}>
              <Group spacing='xs'>
                <Title order={4} className={classes.title}>
                  UI Design
                </Title>
                <IconBrush size={18} />
              </Group>
              <Text className={classes.text}>
                Skilled in using Figma, Adobe XD, and Invision to mockup UI
                designs as well as translate designs to code.
              </Text>
            </Paper>
            <Paper shadow='md' p='md' radius='md' className={classes.paper}>
              <Group spacing='xs'>
                <Title order={4} className={classes.title}>
                  React.js
                </Title>
                <IconBrandReact size={18} />
              </Group>
              <Text className={classes.text}>
                Strong proficiency in React.js creating scalable and responsive
                web applications.
              </Text>
            </Paper>
            <Paper shadow='md' p='md' radius='md' className={classes.paper}>
              <Group spacing='xs'>
                <Title order={4} className={classes.title}>
                  Python
                </Title>
                <IconBrandPython size={18} />
              </Group>
              <Text className={classes.text}>
                Experienced Python developer, experience with multiple
                libraries, including PySpark, pandas and Django.
              </Text>
            </Paper>
            <Paper shadow='md' p='md' radius='md' className={classes.paper}>
              <Group spacing='xs'>
                <Title order={4} className={classes.title}>
                  Java
                </Title>
                <IconCode size={18} />
              </Group>
              <Text className={classes.text}>
                Strong fundamental skills in Java and object-oriented
                programming with multiple previous projects in Java.
              </Text>
            </Paper>
          </SimpleGrid>
        </Center>
      </div>
    </motion.div>
  );
}

/* Experience Component */
function Experience() {
  const controls = useAnimation();
  const { classes } = useStyles();
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      whileInView={variants.visible}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={classes.experience}>
        <Center id='experience'>
          <Box>
            <Container ta='center'>
              <Title className={classes.headingText}>Experience</Title>
            </Container>
          </Box>
        </Center>
        <Center>
          <Card
            radius='xl'
            p='xl'
            className={classes.experienceCard}
            shadow='md'
          >
            <Timeline
              active={3}
              bulletSize={30}
              lineWidth={5}
              p='lg'
              className={classes.timeline}
            >
              <Timeline.Item title="What's Next?" lineVariant='dashed'>
                <Text className={classes.text}>
                  Always open and looking for new and engaging opportunities!
                </Text>
              </Timeline.Item>
              <Timeline.Item title='Conclude.ai Operated by IBM (May 2021 - Aug. 2022)'>
                <List center size='md' spacing='sm' mt='md'>
                  <List.Item className={classes.listItem}>
                    Pioneered the development of an incubator SaaS platform with
                    an Agile team allowing users to receive legally compliant
                    and unique engagements for their customers
                  </List.Item>
                  <List.Item className={classes.listItem}>
                    Improved API response times by ∼85% employing Flask’s
                    default caching mechanism to optimize 12 endpoints
                  </List.Item>
                  <List.Item className={classes.listItem}>
                    Created 15+ reusable components using React.js and
                    introduced lazy loading decreasing page load times by 63%
                  </List.Item>
                  <List.Item className={classes.listItem}>
                    Optimized the application with Redux employing memoization
                    and batched actions to reduce re-renders by 25%
                  </List.Item>
                  <List.Item className={classes.listItem}>
                    Reduced MongoDB database size by 40% leveraging AWS S3
                    storage for engagements and uploaded images
                  </List.Item>
                  <List.Item className={classes.listItem}>
                    Developed and conducted comprehensive unit and integration
                    tests using Jest resulting in 95% code coverage
                  </List.Item>
                </List>
              </Timeline.Item>
              <Timeline.Item title='Pathway Signal Management Operated by IBM (Sep. 2021 - Jan. 2022)'>
                <List center size='md' spacing='sm' mt='md'>
                  <List.Item className={classes.listItem}>
                    Employed JavaScript with D3.js to create an interactive
                    Sankey visualization enabling practitioners to detect
                    unwarranted variation in cancer patient pathways 75% faster
                    by comparing patient data against the ideal pathway
                  </List.Item>
                  <List.Item className={classes.listItem}>
                    Enhanced the visualization to include a custom tool-tip
                    allowing 50+ key patient metrics to be shown on hover
                  </List.Item>
                  <List.Item className={classes.listItem}>
                    Increased maximum amount of data points within the
                    visualization by 33% using WebGL within the D3FC library
                  </List.Item>
                  <List.Item className={classes.listItem}>
                    Demonstrated and highlighted the potential use cases of the
                    visualization through presentations to 5 prospective
                    customers translating to 4 customers expressing interest in
                    signing initial agreements for the software
                  </List.Item>
                </List>
              </Timeline.Item>
              <Timeline.Item title='Relectric (Sep. 2019 - May 2021)'>
                <List center size='md' spacing='sm' mt='md'>
                  <List.Item className={classes.listItem}>
                    Founding member of the team responsible for converting a
                    gasoline-powered vehicle into an electric vehicle.
                  </List.Item>
                  <List.Item className={classes.listItem}>
                    Conceptualized and developed the infotainment system and
                    dashboard for the vehicle using Python and Adobe XD.
                  </List.Item>
                </List>
              </Timeline.Item>
            </Timeline>
          </Card>
        </Center>
      </div>
    </motion.div>
  );
}

/* Contact Component */
function Contact() {
  const controls = useAnimation();
  const { classes } = useStyles();
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      whileInView={variants.visible}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={classes.contact}>
        <Center className={classes.center} id='contact'>
          <Box>
            <Container ta='center'>
              <Title className={classes.headingText}>Contact</Title>
            </Container>
          </Box>
        </Center>
        <Center className={classes.section}>
          <Flex direction='column'>
            <Text fz='xl' mb='lg' ta='center' className={classes.text}>
              Want to work together or have any questions?
            </Text>
            <Center>
              <Button
                size='xl'
                radius='md'
                onClick={() =>
                  (window.location = "mailto:kahessaythomas@gmail.com")
                }
                className={classes.button}
              >
                Say Hello 👋🏾
              </Button>
            </Center>
          </Flex>
        </Center>
      </div>
    </motion.div>
  );
}

/* Home Component */
const Home = () => {
  // styles
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { width } = useViewportSize();

  /* Navbar component*/
  const sidebarProps = {
    alignToTop: true,
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  };

  // burger functionality
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  return (
    <AppShell
      layout={width > 1200 ? "alt" : "default"}
      navbar={
        <Navbar
          className={classes.navbar}
          hiddenBreakpoint='lg'
          hidden={!opened}
        >
          <Flex direction='column' align='flex-start' gap='xl' ml='xl' mt='xl'>
            <Text
              className={classes.navbarItem}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                if (opened) {
                  toggle();
                }
              }}
            >
              HOME
            </Text>
            <Text
              className={classes.navbarItem}
              onClick={() => {
                let section = document.getElementById("about");
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
                if (opened) {
                  toggle();
                }
              }}
            >
              ABOUT
            </Text>
            <Text
              className={classes.navbarItem}
              onClick={() => {
                let section = document.getElementById("projects");
                section.scrollIntoView(sidebarProps);
                if (opened) {
                  toggle();
                }
              }}
            >
              PROJECTS
            </Text>
            <Text
              className={classes.navbarItem}
              onClick={() => {
                let section = document.getElementById("skills");
                section.scrollIntoView(sidebarProps);
                if (opened) {
                  toggle();
                }
              }}
            >
              SKILLS
            </Text>
            <Text
              className={classes.navbarItem}
              onClick={() => {
                let section = document.getElementById("experience");
                section.scrollIntoView(sidebarProps);
                if (opened) {
                  toggle();
                }
              }}
            >
              EXPERIENCE
            </Text>
            <Text
              className={classes.navbarItem}
              onClick={() => {
                let section = document.getElementById("contact");
                section.scrollIntoView(sidebarProps);
                if (opened) {
                  toggle();
                }
              }}
            >
              CONTACT
            </Text>
          </Flex>
        </Navbar>
      }
      header={
        <Header
          height={50}
          className={opened ? classes.openHeader : classes.header}
          id='header'
        >
          <Group position={width > 1200 ? "right" : "apart"}>
            <Burger
              opened={opened}
              onClick={() => {
                toggle();
              }}
              aria-label={label}
              hidden={width > 1200}
            />
            <ActionIcon
              variant='subtle'
              onClick={() => {
                let input = dark ? "light" : "dark";
                toggleColorScheme(input);
              }}
              title='Toggle color scheme'
              className={classes.toggleButton}
            >
              {dark ? <IconSun size={30} /> : <IconMoonStars size={30} />}
            </ActionIcon>
          </Group>
        </Header>
      }
    >
      <div className={classes.content}>
        {/* Landing Page */}
        <Flex
          direction={{
            base: "column",
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          align='center'
          className={classes.landing}
          id='landing'
        >
          <Center>
            <Image
              src={dark ? profileDark : profileLight}
              width={350}
              height={350}
              radius='xl'
              className={classes.landingImage}
            ></Image>
          </Center>
          <Group position='center'>
            <Box>
              <TypeAnimation
                sequence={[
                  "Hi,\nI'm Thomas Kahessay,\nSoftware Engineer &\nLifelong Learner",
                  1000,
                ]}
                wrapper='span'
                cursor={true}
                repeat={false}
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                className={classes.landingTitle}
              />
              <Space h='lg' />
              <Group>
                <ActionIcon
                  size={40}
                  className={classes.iconBtn}
                  onClick={() =>
                    window.open("https://github.com/thomaskahessay", "_blank")
                  }
                >
                  <IconBrandGithub
                    size={40}
                    color='black'
                    className={classes.iconBtnChild}
                  />
                </ActionIcon>
                <ActionIcon
                  size={40}
                  className={classes.iconBtn}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/thomaskahessay/",
                      "_blank"
                    )
                  }
                >
                  <IconBrandLinkedin
                    size={40}
                    color='black'
                    className={classes.iconBtnChild}
                  />
                </ActionIcon>
              </Group>
            </Box>
          </Group>
        </Flex>

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Skills */}
        <Skills />

        {/* Experience */}
        <Experience />

        {/* Contact */}
        <Contact />
      </div>

      {/* Footer */}
      <Flex
        direction='row-reverse'
        mt='xl'
        sx={{ paddingRight: "1.5vh", paddingBottom: "1.5vh" }}
      >
        <ActionIcon
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={classes.iconBtn}
        >
          <IconSquareRoundedChevronUp
            size={40}
            className={classes.iconBtnChild}
            color='black'
          />
        </ActionIcon>
      </Flex>
    </AppShell>
  );
};

export default Home;
