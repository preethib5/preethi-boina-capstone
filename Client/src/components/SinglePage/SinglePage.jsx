import React from 'react'
import "../SinglePage/SinglePage.scss"
export default function SinglePage() {
    return (
        <div className="singlepage">
            <div className="singlepage__wrapper">
                <img className="singlepage__img" src="https://www.lux-review.com/wp-content/uploads/2020/05/enjoy-life-1920-x-1080.jpg" alt="post-img"/>
                <h1 className="singlepage__title">Lorem ipsum dolor, sit amet consectetur
                <div className="singlepage__edit">
                    <i className=" singlepage__icon far fa-edit"></i>
                    <i className="singlepage__icon far fa-trash-alt"></i>
                    </div>
                 </h1>

                 <div  className="singlepage__info" >
                     <span  className="singlepage__author">Author:<b>Safak</b></span>
                     <span  className="singlepage__date">1hr ago</span>
                 </div>
                 <p  className="singlepage__desc" >
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                      voluptatibus voluptatum, deleniti ut ab voluptas eum architecto corrupti eveniet libero
                       ex perspiciatis.Ipsa molestiae atque sit officia iure vero id!
                 </p>
            </div>
        </div>
    )
}
