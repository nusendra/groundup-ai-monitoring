import {
  Card,
  CardHeader,
  CardBody,
  Select,
  Text,
  Box,
  Divider,
  Flex,
  Tag,
  Textarea,
  Button
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import AlertListCard, { Props as AlertProps } from '../components/AlertListCard';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import Waveform from '../components/Waveform';
import http from '../http';

export default function AlertPage() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [anomalies, setAnomalies] = useState([]);

  const fetchAnomalies = async () => {
    const { data } = await http.get('/api/v1/anomalies');
    console.log(data);

    setAnomalies(data);
  };

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  useEffect(() => {
    fetchAnomalies();
  }, []);

  const renderList = anomalies.map((item: AlertProps, index) => {
    return (
      <AlertListCard
        key={index}
        anomaly={item.anomaly}
        machine={item.machine}
        timestamp={item.timestamp}
      />
    );
  });

  return (
    <>
      <Card m={5} ref={ref} borderWidth="0.2px" borderColor="#72757A">
        <CardHeader
          sx={{
            paddingTop: 'var(--chakra-space-2)',
            paddingBottom: 'var(--chakra-space-2)'
          }}>
          <Box w="15%">
            <Select placeholder="CNC Machine">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </CardHeader>
        <Divider opacity="0.3" borderColor="#72757A" />
        <CardBody p={0}>
          <Flex>
            <Box w="30%">
              <Text mt={3} ml={5} mb={3}>
                <ChevronLeftIcon boxSize={6} mr={3} />
                Back
              </Text>
              <Divider opacity="0.2" borderWidth="0.5px" borderColor="#2A2E5D" />
              <Text mt={3} ml={5} mb={3}>
                6 Alerts
                <Tag
                  size="md"
                  borderRadius="full"
                  ml={4}
                  pl="20px"
                  pr="20px"
                  backgroundColor="#3478FC"
                  color="white">
                  2 New
                </Tag>
              </Text>
              <Divider opacity="0.2" borderWidth="0.5px" borderColor="#2A2E5D" />
              {renderList}
            </Box>
            <Box h={height - 50}>
              <Divider
                opacity="0.2"
                orientation="vertical"
                borderWidth="0.5px"
                borderColor="#2A2E5D"
              />
            </Box>
            <Box pl={10} pt={5} w="67%">
              <Text fontSize="3xl">Alert ID #00013211</Text>
              <Text>Detected at 2021-04-22 20:10:04</Text>

              <Divider mt={5} />

              <Flex mt="5">
                <Box w="50%">
                  <Text mb={2}>Anomaly Machine Output</Text>
                  <Waveform audio="http://localhost:5173/1.wav" />
                </Box>
                <Box w="50%">
                  <Text mb={2}>Anomaly Machine Output</Text>
                  <Waveform audio="http://localhost:5173/1.wav" />
                </Box>
              </Flex>

              <Box mt={10}>
                <Text as="b">Equipment</Text>
                <Text>CNC Machine</Text>
              </Box>

              <Box mt={5}>
                <Text as="b">Suspected Reason</Text>
                <Box w="300px">
                  <Select placeholder="CNC Machine">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
              </Box>

              <Box mt={5}>
                <Text as="b">Action Required</Text>
                <Box w="300px">
                  <Select placeholder="CNC Machine">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
              </Box>

              <Box mt={5}>
                <Text as="b">Comments</Text>
                <Textarea />
              </Box>

              <Button backgroundColor="#526CFE" color="white" mt={5}>
                Update
              </Button>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}
