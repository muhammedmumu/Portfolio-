import React from 'react'




export default function Nav({ items }) {
  return (
    <>
      <div className="">
        <ul className="flex items-center justify-center gap-12">
          {items.map(item => (
            <li
              className=" text-white px-4 text-lg font-medium cursor-pointer hover:text-green-500 transition duration-200"
              key={item.index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
