import YesNo from "./YesNo";

const Questionare1 = () => {
    return (
        <div className="flex flex-col mx-5 mt-1 w-2/4 justify-evenly text-white border-2 px-3 py-3 text-lg">
            <div className="flex justify-between pr-5 h-16 items-center">
                Enter Your Age
                <input type="text" name="AgeTextBox" id="_idAge" className="bg-transparent border-b-2 outline-none text-right"/>
            </div>
            <div className="flex justify-between pr-5 my-3 h-16 items-center">
                <p>Input 2 :</p>
                <YesNo name={'Input2'} forYes='YES2' forNo='No2'/>
            </div>
            <div className="flex justify-between pr-5 my-3 h-16 items-center">
                <p>Input 3 :</p>
                <YesNo name={'Input3'} forYes='YES3' forNo='No3'/>
            </div>
            <div className="flex justify-between pr-5 my-3 h-16 items-center">
                <p>Input 4 :</p>
                <YesNo name={'Input4'} forYes='YES4' forNo='No4'/>
            </div>
        </div>
    );
}

export default Questionare1;