import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Loading from "../../SharedPage/Loding/Loading";
import { AuthContex } from "../../UserContext/UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import AllCategoryDeatils from "../AllCategoryDeatils/AllCategoryDeatils";
const AllCategory = () => {
  const [allPt, setallPt] = useState([]);
  const [item, setItem] = useState("");
  const { category } = useParams();
  const { user ,logOut} = useContext(AuthContex);
  
      

  useEffect(() => {
    fetch("https://puranbazar-server-rashed409.vercel.app/puranbazar")
      .then((res) => res.json())
      .then((data) => setallPt(data));
  }, []);



  const filterItem = allPt.filter((pt) => pt.category == category);
  console.log('filterItem',filterItem);
  const handlebuys = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const price = form.price.value;
    const number = form.number.value;
    const location=form.location.value;
    const itemname = form.itemname.value;
   

    const addService = {
      name: name,
      price,
      email,
      
      itemname,
      number,
      location
    };

    axios
      .post("https://puranbazar-server-rashed409.vercel.app/booking", addService)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Add booking submit Succesfully");
        }
      })
      .catch((error) => toast.error(error.message));
  };
  const handleWishlist=(wishItem)=>{
    fetch('https://puranbazar-server-rashed409.vercel.app/wishlist',{
        method: 'POST',
        headers: {
            'content-type': 'application/json', 
        },
        body: JSON.stringify({
          name:wishItem.name,
          sellerName:wishItem.sellerName,
          category:wishItem.category,
          condition:wishItem.condition,
          img:wishItem.img,
          location:wishItem.location,
          sold:wishItem.sold,
          yearofUsed:wishItem.yearofUsed,
          resaleprice:wishItem.resaleprice,
          productId:wishItem._id,
          email:wishItem.email
        })
    })
    .then(res => res.json())
    .then(result =>{
        console.log(result);
        toast.success(`WishList  added  successfully`);
    })
  }

  return (
    <>
      {filterItem.length > 0 ? (
        <div className="teamcard grid lg:grid-cols-3 gap-5 p-12" data-aos="fade-right"   data-aos-easing="linear"
        data-aos-duration="1000">
          {filterItem.map((singleItem) => (<AllCategoryDeatils handleWishlist={handleWishlist} singleItem={singleItem} key={singleItem._id}></AllCategoryDeatils>
            
      ))}
         
        </div>
      ) : (
        <Loading></Loading>
      )}

      {filterItem.map((modalitem) => (
        <>
          <input
            type="checkbox"
            id={`buynow${modalitem._id}`}
            className="modal-toggle"
          />

          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <div className="modal-action">
                <label htmlFor={`buynow${modalitem._id}`} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <i class="fa-solid fa-xmark"></i>
                </label>
              </div>
              <h3 className="font-bold text-lg">
                <img className="w-32 mx-auto" src={modalitem.img} alt="" />
              </h3>

              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <form onSubmit={handlebuys}>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      name="username"
                      value={user.displayName}
                      readOnly
                      className="form-control block 
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput90"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      readOnly
                      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput91"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="form-group mb-6">
                    <input
                      type="text"
                      name="itemname"
                      value={modalitem.name}
                      readOnly
                      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput91"
                      placeholder="Item Name"
                    />
                  </div>

                  <div className="form-group mb-6">
                    <input
                      type="text"
                      name="price"
                      value={modalitem.resaleprice}
                      readOnly
                      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput91"
                      placeholder="price"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="Number"
                      name="number" 
                   
                      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput91"
                     placeholder="Number"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      name="location" 
                   
                      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput91"
                     placeholder="Meeting Location"
                    />
                  </div>



                  <button
                    type="submit"
                    className="
      w-full
      px-6
      py-2.5
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
    
      transition
      duration-150
      ease-in-out"
                  >
                    Submit
                  </button>
                </form>
              </div>
             
            </div>
          </div>
        </>
      ))}

     
    </>
  );
};

export default AllCategory;
