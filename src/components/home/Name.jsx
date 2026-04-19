import { useState, useEffect } from 'react'
import '../../index.css'

export default function Name() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { index: 0, name: 'Muhammed Mukrim' },
    { index: 1, name: 'محمد مكرم ' },
    { index: 2, name: ' முஹம்மது முக்ரிம்' },
    { index: 3, name: '穆罕默德 · 穆克里姆' },
    { index: 4, name: 'മുഹമ്മദ് മുക്രിം' },
    { index: 5, name: 'మహ్మద్ ముక్రిమ్' },
    { index: 6, name: 'ಮಹಮ್ಮದ್ ಮುಕ್ರಿಮ್' },
    { index: 7, name: 'ムハンマド・ムクリム' },
  ];

  function handleClick() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }

  useEffect(() => {
    const interval = setInterval(handleClick, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex items-center  justify-center mt-20 p-8 ">
      <h1 className=" ewert stretch-y flex text-white text-center  leading-[12rem] items-center justify-center text-8xl  font-semibold select-none z-0">
        {items[currentIndex].name}
      </h1>
    </div>
  );
}