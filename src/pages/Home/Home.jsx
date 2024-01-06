import React from "react";

function Home() {
  return (
    <>
      <main className='flex-grow flex flex-col items-center bg-skin-bg-primary text-skin-base'>
        <h2 className='text-xl'>Rune Randomizer</h2>
        <div className='w-3/5 mt-10 h-20 bg-skin-bg-secondary flex justify-around'>
          {/* nbr side */}
          <div className='w-1/2 flex flex-col pl-40 justify-center'>
            <h3>Nombre de rune :</h3>
            <div className="flex gap-5">
              <span className='flex items-center gap-2'>
                <input type='checkbox' name='' id='one-rune' />
                <label htmlFor='one-rune'>1</label>
              </span>
              <span className='flex items-center gap-2'>
                <input type='checkbox' name='' id='ten-rune' />
                <label htmlFor='ten-rune'>10</label>
              </span>
            </div>
          </div>
          {/* slot side */}
          <div className='w-1/2 pl-20 flex flex-col justify-center'>
            <h3>Emplacement de rune :</h3>
            <div className="flex gap-5">
            <span className='flex items-center gap-2'>
              <input type='checkbox' name='' id='slot-all' />
              <label htmlFor='slot-all'>All</label>
            </span>
            <span className='flex items-center gap-2'>
              <input type='checkbox' name='' id='slot-one' />
              <label htmlFor='slot-one'>1</label>
            </span>
            <span className='flex items-center gap-2'>
              <input type='checkbox' name='' id='slot-two' />
              <label htmlFor='slot-two'>2</label>
            </span>
            <span className='flex items-center gap-2'>
              <input type='checkbox' name='' id='slot-three' />
              <label htmlFor='slot-three'>3</label>
            </span>
            <span className='flex items-center gap-2'>
              <input type='checkbox' name='' id='slot-four' />
              <label htmlFor='slot-four'>4</label>
            </span>
            <span className='flex items-center gap-2'>
              <input type='checkbox' name='' id='slot-five' />
              <label htmlFor='slot-five'>5</label>
            </span>
            <span className='flex items-center gap-2'>
              <input type='checkbox' name='' id='slot-six' />
              <label htmlFor='slot-six'>6</label>
            </span>
            </div>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}

export default Home;
