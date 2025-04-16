import React, {memo} from 'react'

interface SearchProps {
    onChange: (searchText: string) => void;
}

const Search = ({onChange}: SearchProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        name="searchText"
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent w-full py-2 px-1 border-0 text-xs focus:outline-0 focus:ring-0 text-[#666666]"
      />
    </>
  )
}

export default memo(Search);