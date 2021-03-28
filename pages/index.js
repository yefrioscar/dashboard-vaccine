import VaccinesGraph from '../components/vaccines-graph'
import { parse } from 'papaparse'
import { useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export async function getStaticProps (context) {
  console.log('====================================');
  console.log(context.params);
  console.log('====================================');

  // Call an external API endpoint to get posts
  const res = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json'
  )
  const vaccines = await res.json()
  const vaccines_peru = vaccines.find(item => item.iso_code === 'PER')

  const locations = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/locations.csv'
  )
  const locationsString = await locations.text()
  let parserLocation = parse(locationsString, { header: true })

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      vaccines: vaccines_peru ? vaccines_peru.data : [],
      locations: parserLocation.data
    }
  }
}

export default function Home ({ vaccines, locations }) {
  console.log('====================================')
  console.log(locations, locations)
  console.log('====================================')

  const [filterer, setFilterer] = useState([])
  const [cursor, setCursor] = useState(0)
  const [isFocus, setIsFocus] = useState(null)


  // Porcenaje total de personas vacunadas
  // Total de personas vacunadas
  // porcentaje de dosis por dia
  // vacunados por 1 millon de personas

  const handleChange = val => {
    let value = val.target.value

    if(!value) {
      setCursor(0)
    }

    setFilterer(
      value
        ? locations
            .filter(
              item => item.location.toLocaleLowerCase().indexOf(value) > -1
            )
            .slice(0, 5)
        : []
    )
  }

  const handleKeyDown = e => {

    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1)
    } else if (e.keyCode === 40 && cursor < filterer.length - 1) {
      setCursor(cursor + 1)
    } else if(e.keyCode === 13) {
      console.log('enter');
    }
  }

  return (
    <div className='max-w-screen-lg m-auto mt-10'>
      <div className=' grid gap-4'>
        <div>
          <input
            className='py-3 px-4 rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none border-2 border-gray-300 focus:border-violet-600 focus:rounded-bl-none focus:rounded-br-none focus:border-b-0'
            type='text'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}

          />
          {isFocus && (
            <div className='space-y-4 bg-gray-200 px-2 py-4 rounded border-2 border-t-0 border-violet-600 rounded-tl-none rounded-tr-none'>
              {filterer.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    ' p-2 px-4 flex space-x-4 rounded hover:bg-gray-300',
                    cursor === index && 'bg-red-200'
                  )}
                >
                  <div className='w-10 h-auto '>
                    <Flag
                      code={item.iso_code}
                      height='16px'
                      className='rounded'
                    />
                  </div>
                  <span>{item.location}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        { filterer.length === 0 && <VaccinesGraph vaccines={vaccines} />  }

        
      </div>
    </div>
  )
}
