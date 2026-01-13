import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Skeleton,
  SkeletonText,
  HStack,
} from "@chakra-ui/react";

const ProductsTableSkeleton = ({ rows = 5 }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Product Name</Th>
          <Th>Price</Th>
          <Th>Category</Th>
          <Th textAlign="center">Actions</Th>
        </Tr>
      </Thead>

      <Tbody>
        {Array.from({ length: rows }).map((_, index) => (
          <Tr key={index}>
            <Td>
              <SkeletonText noOfLines={1} width="80%" />
            </Td>

            <Td>
              <Skeleton width="60px" height="20px" />
            </Td>

            <Td>
              <Skeleton width="100px" height="20px" />
            </Td>

            <Td>
              <HStack justify="center" spacing={3}>
                <Skeleton height="32px" width="70px" startColor="red.100" endColor="red.300" />
                <Skeleton height="32px" width="70px" startColor="blue.100"endColor="blue.300" />
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductsTableSkeleton;
