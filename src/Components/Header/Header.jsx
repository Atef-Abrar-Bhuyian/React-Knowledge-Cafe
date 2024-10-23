import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex items-center justify-between w-10/12 mx-auto border-b-2 border-purple-100 pb-6 mt-5'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1> 
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;