function UseEffectHooks (props){
    const {userData} = props;
    const {id,post_id,name,email,body} = userData;

    return(
        <tr>
            <td>
                {id}
            </td>
            <td>
                {post_id}
            </td>
            <td>
                {name}
            </td>
            <td>
                {email}
            </td>
            <td>
                {body}
            </td>
        </tr>
    )
}
export default UseEffectHooks