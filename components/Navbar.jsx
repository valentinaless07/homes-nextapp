import 
{ Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } 
from "@chakra-ui/react";
import Link from "next/link";
import {FcMenu, FcHome, FcAbout} from "react-icons/fc"
import {BsSearch} from "react-icons/bs"
import {FiKey} from "react-icons/fi"


const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft="2">Homes</Link>
        </Box>
        <Spacer/>
        <Flex justifyContent="center" alignItems="center">
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu style={{width: "30px", height: "30px"}}/>} variant="outlined" color="red.400"/>
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Flex>
    </Flex>
)

export default Navbar