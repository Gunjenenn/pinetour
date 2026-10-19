"use client"
const { Input } = require("@/components/ui/input");
import { supabaseClient } from "@/lib/supabase-client";
import { useEffect, useState } from ("react")
import { SupabaseClient } from "@lib/supabase-js";


const Page = () => {
    const supaBase = supabaseClient
    const [image, setImage] = useState(null)

    handleImage = async (event) => {
        const file = event.target.files[0];
        
      const response =  await supabaseClient.storage.from("image").upload(`uploadedFile/${Date.now()}`, file);


    }

    return(
        <input type="file" oncChange={handleImage} />
    )
};

export default Page;