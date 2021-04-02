import clsx from 'clsx'
import { useState } from 'react'
import Flag from 'react-world-flags'

const SearchCountry = ({ locations, handleChangeCountry }) => {
  const [filterer, setFilterer] = useState([])
  const [cursor, setCursor] = useState(0)
  const [isFocus, setIsFocus] = useState(null)
  const [value, setValue] = useState('')

  const handleChange = val => {
    let value = val.target.value
    setValue(value)

    if (!value) {
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
    } else if (e.keyCode === 13 && cursor >= 0) {
      let item = filterer.find((item, index) => index === cursor)
      if(item) {
        handleChangeCountry(item)
        setFilterer([])
        setValue(item.location)
      }
    }
  }

  const handleClickItem = indexItem => {
    console.log('sdfsdf')
    let item = filterer.find((item, index) => index === indexItem)
    handleChangeCountry(item)
    setFilterer([])
    setValue(item.location)
  }

  return (
    <div className='relative z-10'>
      <input
        className={clsx(
          'py-3 px-4 rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full focus:outline-none border-2 border-gray-300 focus:border-violet-600  ',
          filterer.length > 0 &&
            'focus:rounded-bl-none focus:rounded-br-none focus:bg-gray-100 focus:border-b-0',
          isFocus && 'shadow-2xl'
        )}
        type='text'
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder='Escribe el nombre del pais'
      />
      {isFocus && (
        <div
          className={clsx(
            'space-y-4 bg-gray-100 rounded-lg  border-t-0 border-2 rounded-tl-none rounded-tr-none border-violet-600 absolute w-full shadow-2xl',
            filterer.length > 0 && 'px-2 py-4',
            filterer.length === 0 && 'border-none'
          )}
        >
          {filterer.map((item, index) => (
            <div
              key={index}
              className={clsx(
                ' p-2 px-4 flex space-x-4 rounded hover:bg-gray-300',
                cursor === index && 'bg-gray-300'
              )}
              onClick={d => {
                console.log('asdasd');
                console.log(d)
              }}
            >
              <div className='w-10 h-auto '>
                <Flag code={item.iso_code} height='16px' className='rounded' />
              </div>
              <span>{item.location}</span>
            </div>
          ))}

          {/* { filterer.length === 0 && <div className="flex justify-center font-medium text-gray-400">holis</div> } */}
        </div>
      )}
    </div>
  )
}

export default SearchCountry
