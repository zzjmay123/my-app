import React from 'react'
//一个组件没有生命周期的时候，就写成function形式
const  CommentList = ({comments}) =>{

    return (
        <div className="comment-list-component">
            <label>评论列表</label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment,index) =>
                        <li key={index} className="list-group-item">{comment}</li>)
                }

            </ul>
        </div>
    )

}

export default CommentList