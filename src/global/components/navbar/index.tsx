import { Box, Container, Stack, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          top: 0,
          padding: "1rem",
          zIndex: 99,
          width: "100%",
          position: "fixed",
          backgroundColor: "#A52A2A",
          boxShadow: "0px 4px 74px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Container
          sx={{
            height: "100%",
          }}
        >
          <Stack
            direction="row"
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text color={"tomato"}  fontSize='3xl'>Belanja.com</Text>
            <Button variant="link" onClick={() => navigate("/")}>
            <Text   color={"white"} fontSize='3xl'>Home</Text>
            </Button>
            <Button variant="link" onClick={() => navigate("/register")}>
            <Text   color={"white"} fontSize='3xl'>Register</Text>
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}