import Link from 'next/link'
import Title from '../components/Title'
import Intro from '../components/Intro'

const IndexPage = () => (
	<div className='w-screen h-screen max-h-screen bg-[#202122]'>
        <div className='py-2'>
		    <Title/>
        </div>
        <div className='flex flex-col justify-center h-4/5'>
            <div className='flex items-center py-32'>
                <Intro/>
            </div>
            <div className='flex justify-center w-full'>
                <Link href={`/predict`} className='flex justify-center items-center w-2/3 h-20 text-3xl text-emerald-400 rounded-lg bg-transparent border-emerald-400 border-2 hover:text-white hover:bg-emerald-500 hover:border-emerald-500'>
                    <button>
                        Goto Diabetes Predictor {'>'}
                    </button>
                </Link>
            </div>
        </div>
	</div>
)

export default IndexPage


// Age
// Gender
// Polyuria
// Polydipsia
// sudden weight loss
// weakness
// Polyphagia
// Genital thrush
// visual blurring
// Itching
// Irritability
// delayed healing
// partial paresis
// muscle stiffness
// Alopecia
// Obesity
