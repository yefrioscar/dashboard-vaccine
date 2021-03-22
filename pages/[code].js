import { useRouter } from 'next/router'
import { parse } from 'papaparse'
import { useState } from 'react'
import SearchCountry from '../components/search-country'
import VaccinesGraph from '../components/vaccines-graph'

function Date({ vaccines, locations }) {
  const router = useRouter()

  console.log('====================================')
  console.log(vaccines, locations)
  console.log('====================================')

  const handleChangeCountry = item => {
    console.log(item);
    router.push(`/${item.iso_code.toLocaleLowerCase()}`, undefined)
  }

  return (
    <div className='max-w-screen-lg m-auto mt-10'>
      <div className=' grid gap-4'>
        <SearchCountry locations={locations} handleChangeCountry={handleChangeCountry} />
        <VaccinesGraph vaccines={vaccines} />
        
      </div>
    </div>
  )
}

export async function getStaticPaths() {

  const locations = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/locations.csv'
  )
  const locationsString = await locations.text()
  let parserLocation = await parse(locationsString, { header: true })

  const paths = parserLocation.data.filter(item => item.iso_code).map((location) => {
      return {
        params: { code: location.iso_code.toLocaleLowerCase() },
      }
  })

  console.log('====================================');
  console.log(paths);
  console.log('====================================');

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()
  const res = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
  )
  const vaccines = await res.json()
  const vaccines_peru = vaccines.find(item => item.iso_code === params.code.toLocaleUpperCase())

  const locations = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/locations.csv'
  )
  const locationsString = await locations.text()
  let parserLocation = parse(locationsString, { header: true })

  // Pass post data to the page via props
  return {
    props: {
      vaccines: vaccines_peru ? vaccines_peru.data : [],
      locations: parserLocation.data
    }
  }
}

export default Date