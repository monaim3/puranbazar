import React, { useContext } from 'react';
import  {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContex } from '../../../UserContext/UserContext';
const AddProduct = () => {
const {user}=useContext(AuthContex)
const {register,handleSubmit,reset}=useForm()
const navigate = useNavigate()
const handleAddProduct=(data)=>{
  const image = data.image[0];
  const formData = new FormData();
  formData.append('image', image);
  const url = `https://api.imgbb.com/1/upload?key=9324f77aa05a22df6cd9ec080dbb9092`
  fetch(url, {
      method: 'POST',
      body: formData
  })
  .then(res => res.json())
  .then(imgData => {
      if(imgData.success){
          console.log(imgData.data.url);
          const product = {
              name: data.title, 
              email:data.email,
              sellerName:data.sellerName,
              location:data.location,
              resaleprice: data.reselPrice,
              originalPrice: data.originalPrice,
              yearofUsed: data.useYears,
              condition: data.condition,
              sellerName: data.sellerName,
              category: data.Category,
              mobileNumber: data.mobileNumber,
              description: data.description,
              img: imgData.data.url,
              date:new Date().toISOString().split("T")[0],
              sold:false,
          }

          // save product information to the database
          fetch('https://puranbazar-server-rashed409.vercel.app/puranbazar',{
              method: 'POST',
              headers: {
                  'content-type': 'application/json', 
              },
              body: JSON.stringify(product)
          })
          .then(res => res.json())
          .then(result =>{
              console.log(result);
              toast.success(`${data.title} is added successfully`);
              navigate('/dashboard/myproduct')
              reset()
          })
      }
  })
}
    return (
        <div>
          <h3 className='font-bold text-center text-2xl mt-4'>Add Your Service</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
            <input
              type="text"
              {...register("title")}
              placeholder="Product Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              {...register("location")}
              placeholder="Location"
              className="input input-bordered w-full"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
            <input
              type="number"
              {...register("reselPrice")}
              placeholder="Resell Price"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              {...register("originalPrice")}
              placeholder="Original Price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
            <input
              type="text"
              {...register("useYears")}
              placeholder="Years of use"
              className="input input-bordered w-full"
            />
            <select
              {...register("condition")}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Condition
              </option>
              <option value={"Excellent"}>Excellent</option>
              <option value={"Good"}>Good</option>
              <option value={"Fair"}>Fair</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
            <input
              type="text"
              {...register("sellerName")}
              placeholder="Seller name"
              defaultValue={user.displayName}
              className="input input-bordered w-full"
              readOnly
              disabled
            />
            <input
              type="text"
              {...register("mobileNumber")}
              placeholder="Mobile number"
              className="input input-bordered w-full"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
          <input
              type="text"
              {...register("Category")}
              placeholder="Category should be Capital letter exm:HP, ASUS, DELL"
              className="input input-bordered w-full"
            />
             <input
              type="text"
              {...register("email")}
              placeholder="email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              {...register("description")}
              placeholder="description"
              className="input input-bordered w-full"
            />
           
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
          
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 my-6">
            <input type="file" {...register("image")} accept="image/*" />
           
           
            {/* <select
              {...register("category")}
              className="select select-bordered w-full"
            >
              <option disabled selected>
                Category
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select> */}
          </div>
          <button
            type="submit"
            className="btn  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Submit
          </button>
        </form>
        </div>
    );
};

export default AddProduct;