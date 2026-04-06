import { useState } from "react";
import { autoIncrement } from "../../utils/tabs";
import { useEffect } from "react";

const Light = ({ color = "red", isPerforming }) => {
  return (
    <div
      className={`size-10 rounded-full border-[1px] border-white/50 ${!isPerforming ? "opacity-30" : ""}`}
      style={{
        backgroundColor: `${!color ? "blue" : color}`,
        filter: `brightness(40)`,
      }}
    ></div>
  );
};

const TrafficLightContainer = () => {
  const counter = autoIncrement();
  const [lights, setLights] = useState([
    {
      id: counter(),
      color: "red",
      stayFor: 3000,
      placeOrder: 1,
      actionOrder: 1,
      isPerforming: true,
    },
    {
      id: counter(),
      color: "yellow",
      stayFor: 4000,
      placeOrder: 2,
      actionOrder: 2,
      isPerforming: false,
    },
    {
      id: counter(),
      color: "green",
      stayFor: 2000,
      placeOrder: 3,
      actionOrder: 3,
      isPerforming: false,
    },
  ]);
  const [currentActionalLight, setCurrentActionalLight] = useState(1);

  useEffect(() => {
    const handleLighting = () => {
      const currentItem = lights.filter(
        (light) => light.actionOrder === currentActionalLight,
      )?.[0];

      const nextItem = lights.filter(
        (light) => light.actionOrder === currentActionalLight + 1,
      )?.[0];

      if (currentItem && currentItem?.stayFor) {
        setTimeout(() => {
          setLights((prev) => {
            return prev.map((light) => {
              if (light.id === currentItem.id) {
                return { ...light, isPerforming: false };
              } else if (nextItem && nextItem.id === light.id) {
                return { ...light, isPerforming: true };
              } else {
                return light;
              }
            });
          });
          setCurrentActionalLight((prev) => prev + 1);
        }, currentItem?.stayFor ?? 1000);
      } else {
        alert("FINISHED");
      }
    };

    handleLighting();
  }, [lights, setLights, currentActionalLight, setCurrentActionalLight]);

  return (
    <div className="grid place-items-center mt-8 gap-3">
      <h2 className="text-xl">Traffic Lights</h2>

      {/* render the lights */}
      <div className="w-12 h-auto bg-black rounded-md flex justify-center items-center flex-col p-1.5 gap-2">
        {!!lights.length &&
          lights
            .sort((a, b) => a.placeOrder - b.placeOrder)
            .map((light) => (
              <Light
                key={light.id}
                id={light.id}
                {...light}
              />
            ))}
      </div>
    </div>
  );
};

export default TrafficLightContainer;
