import {
  ChakraProvider,
  extendTheme,
  Heading,
  Container,
  Text,
  Grid,
  Box,
  Stack,
  VStack,
  HStack,
  Flex,
  IconButton,
  Button,
  Image,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
// Remove the axios import
// import axios from "axios";
import { useState } from "react";
import { useRef } from "react";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f7fafc",
      200: "#edf2f7",
      300: "#e2e8f0",
      400: "#cbd5e0",
      500: "#a0aec0",
      600: "#718096",
      700: "#4a5568",
      800: "#2d3748",
      900: "#1a202c",
    },
  },
  shadows: {
    xl: "0 20px 25px -5px rgba(160, 174, 192, 0.1), 0 10px 10px -5px rgba(160, 174, 192, 0.04)",
    md: "0 4px 6px -1px rgba(160, 174, 192, 0.1), 0 2px 4px -1px rgba(160, 174, 192, 0.06)",
  },
});
const emojis = [
  { emoji: "😀", description: "grinning face" },
  { emoji: "🐶", description: "dog" },
  { emoji: "🌳", description: "tree" },
  { emoji: "🚗", description: "car" },
  { emoji: "🚗", description: "car" },
  { emoji: "🚕", description: "taxi" }, 
  { emoji: "🚙", description: "sport utility vehicle" },
  { emoji: "🚌", description: "bus" },
  { emoji: "🚎", description: "trolleybus" },
  { emoji: "🏎", description: "racing car" },
  { emoji: "🚓", description: "police car" },
  { emoji: "🚑", description: "ambulance" },
  { emoji: "🚒", description: "fire engine" },
  { emoji: "🚐", description: "minibus" },
  { emoji: "🚚", description: "delivery truck" },
  { emoji: "🚛", description: "articulated lorry" },
  { emoji: "🚜", description: "tractor" },
  { emoji: "🦯", description: "white cane" },
  { emoji: "🦽", description: "manual wheelchair" },
  { emoji: "🦼", description: "motorized wheelchair" },
  { emoji: "🛴", description: "kick scooter" },
  { emoji: "🚲", description: "bicycle" },
  { emoji: "🛵", description: "motor scooter" },
  { emoji: "🏍", description: "motorcycle" },
  { emoji: "🛺", description: "auto rickshaw" },
  { emoji: "🚨", description: "police car light" },
  { emoji: "🚔", description: "oncoming police car" },
  { emoji: "🚍", description: "oncoming bus" },
  { emoji: "🚘", description: "oncoming automobile" },
  { emoji: "🚖", description: "oncoming taxi" },
  { emoji: "🚡", description: "aerial tramway" },
  { emoji: "🚠", description: "mountain cableway" },
  { emoji: "🚟", description: "suspension railway" },
  { emoji: "🚃", description: "railway car" },
  { emoji: "🚋", description: "tram car" },
  { emoji: "🚞", description: "mountain railway" },
  { emoji: "🚝", description: "monorail" },
  { emoji: "🚄", description: "high-speed train" },
  { emoji: "🚅", description: "bullet train" },
  { emoji: "🚈", description: "light rail" },
  { emoji: "🚂", description: "locomotive" },
  { emoji: "🚆", description: "train" },
  { emoji: "🚇", description: "metro" },
  { emoji: "🚊", description: "tram" },
  { emoji: "🚉", description: "station" },
  { emoji: "✈️", description: "airplane" },
  { emoji: "🛫", description: "airplane departure" },
  { emoji: "⌚️", description: "Watch" },
{ emoji: "📱", description: "Mobile phone" },
{ emoji: "📲", description: "Mobile phone with arrow" },
{ emoji: "💻", description: "Laptop computer" },
{ emoji: "⌨️", description: "Keyboard" },
{ emoji: "🖥", description: "Desktop computer" },
{ emoji: "🖨", description: "Printer" },
{ emoji: "🖱", description: "Computer mouse" },
{ emoji: "🖲", description: "Trackball" },
{ emoji: "🕹", description: "Joystick" },
{ emoji: "🗜", description: "Clamp" },
{ emoji: "💽", description: "Computer disk" },
{ emoji: "💾", description: "Floppy disk" },
{ emoji: "💿", description: "Optical disk" },
{ emoji: "📀", description: "DVD" },
{ emoji: "📼", description: "Videocassette" },
{ emoji: "📷", description: "Camera" },
{ emoji: "📸", description: "Camera with flash" },
{ emoji: "📹", description: "Video camera" },
{ emoji: "🎥", description: "Movie camera" },
{ emoji: "📽", description: "Film projector" },
{ emoji: "🎞", description: "Film frames" },
{ emoji: "📞", description: "Telephone receiver" },
{ emoji: "☎️", description: "Telephone" },
{ emoji: "📟", description: "Pager" },
{ emoji: "📠", description: "Fax machine" },
{ emoji: "📺", description: "Television" },
{ emoji: "📻", description: "Radio" },
{ emoji: "🎙", description: "Studio microphone" },
{ emoji: "🎚", description: "Level slider" },
{ emoji: "🎛", description: "Control knobs" },
{ emoji: "🧭", description: "Compass" },
{ emoji: "⏱", description: "Stopwatch" },
{ emoji: "⏲", description: "Timer clock" },
{ emoji: "⏰", description: "Alarm clock" },
{ emoji: "🕰", description: "Mantelpiece clock" },
{ emoji: "⌛️", description: "Hourglass done" },
{ emoji: "⏳", description: "Hourglass not done" },
{ emoji: "📡", description: "Satellite antenna" },
{ emoji: "🔋", description: "Battery" },
{ emoji: "🔌", description: "Electric plug" },
{ emoji: "💡", description: "Light bulb" },
{ emoji: "🔦", description: "Flashlight" },
{ emoji: "🕯", description: "Candle" },
{ emoji: "🪔", description: "Diya lamp" },
{ emoji: "🐱", description: "Cat" },
{ emoji: "🐭", description: "Mouse" },
{ emoji: "🐹", description: "Hamster" },
{ emoji: "🐰", description: "Rabbit" },
{ emoji: "🦊", description: "Fox" },
{ emoji: "🐻", description: "Bear" },
{ emoji: "🐼", description: "Panda" },
{ emoji: "🐻", description: "Polar Bear" },
{ emoji: "🐨", description: "Koala" },
{ emoji: "🐯", description: "Tiger" },
{ emoji: "🦁", description: "Lion" },
{ emoji: "🐮", description: "Cow" },
{ emoji: "🐷", description: "Pig" },
{ emoji: "🐽", description: "Pig nose" },
{ emoji: "🐸", description: "Frog" },
{ emoji: "🐵", description: "Monkey" },
{ emoji: "🙈", description: "See-no-evil monkey" },
{ emoji: "🙉", description: "Hear-no-evil monkey" },
{ emoji: "🙊", description: "Speak-no-evil monkey" },
{ emoji: "🐒", description: "Monkey" },
{ emoji: "🐔", description: "Chicken" },
{ emoji: "🐧", description: "Penguin" },
{ emoji: "🐦", description: "Bird" },
{ emoji: "🐦‍", description: "Black bird" },
{ emoji: "🐤", description: "Baby chick" },
{ emoji: "🐣", description: "Hatching chick" },
{ emoji: "🐥", description: "Front-facing baby chick" },
{ emoji: "🦆", description: "Duck" },
{ emoji: "🦅", description: "Eagle" },
{ emoji: "🦉", description: "Owl" },
{ emoji: "🦇", description: "Bat" },
{ emoji: "🐺", description: "Wolf" },
{ emoji: "🐗", description: "Boar" },
{ emoji: "🐴", description: "Horse" },
{ emoji: "🦄", description: "Unicorn" },
{ emoji: "🐝", description: "Honeybee" },
{ emoji: "🐛", description: "Bug" },
{ emoji: "🦋", description: "Butterfly" },
{ emoji: "🐞", description: "Lady beetle" },
];

