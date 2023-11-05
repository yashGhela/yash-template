

export default function Step2({setStep2, setStep3}){


      

    return(

        <div 
       
        className=" mt-[15%] w-full md:w-[70%] h-[500px]  md:ml-[220px] rounded-xl overflow-auto">
            <p className="text-2xl font-bold py-3 text-gray-300">Choose a Font</p>
            <hr className="py-3" />

            <button onClick={()=>{setStep2(false); setStep3(true)}} className="p-4 bg-pink-400 my-8 hover:bg-pink-600 rounded-xl w-[96%] text-white font-bold">Next</button>

        </div>
    )

}