import Nav from '../components/Common/Nav/Nav';

export default function Layout({ children }) {
  return (
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}>
      <div className='lg:hidden'>
        <div className='bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative'>
        </div>
      </div>
      <div className='flex relative h-full justify-between gap-x-3'>
        {/* middle of screen */}
        <div className='w-full h-auto shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar'>{children}</div>
      </div>
      <Nav />
    </div>
  );
}
