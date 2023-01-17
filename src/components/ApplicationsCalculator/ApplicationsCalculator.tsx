import { useState, FormEvent } from "react"
import './styles.css'

// const mvpTechStack: string[] = ['Git', 'HTML', 'CSS', 'JavaScript', 'React']
// const fullTechStack: string[] = [...mvpTechStack, 'BootStrap', 'TypeScript', 'Redux', 'Sass', 'NextJs','Node Js', 'Express Js', 'MongoDb', 'PostgreSQL', 'React Native', 'Jest', 'Tailwind CSS','FramerMotion']

const benchmarkParameters: {stackItemsBenchmark: number; solvedQuestionsBenchmark: number; flashcardsBenchmark: number} = {
    stackItemsBenchmark: 0,
    solvedQuestionsBenchmark: 8,
    flashcardsBenchmark: 3 // Ignore this line -- Code for the next feature of the app.
}

type userDataType = {
    mvpTechStack: string[],
    actualTechStack: string[],
    actualSolvedQuestions: number
}

const userInitialData: userDataType = {
    mvpTechStack: [],
    actualTechStack: [],
    actualSolvedQuestions: 0
}
type InputValues = {
    newMvpSkillInput: string
    newSkillInput: string,
    solvedQuestionsInput: number
}
const userInputs: InputValues = {
    newMvpSkillInput: '',
    newSkillInput: '',
    solvedQuestionsInput: 0
}

// const actualFlashcards: number = 3 --- Ignore this line -- Code for the next feature of the app.

export default function ApplicationsCalculator(){

    const [userData, setUserData] = useState(userInitialData)
    const [inputValues, setInputValues] = useState(userInputs)
    const [giveAnswer, setGiveAnswer] = useState<boolean>(false)

    function handleMvpInputChange(e: string){
        setInputValues(prevState => ({
            ...prevState,
            newMvpSkillInput: e
        }));
    }

    function handleMvpSkillsSubmit(e: FormEvent){
        e.preventDefault()
        setUserData(prevState => ({
            ...prevState,
            mvpTechStack: [...prevState.mvpTechStack, inputValues.newMvpSkillInput]
        }));
        setInputValues(prevState => ({
            ...prevState,
            newMvpSkillInput: ''
        }))
    }

    function handleSkillsInputChange(e: string){
        setInputValues(prevState => ({
            ...prevState,
            newSkillInput: e
        }));
    }

    function handleSkillsSubmit(e: FormEvent){
        e.preventDefault()
        setUserData(prevState => ({
            ...prevState,
            actualTechStack: [...prevState.actualTechStack, inputValues.newSkillInput]
        }));
        setInputValues(prevState => ({
            ...prevState,
            newSkillInput: ''
        }))
    }

    function handleChangeSolvedQuestions(e: number){
        setInputValues(prevState => ({
            ...prevState,
            solvedQuestionsInput: e
        }))
    }

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        setUserData(prevState => ({
            ...prevState,
            actualSolvedQuestions: inputValues.solvedQuestionsInput
        }))
        setInputValues({
            newMvpSkillInput: '',
            newSkillInput: '',
            solvedQuestionsInput: 0
        })
        setGiveAnswer(true)
    }

    return(
        <div onSubmit={handleSubmit}>
            <form>
                <label style={{textAlign: 'left'}}>List down the minimum necessary skills you need to know to start working in your field.</label> {/** Create a tooltip here explaining more for when the user hovers the cursor over it. */}
                <div className='skill-selection'><strong>{userData.mvpTechStack.map(skill => (<>{skill} </>))}</strong></div>
                <div style={{display: 'flex', gap: '0.5rem', marginBottom: '6vh'}}>
                    <input type='text' value={inputValues.newMvpSkillInput} onChange={e => handleMvpInputChange(e.target.value)} ></input>
                    <button onClick={e => handleMvpSkillsSubmit(e)}>Add skill</button>
                </div>
            </form>
            <form>    
                <label style={{textAlign: 'left'}}>List down the useful technologies from your field that you already know. </label>
                <div className='skill-selection'><strong>{userData.actualTechStack.map(skill => (<>{skill} </>))}</strong></div>
                <div style={{display: 'flex', gap: '0.5rem', marginBottom: '6vh'}}>
                    <input type='text' value={inputValues.newSkillInput} onChange={e => handleSkillsInputChange(e.target.value)}></input>
                    <button onClick={e => handleSkillsSubmit(e)}>Add skill</button>
                </div>
            </form>
            <form>
                <label style={{textAlign: 'left'}}>Type down the the amount of LeetCode questions you have already solved. </label>
                <div className='skill-selection'>Selected amount: {userData.actualSolvedQuestions}</div>
                <div style={{display: 'flex', gap: '0.5rem', marginBottom: '6vh'}}>
                    <input type='number' value={inputValues.solvedQuestionsInput} onChange={e => handleChangeSolvedQuestions(e.target.valueAsNumber)}></input>
                    <button onClick={handleSubmit} type='submit'>Calculate</button>
                </div>
            </form>
            
            {giveAnswer ? <ApplicationCount userData={userData}/> : null}
        </div>   
    ) 
}

