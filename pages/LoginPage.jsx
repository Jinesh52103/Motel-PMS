import '../css/LoginPage.css';

export default function LoginPage() {


    function submit(e){
        e.preventDefault();
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Hotel PMS</h1>

                <form onSubmit={submit}>
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}
