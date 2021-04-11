import React from 'react';
import {  AllPosts } from '../api/posts.js';

export const Posts = () => {
    
    var result = Object.keys(AllPosts.find('collection').collection._docs._map).map((key) => [Number(key), AllPosts.find('collection').collection._docs._map[key]]);
    getResult();
    async function getResult(){
        try{
            result = await Object.keys(AllPosts.find('collection').collection._docs._map).map((key) => [Number(key), AllPosts.find('collection').collection._docs._map[key]]);
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    }
    
    result.sort(GetSortOrder("date"));
    var items = [];
    result.forEach(element => {

        var d=new Date(element[1].date).toDateString();

        items.push(
            <div className="post">
                 <div className="userId">{element[1].userId}</div>
                 <div className="postText">{element[1].post}</div>
                 <div className="date">{d}</div>
            
            </div>
        )
    });

    

    return(
        <div className="postBox">
           
            {items}
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