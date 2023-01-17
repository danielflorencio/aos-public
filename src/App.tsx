import './App.css'
import ApplicationsCalculator from './components/ApplicationsCalculator/ApplicationsCalculator'
import IntroductionPost from './components/IntroductionPost/IntroductionPost'

function App() {

  return (
    <div className='flex-center'>
      <div className='text-container'>
        {/* <IntroductionPost/>       */}
        <ApplicationsCalculator/>
      </div>


    </div>
  )
}

export default App
