import React, { useState } from 'react';

const Card = (props) => {
  const [modal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div
        className="box btn_shadow"
        onClick={toogleModal}
        onKeyPress={toogleModal}
        role="button"
        tabIndex={0}
      >
        <div className="img">
          <img
            src={`https://picsum.photos/600/400?random=${props.id}`}
            alt=""
          />
        </div>
        <div className="category d_flex">
          <span>17 de Septiembre, 2022</span>
        </div>
        <div className="title">
          <h2>Digital Marketing for developers</h2>
          <a href="#popup" className="arrow" onClick={toogleModal}>
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>

      {/*Modal */}
      {modal && (
        <div className="modal modal-blog">
          <div onClick={toogleModal} className="overlay" role="none" />
          <div className="modal-content">
            <div className="modal-img left">
              <img
                src={`https://picsum.photos/600/400?random=${props.id}`}
                alt=""
              />
            </div>
            <div className="modal-text right">
              <span>17 de Septiembre, 2022</span>
              <h1>Digital Marketing for developers</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                ut deserunt repellat modi explicabo omnis officia, reprehenderit
                deleniti, fugiat quasi mollitia nesciunt velit est, consequatur
                amet eius vero voluptatum commodi! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Ratione nobis optio, dolor ea
                molestias ullam sequi omnis libero
              </p>
              <h1>Titulo1</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem animi ut porro voluptate facere tenetur eum quas
                cupiditate saepe est quis placeat similique modi natus nulla,
                quia autem rem ab.
              </p>
              <h1>Titulo3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores adipisci tempora sunt sit neque, est sint facilis
                illo, quidem harum assumenda exercitationem totam eum voluptates
                veniam a excepturi nulla fugiat!
              </p>
              <button
                className="close-modal btn_shadow"
                onClick={toogleModal}
                type="button"
              >
                <i className="fas fa-times" />
              </button>
              <div className="contact mtop">
                <h1>Leave a Reply</h1>
                <form action="" className="blog_contact d_flex">
                  <div className="left">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Website" />
                    <button type="submit" className="btn_shadow">
                      SUBMIT NOW
                    </button>
                  </div>
                  <div className="right">
                    <textarea cols="30" rows="20" placeholder="Comment" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
