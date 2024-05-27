import { Container, VStack, Box, Flex, Text, Image, IconButton, HStack, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { FaHome, FaUser, FaUpload, FaHeart } from "react-icons/fa";

const photos = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Photo 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "Photo 2" },
  { id: 3, src: "https://via.placeholder.com/300", alt: "Photo 3" },
];

const Index = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [likes, setLikes] = useState({});

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedPhotos([...uploadedPhotos, { id: uploadedPhotos.length + 1, src: reader.result, alt: `Uploaded Photo ${uploadedPhotos.length + 1}` }]);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  return (
    <Container maxW="container.lg" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">PhotoShare</Text>
        <Spacer />
        <HStack spacing={4}>
          <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: "none" }} id="photo-upload-input" />
          <IconButton aria-label="Home" icon={<FaHome />} />
          <IconButton aria-label="Profile" icon={<FaUser />} />
          <IconButton aria-label="Upload" icon={<FaUpload />} onClick={() => document.getElementById('photo-upload-input').click()} />
        </HStack>
      </Flex>
      <VStack spacing={4} mt={4}>
        {photos.concat(uploadedPhotos).map(photo => (
          <Box key={photo.id} boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src={photo.src} alt={photo.alt} />
            <Flex align="center" p={2}>
              <IconButton
                aria-label="Like"
                icon={<FaHeart />}
                onClick={() => handleLike(photo.id)}
                colorScheme="red"
                variant={likes[photo.id] ? "solid" : "outline"}
              />
              <Text ml={2}>{likes[photo.id] || 0}</Text>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;