import './styles.css'
export default function IntroductionPost(){
    return(
        <div>
            <div className='header'>
                <h1>Welcome to the Application Optimizing System.</h1>
                <h2>The All-in-on solution maximize your efforts and further develop your Software Engineering career.</h2>
            </div>
            
            <div className='message-container'>
                    <div className='profile-image'>IMAGE</div>
                    <div className='message-text'>MESSAGE</div>
                </div>
            <div style={{display: 'grid', placeItems: 'center', marginTop: '10vh'}}>
                <div className='post-container'>
                    <h2 className='post-title'>Post title</h2>
                    <p>Text</p>
                    <p>Text</p>

                    <h3 className='subtitle'>Post subtitle</h3>
                    <p>Text</p>
                    <p>Text</p>

                    <h3 className='subtitle'>Post subtitle</h3>
                    <p>Text</p>
                    <p>Text</p>
                </div>
            </div>
        </div>
    )
}