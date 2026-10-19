"use client";

import { supabase, supabaseClient } from "@/lib/supabase-client";
import { useEffect, useState } from "react";
import { AddStudentDialog } from "./_components/AddStudentDialog";
import { Button } from "@/components/ui/button" 

export default function Home() {
  const [name, setName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const SupaB = supabaseClient();
  const [data, setData] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleRoomNumber = (event) => {
    setRoomNumber(event.target.value);
  };
  const handleTeacherName = (event) => {
    setTeacherName(event.target.value);
  };

  const createClass = async () => {
    await SupaB.from("class").insert({
      name: name,
      roomNumber: roomNumber,
      teacherName: teacherName,
    });
  };

  useEffect(() => {
    const getData = async () => {
      const response = await SupaB.from("class").select("*");
      setData(response.data);
    };
    getData();
  }, []); 

  const openDialog = () => {
    setIsOpen((prev)=> !prev)
  };

  const selectClass = (data)=>{
    openDialog()
    setSelectedClass(data)

  }

  return (
    <div>
      <input placeholder="name" onChange={handleName} value={name} />
      <input
        placeholder="roomNumber"
        onChange={handleRoomNumber}
        value={roomNumber}
      />
      <input
        placeholder="teacherName"
        onChange={handleTeacherName}
        value={teacherName}
      />
      <button onClick={createClass}>create class</button>
      {data.map((data) => {
        return (
          <div key={data.id}>
            {data.name} {data.roomNumber} {data.teacherName}
            <Button onClick={()=> selectClass(data)}>add student</Button>
          </div>
        );
      })}
      <AddStudentDialog isOpen={isOpen} openDialog={openDialog} selectedClass={selectedClass} />
    </div>
  );
}
