"use client";

export default function FileUpload(){

 const handleUpload=(e:any)=>{

   const file=e.target.files[0];
   console.log(file);

 };

 return(

  <input
    type="file"
    accept=".pdf"
    onChange={handleUpload}
    className="text-sm"
  />

 );

}