const App = () => {
  const [trackId, setTrackId] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [image, updateImage] = useState();
  const [loading, updateLoading] = useState();
  const [selectedEmojis, updateSelectedEmojis] = useState([]);
  const [randomEmojis, updateRandomEmojis] = useState(
    shuffleArray(emojis)

  );
  const [maxColumns,] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;

    // Use the strict equality operator here
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  
  
  const onEmojiClick = (emojiObj) => {
    if (selectedEmojis.length < 3) {
      updateSelectedEmojis([...selectedEmojis, emojiObj]);
    }
  };

  const removeEmoji = (index) => {
    const newSelectedEmojis = selectedEmojis.filter(
      (_, i) => i !== index
    );
    updateSelectedEmojis(newSelectedEmojis);
  };

  const generatePromptFromSelectedEmojis = () => {
    let prompt = selectedEmojis
      .map((emojiObj, index) => {
        return `${index === 0 ? "" : ""}${emojiObj.description
          }${index < selectedEmojis.length - 1 ? " and a" : ""
          }`;
      })
      .join(" ");

    generate(prompt);

  };

  const getNextRandomEmojis = () => {
    let newCurrentIndex = currentIndex + maxColumns * maxRows;
    if (newCurrentIndex >= randomEmojis.length) {
      newCurrentIndex = 0;
      updateRandomEmojis(shuffleArray(randomEmojis));
    }
    setCurrentIndex(newCurrentIndex);
  };
  const fetchImage = async (fetchUrl, retries = 5) => {
    const response = await fetch(fetchUrl);
    const result = await response.json();
  
    if (result.status === "processing" && retries > 0) {
      // Wait for 30 seconds (30000 milliseconds) before fetching the image again
      await new Promise((resolve) => setTimeout(resolve, 30000));
      return fetchImage(fetchUrl, retries - 1);
    } else if (result.status === "success") {
      return result;
    } else {
      console.error("Failed to generate image", result);
      return null;
    }
  };
  const generate = async (prompt) => {
    updateLoading(true);
    const generatedTrackId = Math.floor(Math.random() * 10000000);
  
    const requestBody = {
      key: "F8GBPhkliFAokG2yokSkeNef0SHT4QnRPjAkKwzxWcPQFU8jNwbDT087XfCK",
      prompt: prompt,
      samples: 1,
      negative_prompt: "porn, naked, sex, nudity, nude, violence, blood, hate, victim",
      width: 360,
      height: 360,
      num_inference_steps: 10,
      model_id: "midjourney",
      lora: null,
      embeddings: null,
      guidance_scale: 7.5,
      webhook: null,
      track_id: generatedTrackId,
    };
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    };
    const apiUrl = "https://stablediffusionapi.com/api/v3/text2img";
    const response = await fetch(apiUrl, requestOptions);

    const result = await response.json();
    if (result.status === "success") {
      const imageUrl = result.output[0]; // Get the image URL from the output array
      setTrackId(result.id); // Set the trackId state with the id from the response
      setImageUrl(imageUrl); // Set the imageUrl state with the image URL
      console.log("Image URL:", imageUrl); // Add this line to debug the imageUrl
    } else {
      console.error("Failed to generate image", result);
    }
  
    updateLoading(false);
  };
  

  const maxRows = 10;




  const resetImage = () => {
    setImageUrl(null); // Reset imageUrl state instead of image state
  };
  const imageContainerRef = useRef();
  
  const downloadImage = () => {
    if (imageUrl) {
      const imageElement = new window.Image(); // Use window.Image instead of Image
      imageElement.crossOrigin = "anonymous";
      imageElement.src = imageUrl;
      imageElement.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = imageElement.width;
        canvas.height = imageElement.height;
  
        const ctx = canvas.getContext("2d");
        ctx.drawImage(imageElement, 0, 0);
  
        const dataURL = canvas.toDataURL("image/png");
  
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "generated-image.png";
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
  
        setTimeout(() => {
          document.body.removeChild(link);
        }, 100);
      };
    } else {
      alert("No image to download. Please generate an image first.");
    }
  };


  return (
    <ChakraProvider theme={theme}>
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight={["100%", "100vh"]}
        maxHeight="800px"
        bg="gray.900"
        flexDirection={["column", "row"]} // Change this to make containers stack on small screens
      >
        <Container
          maxW={["95vw", "md"]}
          bg="gray.800"
          borderRadius="md"
          p={6}
          boxShadow="xl"
          textAlign="center"
          marginRight={[0, 4]} // Adjust marginRight for different screen sizes
          marginBottom={[4, 0]} // Add marginBottom for small screens
        >
          <Heading marginBottom={4} color="white" fontSize={["xl", "2xl"]}>
          </Heading>
          <Text fontSize={["md", "lg"]} color="white" marginBottom={6}>
          </Text>
          <HStack justifyContent="flex-end" marginBottom={6}>

            <Button
              colorScheme="gray"
              boxShadow="md"
              onClick={() => getNextRandomEmojis()}
              _hover={{ boxShadow: "xs" }}
              marginRight={35}
            >
              ◀️
            </Button>
            <Button
              colorScheme="gray"
              boxShadow="md"
              onClick={() => getNextRandomEmojis()}
              _hover={{ boxShadow: "xs" }}
              marginRight={10}
              flip={180}
            >
               ▶️
            </Button>

          </HStack>
  
          <Grid
            templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
            templateRows={`repeat(${maxRows}, 1fr)`}
            gap={4}
            marginBottom={6}
          >
            {randomEmojis
              .slice(currentIndex, currentIndex + maxColumns * maxRows)
              .map((emojiObj, index) => (
                <Box
                  as="button"
                  key={index}
                  onClick={() => onEmojiClick(emojiObj)}
                  fontSize={["3xl", "4xl"]}
                  _hover={{
                    cursor: "pointer",
                    transform: "scale(1.2)",
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {emojiObj.emoji}
                </Box>
              ))}
          </Grid>
          

          <Box marginBottom={6}>
            <Button
              colorScheme="gray"
              boxShadow="md"
              onClick={generatePromptFromSelectedEmojis}
              _hover={{ boxShadow: "xs" }}
            >
              ✔️
            </Button>
          </Box>

        </Container>
        
        <Container
          maxW={["95vw", "md"]} generate
          bg="gray.800"
          borderRadius="md"
          p={6}
          boxShadow="xl"
          textAlign="center"
        >
          <Heading marginBottom={4} color="white" fontSize={["xl", "2xl"]}>
            <HStack justifyContent="flex-end" marginBottom={6}>
          <Button
              colorScheme="gray"
              boxShadow="md"
              onClick={resetImage}
              _hover={{ boxShadow: "xs" }}
              marginRight={30}
            >
              📄
            </Button>

            </HStack>
          </Heading>
        
          
          <Box
  ref={imageContainerRef}
  width={["300px", "400px"]}
  height={["300px", "400px"]}
  position="relative"
>
  {loading ? (
    <Stack>
      <SkeletonCircle size="50px" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Stack>
  ) : imageUrl ? (
    <Box
      width="100%"
      height="100%"
      position="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Image
        src={imageUrl}
        alt="Generated Image"
        boxShadow="xl"
        borderRadius="md"
        objectFit="contain"
      />
    </Box>
  ) : (
  
<Text color="white">No image generated yet.</Text>
)}
</Box>
<VStack marginTop={4}>
<Text color="white">Selected Emojis:</Text>
<HStack flexWrap="wrap" justifyContent="center">
{selectedEmojis.map((emojiObj, index) => (
<Flex
key={index}
border="10px solid"
borderRadius="md"
p={3}
fontSize={["4xl", "5xl"]}
alignItems="center"
justifyContent="center"
>
<Text marginRight={2}>{emojiObj.emoji}</Text>
<IconButton
aria-label="Remove emoji"
icon={<DeleteIcon />}
size="xs"
onClick={() => removeEmoji(index)}
borderRadius="full"
colorScheme="gray"
/>
</Flex>
))}

</HStack>
</VStack>

</Container>
</Flex>
</ChakraProvider>
);
};

export default App;
