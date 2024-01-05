import React from "react";
import { GiMountainCave } from "react-icons/gi";
import { GiFlintSpark } from "react-icons/gi";
import { GiHutsVillage } from "react-icons/gi";
import { FaPlaneDeparture } from "react-icons/fa6";
import { GrBus } from "react-icons/gr";
import { GiSnowflake2 } from "react-icons/gi";
import { GiForest } from "react-icons/gi";
import { GiFeatheredWing } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { MdOutlineRoomPreferences } from "react-icons/md";
import Filter from "./Filter";

const Filters = () => {
  const searching = [
    { name: "cave", icon: <GiMountainCave /> },
    { name: "countryside", icon: <GiFlintSpark /> },
    { name: "village", icon: <GiHutsVillage /> },
    { name: "plane", icon: <FaPlaneDeparture /> },
    { name: "bus", icon: <GrBus /> },
    { name: "caves", icon: <GiSnowflake2 /> },
    { name: "forest", icon: <GiForest /> },
    { name: "jungle", icon: <GiFeatheredWing /> },
    { name: "tree", icon: <FaTree /> },
    { name: "room", icon: <MdOutlineRoomPreferences /> },
    { name: "mountain", icon: <GiMountainCave /> },
    { name: "country", icon: <GiFlintSpark /> },

    { name: "airplane", icon: <FaPlaneDeparture /> },
    { name: "airbus", icon: <GrBus /> },

    { name: "wing", icon: <GiFeatheredWing /> },
    { name: "trees", icon: <FaTree /> },
  ];
  return (
    <div className=" sm:mx-6 md:mx-10 lg:mx-12">
      <div className="flex scroll-smooth overflow-y-auto  gap-4 mt-2 ">
        {searching.map((filter) => (
          <Filter filter={filter}></Filter>
        ))}
      </div>
    </div>
  );
};

export default Filters;
