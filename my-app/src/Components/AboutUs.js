import React from 'react';
import Header from './Header';
import Footer from './Footer'; 

const AboutUs = () => {
    const teamMembers = [
        { id: 1, name: 'John Doe', title: 'CEO & Founder', image: 'img47.jpg' },
        { id: 2, name: 'Jane Smith', title: 'Marketing Director', image: 'img48.jpg' },
        { id: 3, name: 'Emily Johnson', title: 'Product Manager', image: 'img49.jpg' },
        { id: 4, name: 'Michael Brown', title: 'Developer', image: 'img50.jpg' },
    ];

    const blogPosts = [
        {
            id: 1,
            title: 'Understanding React Hooks',
            description: 'A deep dive into the concepts and uses of React Hooks for functional components.',
            image: 'img54.jpg',
        },
        {
            id: 2,
            title: 'CSS Grid vs Flexbox',
            description: 'Comparing CSS Grid and Flexbox to help you choose the right layout tool.',
            image: 'img57.jpg',
        },
        {
            id: 3,
            title: 'JavaScript ES6 Features',
            description: 'Exploring the new features in ES6 and how they improve JavaScript development.',
            image: 'img55.jpg',
        },
    ];

    return (
        <div>
            <style>{`
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }

                header {
                    background: #007bff;
                    color: white;
                    padding: 20px;
                    text-align: center;
                }

                h1 {
                    font-size: 2.5rem;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .about-section {
                    margin-bottom: 40px;
                    padding: 20px;
                    border-radius: 8px;
                    background: #f9f9f9;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .about-section h2 {
                    color: #555;
                    font-size: 2rem;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 20px;
                    font-family: 'Georgia', serif; /* Stylish font family */
                }

                .about-section img {
                    width: 800px;
                    height: auto;
                    border-radius: 8px;
                    margin: 20px 0;
                }

                .about-section p {
                    color: #666;
                    line-height: 1.6;
                }

                .team-section, .blog-section {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                }

                .team-card {
                    background: white;
                    border-radius: 8px;
                    padding: 15px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    width: 250px;
                }

                .team-card img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin-bottom: 10px;
                }

                .blog-post {
                    background: white;
                    border-radius: 8px;
                    padding: 15px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    width: 300px; /* Increased width for blog post cards */
                }

                .blog-post img {
                    width: 100%;
                    height: 300px;
                    border: none;
                    object-fit: cover;
                }

                .blog-post h3 {
                    margin: 10px 0;
                    color: #333;
                    font-family: 'Georgia', serif; /* Stylish font family */
                }

                .blog-post p {
                    padding: 0 10px;
                    color: #666;
                }
            `}</style>
            <Header /> 

            <div className="about-container">
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <img src="img45.jpg" alt="Our Mission" />
                    <p>
                        Our mission is to provide the best services to our customers while ensuring quality and satisfaction.
                        We strive to innovate and create value in everything we do.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Meet Our Team</h2>
                    <div className="team-section">
                        {teamMembers.map(member => (
                            <div className="team-card" key={member.id}>
                                <img src={member.image} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p>{member.title}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-section">
                    <h2>Our History</h2>
                    <img src="img52.jpg" alt="Our History" />
                    <p>
                        Founded in 2024, we have grown from a small startup to a thriving business, serving customers around the world.
                    </p>
                </section>

                <section className="about-section blog-section">
                    <h2>From Our Blog</h2>
                    <div className="blog-section">
                        {blogPosts.map(post => (
                            <div className="blog-post" key={post.id}>
                                <img src={post.image} alt={post.title} />
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutUs;
