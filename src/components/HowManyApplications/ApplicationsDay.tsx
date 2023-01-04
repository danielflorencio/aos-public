import './styles.css'
const mvpTechStack: string[] = ['Git', 'HTML', 'JavaScript', 'TypeScript', 'BootStrap']
const fullTechStack: string[] = [...mvpTechStack, 'Redux', 'Sass', 'NextJs', 'FramerMotion', 'React Native', 'Express Js', 'MongoDb', 'PostgreSQL', 'Jest']

const benchmarkParameters: {stackItemsBenchmark: number; solvedQuestionsBenchmark: number; flashcardsBenchmark: number} = {
    stackItemsBenchmark: mvpTechStack.length,
    solvedQuestionsBenchmark: 6,
    flashcardsBenchmark: 3
}

// Insert your current data below this line

const actualTechStack: string[] = [...mvpTechStack, 'Redux']
const actualSolvedQuestions: number = 20
const actualFlashcards: number = 3

// Insert your current data above this line

export default function ShowAnswer(){
    let focus: string[] = ['']
    let answer: string = ''
    let dailyApplications: number
    let arrayOfAnswers: string[] = ['']

    if (actualTechStack.length < mvpTechStack.length){
        answer = "I'm sorry, it looks like you still don't have enough dev skills for an actual job. Keep studying and you are gonna get there!"
    } else if(actualSolvedQuestions < benchmarkParameters.solvedQuestionsBenchmark){
        answer = "It looks like you already have enough skills for an actual job, but it will be hard to pass the interview process with that few LeetCode questions answered. Keep studying! You are gonna get there."
    } else{
        
        function verifyDailyApplications(){ 
            // This function verifies how many applications you can do, considering your benchmarks and how many goals you have achieved overall.
            // It could surely be put inside the for() loop without the need of this function...
            // But i put it that way so the code becomes more readable, without the need for one giant for() line of code.
            // If you wanna add more conditionals and/or benchmark verifications, just add another '&&' and the condition right below.
            if(
                dailyApplications <= (actualSolvedQuestions / benchmarkParameters.solvedQuestionsBenchmark) 
                && 
                dailyApplications <= (actualTechStack.length - mvpTechStack.length + 1)
            ) return true
        }
        for(dailyApplications = 1; verifyDailyApplications(); dailyApplications++){
            arrayOfAnswers = [...arrayOfAnswers, 'Daily applications: ' +  dailyApplications.toString() + ' Actual Tech Stack: ' + actualTechStack.length.toString() + ' Actual Solved Questions: ' + actualSolvedQuestions.toString()]
        }

        function verifyFocus(){ // This function verifies where you should focus your efforts now. 

            // The conditionals below verify which of your progress markers are the farthest (verify this word) away from the benchmarks.

            let techStackAdvancement: number = (actualTechStack.length - (mvpTechStack.length - 1))/(dailyApplications - 1)
            let solvedQuestionsAdvancement: number = actualSolvedQuestions/(benchmarkParameters.solvedQuestionsBenchmark*dailyApplications)
            let flashcardsAdvancement: number = actualFlashcards/dailyApplications

            console.log('techStackAdvancement: ', techStackAdvancement)
            console.log('solvedQuestionsAdvancement: ', solvedQuestionsAdvancement)
            console.log('flashcardsAdvancement: ', flashcardsAdvancement)
            
            // Now i have to make the actual verification below.

            // Code the verification above.


            // Main Function Code 
            if(actualSolvedQuestions > benchmarkParameters.solvedQuestionsBenchmark*dailyApplications && actualFlashcards < benchmarkParameters.flashcardsBenchmark*dailyApplications){
                focus[0] = 
                'You have solved ' 
                + actualSolvedQuestions.toString() + 
                " questions, while the amount of flash cards you've done is only " +
                actualFlashcards.toString() +
                '. You should focus on doing more flashcards now.'
            } 
        }

        verifyFocus()
   
    }
    
    const stringElements = arrayOfAnswers.map(answer => <><div style={{display: 'block'}} key={answer}>{answer}</div><br/></>);
    
    return(
        <>
            <h1>Return: </h1>   
            <h3>
                {stringElements}
            </h3>
            <h3>
                {focus[0]}
            </h3>
        </>
    )    
}