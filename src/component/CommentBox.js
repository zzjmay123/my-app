import React from 'react'

class CommentBox extends React.Component{

    constructor(props){
        super(props)

        this.state={
            value:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)


    }

    handleSubmit(event){
        this.props.onAddComment(this.textInput.value)
        event.preventDefault()
    }

    render() {

        return(
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input className="form-control"
                           ref={(textInput) => {this.textInput = textInput}}
                           type="text"
                           placeholder="请输入内容"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    留言
                </button>
                <p>
                   已经有 {this.props.commentsLength}
                </p>

            </form>
        )
    }

}

export  default CommentBox