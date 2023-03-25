import Link from 'next/link'
import Questionare from '../components/Questionare1'
import Title from '../components/Title'
import Intro from '../components/Intro'
import Questionare1 from '../components/Questionare1'
import Questionare2 from '../components/Questionare2'
import Questionare3 from '../components/Questionare3'
import Questionare4 from '../components/Questionare4'
import YesNo from '../components/YesNo'

const predict = () => {
    return (
        <div className='w-screen h-screen max-h-screen bg-[#202122]'>
        <div className='py-2'>
		    <Title/>
        </div>
        <div className='flex flex-col w-full'>
            <div className='flex justify-around h-4/5'>
                <div id = 'Ques1' className="flex flex-col mx-3 my-3 w-2/4 justify-evenly text-white border-2 rounded-lg px-3 py-3 text-lg">
                    <div className="flex justify-between pr-5 h-12 items-center">
                        Enter Your Age
                        <input type="text" name="AgeTextBox" id="_idAge" className="bg-transparent border-2 w-56 px-3 rounded-xl h-12 text-3xl outline-none text-right"/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Gender:</p>
                        <YesNo name={'Input2'} forYes='YES2' forNo='No2' YES='MALE' NO='FEMALE'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you feel the urge to urinate more frequently (Polyuria):</p>
                        <YesNo name={'Input3'} forYes='YES3' forNo='No3' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you feel excessive thirst or dry throuth (Polydipsia):</p>
                        <YesNo name={'Input4'} forYes='YES4' forNo='No4' YES='YES' NO='NO'/>
                    </div>
                </div>
                
                <div id = 'Ques2' className="flex flex-col mx-3 my-3 w-2/4 justify-evenly text-white border-2 rounded-lg px-3 py-3 text-lg">
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you observe sudden weight loss:</p>
                        <YesNo name={'Input5'} forYes='YES5' forNo='No5' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you feel weakness in your body:</p>
                        <YesNo name={'Input6'} forYes='YES6' forNo='No6' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you eat excessive amount of food (Polyphagia):</p>
                        <YesNo name={'Input7'} forYes='YES7' forNo='No7' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Is your BMI above normal (Obesity):</p>
                        <YesNo name={'Input8'} forYes='YES8' forNo='No8' YES='YES' NO='NO'/>
                    </div>
                </div>
            </div>

            <div className='flex justify-around h-4/5'>
                <div id = 'Ques3' className="flex flex-col mx-3 my-3 w-2/4 justify-evenly text-white border-2 rounded-lg px-3 py-3 text-lg">
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you have any yeast infection in your body (Genital thrushes):</p>
                        <YesNo name={'Input9'} forYes='YES9' forNo='No9' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you feel you vision blurring at times:</p>
                        <YesNo name={'Input10'} forYes='YES10' forNo='No10' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you observe body itching frequently:</p>
                        <YesNo name={'Input11'} forYes='YES11' forNo='No11' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you feel irritated/agitated more often:</p>
                        <YesNo name={'Input12'} forYes='YES12' forNo='No12' YES='YES' NO='NO'/>
                    </div>
                </div>
                
                <div id = 'Ques4' className="flex flex-col mx-3 my-3 w-2/4 justify-evenly text-white border-2 rounded-lg px-3 py-3 text-lg">
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you observe your wounds delayed healing:</p>
                        <YesNo name={'Input13'} forYes='YES13' forNo='No13' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Are your muscles move slow/weak (Partial paresis):</p>
                        <YesNo name={'Input14'} forYes='YES14' forNo='No14' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you feel your muscles to be stiff:</p>
                        <YesNo name={'Input15'} forYes='YES15' forNo='No15' YES='YES' NO='NO'/>
                    </div>
                    <div className="flex justify-between pr-5 my-3 h-12 items-center">
                        <p>Do you have hair loss in head / other parts of body (Alopecia):</p>
                        <YesNo name={'Input16'} forYes='YES16' forNo='No16' YES='YES' NO='NO'/>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <button className='flex justify-center items-center w-2/3 h-20 text-3xl text-white rounded-lg bg-emerald-400 border-emerald-400 border-2'>Predict</button>
            </div>
        </div>
	</div>
    );
}

export default predict;