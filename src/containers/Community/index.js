import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import bag from '../../assets/garbage_bag.jpg'

class Community extends Component {
  render() {
    return (
      <React.Fragment>

        <Dashboard>
          <div className="community_container">
            <ul className="card">
              <li className="cards__item">
                <div className="card">
                  <div className="card_image">
                    <img src="https://unsplash.it/800/600?image=59" alt="" className="card__image" />
                  </div>
                  <div className="card__content">
                    <div className="amount"> <span>Fund:</span> ₦50,000</div>
                    <meter value="13200" min="0" max="50000" className="meter"></meter>
                    <div className="card__title">Oba-Ile Housing Estate, Akure.</div>
                    <p className="card__text">Oba ile is situated inside the cabon of akure and the most dirtiest area yet, we love your donation to support this community in moving forward
            throught cleaning its environment and surrounding, lets keep Nigeria clean. </p>
                    <div className="button">
                      <button className="delete btn">Delete</button>
                      <button className="edit btn">Edit</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <div className="card_image">
                    <img src="https://unsplash.it/800/600?image=11" alt="" />
                  </div>
                  <div className="card__content">
                    <div className="amount"> <span>Fund:</span> ₦50,000</div>
                    <meter value="13200" min="0" max="50000" className="meter"></meter>
                    <div className="card__title">Oba-Ile Housing Estate, Akure.</div>
                    <p className="card__text">Oba ile is situated inside the cabon of akure and the most dirtiest area yet, we love your donation to support this community in moving forward
              throught cleaning its environment and surrounding, lets keep Nigeria clean. </p>
                    <div className="button">
                      <button className="delete btn">Delete</button>
                      <button className="edit btn">Edit</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <div className="card_image">
                    <img src="https://unsplash.it/800/600?image=39" alt="" />
                  </div>
                  <div className="card__content">
                    <div className="amount"> <span>Fund:</span> ₦50,000</div>
                    <meter value="13200" min="0" max="50000" className="meter"></meter>
                    <div className="card__title">Oba-Ile Housing Estate, Akure.</div>
                    <p className="card__text">Oba ile is situated inside the cabon of akure and the most dirtiest area yet, we love your donation to support this community in moving forward
                throught cleaning its environment and surrounding, lets keep Nigeria clean. </p>
                    <div className="button">
                      <button className="delete btn">Delete</button>
                      <button className="edit btn">Edit</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <div className="card_image">
                    <img src="https://unsplash.it/800/600?image=82" alt="" />
                  </div>
                  <div className="card__content">
                    <div className="amount"> <span>Fund:</span> ₦50,000</div>
                    <meter value="13200" min="0" max="50000" className="meter"></meter>
                    <div className="card__title">Oba-Ile Housing Estate, Akure.</div>
                    <p className="card__text">Oba ile is situated inside the cabon of akure and the most dirtiest area yet, we love your donation to support this community in moving forward
                  throught cleaning its environment and surrounding, lets keep Nigeria clean. </p>
                    <div className="button">
                      <button className="delete btn">Delete</button>
                      <button className="edit btn">Edit</button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <div className="card_image">
                    <img src="https://unsplash.it/800/600?image=82" alt="" />
                  </div>
                  <div className="card__content">
                    <div className="amount"> <span>Fund:</span> ₦50,000</div>
                    <meter value="13200" min="0" max="50000" className="meter"></meter>
                    <div className="card__title">Oba-Ile Housing Estate, Akure.</div>
                    <p className="card__text">Oba ile is situated inside the cabon of akure and the most dirtiest area yet, we love your donation to support this community in moving forward
                  throught cleaning its environment and surrounding, lets keep Nigeria clean. </p>
                    <div className="button">
                      <button className="delete btn">Delete</button>
                      <button className="edit btn">Edit</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </Dashboard>

      </React.Fragment>
    )
  }
}

export default Community
