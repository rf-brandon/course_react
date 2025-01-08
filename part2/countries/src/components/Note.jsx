const Note = ({ key_, content }) => { 
    console.log(content)
    return (
        <li key={key_}>{content}</li>
    )
  }

export default Note