import React, { useState } from 'react';

const Forms = () => {
    const [formData,setformData]=useState({
        username:"Rupan",
        emailid:" ",
        password:"",
        gender:"others"
    })
    return (
        <div>
            <h1>forms</h1>
            <form>
                <div>
                    <p>
                        <label>User Name:</label>
                    </p>
                    <p>
                        <input type='text'
                        name='username'
                        value={formData.username}
                        placeholder='Enter Your Name'
                        required
                        />
                    </p>
                </div>
                <div>
                    <p>
                        <label>Email:</label>

                    </p>
                    <p>
                        <input type='email'
                        name='emailid'
                        value={formData.emailid}
                        placeholder='Enter your email id'
                        required
                        />
                    </p>
                </div>
                <div>
                    <p>
                        <label>Password:</label>
                    </p>
                    <p>
                        <input type='password'
                        name='password'
                        value={formData.password}
                        placeholder='Enter your Passcode'
                        required
                        />
                    </p>

                </div>
                <div>
                    <p>
                        <label>Gender:</label>
                    </p>
                    <p>
                        <select name="gender" value={formData.gender}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Rather Not To Say</option>
                        </select>
                    </p>
                </div>
                <button name='submit'>Register</button>
            </form>
        </div>
    );
};

export default Forms;