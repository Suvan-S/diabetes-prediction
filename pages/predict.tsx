import Link from 'next/link'
import Title from '../components/Title'
import YesNo from '../components/YesNo'
import { useEffect, useState } from 'react'

const predict = () => {
    
    const [Age, setAge] = useState("0");
    const [Gender, setGender] = useState(false);
    const [Polyuria, setPolyuria] = useState(false);
    const [Polydipsia, setPolydipsia] = useState(false);
    const [sudden_weight_loss, setsudden_weight_loss] = useState(false);
    const [weakness, setweakness] = useState(false);
    const [Polyphagia, setPolyphagia] = useState(false);
    const [Genital_thrush, setGenital_thrush] = useState(false);
    const [visual_blurring, setvisual_blurring] = useState(false);
    const [Itching, setItching] = useState(false);
    const [Irritability, setIrritability] = useState(false);
    const [delayed_healing, setdelayed_healing] = useState(false);
    const [partial_paresis, setpartial_paresis] = useState(false);
    const [muscle_stiffness, setmuscle_stiffness] = useState(false);
    const [Alopecia, setAlopecia] = useState(false);
    const [Obesity, setObesity] = useState(false);

    const [diabetesPredictionResult, setDiabetesPredictionResult] = useState(false)
    const [isResultSet, setIsResultSet] = useState(false)

    useEffect(() => {
      return () => {
        setIsResultSet(false)
      }
    }, [])
    
    let onClickBack =async () => {
        setIsResultSet(false)
    }

    let onClickPredictBakend = async () => {
        let devBackendPredict = `http://localhost:8000/predict/`
        let prodBackendPredict = `http://suvans.pythonanywhere.com/predict/`
		let response = await fetch(prodBackendPredict, {
			method: "POST",
			headers: { "Content-Type": "application/json"},
            body: JSON.stringify([
                Age,
                Gender,
                Polyuria,
                Polydipsia,
                sudden_weight_loss,
                weakness,
                Polyphagia,
                Genital_thrush,
                visual_blurring,
                Itching,
                Irritability,
                delayed_healing,
                partial_paresis,
                muscle_stiffness,
                Alopecia,
                Obesity,
            ])
		})
        if (response.ok) {
            let data = await response.json()
            console.log(data);
            console.log(data['diabetesPredictionResult']);
            setDiabetesPredictionResult(data['diabetesPredictionResult']);
            setIsResultSet(true)
        }
    }

    let onClickPredict = async () => {
        let count = 0;
        
        console.log(count);
        
        // let inputArray = [];
        
        if(Polyuria){
            count += 1
        }
        if(Polydipsia){
            count += 1
        }
        if(sudden_weight_loss){
            count += 1
        }
        if(weakness){
            count += 1
        }
        if(Polyphagia){
            count += 1
        }
        if(Genital_thrush){
            count += 1
        }
        if(visual_blurring){
            count += 1
        }
        if(Itching){
            count += 1
        }
        if(Irritability){
            count += 1
        }
        if(delayed_healing){
            count += 1
        }
        if(partial_paresis){
            count += 1
        }
        if(muscle_stiffness){
            count += 1
        }
        if(Alopecia){
            count += 1
        }
        if(Obesity){
            count += 1
        }
                
        // inputArray.forEach(element => {
        //     if (!element) {
        //         count += 1;
        //     }
        // });
        
        console.log(count);
        if (count >= 8) {
            setDiabetesPredictionResult(true)
        }
        else {
            setDiabetesPredictionResult(false)
        }
        setIsResultSet(true);
        setAge('0');
        setGender(false);
        setPolyuria(false);
        setPolydipsia(false);
        setsudden_weight_loss(false);
        setweakness(false);
        setPolyphagia(false);
        setGenital_thrush(false);
        setvisual_blurring(false);
        setItching(false);
        setIrritability(false);
        setdelayed_healing(false);
        setpartial_paresis(false);
        setmuscle_stiffness(false);
        setAlopecia(false);
        setObesity(false);
    }

    return (
        <div className='w-screen h-screen bg-[#202122]'>
        <div className='py-2'>
		    <Title/>
        </div>
        <div className='w-screen bg-[#202122]'>
            {
                isResultSet
                ?
                    // <div className='flex justify-center h-96'>
                    //     <div className='flex flex-col justify-center text-white text-3xl h-full'>
                    //         <div className='flex flex-col justify-center text-white text-3xl h-full'>
                    //             The possibility of you having Diabetes is {diabetesPredictionResult ? "HIGH" : "LOW"}
                    //         </div>
                    //         <button className='justify-center items-center w-2/3 h-20 text-3xl text-white rounded-lg bg-emerald-400 border-emerald-400 border-2' onClick={onClickBack}>Back</button>
                    //     </div>
                    // </div>
                    <div className="flex flex-col mt-10 h-96 items-center justify-center mx-5">
                        <p className="text-white text-3xl font-bold font-serif">
                            The possibility of you having Diabetes is 
                            {
                                diabetesPredictionResult 
                                ?
                                    <span className='text-red-500'> HIGH</span>
                                :
                                    <span className='text-emerald-400'> LOW</span>
                            }
                        </p>
                        <button className='m-5 justify-center items-center w-1/4 h-20 text-3xl text-white rounded-lg bg-emerald-400 border-emerald-400 border-2' onClick={onClickBack}>
                            Back
                        </button>
                    </div>
                :
                    <div className='flex flex-col w-full'>
                        <div className='flex justify-around h-4/5'>
                            <div id = 'Ques1' className="flex flex-col mx-3 my-[0.3rem] w-2/4 justify-evenly text-white border-2 rounded-lg px-3 py-3 text-md">
                                <div className="flex justify-between pr-5 h-10 items-center">
                                    Enter Your Age
                                    <input type="text" name="AgeTextBox" id="_idAge" className="bg-transparent border-2 w-56 px-3 rounded-xl h-10 text-3xl outline-none text-right" onChange={(e)=>setAge(e.target.value)}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Gender:</p>
                                    <YesNo name='Gender' forYes='MALE' forNo='FEMALE' YES='MALE' NO='FEMALE' setData = {setGender}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you feel the urge to urinate more frequently (Polyuria):</p>
                                    <YesNo name='Polyuria' forYes='YES3' forNo='No3' YES='YES' NO='NO' setData = {setPolyuria}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you feel excessive thirst or dry throuth (Polydipsia):</p>
                                    <YesNo name='Polydipsia' forYes='YES4' forNo='No4' YES='YES' NO='NO' setData = {setPolydipsia}/>
                                </div>
                            </div>
                            
                            <div id = 'Ques2' className="flex flex-col mx-3 my-[0.3rem] w-2/4 justify-evenly text-white border-2 rounded-lg px-3 py-3 text-md">
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you observe sudden weight loss:</p>
                                    <YesNo name='sudden_weight_loss' forYes='YES5' forNo='No5' YES='YES' NO='NO' setData = {setsudden_weight_loss}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you feel weakness in your body:</p>
                                    <YesNo name='weakness' forYes='YES6' forNo='No6' YES='YES' NO='NO' setData = {setweakness}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you eat excessive amount of food (Polyphagia):</p>
                                    <YesNo name='Polyphagia' forYes='YES7' forNo='No7' YES='YES' NO='NO' setData = {setPolyphagia}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Is your BMI above normal (Obesity):</p>
                                    <YesNo name='Genital_thrush' forYes='YES8' forNo='No8' YES='YES' NO='NO' setData = {setGenital_thrush}/>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-around h-4/5'>
                            <div id = 'Ques3' className="flex flex-col mx-3 my-[0.3rem] w-2/4 justify-evenly text-white border-2 rounded-lg px-3 py-3 text-md">
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you have any yeast infection in your body (Genital thrushes):</p>
                                    <YesNo name='visual_blurring' forYes='YES9' forNo='No9' YES='YES' NO='NO' setData = {setvisual_blurring}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you feel you vision blurring at times:</p>
                                    <YesNo name='Itching' forYes='YES10' forNo='No10' YES='YES' NO='NO' setData = {setItching}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you observe body itching frequently:</p>
                                    <YesNo name='Irritability' forYes='YES11' forNo='No11' YES='YES' NO='NO' setData = {setIrritability}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you feel irritated/agitated more often:</p>
                                    <YesNo name='delayed_healing' forYes='YES12' forNo='No12' YES='YES' NO='NO' setData = {setdelayed_healing}/>
                                </div>
                            </div>
                            
                            <div id = 'Ques4' className="flex flex-col mx-3 my-[0.3rem] w-2/4 justify-evenly text-white border-2 rounded-lg px-3 py-3 text-md">
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you observe your wounds delayed healing:</p>
                                    <YesNo name='partial_paresis' forYes='YES13' forNo='No13' YES='YES' NO='NO' setData = {setpartial_paresis}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Are your muscles move slow/weak (Partial paresis):</p>
                                    <YesNo name='muscle_stiffness' forYes='YES14' forNo='No14' YES='YES' NO='NO' setData = {setmuscle_stiffness}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you feel your muscles to be stiff:</p>
                                    <YesNo name='Alopecia' forYes='YES15' forNo='No15' YES='YES' NO='NO' setData = {setAlopecia}/>
                                </div>
                                <div className="flex justify-between pr-5 my-[0.3rem] h-10 items-center">
                                    <p>Do you have hair loss in head / other parts of body (Alopecia):</p>
                                    <YesNo name='Obesity' forYes='YES16' forNo='No16' YES='YES' NO='NO' setData = {setObesity}/>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center mt-3'>
                            {
                                Age != '0'
                                ?
                                    <button className='flex justify-center items-center w-2/3 h-20 text-3xl text-emerald-400 rounded-lg bg-transparent border-emerald-400 border-2 hover:text-white hover:bg-emerald-500 hover:border-emerald-500' onClick={onClickPredict}>Predict</button>
                                :
                                    <button disabled className='flex justify-center items-center w-2/3 h-20 text-3xl text-gray-400 rounded-lg bg-transparent border-gray-400 border-2' onClick={onClickPredict}>Predict</button>
                            }
                        </div>
                    </div>
            }
        </div>
	</div>
    );
}

export default predict;