import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { supabaseClient } from "@/lib/supabase-client";
import { Input } from "@base-ui/react";
import { useState } from "react";

export const AddStudentDialog = (props) => {
  const supabase = supabaseClient();

  const selectedClass = props.selectedClass;

  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const addStudent = async () => {
    await supabase.from("students").insert({
      firstName: firstName,
      phoneNumber: phoneNumber,
      age: age,
      classId: selectedClass.id,
    });
  };
  return (
    <Dialog open={props.isOpen} onOpenChange={props.openDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Add studet to class 
          </DialogTitle>
          <Input
            placeholder="student name"
            onChange={handleFirstName}
            value={firstName}
          />
          <Input
            placeholder="phone number"
            onChange={handlePhoneNumber}
            value={phoneNumber}
          />
          <Input placeholder="age" onChange={handleAge} value={age} />
        </DialogHeader>
        <Button onClick={addStudent}>Add student</Button>
      </DialogContent>
    </Dialog>
  );
};
