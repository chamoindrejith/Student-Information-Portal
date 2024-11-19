const Profile =({student}) =>{
    return(
        <div className = "profile">
            <img src={`profilepic/${student.profilePic}`}
            alt={student.firstName}
            />

            <table border={1}>
                <tr>
                    <td>ID :{student.studentId}</td>
                </tr>
                <tr>
                    <td>Full Name: {`${student.firstName} ${student.lastName}`}</td>
                </tr>
                <tr>
                    <td>Age: {student.age}</td>
                </tr>
                <tr>
                    <td>Course: {student.course}</td>
                </tr>
                <tr>
                    <td>Gender: {student.gender}</td>
                </tr>
                <tr>
                    <td>Address: {student.address.city}, {student.address.country}</td>
                </tr>
                <tr>
                    <td>Skills: {student.skills.join(", ")}</td>
                </tr>
            </table>
        </div>
    )
}

export default Profile;