// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function Heading() {
  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-4 mt-4 text-white text-center  gap-4'>
          <div className='bg-orange-600 rounded row-span-6'>01</div>
          <div className='bg-pink-800 rounded h-40'>02</div>
          <div className='col-span-2 row-span-6 bg-violet-700 rounded'>03</div>
          <div className='bg-orange-600 rounded h-40'>04</div>
        </div>
        <div className='flex flex-col space-y-4 mt-4 text-white  py-4'>
          <div className='bg-slate-400 p-4 rounded'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              atque assumenda ullam magnam amet? Explicabo laborum, quo debitis
              iste iure soluta at dolorem nihil culpa nostrum quidem quas totam
              animi.
            </p>
          </div>
          <div className='bg-violet-700 p-5 rounded'>
            <p className='text-lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              iure laborum libero cumque atque accusamus quis mollitia
              aspernatur fuga, commodi provident at sequi, rerum nulla facilis
              praesentium ipsam vero eaque?
            </p>
          </div>
          <div className='bg-slate-400 flex p-4 flex-row  justify-center'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quod dignissimos quos esse impedit sint tenetur cupiditate, quasi
              magni porro architecto, ratione fuga doloremque adipisci
              necessitatibus tempore temporibus. Velit, repellat?
            </p>
          </div>
          <div className='bg-slate-400 p-4 rounded'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, in
            tempore mollitia harum temporibus error consequatur quisquam
            inventore quasi nostrum, nesciunt soluta perferendis facilis minima
            repudiandae? Quibusdam porro debitis laudantium!
          </div>
        </div>
        <div className='min-h-screen grid place-content-center'>
          <div className='bg-emerald-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center'>
            <div className='bg-teal-200 w-32 h-32 rounded-full grid place-content-center'>
              <div className='bg-red-500 w-16 h-16 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
