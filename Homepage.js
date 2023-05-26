import React from 'react';
import { ChakraProvider, Box, Text, Grid, GridItem, Heading, VStack, Input, Button } from '@chakra-ui/react';

// Array of users for login/signup
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

const Homepage = () => {
  // State variables for login/signup forms
  const [loginUsername, setLoginUsername] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  const [signupUsername, setSignupUsername] = React.useState('');
  const [signupPassword, setSignupPassword] = React.useState('');

  // Function to handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Check if the entered credentials match any user
    const user = users.find((user) => user.username === loginUsername && user.password === loginPassword);
    if (user) {
      alert('Login successful!');
      // Do something else (e.g., redirect to a dashboard)
    } else {
      alert('Invalid username or password');
    }
  };

  // Function to handle signup form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Check if the username is already taken
    const userExists = users.some((user) => user.username === signupUsername);
    if (userExists) {
      alert('Username already taken');
    } else {
      // Add the new user to the array
      users.push({ username: signupUsername, password: signupPassword });
      alert('Signup successful!');
      // Do something else (e.g., redirect to a dashboard)
    }
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <Heading as="h1" size="xl" mb={4}>
              Welcome to our Homepage!
            </Heading>
          </GridItem>
          <GridItem>
            <VStack spacing={4} align="start">
              <Heading as="h2" size="lg" mb={4}>
                Login
              </Heading>
              <form onSubmit={handleLoginSubmit}>
                <Input
                  placeholder="Username"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  mb={2}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  mb={4}
                />
                <Button colorScheme="teal" type="submit">
                  Log in
                </Button>
              </form>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={4} align="start">
              <Heading as="h2" size="lg" mb={4}>
                Signup
              </Heading>
              <form onSubmit={handleSignupSubmit}>
                <Input
                  placeholder="Username"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                  mb={2}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  mb={4}
                />
                <Button colorScheme="teal" type="submit">
                  Sign up
                </Button>
              </form>
            </VStack>
          </GridItem>
          <GridItem colSpan={2}>
            <Text fontSize="xl" fontWeight="bold">
              About Us
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Homepage;
