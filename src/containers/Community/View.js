import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import flower from '../../assets/image.jpg'

class View extends Component {
  render() {
    return (
      <React.Fragment>

        <Dashboard>
        <div className="community_container containerFull">
      <div className="image">
        <img src={flower} alt=""/>
      </div>
      <div className="title_big">
        Oba-ile Housing Estate, AKure, Ondo State.
      </div>
      <hr className="hr"/>
      <div className="details">
        <div className="detail">
          <div className="published">
            Date Pubished
          </div>
          <div className="date">
            24, July 2020
          </div>
        </div>
        <div className="detail">
          <div className="amount"> <span>Fund:</span> ₦50,000</div>
          <meter value="13200" min="0" max="50000" className="meter meter_view"></meter>
        </div>
      </div>
      <div className="text">
        <p>wdic wuidc wcd wodc wdcuwgc ug wuigc ui c wdi uwci vciwu wc iwic vwycvyi wdci iwci vwcui
          iw iivc w icvi icui cw iwc ucv ivc uwc uwgc wd wdiuc udwc wdc dwui iuwdc bwcdi iwdc iwcv wdi cdi wvi  wiei
          ub cbw c c w cwdc ooci ccu ubbcib ib ui bwdiuvb fiu fbjll balbauivb iuabvlavub a;ubv ;oubavu basuibvubei vbuiv wv
          iub wiub icwub wvbou wbvoubowo bowv ouwbv uoobwou woeb w ou rhwehojh oi hweofh oh owho owuehfoehfow weef oweih weioh
          wib uboweou we oh weio dwoc bwubui ruibwu bouwcb obwebeoudbuouowe weou woe oweh woi efow euou owheofou howehf wefu </p>
          <p>wdic wuidc wcd wodc wdcuwgc ug wuigc ui c wdi uwci vciwu wc iwic vwycvyi wdci iwci vwcui
            iw iivc w icvi icui cw iwc ucv ivc uwc uwgc wd wdiuc udwc wdc dwui iuwdc bwcdi iwdc iwcv wdi cdi wvi  wiei
            ub cbw c c w cwdc ooci ccu ubbcib ib ui bwdiuvb fiu fbjll balbauivb iuabvlavub a;ubv ;oubavu basuibvubei vbuiv wv
            iub wiub icwub wvbou wbvoubowo bowv ouwbv uoobwou woeb w ou rhwehojh oi hweofh oh owho owuehfoehfow weef oweih weioh
            wib uboweou we oh weio dwoc bwubui ruibwu bouwcb obwebeoudbuouowe weou woe oweh woi efow euou owheofou howehf wefu </p>
            <p>wdic wuidc wcd wodc wdcuwgc ug wuigc ui c wdi uwci vciwu wc iwic vwycvyi wdci iwci vwcui
              iw iivc w icvi icui cw iwc ucv ivc uwc uwgc wd wdiuc udwc wdc dwui iuwdc bwcdi iwdc iwcv wdi cdi wvi  wiei
              ub cbw c c w cwdc ooci ccu ubbcib ib ui bwdiuvb fiu fbjll balbauivb iuabvlavub a;ubv ;oubavu basuibvubei vbuiv wv
              iub wiub icwub wvbou wbvoubowo bowv ouwbv uoobwou woeb w ou rhwehojh oi hweofh oh owho owuehfoehfow weef oweih weioh
              wib uboweou we oh weio dwoc bwubui ruibwu bouwcb obwebeoudbuouowe weou woe oweh woi efow euou owheofou howehf wefu </p>
              <p>wdic wuidc wcd wodc wdcuwgc ug wuigc ui c wdi uwci vciwu wc iwic vwycvyi wdci iwci vwcui
                iw iivc w icvi icui cw iwc ucv ivc uwc uwgc wd wdiuc udwc wdc dwui iuwdc bwcdi iwdc iwcv wdi cdi wvi  wiei
                ub cbw c c w cwdc ooci ccu ubbcib ib ui bwdiuvb fiu fbjll balbauivb iuabvlavub a;ubv ;oubavu basuibvubei vbuiv wv
                iub wiub icwub wvbou wbvoubowo bowv ouwbv uoobwou woeb w ou rhwehojh oi hweofh oh owho owuehfoehfow weef oweih weioh
                wib uboweou we oh weio dwoc bwubui ruibwu bouwcb obwebeoudbuouowe weou woe oweh woi efow euou owheofou howehf wefu </p>
        </div>

        <button type="button" name="button" className="btn_donate btn delete">Donate</button>
        <div className="button">
          <button className="delete btn">Delete</button>
          <button className="edit btn">Edit</button>
        </div>
      </div>
        </Dashboard>

      </React.Fragment>
    )
  }
}

export default View
