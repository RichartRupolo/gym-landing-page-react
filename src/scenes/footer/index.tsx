import Logo from '@/assets/Logo.png'
type Props = {}

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img alt='logo' src={Logo}/>
                <p className='my-5'>
                Et quis exercitationem aut commodi voluptatem sed nulla recusandae aut perspiciatis perferendis sed nihil esse in laudantium accusamus est enim rerum. 
                Aut quam suscipit in repellat maxime qui natus error et sapiente voluptatem. 
                </p>
                <p>© Evogym All Righth Reserved.</p>
            </div>
            
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Massa orci senectus</p>
                <p className='my-5'>Et  quis exercitationem</p>
                <p> Ullamcorper vivamus</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Massa orci senectus</p>
                <p>(99) 9 9999-9999</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer