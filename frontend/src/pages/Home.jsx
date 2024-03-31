import { useState, useEffect } from "react";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/workouts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(await response.text());
        setWorkouts(data);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };
    fetchWorkout();
  }, []);
  return (
    <div className="Home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
