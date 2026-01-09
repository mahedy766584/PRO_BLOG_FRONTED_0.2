import type { FieldValues, SubmitHandler } from "react-hook-form";

const Home = () => {

    const formHandler: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)
        data.preventDefault();
        const form = data.target
        const username = form.username.value
        const password = form.password.value
        console.log({
            username,
            password
        })
    };

    return (
        <div>
            <h1>This is my tes form</h1>
            <form onSubmit={formHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;