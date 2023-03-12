import { Card, CardBody, Flex, Box, Image, Spacer, Text, Tag } from '@chakra-ui/react';
export default function AlertListCard() {
  return (
    <Card m={5} borderWidth="0.2px" borderColor="#72757A">
      <CardBody pt={2} pl={2} pr={2}>
        <Flex align="center">
          <Box w="2%" mr={3}>
            <Image src="/img/blue-dot.png" />
          </Box>
          <Text>ID #00013211</Text>
          <Spacer />
          <Tag
            size="md"
            borderRadius="full"
            pl="10px"
            pr="10px"
            backgroundColor="#FCA034"
            color="white">
            Moderate
          </Tag>
        </Flex>
        <Box ml={5} mt={3}>
          <Text>Unkown Anomally</Text>
          <Text>Detected at 2021-06-18 20:10:04</Text>
          <Text mt={3} color="#3478FC">
            CNC Machine
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}
