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
    { name: "cave", icon: <GiFlintSpark /> },
    { name: "cave", icon: <GiHutsVillage /> },
    { name: "cave", icon: <FaPlaneDeparture /> },
    { name: "cave", icon: <GrBus /> },
    { name: "cave", icon: <GiSnowflake2 /> },
    { name: "cave", icon: <GiForest /> },
    { name: "cave", icon: <GiFeatheredWing /> },
    { name: "cave", icon: <FaTree /> },
    { name: "cave", icon: <MdOutlineRoomPreferences /> },
  ];
  return (
    <div className=" sm:mx-6 md:mx-10 lg:mx-12">
      <div className="">
        {searching.map((filter) => (
          <Filter filter={filter}></Filter>
        ))}
      </div>
    </div>
  );
};

export default Filters;
