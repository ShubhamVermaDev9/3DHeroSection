import Header from './components/Header'
import Hero from './components/Hero'
const App = () => {
  return (
    <main>
      {/** image**/}
      <img className='absolute top-0 right-0 opacity-60 -z-1
      ' src="/gradient.png" alt="img" />
      {/** blur-effect */}
    <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
    <Header></Header>
    <Hero></Hero>

    </main>
  )
}

export default App
