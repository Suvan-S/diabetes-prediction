import Link from 'next/link'
import Title from '../components/Title'

const IndexPage = () => (
	<div className='w-screen h-screen max-h-screen bg-[#202122]'>
        <div className='py-2'>
		    <Title/>
        </div>
        <div className='flex flex-col h-4/5 text-white'>
            <span className='mx-20 mt-10 text-5xl'>
                We developed this predictor to identify if there is a possibility for the user to fall into the Diabetes spectrum.
            </span>
            <span className='mx-10 mt-10 text-3xl underline text-emerald-400'>
                Developers :
            </span>
            <span className='mx-20 mt-10 text-3xl'>
                Suvan S (CSE IV Yr - Sathyabama University)
            </span>
            <span className='mx-20 mt-10 text-3xl'>
                Srivatsan S (CSE IV Yr - Sathyabama University)
            </span>
        </div>
	</div>
)

export default IndexPage