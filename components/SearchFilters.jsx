import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {MdCancel} from "react-icons/md"
import { getFilterValues, filterData } from "../utils/filterData";

const SearchFilters = () => {

    const [filter, setFilter] = useState(filterData)

    const router = useRouter()

    const searchProperties = (filterValues) => {
        const path = router.pathname
        const {query} = router

        const values = getFilterValues(filterValues)

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]){
                query[item.name] = item.value
            }
        })

        router.push({pathname: path, query})
    }
    
    return (
        <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
            {filter.map((filter) => (
                <Box key={filter.queryName}>
                    <Select 
                    placeholder={filter.placeholder}
                    w="fit-content"
                    p="2"
                    onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}
                    
                    >
                        {filter?.items?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters