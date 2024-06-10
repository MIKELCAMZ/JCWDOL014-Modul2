import { useEffect, useState } from "react";

import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
// import axios from "axios";
import instance from "../../../api/api_instance";

interface IUsers {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}

export default function CustomTable() {
  const [users, setUsers] = useState<IUsers[]>([]);

  const fetchUsers = async () => {
    const { data } = await instance.get("users");
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        
        <Thead>
          <Tr>
            <Th fontSize='2xl'>Id</Th>
            <Th fontSize='2xl'>Name</Th>
            <Th fontSize='2xl'>Email</Th>
            <Th fontSize='2xl'>Password</Th>
            <Th fontSize='2xl' isNumeric>Age</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user) => {
            return (
              <Tr key={user.id}>
                 <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.password}</Td>
                <Td isNumeric>{user.age}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}