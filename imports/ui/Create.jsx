import React, { useState } from 'react';
import { AllPosts } from '../api/posts.js';
import { Posts } from './Posts.jsx';
import { Logout } from './Logout';
export const Create = () => {
    const [post, setPost] = useState('');
    const [date, setDate] = useState('');
    var result = Object.keys(AllPosts.find('collection').collection._docs._map).map((key) => [Number(key), AllPosts.find('collection').collection._docs._map[key]]);
    toPost = {
            "post":post,
            "date":date,
            "userId":localStorage.userId
        }
    

    const submit = e => {
        e.preventDefault();

        AllPosts.insert(
            {
                post,
                date,
                "userId":localStorage.userId
            });
        
    }
    return(
        <div className="create">
            <textarea 
            className="input createInput"
            type="text"
            placeholder="Create Post"
            onChange={e => {setPost(e.target.value);
                            setDate(Date.now);
                            }}
            >
            </textarea>
            <button className="button postBtn" onClick={submit} type="submit">Post</button>



            
            <Posts />
            <Logout />
        </div>
    );

}
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[1][prop] < b[1][prop]) {    
            return 1;    
        } else if (a[1][prop] > b[1][prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}  