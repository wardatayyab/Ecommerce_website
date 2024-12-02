import React, { useState } from 'react';
import All from './All';
import Swal from 'sweetalert2';

const ProfilePage = () => {

  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessageClick = () => {
    Swal.fire({
      title: 'Send a Message',
      text: 'Write your message below:',
      icon: 'info',
      input: 'textarea', 
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true,
      confirmButtonText: 'Send',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: (message) => {
        if (!message) {
          Swal.showValidationMessage('Please write a message');
          return false;
        }
        return message; 
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Message Sent!',
          text: `Your message: ${result.value}`,
          icon: 'success',
        });
      }
    });
  };

  return (
    <>
      <All />
      <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#2C3E50",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        fontFamily: 'Georgia, serif', 
        marginTop: "-570px",
        marginLeft: "-440px",
      }}
    >
      Profile
    </h1>
      <div style={styles.container}>

        <div style={styles.sidebar}>
          <div style={styles.header}>
            <img src="pro.jpg" alt="Profile" style={styles.profilePicture} />
            <h2 style={styles.name}>WARDA TAYYAB</h2>
            <p style={styles.position}> Full Stack Web Developer</p>
            <button
              style={styles.followBtn}
              onClick={handleFollowClick}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
            <button
              style={styles.messageBtn}
              onClick={handleMessageClick}
            >
              Message
            </button>
          </div>

          <div style={styles.skills}>
            <h4 style={styles.skillsTitle}>Skills</h4>
            <div style={styles.skillsList}>
              <span style={styles.skillsListSpan}>HTML</span>
              <span style={styles.skillsListSpan}>JavaScript</span>
              <span style={styles.skillsListSpan}>CSS</span>
              <span style={styles.skillsListSpan}>Bootstrap</span>
              <span style={styles.skillsListSpan}>React</span>
              <span style={styles.skillsListSpan}>PHP</span>
              <span style={styles.skillsListSpan}>Redux</span>
              <span style={styles.skillsListSpan}>Laravell</span>
              <span style={styles.skillsListSpan}>Mysql</span>
            </div>
          </div>

          <div style={styles.about}>
            <h4 style={styles.aboutTitle}>About</h4>
            <p style={styles.aboutText}>Lives in Bhawalpur</p>
            <p style={styles.aboutText}>Works at Website</p>
            <p style={styles.aboutText}>From Boston</p>
          </div>
        </div>

       
        <div style={styles.feedContainer}>
          <h3 style={styles.feedTitle}>Activities</h3>
          <div style={styles.feed}>
            {/* Feed Item 1 */}
            <div style={styles.feedItem}>
              <img
                src="pro1.jpg"
                alt="Activity 1"
                style={styles.feedImage}
              />
              <p>
                <strong>Vanessa Tucker</strong> started following Christina
                Mason
              </p>
              <p style={styles.time}>5m ago</p>
            </div>
            {/* Description for Feed Item 1 */}
            <p style={styles.feedDescription}>
              Vanessa has been exploring new projects and connecting with
              developers.
            </p>

            {/* Feed Item 2 */}
            <div style={styles.feedItem}>
              <img
                src="pro2.jpg"
                alt="Activity 2"
                style={styles.feedImage}
              />
              <p>
                <strong>Charles Hall</strong> posted something on Christina
                Mason's timeline
              </p>
              <p style={styles.time}>30m ago</p>
            </div>
            {/* Description for Feed Item 2 */}
            <p style={styles.feedDescription}>
              Charles shared a great article on web development trends.
            </p>

            {/* Feed Item 3 */}
            <div style={styles.feedItem}>
              <img
                src="pro3.jpg"
                alt="Activity 3"
                style={styles.feedImage}
              />
              <p>
                <strong>Christina Mason</strong> posted a new blog
              </p>
              <p style={styles.time}>1h ago</p>
            </div>
            {/* Description for Feed Item 3 */}
            <p style={styles.feedDescription}>
              Christina's new blog dives into the latest React best practices.
            </p>

            {/* Feed Item 4 */}
            <div style={styles.feedItem}>
              <img
                src="pro5.jpg"
                alt="Activity 4"
                style={styles.feedImage}
              />
              <p>
                <strong>William Harris</strong> posted two photos on Christina
                Mason's timeline
              </p>
              <p style={styles.time}>3h ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const styles = {
  container: {
    display: 'flex',
    margin: '20px',
    marginLeft: '320px',
    marginTop: '20px',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: 'transparent',
    overflowY: 'auto',  // Enables vertical scrolling
    height: '500px',  // Set the container to fill the full screen height minus margins
    scrollbarWidth: 'none',  // Hide scrollbar in Firefox
    paddingBottom: '20px',  // Prevent content from being hidden by the bottom scrollbar
  },
  
  sidebar: {
    width: '350px',
    padding: '20px',
    height: '680px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    paddingBottom: '20px',
    borderBottom: '2px solid #ececec',
    marginBottom: '20px',
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  },
  name: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: '15px',
  },
  position: {
    fontSize: '16px',
    color: '#7f8c8d',
    margin: '5px 0',
  },
  followBtn: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    margin: '10px 0',
    transition: 'background-color 0.3s',
  },
  messageBtn: {
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    margin: '10px 0',
    transition: 'background-color 0.3s',
  },
  skills: {
    marginTop: '20px',
  },
  skillsTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  skillsListSpan: {
    margin: '5px',
    padding: '5px 10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '25px',
    fontSize: '14px',
    color: '#7f8c8d',
  },
  about: {
    marginTop: '20px',
  },
  aboutTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  aboutText: {
    fontSize: '14px',
    color: '#7f8c8d',
    marginBottom: '8px',
  },
  feedContainer: {
    flexGrow: '1',
    padding: '20px',
    backgroundColor: '#ffffff',
    width: '600px',
    height: '840px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginLeft: '20px',
  },
  feed: {
    marginTop: '15px',
  },
  feedTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '15px',
  },
  feedItem: {
    backgroundColor: 'transparent',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  feedImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  },
  time: {
    fontSize: '12px',
    color: '#7f8c8d',
    marginTop: '5px',
  },
  feedDescription: {
    fontSize: '14px',
    color: '#2c3e50',
  },
};

export default ProfilePage;