function ApplicationCount({userData} : {userData: userDataType}){
    
    let userAnswer: string[] = ['']
    let dailyApplications: number
    
    if(userData.actualTechStack.length < userData.mvpTechStack.length){
        userAnswer[0] = "I'm sorry, but it looks like you still don't have enough dev skills for an actual job yet..."
        userAnswer[1] = "Keep studying and you are gonna get there!"
    } else if(userData.actualSolvedQuestions < benchmarkParameters.solvedQuestionsBenchmark){
        userAnswer[0] = "It looks like you already have enough skills for an actual job..."
        userAnswer[1] = "but it will be hard to pass the interview process with that few LeetCode questions answered."
        userAnswer[2] = "Keep studying! You are gonna get there."
    } else{

        function verifyDailyApplications(){ 
        // This function verifies how many applications you can do considering your the benchmarks you have achieved.
        // It could be put inside the for() loop without the need of this function...
        // But i put it that way so the code becomes more readable.
        // If you wanna add more conditionals and/or benchmark verifications, just add another '&&' and the condition right below.

        if(
            (dailyApplications < Math.floor(userData.actualSolvedQuestions / benchmarkParameters.solvedQuestionsBenchmark)) 
            && 
            dailyApplications <= (userData.actualTechStack.length - userData.mvpTechStack.length + 1)
        ) return true
        }

        // The loop below counts how many applications you can do.
        for(dailyApplications = 1; verifyDailyApplications(); dailyApplications++){}

        let techStackAdvancement: number = userData.actualTechStack.length - (userData.mvpTechStack.length - 1)
        let solvedQuestionsAdvancement: number = userData.actualSolvedQuestions/benchmarkParameters.solvedQuestionsBenchmark            
        // let flashcardsAdvancement: number = actualFlashcards/dailyApplications --- Code for the next feature of the app --- Ignore this line.

        // Now i have to make the actual verification below. 
        if((techStackAdvancement - solvedQuestionsAdvancement) >= 1){
            userAnswer[0] = 'Considering the amount of skills you have, you should be able to do ' + techStackAdvancement.toString() + ' applications a day...'
            userAnswer[1] = 'But your amount of solved LeetCode questions is only ' + userData.actualSolvedQuestions.toString() + ', limiting you to only ' + Math.floor(solvedQuestionsAdvancement).toString() + ' Applications a day.'
            userAnswer[2] = 'Do more LeetCode questions in order to increase your daily limit.'
        } else if((solvedQuestionsAdvancement - techStackAdvancement) >= 10){
            userAnswer[0] = 'Considering the amount of LeetCode questions you have solved, you should be able to do ' + Math.floor(solvedQuestionsAdvancement).toString() + ' applications a day...'
            userAnswer[1] = 'But the amount of skills you have is only ' + techStackAdvancement.toString() + ' units bigger than the minimum amount of skills necessary to get hired, limiting you to only ' + techStackAdvancement.toString() + ' Applications a day.'
            userAnswer[2] = 'Learn more actual job skills to increase your daily limit.'
        } else{
            userAnswer[0] = 'The advancement of your tech skills and LeetCode questions solved is evenly distributed.'
            userAnswer[1] = 'You should be able to apply to ' + dailyApplications.toString() + ' Jobs a day with no issues.'
            userAnswer[2] = 'Remember to keep studying everyday in order to increase this number.'
        }
    }

    return(
    <div>
        <div className='application-container'>
            <h3>
                {userAnswer.map(answer => (
                    <p key={answer}>{answer}</p>
                ))
                }
            </h3>
        </div>
    </div>
    )

}