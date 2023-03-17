import { Box, Flex, SimpleGrid,Text,theme } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Header} from '../components/Header'
import { SideBar } from '../components/SideBar'
import dynamic from 'next/dynamic'

export default function dashboard() {

  const Chart = dynamic(()=> import('react-apexcharts'),{
    ssr:false
  })
  const options={
    chart:{
      toolbar:{
        show:false,
      },
      zoom:{
        enabled: false
      },
      foreColor:theme.colors.gray[500]
    },
    grid:{
      show:false
    },
    dataLabels:{
      enabled:false
    },
    colors:[theme.colors.pink[500]],
    tooltip:{
      enabled:true,
      fillSeriesColor: true,
      x:{
        show:false
      }

    },
    stroke:{
    show:true,
    },
    xaxis:{
      type:'datetime',
      axisBorder:{
        color:theme.colors.gray[600]
      },
      axisTicks:{
        color:theme.colors.gray[600]
      },
    },
    fill:{
      opacity:0.3,
      type:'gradient',
      gradient:{
        shade:'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }

    },

  plotOptions: {
    chart: {
      distributed: true
    }
  },
}
  const series=[
    {name:'inscritos',data:[
      {x:'2021-03-18T00:00:00.000Z',y:100},
      {x:'2021-03-19T00:00:00.000Z', y:300 },
      {x:'2021-03-20T00:00:00.000Z', y:800},
      {x:'2021-03-21T00:00:00.000Z', y:1500},
      {x:'2021-03-22T00:00:00.000Z', y:1000},
      {x:'2021-03-23T00:00:00.000Z', y:2600},
      {x:'2021-03-24T00:00:00.000Z',y:2000},
      {x:'2021-03-25T00:00:00.000Z', y:3000}
    ]}
  ]
  return (
    <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <Flex direction="column" h="100vh">
      <Header/>
      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <SideBar/>
        <SimpleGrid flex='1' gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
          p={["6", "8"]}
          bg="gray.800"
          borderRadius="8"
          pb="4"
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart type='area' options={options} series={series} height={160}/>
            
          </Box>
          <Box
          p={["6","8"]}
          bg="gray.800"
          borderRadius="8"
          pb="4"
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart type='area' options={options} series={series} height={160}/>
            
          </Box>
          
        </SimpleGrid>
      </Flex>
    </Flex>
    
    </>
  )
}





