import Products from "../components/Shop/Products";
import Banner from "../components/Home/Banner";
import Brand from "../components/Home/Brand";
import Blog from "../components/Home/Blog";
import Blog1 from "../assets/blog_1.jpg";
import Blog2 from "../assets/blog_2.jpg";
import Blog3 from "../assets/blog_3.jpg";
const HomePage = () => {
  const blogContent = [
    {
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis,numquam officiis aliquid ipsam fuga.",
      author: "John Doe",
      image: Blog1,
    },
    {
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis,numquam officiis aliquid ipsam fuga.",
      author: "John Doe",
      image: Blog2,
    },
    {
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis,numquam officiis aliquid ipsam fuga.",
      author: "John Doe",
      image: Blog3,
    },
  ];

  return (
    <div data-testid="homepage">
      <Banner />
      <Products />
      <Brand />
      <section id="blogs" className="py-5">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block">
              Our Latest Blog
            </h2>
          </div>
          <div className="row g-3">
            {blogContent.map((item) => (
              <Blog key={item.title} content={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
