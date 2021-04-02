import { useRouter } from 'next/router'
import { parse } from 'papaparse'
import { useState } from 'react'
import SearchCountry from '../components/search-country'
import VaccinesGraph from '../components/vaccines-graph'
import NumberFormat from 'react-number-format'
import Flag from 'react-world-flags'

function getCurrentValue (arr, property) {
  let filterer_arr = arr.filter(item => item[property])
  let filterer_arr_lastDate = filterer_arr[filterer_arr.length - 1]

  return filterer_arr_lastDate ? filterer_arr_lastDate[property] : 0
}

function Date ({ vaccines, locations }) {
  const router = useRouter()
  const { code } = router.query

  // console.log('====================================')
  console.log(locations)
  // console.log('====================================')
  let people_fully_vaccinated = getCurrentValue(
    vaccines,
    'people_fully_vaccinated'
  )
  let daily_vaccinations = getCurrentValue(vaccines, 'daily_vaccinations')
  let daily_vaccinations_per_million = getCurrentValue(
    vaccines,
    'daily_vaccinations_per_million'
  )
  let people_vaccinated = getCurrentValue(vaccines, 'people_vaccinated')

  const handleChangeCountry = item => {
    console.log(item)
    router.push(`/${item.iso_code.toLocaleLowerCase()}`, undefined)
  }

  console.log(code)

  const country = locations.find(
    item => item.iso_code.toLocaleLowerCase() === code.toLocaleLowerCase()
  )
  console.log(country)

  return (
    <div className='max-w-screen-lg m-auto mt-10'>
      <div className='grid gap-4'>
        <SearchCountry
          locations={locations}
          handleChangeCountry={handleChangeCountry}
        />
        <div className='bg-gray-200 w-full p-4 rounded-lg flex space-x-4'>
          <div className='w-10 h-auto '>
            <Flag code={code} height='16px' className='rounded' />
          </div>
          <span className='text-lg font-bold'> {country.location}</span>
        </div>
        <div className='grid gap-4 grid-cols-2'>
          <div className='bg-violet-100 rounded-lg flex flex-col font-bold p-4 relative justify-between'>
            <div className='space-y-2 mb-10'>
              <h4 className='text-sm text-violet-900'>
                PERSONAS VACUNADAS CON AL MENOS 1 DOSIS
              </h4>
              <p className='text-4xl text-violet-600 space-x-1'>
                <NumberFormat
                  value={people_vaccinated}
                  displayType={'text'}
                  thousandSeparator={true}
                />
                <span className='text-xs text-violet-400'>PERSONAS</span>
              </p>
            </div>
            <div className='space-y-2'>
              <h4 className='text-sm text-violet-900'>
                TOTAL DE PERSONAS VACUNADAS
              </h4>
              <p className='text-4xl text-violet-600  space-x-1'>
                <NumberFormat
                  value={people_fully_vaccinated}
                  displayType={'text'}
                  thousandSeparator={true}
                />
                <span className='text-xs text-violet-400'>PERSONAS</span>
              </p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 140 140'
              className='absolute right-8 top-1/2 transform -translate-y-1/2 h-24 w-auto'
            >
              <g
                id='Group_2'
                data-name='Group 2'
                transform='translate(-428 -321)'
              >
                <ellipse
                  id='Ellipse_841'
                  data-name='Ellipse 841'
                  cx='9'
                  cy='8'
                  rx='9'
                  ry='8'
                  transform='translate(501 321)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_842'
                  data-name='Ellipse 842'
                  cx='9'
                  cy='8'
                  rx='9'
                  ry='8'
                  transform='translate(459 334)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_846'
                  data-name='Ellipse 846'
                  cx='9'
                  cy='9'
                  r='9'
                  transform='translate(465 401)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_857'
                  data-name='Ellipse 857'
                  cx='8'
                  cy='9'
                  rx='8'
                  ry='9'
                  transform='translate(448 386)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_862'
                  data-name='Ellipse 862'
                  cx='8'
                  cy='8'
                  r='8'
                  transform='translate(435 425)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_867'
                  data-name='Ellipse 867'
                  cx='8.5'
                  cy='8'
                  rx='8.5'
                  ry='8'
                  transform='translate(483 391)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_872'
                  data-name='Ellipse 872'
                  cx='9'
                  cy='8'
                  rx='9'
                  ry='8'
                  transform='translate(529 398)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_877'
                  data-name='Ellipse 877'
                  cx='8'
                  cy='8'
                  r='8'
                  transform='translate(539 341)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_849'
                  data-name='Ellipse 849'
                  cx='8'
                  cy='8.5'
                  rx='8'
                  ry='8.5'
                  transform='translate(428 384)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_858'
                  data-name='Ellipse 858'
                  cx='8'
                  cy='8'
                  r='8'
                  transform='translate(454 368)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_863'
                  data-name='Ellipse 863'
                  cx='8.5'
                  cy='9'
                  rx='8.5'
                  ry='9'
                  transform='translate(470 352)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_868'
                  data-name='Ellipse 868'
                  cx='8'
                  cy='9'
                  rx='8'
                  ry='9'
                  transform='translate(506 365)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_873'
                  data-name='Ellipse 873'
                  cx='9'
                  cy='8'
                  rx='9'
                  ry='8'
                  transform='translate(522 378)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_878'
                  data-name='Ellipse 878'
                  cx='9'
                  cy='9'
                  r='9'
                  transform='translate(522 323)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_852'
                  data-name='Ellipse 852'
                  cx='8'
                  cy='9'
                  rx='8'
                  ry='9'
                  transform='translate(490 344)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_843'
                  data-name='Ellipse 843'
                  cx='9'
                  cy='8'
                  rx='9'
                  ry='8'
                  transform='translate(480 326)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_847'
                  data-name='Ellipse 847'
                  cx='8'
                  cy='9'
                  rx='8'
                  ry='9'
                  transform='translate(443 350)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_850'
                  data-name='Ellipse 850'
                  cx='8'
                  cy='8'
                  r='8'
                  transform='translate(428 406)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_859'
                  data-name='Ellipse 859'
                  cx='9'
                  cy='8'
                  rx='9'
                  ry='8'
                  transform='translate(465 383)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_864'
                  data-name='Ellipse 864'
                  cx='8'
                  cy='8'
                  r='8'
                  transform='translate(485 370)'
                  fill='#7c3aed'
                />
                <ellipse
                  id='Ellipse_869'
                  data-name='Ellipse 869'
                  cx='8'
                  cy='9'
                  rx='8'
                  ry='9'
                  transform='translate(505 386)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_874'
                  data-name='Ellipse 874'
                  cx='8'
                  cy='8'
                  r='8'
                  transform='translate(511 406)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_879'
                  data-name='Ellipse 879'
                  cx='8.462'
                  cy='8.462'
                  r='8.462'
                  transform='translate(530.263 354.871) rotate(17)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_853'
                  data-name='Ellipse 853'
                  cx='9'
                  cy='8.5'
                  rx='9'
                  ry='8.5'
                  transform='translate(472 420)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_855'
                  data-name='Ellipse 855'
                  cx='8'
                  cy='8.5'
                  rx='8'
                  ry='8.5'
                  transform='translate(485 437)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_860'
                  data-name='Ellipse 860'
                  cx='9'
                  cy='9'
                  r='9'
                  transform='translate(501 428)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_865'
                  data-name='Ellipse 865'
                  cx='9'
                  cy='8'
                  rx='9'
                  ry='8'
                  transform='translate(521 425)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_870'
                  data-name='Ellipse 870'
                  cx='8'
                  cy='9'
                  rx='8'
                  ry='9'
                  transform='translate(464 443)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_875'
                  data-name='Ellipse 875'
                  cx='8.5'
                  cy='8'
                  rx='8.5'
                  ry='8'
                  transform='translate(544 378)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_845'
                  data-name='Ellipse 845'
                  cx='8'
                  cy='9'
                  rx='8'
                  ry='9'
                  transform='translate(448 407)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_856'
                  data-name='Ellipse 856'
                  cx='8'
                  cy='8'
                  r='8'
                  transform='translate(454 427)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_861'
                  data-name='Ellipse 861'
                  cx='8.5'
                  cy='8'
                  rx='8.5'
                  ry='8'
                  transform='translate(491 411)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_866'
                  data-name='Ellipse 866'
                  cx='8.5'
                  cy='9'
                  rx='8.5'
                  ry='9'
                  transform='translate(540 415)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_871'
                  data-name='Ellipse 871'
                  cx='9'
                  cy='8'
                  rx='9'
                  ry='8'
                  transform='translate(550 398)'
                  fill='#ddd6fe'
                />
                <ellipse
                  id='Ellipse_876'
                  data-name='Ellipse 876'
                  cx='8.5'
                  cy='8'
                  rx='8.5'
                  ry='8'
                  transform='translate(548 357)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_848'
                  data-name='Ellipse 848'
                  cx='8'
                  cy='8'
                  r='8'
                  transform='translate(435 368)'
                  fill='#ddd6fe'
                />
                <circle
                  id='Ellipse_851'
                  data-name='Ellipse 851'
                  cx='8'
                  cy='8'
                  r='8'
                  transform='translate(511 342)'
                  fill='#ddd6fe'
                />
              </g>
            </svg>
          </div>
          <div className='bg-emerald-100 rounded-lg flex flex-col font-bold p-4 relative'>
            <div className='space-y-2 mb-10'>
              <h4 className='text-sm text-emerald-900'>
                DOSIS ADMINISTRADAS DIARIMENTE POR 1 MILLON DE PERSONAS
              </h4>
              <p className='text-4xl text-emerald-600 space-x-1'>
                <NumberFormat
                  value={daily_vaccinations_per_million}
                  displayType={'text'}
                  thousandSeparator={true}
                />
                <span className='text-xs text-emerald-400'>DOSIS</span>
              </p>
            </div>
            <div className='space-y-2'>
              <h4 className='text-sm text-emerald-900'>
                DOSIS ADMINISTRADAS POR DIA
              </h4>
              <p className='text-4xl text-emerald-600 space-x-1'>
                <NumberFormat
                  value={daily_vaccinations}
                  displayType={'text'}
                  thousandSeparator={true}
                />
                <span className='text-xs text-emerald-400'>PERSONAS</span>
              </p>
            </div>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='86'
              height='86'
              viewBox='0 0 86 86'
              className='absolute right-8 top-1/2 transform -translate-y-1/2 h-24 w-auto text-emerald-200 fill-current'
            >
              <g
                id='Group_3'
                data-name='Group 3'
                transform='translate(-875 -321)'
              >
                <ellipse
                  id='Ellipse_916'
                  data-name='Ellipse 916'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(920 321)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_913'
                  data-name='Ellipse 913'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(894 329)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_892'
                  data-name='Ellipse 892'
                  cx='5.5'
                  cy='5.5'
                  r='5.5'
                  transform='translate(898 370)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_893'
                  data-name='Ellipse 893'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(887 361)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_880'
                  data-name='Ellipse 880'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(879 385)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_894'
                  data-name='Ellipse 894'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(909 364)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_895'
                  data-name='Ellipse 895'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(937 368)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_912'
                  data-name='Ellipse 912'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(943 333)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_896'
                  data-name='Ellipse 896'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(875 360)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_897'
                  data-name='Ellipse 897'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(891 350)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_906'
                  data-name='Ellipse 906'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(901 340)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_898'
                  data-name='Ellipse 898'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(923 348)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_899'
                  data-name='Ellipse 899'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(933 356)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_914'
                  data-name='Ellipse 914'
                  cx='5.5'
                  cy='5.5'
                  r='5.5'
                  transform='translate(933 322)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_907'
                  data-name='Ellipse 907'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(913 335)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_915'
                  data-name='Ellipse 915'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(907 324)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_908'
                  data-name='Ellipse 908'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(884 339)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_888'
                  data-name='Ellipse 888'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(875 373)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_900'
                  data-name='Ellipse 900'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(898 359)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_901'
                  data-name='Ellipse 901'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(910 351)'
                  fill='#059669'
                />
                <ellipse
                  id='Ellipse_902'
                  data-name='Ellipse 902'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(922 361)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_889'
                  data-name='Ellipse 889'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(926 373)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_909'
                  data-name='Ellipse 909'
                  cx='5.198'
                  cy='5.198'
                  r='5.198'
                  transform='translate(937.818 341.806) rotate(17)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_881'
                  data-name='Ellipse 881'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(902 382)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_882'
                  data-name='Ellipse 882'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(910 392)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_883'
                  data-name='Ellipse 883'
                  cx='5.5'
                  cy='5.5'
                  r='5.5'
                  transform='translate(920 387)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_884'
                  data-name='Ellipse 884'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(932 385)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_885'
                  data-name='Ellipse 885'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(897 396)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_903'
                  data-name='Ellipse 903'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(946 356)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_890'
                  data-name='Ellipse 890'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(887 374)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_886'
                  data-name='Ellipse 886'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(891 386)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_891'
                  data-name='Ellipse 891'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(914 376)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_887'
                  data-name='Ellipse 887'
                  cx='5'
                  cy='5.5'
                  rx='5'
                  ry='5.5'
                  transform='translate(944 379)'
                  fill='#a7f3d0'
                />
                <ellipse
                  id='Ellipse_904'
                  data-name='Ellipse 904'
                  cx='5.5'
                  cy='5'
                  rx='5.5'
                  ry='5'
                  transform='translate(950 368)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_910'
                  data-name='Ellipse 910'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(949 343)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_905'
                  data-name='Ellipse 905'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(879 350)'
                  fill='#a7f3d0'
                />
                <circle
                  id='Ellipse_911'
                  data-name='Ellipse 911'
                  cx='5'
                  cy='5'
                  r='5'
                  transform='translate(926 334)'
                  fill='#a7f3d0'
                />
              </g>
            </svg>
          </div>
        </div>
        <VaccinesGraph vaccines={vaccines} />
      </div>
    </div>
  )
}

export async function getStaticPaths () {
  const locations = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/locations.csv'
  )
  const locationsString = await locations.text()
  let parserLocation = await parse(locationsString, { header: true })

  const paths = parserLocation.data
    .filter(item => item.iso_code)
    .map(location => {
      return {
        params: { code: location.iso_code.toLocaleLowerCase() }
      }
    })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()
  const res = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
  )
  const vaccines = await res.json()
  const vaccines_peru = vaccines.find(
    item => item.iso_code === params.code.toLocaleUpperCase()
  )

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
