
// import React from 'react';

// export default function ReactMultiCarousel() {
//   return (
//     <>
//       <br /><br />
//       <style>
//         {`
//           .card-container {
//             background-image: url('baner2.jpg');
//             background-size: cover;
//             background-position: center;
//             height: 300px;
//             width: 100%;  /* Ensures width is always 100% */
//             position: relative; /* For ensuring image fits within the container */
//             overflow: hidden; /* Hides overflow for smooth responsive scaling */
//             border-radius: 10px; /* Optional: to give a rounded border effect */
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: shadow effect */
//           }

//           @media (max-width: 1024px) {
//             .card-container {
//               height: 250px; 
//             }
//           }

//           @media (max-width: 768px) {
//             .card-container {
//               height: 200px;
//             }
//           }

//           @media (max-width: 480px) {
//             .card-container {
//               height: 150px; 
//             }
//           }
//         `}
//       </style>
//       <div className="card-container">
//         {/* Content of your card goes here */}
//       </div>
//     </>
//   );
// }




import React from 'react';

export default function ReactMultiCarousel() {
  return (
    <>
      <br /><br />
      <style>
        {`
          .card-container {
            background-image: url('baner2.jpg');
            background-size: cover;
            background-position: center;
            height: 300px;
            width: 100%;  /* Ensures width is always 100% */
            position: relative; /* For ensuring image fits within the container */
            overflow: hidden; /* Hides overflow for smooth responsive scaling */
            border-radius: 10px; /* Optional: to give a rounded border effect */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: shadow effect */
            display: block;  /* Ensures proper display */
            object-fit: cover; /* Ensures the image fills the container proportionally */
          }

          /* Media Queries for Responsive Behavior */
          @media (max-width: 1024px) {
            .card-container {
              height: 250px; 
            }
          }

          @media (max-width: 768px) {
            .card-container {
              height: 200px;
            }
          }

          @media (max-width: 480px) {
            .card-container {
              height: 150px; 
            }
          }

          /* Optional: Adjustments for ensuring good display on smaller devices */
          @media (max-width: 320px) {
            .card-container {
              height: 80px; 
            }
          }
        `}
      </style>
      <div className="card-container">
        {/* Content of your card goes here */}
      </div>
    </>
  );
}
