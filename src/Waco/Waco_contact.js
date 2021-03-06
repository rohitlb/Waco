import React from 'react'
const Waco_contact=()=>{
return(
    <div>
    <div className="container  pt-4">
    <h1  className="tc mt5 mb5" 
                style={{color:"rgb(75, 76, 77)",fontWeight:"600",fontSize:"59px",fontFamily:"Overlock"}}>
                    Contact Us
            </h1>
                <div className="register-top1 editContent">
                    <form action="#" method="post" className="register-wthree">
                        <div className="form-group editContent">
                            <div className="row">
                                <div className="col-md-6 editContent">
                                    <label className="editContent" style={{outline: "none", cursor: "inherit"}}>
                                        First name
                                    </label>
                                    <input className="form-control" type="text" placeholder="Johnson" name="email" required=""/>
                                </div>
                                <div className="col-md-6 mt-md-0 mt-4 editContent">
                                    <label className="editContent" style={{outline: "none", cursor: "inherit"}}>
                                        Last name
                                    </label>
                                    <input className="form-control" type="text" placeholder="Kc" name="name" required=""/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group editContent">
                            <div className="row">
                                <div className="col-md-6 editContent">
                                    <label className="editContent" style={{outline: "none", cursor: "inherit"}}>
                                        Mobile
                                    </label>
                                    <input className="form-control" type="text" placeholder="xxxx xxxxx" name="email" required=""/>
                                </div>
                                <div className="col-md-6 mt-md-0 mt-4 editContent">
                                    <label className="editContent" style={{outline: "none", cursor: "inherit"}}>
                                        Email
                                    </label>
                                    <input className="form-control" type="email" placeholder="example@email.com" name="email" required=""/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group editContent">
                            <div className="row">
                                <div className="col-md-12">
                                    <label className="editContent" style={{outline: "none", cursor: "inherit"}}>
                                        Your message
                                    </label>
                                    <textarea placeholder="Type your message here" className="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-info">Send</button>
                    </form>
                </div>
            </div>
    <div className="editContent mt5 flex justify-around bg-black white pa5">
        <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190
        .2798902705!2d-74.25986790365911!3d40.697670067823786!2m3!1f0!2f0!3f0!3m2!
        1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+
        York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1536917325197`} allowFullScreen=""></iframe>
    <div>
        <h2>Want to get Updated with our Artistic Taps</h2>
        <br/>
        <p className="tc">Suscribe our NewsLetter to recieve the Latest 
            News and exlusive offers every week</p>
        <div className="form-group tc">
    <input type="email" className="pa3 tc w-70 " aria-describedby="emailHelp" placeholder="Enter your Email"/>
    <br/><br/> <button className=" grow pa3 bn bg-gray white w-70">SUBSCRIBE</button>
  </div>
    </div>
    
    </div>

</div>
)

}
export default Waco_contact