import Header from './Header'
import Content from './Content'
import Footer from './Footer'


const Course = ({ course, parts }) => {
    console.log(course)
    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Footer parts={parts}/>
        </div>
    )
}

export default Course