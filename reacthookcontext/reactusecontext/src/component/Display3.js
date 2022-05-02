function Display3(props){

    const {comments} = props

    const {id,post_id,name,email,body}= comments

    return(

        <tr>

            <td>{id}</td>

            <td>{post_id}</td>

            <td>{name}</td>

            <td>{email}</td>

            <td>{body}</td>

        </tr>



    )

}

export default Display3