import React, { useState } from "react";
import { Box, Button, Container, Heading, Table, Thead, Tbody, Tr, Th, Td, Input, Select, FormControl, FormLabel, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" },
  ]);

  const toast = useToast();

  const handleAddUser = () => {
    // This function would handle adding a new user to the RBAC system
    toast({
      title: "Add user",
      description: "This functionality will add a new user.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleDeleteUser = (userId) => {
    // This function would handle deleting a user from the RBAC system
    setUsers(users.filter((user) => user.id !== userId));
    toast({
      title: "User Deleted",
      description: "The user has been successfully deleted.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleEditUser = (userId) => {
    // This function would handle editing user details
    toast({
      title: "Edit user",
      description: "This functionality will edit user details.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" my="8">
        RBAC Administration Panel
      </Heading>
      <Box my="4">
        <FormControl>
          <FormLabel htmlFor="new-user">Add New User</FormLabel>
          <Input id="new-user" placeholder="Enter user name" />
          <Select placeholder="Select role" mt="2">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Select>
          <Button leftIcon={<FaPlus />} colorScheme="blue" mt="2" onClick={handleAddUser}>
            Add User
          </Button>
        </FormControl>
      </Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.role}</Td>
              <Td>
                <IconButton icon={<FaEdit />} onClick={() => handleEditUser(user.id)} aria-label="Edit user" />
                <IconButton icon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteUser(user.id)} aria-label="Delete user" ml="2" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Index;
