// import React from "react"

import { useState } from "react"

const Body = () => {
  const [selectedGlasses, setSelectedGlasses] = useState({
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  })

  const arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ]

  return (
    <div className="mb-auto container">
      {/* Model */}
      <div className="model flex justify-around items-center p-8">
        {/* Section try glasses */}
        <div className="model-item-try relative flex flex-col justify-center items-center">
          {/* Model */}
          <img className="" width={300} src="./glassesImage/model.jpg" alt="" />
          {/* Glasses */}
          <img
            className="absolute top-24"
            width={150}
            src={selectedGlasses.url}
            alt=""
          />
          {/* Info */}
          <div className="info absolute bottom-0 bg-pink-700 bg-opacity-50 p-4">
            <div className="flex justify-between">
              <h3 className="text-purple-950 font-bold">
                {selectedGlasses.name}
              </h3>
              <h6 className="text-yellow-300 font-bold">
                {selectedGlasses.price}$
              </h6>
            </div>
            <p className="text-purple-950 text-balance">
              {selectedGlasses.desc}
            </p>
          </div>
        </div>
        {/* Section no glasses */}
        <div className="model-item-no flex justify-center items-center">
          <img width={300} src="./glassesImage/model.jpg" alt="" />
        </div>
      </div>

      {/* Menu */}
      <div className="menu bg-white w-full my-4 m-2 p-4 rounded-md grid grid-cols-6 gap-4">
        {arrGlasses.map((item, index) => {
          return (
            <button
              onClick={() => {
                setSelectedGlasses(item)
              }}
              key={index}
              className="flex p-4 justify-center items-center rounded-lg border-2 hover:border-pink-600 shadow-xl space-x-3"
            >
              <img width={100} src={item.url} alt="" />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Body
