import React from "react";
import { useContextGlobal } from '../Components/utils/global.context'
import Card from "../Components/Card";



const Home = () => {
const{dentist}= useContextGlobal()

  return (
    <main className="">
      <h1>Home</h1>

      <div className='card-grid'>
      {dentist.map(dentist => (<Card key={dentist.id} data={dentist} />))}
      </div>
    </main>
  );
};

export default Home;
