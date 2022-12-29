const mvpTechStack: string[] = ['Git', 'HTML', 'JavaScript', 'TypeScript', 'BootStrap', 'Redux']
const fullTechStack: string[] = [...mvpTechStack, 'Sass', 'NextJs', 'FramerMotion', 'React Native', 'Express Js', 'MongoDb', 'PostgreSQL', 'Jest']

// Insert your current data below this line

const actualTechStack: string[] = fullTechStack
const actualSolvedQuestions: number = 30

// Insert your current data above this line

const benchmarkParameters: {stackItemsBenchmark: number; solvedQuestionsBenchmark: number} = {
    stackItemsBenchmark: mvpTechStack.length,
    solvedQuestionsBenchmark: 10
}


export default function ShowAnswer(){
    let answer: string = ''
    let dailyApplications: number
    let arrayOfAnswers: string[] = ['']

    if (actualTechStack.length < mvpTechStack.length){
        answer = "I'm sorry, it looks like you still don't have enough dev skills for an actual job. Keep studying and you are gonna get there!"
    } else if(actualSolvedQuestions < benchmarkParameters.solvedQuestionsBenchmark){
        // answer = "It looks like you already have enough skills for an actual job, but it will be hard to pass the interview process with that few leetcode questions answered. " + actualSolvedQuestions.toString + " LeetCode questions answered. I advise you to start applying for 1 job per day, and keep studying and doing leetcode so you get better at the interviews."
        answer = "It looks like you already have enough skills for an actual job, but it will be hard to pass the interview process with that few LeetCode questions answered. Keep studying! You are gonna get there."
    } else{
        // let dailyApplications: number = 0
        // for(actualSolvedQuestions < benchmarkParameters.solvedQuestionsBenchmark && actualTechStack.length < fullTechStack.length; actualSolvedQuestions + benchmarkParameters.solvedQuestionsBenchmark && ){

        // }
        for(dailyApplications = 0; dailyApplications < (actualSolvedQuestions / benchmarkParameters.solvedQuestionsBenchmark) && dailyApplications < (actualTechStack.length - mvpTechStack.length); dailyApplications++){
            console.log()
            arrayOfAnswers = [...arrayOfAnswers, 'Daily applications: ' +  dailyApplications.toString() + ' Actual Tech Stack: ' + actualTechStack.length.toString() + ' Actual Solved Questions: ' + actualSolvedQuestions.toString()]
            console.log('Daily applications: ' +  dailyApplications + ' Actual Tech Stack: ' + actualTechStack.toString() + ' Actual Solved Questions: ' + actualSolvedQuestions.toString)
        }   
    }
    const stringElements = arrayOfAnswers.map(answer => <><div style={{display: 'block'}} key={answer}>{answer}</div><br/></>);
    return(
        <>
            <h1>Return: </h1>
            <h3>
                {stringElements}
            </h3>
        </>
    )    
}

