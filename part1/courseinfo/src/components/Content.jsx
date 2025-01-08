const Content = ({ parts }) => { 
    console.log(parts)
    return (
      <>
        {parts.map(part => <p>{part.name} {part.exercises}</p> )}
      </>
    )
  }

export default Content