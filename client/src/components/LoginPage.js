import "../components/loginpage.css"

export default function LoginPage () {

    return ( 
        <>
        <div className= "logInPage">
            <form method="" action="">
                <div className="labelInput">
                    <label >Villian UserName:</label>
                        <input className="inputbar"type= "email" placeholder='enter email'/>
                    <label className="rightsidetext">-don't worry. your evil identity is safe with us.</label>
                </div>
                <br />
                <div className="labelInput">
                    <label>Secret Password:</label>
                        <input className="inputbar" type="password" placeholder="password" />
                    <label className="rightsidetext">-enter correctly to get into secret lair.</label>
                </div>
            </form>  
                <button className='loginButton'>
                    Enter the Evil Lair</button>
        </div>  
    </>
 );
}