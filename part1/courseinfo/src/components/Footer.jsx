const Footer = ({ parts }) => {
    
    const total = parts.reduce((s, p) => {
        console.log('what is happening', s, p)
        return s + p.exercises;
    },0)

    console.log(total)
    return (
        <div>
            <p>Total of {total} exercises</p>
        </div>
    )
}

export default Footer