import { Container, VStack, Box, Flex, Text, Image, IconButton, HStack, Spacer } from "@chakra-ui/react";
import { FaHome, FaUser, FaUpload } from "react-icons/fa";

const photos = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Photo 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "Photo 2" },
  { id: 3, src: "https://via.placeholder.com/300", alt: "Photo 3" },
];

const Index = () => {
  return (
    <Container maxW="container.lg" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">PhotoShare</Text>
        <Spacer />
        <HStack spacing={4}>
          <IconButton aria-label="Home" icon={<FaHome />} />
          <IconButton aria-label="Profile" icon={<FaUser />} />
          <IconButton aria-label="Upload" icon={<FaUpload />} />
        </HStack>
      </Flex>
      <VStack spacing={4} mt={4}>
        {photos.map(photo => (
          <Box key={photo.id} boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src={photo.src} alt={photo.alt} />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;