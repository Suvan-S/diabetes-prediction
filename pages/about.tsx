import Link from 'next/link'
import Questionare from '../components/Questionare1'
import Title from '../components/Title'

const IndexPage = () => (
	<div className='w-screen h-screen max-h-screen bg-[#202122]'>
        <div className='py-2'>
		    <Title/>
        </div>
        <div className='flex flex-col justify-center h-4/5 text-white'>
            We developed this predictor to identify if there is a possibility for the user to fall into the Diabetes spectrum.
        </div>
	</div>
)

export default IndexPage