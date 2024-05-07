import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className="banner">
            <img src={imageUrl} alt="imgurl" />
        </div>
        <div className="banner">
            <p>Biography</p>
            <h3>Who we Are</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta sit, tenetur nihil repellat consequuntur vero obcaecati officiis ad aliquid, totam quo reprehenderit veniam aut eligendi accusamus? Possimus facilis ab rerum quos explicabo dolores, modi labore, excepturi odit sed quia repellendus autem consequuntur a quaerat. In maxime laborum perspiciatis doloribus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perspiciatis nulla sed!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestias similique recusandae officia voluptatem ex fugit, assumenda praesentium tenetur doloremque omnis, ratione veniam voluptatibus! Enim, numquam dicta. Minima, modi necessitatibus?</p>
            <p>Lorem ipsum dolor sit amet.</p>

           
        </div>

    </div>
  )
}

export default Biography