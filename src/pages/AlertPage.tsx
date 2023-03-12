import {
  Card,
  CardHeader,
  CardBody,
  Select,
  Text,
  Box,
  Divider,
  Flex,
  Tag
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import AlertListCard from '../components/AlertListCard';
import { useRef, useState, useLayoutEffect } from 'react';

export default function AlertPage() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  return (
    <>
      <Card m={5} borderWidth="0.2px" borderColor="#72757A">
        <CardHeader
          sx={{
            'padding-top': 'var(--chakra-space-2)',
            'padding-bottom': 'var(--chakra-space-2)'
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
        <CardBody p={0} ref={ref}>
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
              {Array.from(Array(6), (e, i) => {
                return <AlertListCard />;
              })}
            </Box>
            <Box h={height}>
              <Divider
                opacity="0.2"
                orientation="vertical"
                borderWidth="0.5px"
                borderColor="#2A2E5D"
              />
            </Box>
            <Box>
              <Text>qaa</Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}
