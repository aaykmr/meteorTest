import React, { useState } from 'react';
import { AllPosts } from '../api/posts.js';
import { Posts } from './Posts.jsx';
import { Logout } from './Logout';
export const Create = () => {
    const [post, setPost] = useState('');
    const [date, setDate] = useState('');
    var response=Object.keys(AllPosts.find('collection').collection._docs._map).map((key) => [Number(key), AllPosts.find('collection').collection._docs._map[key]]).sort(GetSortOrder("date"));
    const [result,setResult]=useState(response);
    //var result = Object.keys(AllPosts.find('collection').collection._docs._map).map((key) => [Number(key), AllPosts.find('collection').collection._docs._map[key]]);

    //result.sort(GetSortOrder("date"));
    toPost = {
            "post":post,
            "date":date,
            "username":localStorage.username
        }
    

    const submit = e => {
        e.preventDefault();

        AllPosts.insert(
            {
                post,
                date,
                "username":localStorage.username
            });
        response=Object.keys(AllPosts.find('collection').collection._docs._map).map((key) => [Number(key), AllPosts.find('collection').collection._docs._map[key]]).sort(GetSortOrder("date"));
        console.log(response);
        setResult(response);
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

            <div className="postBox">
                {result.map((element) =>(
                    <div className="post">
                        <div className="userId">{element[1].username}</div>
                        <div className="postText">{element[1].post}</div>
                         <div className="date">{new Date(element[1].date).toDateString()}</div>
                    
                </div>
                ) )}                
            
            </div>

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