import ApplicationsCalculator from '../ApplicationsCalculator/ApplicationsCalculator'
import './styles.css'
export default function IntroductionPost(){
    return(
        <div>
            <div className='header'>
                {/* <h1 className='text-container'>Welcome to AOS, the Application Optimizing System.</h1>
                <h2 className='text-container'>The All-in-one solution to maximize your efforts and further develop your Software Engineering career.</h2>             */}
                <div className='post-container text-container'>
                    {/* <h2 className='post-title'></h2>
                    <p>In this post you are gonna learn exactly how to use this app to track your efforts and make sure you are focusing on the right thing, and not "wasting" your time in what should not be a priority at the moment.</p>

                    <h3 className='subtitle'>But why did i make it? The answer is simple... To optimize my progress.</h3>
                    <p>If you look up online, you are gonna find a ton of articles and youtube videos showing you exactly what you need to learn in order to get into Software Engineering.</p>
                    <p>But the thing is that today, you just can't expect to know some HTML, a programming language and a framework, and you you are "simply" gonna get into tech.</p>
                    <p>Of course, there are companies out there that will test your skills based only on your capabilities of doing your day-to-day stuff.</p>
                    <p><strong>And with that, i mean some things like: </strong></p>
                    <ul>
                        <li>Knowing how to create a simple static landing page...</li>
                        <li>Knowing how to create a for loop in Javascript...</li>
                        <li>How to do conditional rendering in React... </li>
                        <li>Setting up your Redux Store and manage state globally...</li>
                    </ul>

                    <h3 className='subtitle'>But for most companies, you need more than that in order to be considered capable of doing your job.</h3>
                    <p>You need to learn how to <strong>ACE</strong> the job interview. And if you have been searching about the tech industry for the minimum amount of time, you <i>probably</i> know what i mean by that...</p>
                    <p style={{textAlign: 'center', transform: 'scale(1.4)', margin: '2.5rem 0rem'}}><strong>You need to start doing LeetCode.</strong></p>

                    <h3 style={{textAlign: 'center', marginBottom: '2rem'}}>And here is where the AOS comes in.</h3>
                    <p>With so many things we need to do and learn, knowing exactly what you should focus in a particular day or week can become the reason for a sea of <strong>anxiety</strong> and <strong>procrastination</strong>, and the terrible feeling of being <strong>lost</strong> with your progress.</p>
                    <p>The AOS analyzes exactly how far you've developed your <strong><i>technical job skills</i></strong> and your <strong><i>technical interview skills.</i></strong></p>
                    <p>Of course, there is no way an app could know the exact "percentage" of a skill like React or Node Js you have achieved, and neither you have the capability of knowing that.</p>
                    
                    <h3>Now you might be asking yourself... So what is the point of such a feature?</h3>
                    <p>And the answer is... <strong>COMMON SENSE.</strong> of course, there is no way to be aware of how much of a skill you know... </p>
                    <p>But while learning, you can just use some common sense and analyze internally: hey, do i feel ready for a job, or should i still study more to consider my self as an employable <strong><i>put your technology here</i></strong> developer?</p>
                    <p>You don't need to know every single React hooks, or every single way of doing local and global state management to be an employable React developer.</p>
                    <p>With the same analogy, you don't need to know every single way of handling authentication and Http requests to become an employable Node Js developer.</p>

                    <h3>You are not trying to become a Senior developer in your first job.</h3>
                    <p>You only need to know enough to become a useful member for the company that hires you. Forget the perfectionist idea of going through 100% of every course or documentation to consider you know something.</p>
                    <p>You are just never gonna know 100% of everything, and it is better for you if you start thinking that way as early as possible.</p>

                    <h2>Now let's go to the practical part!</h2>
                    <p>The AOS analyzes how many useful skills you have and how many LeetCode questions you have solved.</p>
                    <p>Having a lot of skills on your resume is gonna help you pass the <strong>ATS (Applicant Tracking System)</strong>  recruiters use to automatically ditch applicants, and it is also gonna make your resume look better.</p>
                    <p>Having more skills to "brag about" on your resume will make recruiters look at you with better eyes, like you would become more useful than a competitor applicant with less skills.</p>
                    <p>In the counterpart, even though your resume might look good enough for an interview, having too few LeetCode questions solved will make it difficult to pass the technical interview step.</p>
                    
                    <h3>With your data in "hands", it is time to give you the answer you're looking for.</h3>
                    <p>The AOS will now compare your data to a number of benchmarks, and tell you exactly what you should focus your efforts now.</p>
                    <p>This way you don't keep applying to 10 jobs a day, only to get no interviews, and if you get the interviews, it ends up being only to get ditched by the end of the process because you weren't capable of solving a simple question.</p>
                    <p>For each time your amount of tech skills and solved questions surpass your benchmarks, the AOS will "Allow you" to do one more application per day.</p>
                    <p><strong>So let's say you surpass your benchmarks for 2 times, you are gonna be able to do 2 applications a day. If you surpass your benchmarks for 8 times, you are gonna be able to do 8 applications a day.</strong></p>
 
                    <p>This way, you can easily control how much time you spend <strong>coding</strong> a day, how much time you spend doing <strong>LeetCode</strong> questions a day, and how much time you spend <strong>Applying for jobs</strong> a day.</p> */}
                
                    <h3 style={{marginTop: '10vh'}}>Now, let's start with the first question...</h3>
                    <ApplicationsCalculator/>

                </div>
            </div>
        </div>
    )
}