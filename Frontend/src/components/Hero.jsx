import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container'>
        <div className="banner">
            <h1>{title}</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam suscipit, fuga, totam tenetur facere similique possimus delectus placeat ratione neque quia hic exercitationem nostrum, eaque reiciendis pariatur sequi quod aperiam expedita obcaecati iste aliquid voluptatibus. Veritatis cumque tenetur doloribus nesciunt.
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className='animated-image' />

            <span>
                <img src="/vector.png" alt="vector" />
            </span>
        </div>


    </div>
  )
}

export default Hero