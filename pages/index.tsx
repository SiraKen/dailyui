import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../layouts/default";
import { Box, SimpleGrid, Text, Image, Heading, Link } from "@chakra-ui/react";
import challenges from "../data/dailyui.json";
import previous_challenges from "../data/previous_dailyui.json";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SiraKen' Daily UI Challenge</title>
        <meta
          name="description"
          content="Kento Shirasawa's Daily UI designing challenge."
        />
      </Head>
      <Layout>
        {/* page title */}
        <Box mb={7}>
          <Heading as="h1" size="2xl" mb={2}>
            Daily UI
          </Heading>
          <Text fontSize={"lg"} opacity={0.75}>
            SiraKen's Daily UI Challenge.
          </Text>
          <Text fontSize={"xs"} opacity={0.75}>
            <Link
              href={"https://www.dailyui.co/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              https://www.dailyui.co/
            </Link>
          </Text>
        </Box>
        {/* latest */}
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={5} mb={7}>
          {challenges.map((challenge, index) => (
            <Box
              shadow={"base"}
              borderRadius={"base"}
              p={3}
              bgColor={"#fff"}
              key={index}
            >
              <Text fontSize={"xl"} fontWeight={"bold"} mb={2}>
                {challenge.name}
              </Text>
              <Image
                src={`/dailyui/${challenge.image}.webp`}
                alt={challenge.name}
                borderRadius={"base"}
              />
            </Box>
          ))}
        </SimpleGrid>
        {/* previous */}
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Previous Challenges
        </Text>
        <Text fontSize={"sm"} mb={3} opacity={0.75}>
          Designs I created when I was a high school student. I was more
          immature then than I am now, so please look at them with kind eyes.
          <br />* @Sira_Kento is my previous username.
        </Text>
        <SimpleGrid columns={{ sm: 1, md: 2 }} gap={5}>
          {previous_challenges.map((challenge, index) => (
            <Box
              shadow={"base"}
              borderRadius={"base"}
              p={3}
              bgColor={"#fff"}
              key={index}
            >
              <Text fontSize={"xl"} fontWeight={"bold"} mb={2}>
                {challenge.name}
              </Text>
              <Image
                src={`/dailyui/previous/${challenge.image}.webp`}
                alt={challenge.name}
                borderRadius={"base"}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Layout>
    </>
  );
};

export default Home;
