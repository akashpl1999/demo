import React from 'react'
import './Home.css'

const Home = () => {




    return (
        <div>

            <div className='home-main'>

                <img src='https://plus.unsplash.com/premium_photo-1661715962352-4c887b0d0e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />


                <div className='home-heading'>
                    <h1>Mobile App <br></br> Development</h1>
                </div>



                <div className='main-card'>
                    <div className='sub-card'>

                        <div className='round'>
                        </div>


                        <h1>STRATEGY</h1>


                    </div>

                    <div className='sub-card'>

                        <div className='round'>

                        </div>


                        <h1>UX DESIGN</h1>


                    </div>
                    <div className='sub-card'>


                        <div className='round'>

                        </div>

                        <h1>DEVELOPMENT</h1>

                    </div>

                    <div className='sub-card'>

                        <div className='round'>

                        </div>

                        <h1>TESTING</h1>

                    </div>

                </div>

            </div>


            <div className='content-main'>
                <div className='content-div1'>
                    <h1>We create super-awesome designs</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br></br>dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>


                <div className='content-div2'>

                    <div className='card-content'>


                        <div className='logo-right' >

                            <img src='data:image/png;base64,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'
                                style={{ width: '30px', height: '30px', }} />

                        </div>

                        <div className='text-card'>

                            <h2>Amazing Design</h2>

                            <p>Sample text. Click to select the text box. Click again <br></br>or double click to start editing the text.</p>

                        </div>






                    </div>

                    <div className='card-content'>


                        <div className='logo-right' >

                            <img src='data:image/png;base64,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'
                                style={{ width: '30px', height: '30px', }} />



                        </div>

                        <div className='text-card'>

                            <h2>Amazing Design</h2>

                            <p>Sample text. Click to select the text box. Click again <br></br>or double click to start editing the text.</p>

                        </div>







                    </div>
                    <div className='card-content'>

                        <div className='logo-right' >

                            <img src='data:image/png;base64,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'
                                style={{ width: '30px', height: '30px', }} />

                        </div>
                        <div className='text-card'>

                            <h2>Amazing Design</h2>

                            <p>Sample text. Click to select the text box. Click again <br></br>or double click to start editing the text.</p>

                        </div>





                    </div>
                    <div className='card-content'>

                        <div className='logo-right' >

                            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABmhJREFUeF7tnTuoJEUUhv+jCIIoCpsKigiCuYtgJAiKCiJi4DvxkfjYxEAFDVZhFRd0MVUDDQzcQPEZ6AZmJrtgoGLgRhr4RmVFlyN1t3u5M3emu6q6qvp01T/prao+db6vTtf07ekW8NN0BqTp2XPyoACNS0ABKEDjGWh8+qwAFKDxDDQ+fVYACtB4BhqfPisABWg8A41PnxWAAjSegcanzwpAARrPwEKnr6qXA7gJwJUA9gH4FcD3AD4Vka98p8UK4JspI+1UdT+AFwBcPxDScQBPi8iHY2FTgLEMGfm7qjpWT3bwz/EM6y0AD4rIqW3tKYBnJudspqoO+OsA7o+I43MAt4rIX5v6UoCIjJbsMhF+H+oXbr8gIn+ux04BStIMPFYi+IMSUIBAKKWaJ4a/VQIKUIpowHE6+G8AuC+gm2/TYwBuFpG/XQcK4Ju2Qu0yrfz16I8CuENEdr5a8GMkA5lX/vosHxORIxTAFvzYr3oxs/gJwBUUICZ1ifsUXvm7o3+EAiSGGTrcjPBdqO9TgFBiCdsX2vANRXySAiQEGjLUzCu/D/UUBQihlqitgZXfz+RnCpAIqu8wRlZ+H+4JCuBLLkE7Qyu/n81hCpAArM8QxlZ+H/J1FMCH3sQ2Ble+m9EnInIjBZgId6y70ZX/O4D9IvINBRgjOOHvRuH/B+A2EfnATY0CTAA81NVo2T/tbisTkbf72ClABgGWAp8VoHH4FCCxAEta+TwFEP5OBrgHSCDCElc+K0AC8G6IJcNnBZgowdLhU4AJAtQAnwJEClALfAoQIUBN8ClAoAC1wacAAQLUCJ8CeApQK3wK4CFAzfApwIgAtcOnAAMCtAA/WABVPc/dSgTgMgAXdY8m+xrAcfdTY4+Kuogmhu/kuUdE3kmZRK9/BqnqpQCeAXAngIs3BPBj9xCjl0Tkt5QBlh6rJfheFUBVHwLwCoDzPWD8AuBuEfnYo625Jq3BHxSgey7dywAOBJJy9509LiKvBfabtXmL8LcK0MF3q/7RSCpuP3BARNwY5j+tbPg2gdizB0gAvz/OIiRoGf6eCpAQ/iIkaB3+igAZ4JuWgPDP4Dl7ClDVZwE8l+mE7U4HT4jIq5nGDxq21Q3f1j2Aqt4C4L3MN4makIDwVzUQVT0XgHvBwFVByyiu8awbQ5b9vdCcAO7qXtLLiyNuzFIJuPI3U3ECuB8K3hW3oKN7Fa0EXPnbOTkBvnNPjIxGGd+xSCXgyh8G5ARwLxG4IJ7jpJ5ZKwFX/jgbJ8AfAC4cb5qtRRYJCN+PlxPg2+7VY3498rRKejpg2feH5AR4M/JlRP5H8WuZpBJw5fslu2/lBLgdwLth3bK1nlQJuPLDufQXgk4AuDq8e5YeUZWAKz+Oxc7/AlT1BgAfAXBXBS18gioBV348st3/DHJvpTwUP1Tynl4SEP60vK/cEKKqB907Z6cNmbT34OmAZX96rjfdEbQICQh/Onw3wsbbwq1XAsJPA3+rAN3G0GQlAHBkwouU02VudaQ9T+DMdaDU4w7+MERV3abQbQ6tfNye4EsA11gJCIB79m7yX+yUmt/oL4MMng5K5cbnOItd+f3kRgUwejrwgZO7zeLhD+4B1rPHSrCSkSrgBwnASnBWgGrgBwtACVAV/CgBGpagOvjRAjQoQZXwJwnQkATVwp8sQAMSVA0/iQAVS1A9/GQCVChBE/CTClCRBM3ATy5ABRI0BT+LAJ0EzwN4KvfF+MTjNwc/mwALlKBJ+FkFWJAEzcLPLsACJGgafhEBDEvQPPxiAhiUgPC7HbTXHUGpdtuqauHbAeHvAlpUAAOVgPDXVnNxAWaUgPA3lPJZBJhBAsLfch6fTYCCEhD+wCZuVgEKSED4Izv42QXIKAHhe3x9MyFABgkI3wN+0QtBPvEkuk5A+D7JnuNCkE9cEyUgfJ8kz3khyCe+SAkI3ye5Fi4E+cQZKAHh+yTV0oUgn3g9n0/wL4B7U79R0ye+GtqY+RawLZmq+jCAF7tX1a43OwngARE5VgOMOeZgXoDuK+K+7rW11wK4BMAPAD4DcFRE/pkjcbUccxEC1JJsi/OgABapFIyJAhRMtsVDUQCLVArGRAEKJtvioSiARSoFY6IABZNt8VAUwCKVgjFRgILJtngoCmCRSsGYKEDBZFs8FAWwSKVgTBSgYLItHooCWKRSMKb/ATzK6gYsrLj4AAAAAElFTkSuQmCC'
                                style={{ width: '30px', height: '30px', }} />

                        </div>

                        <div className='text-card'>

                            <h2>Amazing Design</h2>

                            <p>Sample text. Click to select the text box. Click again <br></br>or double click to start editing the text.</p>

                        </div>



                    </div>




                </div>




            </div>







        </div>


    )
}

export default Home