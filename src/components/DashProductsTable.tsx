import {
  Button,
  Img,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import {
  useGetDashboardProductsQuery,
} from "../app/services/productsApis";
import ProductsTableSkeleton from "./SkeletonTable";
import { ProductData } from "../interfaces";
import MainAlertDialog from "./MainAlertDialog";
import { useRef, useState } from "react";
import DeleteModalDash from "./contentDaialogs/DeleteModalDash";
import UpdateModalDash from "./contentDaialogs/UpdateModalDash";

 

export default function DashProductsTable() {
  const { isLoading, data } = useGetDashboardProductsQuery(
    { page: 1 },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [DailaogType, setDailogType] =useState<'delete' | 'update' | null>(null);

const [clickedProduct,setClickedProduct]=useState<ProductData>({ id:0, attributes:{title:"",price:0,stock:0,thumbnail: {data :{attributes:{url:""}} } ,description:""}  })


  console.log("useGetDashboardProductsQuery => ", data);

  const handleOpenDeleteDialog = (item:ProductData ) => () => {
            setDailogType("delete")
            setClickedProduct(item)
            onOpen();
  };






  const handleOpenUpdateDialog = (item: ProductData) => () => {
        setDailogType("update")
        setClickedProduct(item)
        onOpen();
  };

  if (isLoading) return <ProductsTableSkeleton />;

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>category</Th>
              <Th>Thumbnail</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.data.map((item: ProductData) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td> {item.attributes.title} </Td>
                <Td> {item.attributes.category?.data.attributes.title} </Td>
                <Td>
                  {" "}
                  <Img
                    src={`${import.meta.env.VITE_SERVER_URL}${
                      item.attributes.thumbnail.data.attributes.url
                    }`}
                    w={"16"}
                    h={"16"}
                    rounded={"full"}
                  />{" "}
                </Td>
                <Td>{item.attributes.price}</Td>
                <Td> {item.attributes.stock} </Td>
                <Td>
                  <Button
                    bg={"#ba95f7ff"}
                    variant="outline"
                    overflow="hidden"
                    w={"fit-content"}
                    px={"3"}
                    py={"0"}
                    me={"1.5"}
                  >
                    re
                  </Button>
                  <Button
                    bg={"#f17892ff"}
                    variant="outline"
                    overflow="hidden"
                    w={"fit-content"}
                    px={"3"}
                    py={"0"}
                    me={"1.5"}
                    onClick={handleOpenDeleteDialog(item)}
                  >
                    de
                  </Button>
                  <Button
                    bg={"#8cb6f5ff"}
                    variant="outline"
                    overflow="hidden"
                    w={"fit-content"}
                    px={"3"}
                    py={"0"}
                    onClick={handleOpenUpdateDialog(item)}
                  >
                    up
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <MainAlertDialog
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
       
      >
        {/*  هنحتاج نحط ال  id  بتاع العنصر اللى هينضغط عليه عشان هيتحذف فى  global state  عشان نقدر نبعته هنا  */}
        { DailaogType==='delete' && <DeleteModalDash item={clickedProduct} onClose={onClose} /> }
        { DailaogType==='update' && <UpdateModalDash item={clickedProduct} onClose={onClose} /> }
      </MainAlertDialog>
    </>
  );
}
