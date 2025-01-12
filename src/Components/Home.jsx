import { useEffect, useState } from "react";
import Routings from "./Routings";


const Home = () => {

    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setSubjects(data));
    },[]);
    console.log(subjects);

   const handleSelectedSubject = (subject) =>{  
      const isExist = selectedSubject.find(sub => sub._id == subject._id);
      if(isExist){
          alert("You already add a subjects");
      } else{
        // alert("added a subjects");
        const newSubject = [...selectedSubject,subject];
        setSelectedSubject(newSubject);
      }
   }

    const [isActive, setIsActive] = useState({
        status: "Home",
        cart: true
    });

    const handleIsActive = (status) => {
        if (status === "Home") {
            setIsActive({
                status: "Home",
                cart: true,
            });
        } else {
            setIsActive({
                status: status, // Set the status dynamically
                cart: false,
            });
        }
    };



  

    return (
        <div>
            {/* routing */}
            <div>
                <Routings
                selectedSubject={selectedSubject}
                handleSelectedSubject={handleSelectedSubject}
                subjects={subjects}
                    isActive={isActive}
                    handleIsActive={handleIsActive}></Routings>
            </div>
        </div>
    );
};

export default Home