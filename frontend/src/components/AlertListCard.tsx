import { Card, CardBody, Flex, Box, Image, Spacer, Text, Tag } from '@chakra-ui/react';
import { format } from 'date-fns';
import { MouseEvent } from 'react';

export type Props = {
  anomaly: string;
  machine: string;
  timestamp: number;
  onSelect: (event: MouseEvent) => void;
};

const color = [
  {
    type: 'Mild',
    color: 'green'
  },
  {
    type: 'Moderate',
    color: '#FFBF00'
  },
  {
    type: 'Severe',
    color: 'red'
  }
];

const renderColor = (type: string) => {
  return color.find((item) => item.type === type);
};

export default function AlertListCard({ anomaly, machine, timestamp, onSelect }: Props) {
  return (
    <Card
      m={5}
      borderWidth="0.2px"
      borderColor="#72757A"
      sx={{
        cursor: 'pointer'
      }}
      onClick={onSelect}>
      <CardBody pt={3} pl={3} pr={3}>
        <Flex align="center">
          <Box w="2%" mr={3}>
            <Image src="/img/blue-dot.png" />
          </Box>
          <Text>ID #00013211</Text>
          <Spacer />

          {/*// @ts-ignore*/}
          <Tag
            size="md"
            borderRadius="full"
            pl="10px"
            pr="10px"
            backgroundColor={
              // @ts-ignore
              renderColor(anomaly).color
            }
            color="white">
            {anomaly}
          </Tag>
        </Flex>
        <Box ml={5} mt={3}>
          <Text>Unkown Anomaly</Text>
          <Text>Detected at {format(new Date(timestamp * 1000), 'PPpp')}</Text>
          <Text mt={3} color="#3478FC">
            {machine}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}
