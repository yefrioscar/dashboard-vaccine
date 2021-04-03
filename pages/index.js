import VaccinesGraph from '../components/vaccines-graph'
import { parse } from 'papaparse'
import { useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import SearchCountry from '../components/search-country'

export async function getStaticProps (context) {
  // console.log('====================================');
  // console.log(context.params);
  // console.log('====================================');

  // Call an external API endpoint to get posts
  // const res = await fetch(
  //   'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
  // )
  // const vaccines = await res.json()
  // const vaccines_peru = vaccines.find(item => item.iso_code === 'PER')

  const locations = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/locations.csv'
  )
  const locationsString = await locations.text()
  let parserLocation = parse(locationsString, { header: true })

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      // vaccines: vaccines_peru ? vaccines_peru.data : [],
      locations: parserLocation.data
    }
  }
}

export default function Home ({ locations }) {
  const router = useRouter()

  const handleChangeCountry = item => {
    console.log(item)
    router.push(`/${item.iso_code.toLocaleLowerCase()}`, undefined)
  }

  return (
    <div className='max-w-screen-lg lg:mx-auto mt-10 mx-4'>
      <div className='grid gap-4'>
        <SearchCountry
          locations={locations}
          handleChangeCountry={handleChangeCountry}
        />
      </div>
    </div>
  )
}
