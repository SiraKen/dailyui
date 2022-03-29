import type { NextComponentType } from "next";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer: NextComponentType = () => {
  return (
    <>
      <Box as="footer" py={3}>
        <Text
          align={"center"}
          fontWeight={"bold"}
          fontSize={"sm"}
          opacity={0.75}
        >
          &copy; 2022{" "}
          <Link
            href={"https://www.siraken.net/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            SiraKen.NET
          </Link>
        </Text>

        <Text align={"center"} fontSize={"xs"} opacity={0.75}>
          Powered by{" "}
          <Link
            href={"https://chakra-ui.com/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Chakra UI
          </Link>
          ,{" "}
          <Link
            href={"https://nextjs.org/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            Next.js
          </Link>
          , and{" "}
          <Link
            href={"https://www.typescriptlang.org/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            TypeScript
          </Link>
          . Hosted on{" "}
          <Link
            href={"https://pages.github.com/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            GitHub Pages
          </Link>
          .
        </Text>
      </Box>
    </>
  );
};

export default Footer;
