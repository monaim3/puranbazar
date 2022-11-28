import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Loading from "../../SharedPage/Loding/Loading";
import AdvertiseCard from "../AdvertiseCard/AdvertiseCard";


const Advertisement = () => {
  const { data: advertise, isLoading } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch("https://puranbazar-server-rashed409.vercel.app/advertise");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
     <h2 className="text-2xl text-center text-rose-600 mt-10 font-bold">Advertisement</h2>
     {advertise.length > 0 ? (
        <div className="teamcard grid lg:grid-cols-3 gap-5 p-12">
          {advertise.map((ad,i) => (
            <AdvertiseCard ad={ad}></AdvertiseCard>
          ))}
        </div>
      ) : (
        <> </>
      )}

    </>
  );
};

export default Advertisement;
