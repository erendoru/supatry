import { colors } from "@mui/material";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase.from("countries").select();

  console.log(countries)
  return (
    <ul className="my-auto" style={{color:'white'}}>
      {countries?.map((country) => (
        <li key={country.id}>{country.name}
        <ul>{country.Description}</ul>
        </li>
        
      ))}
    
    </ul>
  );
}