
function User(props) {

    // const { data } = props

    return (
        <div>
            <h1>user component</h1><br />

            <h3>{props.data.email}</h3>
            <h3>{props.data.name}</h3>
            {/* or */}
            {/* <h3>{data.name}</h3> */}
            {/* <h3>{data.email}</h3> */}

            {/* two methods use to transfer data from one component to another component */}

        </div>
    )
}
export default User;