import './StartPage.scss'

export const StartPage = () => {


    return(

        <div className="start_page">

            <video autoPlay loop muted className='video_container'>
                <source src='/assets/video/start-page-code.mp4'type='video/mp4'/>
            </video>

            <div className="start_page_content_displaying">
                <h1 className="start_page_title">THE LAST CHANCE</h1>
                <div className="border_bottom_displaying">
                    <div className="border_bottom"></div>
                </div>
                <p className="start_page_text">SAVE THE PLANET</p>
            </div>

            <div className="start_btn_displaying">
                <img src="/assets/images/start-page/play-btn.png" alt="" className='start_btn'/>
            </div>

        </div>
    )
}