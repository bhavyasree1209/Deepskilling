import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = false;

  let courseComponent;

  if (showCourses) {
    courseComponent = <CourseDetails />;
  }

  return (
    <div style={{ margin: "20px" }}>

      <h1>Blogger App</h1>

      {/* Method 1 - Logical AND */}

      {showBooks && <BookDetails />}

      <hr />

      {/* Method 2 - Ternary Operator */}

      {showBlogs ? (
        <BlogDetails />
      ) : (
        <h3>No Blogs Available</h3>
      )}

      <hr />

      {/* Method 3 - Element Variable */}

      {courseComponent}

    </div>
  );
}

export default App;