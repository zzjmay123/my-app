import React from 'react'

class Welcome extends React.Component {
    render() {
        const todoList = ['learn react','learn redux']
        const isLogin = true
        return(
        <div className="this" htmlFor="">
            <h1>
                Hello World
            </h1>
            <ul>
                {
                    todoList.map(item =>
                        <li>{item}</li>
                    )
                }
            </ul>
            {
                isLogin ? <p>你已经登陆</p>:<p>请登录</p>
            }
        </div>
        )
    }
}

//导出整个组件
export default Welcome