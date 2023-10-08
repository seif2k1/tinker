import About from "@/components/about/About";
import Gallery from "@/components/gallery/Gallery";
import Main from "@/components/main-section/Main";
import Post from "@/components/blog-post/Post";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  return (
    <main className="">
      <Navbar />
      <Main />
      <About />
      <Gallery />
      <Post />
      <Contact />
      <Footer />
    </main>
  );
}
