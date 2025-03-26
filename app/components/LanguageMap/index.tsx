/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { chakra, Text, Spinner, Center, Flex, Box, Heading } from '@chakra-ui/react'
import { Mercator } from '@visx/geo'
import { scaleOrdinal } from '@visx/scale'
import { Zoom } from '@visx/zoom'
import React, { useState, useEffect } from 'react'
import { feature } from 'topojson-client'

import countries from '@/components/LanguageMap/countries.json'
import Badge from '@/components/miscellaneous/Badge'

const LanguageMap = () => {
  const [ features, setFeatures ] = useState([])
  const [ loading, setLoading ] = useState(true)

  // Define language data - maps country codes to languages

  const countryData = {
    'Fiji': 'english',
    'Tanzania': 'english',
    'W. Sahara': null,
    'Canada': 'english',
    'United States of America': 'english',
    'Kazakhstan': null,
    'Uzbekistan': null,
    'Papua New Guinea': 'english',
    'Indonesia': null,
    'Argentina': 'spanish',
    'Chile': 'spanish',
    'Dem. Rep. Congo': 'french',
    'Somalia': null,
    'Kenya': 'english',
    'Sudan': null,
    'Chad': 'french',
    'Haiti': 'french',
    'Dominican Rep.': 'spanish',
    'Russia': null,
    'Bahamas': 'english',
    'Falkland Is.': 'english',
    'Norway': null,
    'Greenland': null,
    'Fr. S. Antarctic Lands': 'french',
    'Timor-Leste': null,
    'South Africa': 'english',
    'Lesotho': null,
    'Mexico': 'spanish',
    'Uruguay': 'spanish',
    'Brazil': null,
    'Bolivia': 'spanish',
    'Peru': 'spanish',
    'Colombia': 'spanish',
    'Panama': 'spanish',
    'Costa Rica': 'spanish',
    'Nicaragua': 'spanish',
    'Honduras': 'spanish',
    'El Salvador': 'spanish',
    'Guatemala': 'spanish',
    'Belize': 'english',
    'Venezuela': 'spanish',
    'Guyana': 'english',
    'Suriname': null,
    'France': 'french',
    'Ecuador': 'spanish',
    'Puerto Rico': 'spanish',
    'Jamaica': 'english',
    'Cuba': 'spanish',
    'Zimbabwe': 'english',
    'Botswana': 'english',
    'Namibia': 'english',
    'Senegal': 'french',
    'Mali': 'french',
    'Mauritania': 'french',
    'Benin': 'french',
    'Niger': 'french',
    'Nigeria': 'english',
    'Cameroon': 'french',
    'Togo': 'french',
    'Ghana': 'english',
    'Côte d\'Ivoire': 'french',
    'Guinea': 'french',
    'Guinea-Bissau': null,
    'Liberia': 'english',
    'Sierra Leone': 'english',
    'Burkina Faso': 'french',
    'Central African Rep.': 'french',
    'Congo': 'french',
    'Gabon': 'french',
    'Eq. Guinea': 'spanish',
    'Zambia': 'english',
    'Malawi': 'english',
    'Mozambique': null,
    'eSwatini': null,
    'Angola': null,
    'Burundi': 'french',
    'Israel': null,
    'Lebanon': null,
    'Madagascar': 'french',
    'Palestine': null,
    'Gambia': 'english',
    'Tunisia': 'french',
    'Algeria': 'french',
    'Jordan': null,
    'United Arab Emirates': null,
    'Qatar': null,
    'Kuwait': null,
    'Iraq': null,
    'Oman': null,
    'Vanuatu': 'french',
    'Cambodia': null,
    'Thailand': null,
    'Laos': null,
    'Myanmar': null,
    'Vietnam': null,
    'North Korea': null,
    'South Korea': null,
    'Mongolia': null,
    'India': 'english',
    'Bangladesh': null,
    'Bhutan': null,
    'Nepal': null,
    'Pakistan': null,
    'Afghanistan': null,
    'Tajikistan': null,
    'Kyrgyzstan': null,
    'Turkmenistan': null,
    'Iran': null,
    'Syria': null,
    'Armenia': null,
    'Sweden': null,
    'Belarus': null,
    'Ukraine': null,
    'Poland': null,
    'Austria': null,
    'Hungary': null,
    'Moldova': null,
    'Romania': null,
    'Lithuania': null,
    'Latvia': null,
    'Estonia': null,
    'Germany': null,
    'Bulgaria': null,
    'Greece': null,
    'Turkey': null,
    'Albania': null,
    'Croatia': null,
    'Switzerland': 'french',
    'Luxembourg': 'french',
    'Belgium': 'french',
    'Netherlands': null,
    'Portugal': null,
    'Spain': 'spanish',
    'Ireland': 'english',
    'New Caledonia': 'french',
    'Solomon Is.': 'english',
    'New Zealand': 'english',
    'Australia': 'english',
    'Sri Lanka': null,
    'China': null,
    'Taiwan': null,
    'Italy': 'italian',
    'Denmark': null,
    'United Kingdom': 'english',
    'Iceland': null,
    'Azerbaijan': null,
    'Georgia': null,
    'Philippines': 'english',
    'Malaysia': null,
    'Brunei': null,
    'Slovenia': null,
    'Finland': null,
    'Slovakia': null,
    'Czechia': null,
    'Eritrea': null,
    'Japan': 'japanese',
    'Paraguay': 'spanish',
    'Yemen': null,
    'Saudi Arabia': null,
    'Antarctica': null,
    'N. Cyprus': null,
    'Cyprus': null,
    'Morocco': 'french',
    'Egypt': null,
    'Libya': null,
    'Ethiopia': null,
    'Djibouti': 'french',
    'Somaliland': null,
    'Uganda': 'english',
    'Rwanda': 'french',
    'Bosnia and Herz.': null,
    'Macedonia': null,
    'Serbia': null,
    'Montenegro': null,
    'Kosovo': null,
    'Trinidad and Tobago': 'english',
    'S. Sudan': null
  }

  // Define color scheme for languages
  const colorScale = scaleOrdinal({
    domain: [ 'english', 'french', 'italian', 'spanish', 'japanese' ],
    range: [ 'black', 'black', 'black', 'black', 'grey' ]
  })

  // Fetch the world topology data
  useEffect(() => {
    const topology = countries
    // @ts-expect-error it's late
    const world = feature(topology, topology.objects.countries)
    // @ts-expect-error it's late
    setFeatures(world.features)
    setLoading(false)
  }, [])

  const width = 600
  const height = 400
  const scale = (width / 630) * 100
  const centerX = width / 2
  const centerY = height / 2

  if (loading) {
    return (
      <Center
        w='full'
        h='md'
      >
        <Spinner size='xl' />
      </Center>
    )
  }

  return <Flex
    pos='relative'
    w='100vw'
    p='20px 15%'
  >
    <Box
      overflow='hidden'
      w='full'
      maxW='4xl'
      mx='auto'
      borderRadius='25px'
    >
      <Zoom
        width={width}
        height={height}
        scaleXMin={100}
        scaleXMax={1000}
        scaleYMin={100}
        scaleYMax={1000}
        initialTransformMatrix={{
          scaleX: scale,
          scaleY: scale,
          translateX: centerX,
          translateY: centerY,
          skewX: 0,
          skewY: 0
        }}
      >
        {zoom => (
          <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
          >
            <Mercator
              data={features}
              scale={zoom.transformMatrix.scaleX}
              translate={[ zoom.transformMatrix.translateX, zoom.transformMatrix.translateY ]}
            >
              {mercator => (
                <g>
                  {mercator.features.map(({ feature, path }, i) => {
                    const language = countryData[
                    // @ts-expect-error it's late
                      feature.properties.name as keyof typeof countryData
                    ]

                    return (
                      <path
                        key={`country-${i}`}
                        d={path ?? ''}
                        fill={language ? colorScale(language) : 'transparent'}
                        stroke='black'
                        strokeWidth={0.5}
                      />
                    )
                  })}
                </g>
              )}
            </Mercator>
          </svg>
        )}
      </Zoom>
    </Box>

    <Flex
      w='100%'
      minH='400px'
      p='40px'
      borderRadius='25px'
    >
      <Flex
        direction='column'
        gap='50px'
      >
        <Heading
          fontSize='2.4em'
          lineHeight='50px'
        >
          With my skills in languages, I can communicate with approximately <chakra.span color='primary.600'>2.3 billion people</chakra.span>
        </Heading>

        <Flex
          wrap='wrap'
          direction='row'
          gap='10px'
        >
          <Badge>English</Badge>
          <Badge>French</Badge>
          <Badge>Italian</Badge>
          <Badge>Spanish</Badge>
          <Badge color='gray'>Japanese</Badge>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
}

export default LanguageMap
