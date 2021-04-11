import React, { useState } from 'react';

export const Logout = () => {
    const submit = e => {
        e.preventDefault();
        localStorage.userId="";
        history.back();
    }
    return(
        <div className="Logout">
            <button className="button logoutBtn" onClick={submit} type="submit">Logout</button>

        </div>
    )
}