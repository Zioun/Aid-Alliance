import React, { useEffect, useState } from "react";
import axios from "axios";
import VolunteerCard from "./VolunteerCard";
import { Link } from 'react-router-dom';

const VolunteerNeedsNow = () => {
  const [volunteer, setVolunteer] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/volunteer`);
      setVolunteer(data);

    };
    getData();
  }, []);
  return (
    <div className="container m-auto pb-5 px-6">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto text-center">
          <div className="mx-auto">
            <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our <span class="text-blue-500">Executive Team</span>
            </h1>

            <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {volunteer.slice(0, 6).map((volunteer) => (
          <VolunteerCard
            key={volunteer.id}
            volunteer={volunteer}
          ></VolunteerCard>
        ))}
      </section>
      <div class="flex justify-center mt-10 mb-20">
        <Link to="/need-volunteer"><a
          href="#"
          class="items-center justify-center px-10 py-3 text-md text-white duration-300 bg-gray-800  rounded-lg hover:bg-gray-800 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
        >
          See All
        </a></Link>
      </div>
      
    </div>
  );
};

export default VolunteerNeedsNow;
