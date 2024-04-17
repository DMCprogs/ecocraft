import * as React from 'react';
import { Link } from 'react-router-dom';
import image from '../img/logo.svg';
import styled from 'styled-components/macro';
import UilListUl from '@iconscout/react-unicons/icons/uil-list-ul';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilStore from '@iconscout/react-unicons/icons/uil-store';

import UilShoppingCart from '@iconscout/react-unicons/icons/uil-shopping-cart';
import { GoPackage, GoCreditCard } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import {
  DivBoxLogoSC,
  DivBoxHeaderSC,
  DivHeaderSC,
  DivCatalogAndSearchBoxSC,
  SpanFirstSC,
  SpanSecondSC,
  DivTextBoxSC,
  DivBoxButtonAndInputSC,
  DivBoxIconHeaderSC,
  DivBoxIconSC,
  ButtonSC,
  BoxContentButton,
  InputSC,
  DivInputBoxCS,
  DivIconBoxInput,
  LinkIconSC,
  LinkIconAdaptiveSC,
  DivBoxIconEndSC,
  SpanEndHeaderSC,
  LinkIconHideSC,
  LinkLogoSC,
  LinkLogoAdaptiveSC,
  DivBoxButtonCreateStoreSC,
  LinkProfileBoxSC,
  SpanTextCatalogSC,
  LinkProfileSC,
  LinkLogoMobileSC,
  DivBoxLogoMobileSC,
  DivMadeByBoxSC,
  DivMadeByLogoSC,
  GridTextMadeBySC,
  PTextMadeBySC,
  PTextCompanySC
} from '../styled-components-css/styles.navbar';
import { ButtonCustomSC } from '../styled-components-css/styles.custom-button';
import { OverlayDivSc } from '../styled-components-css/styles.catalog';
import AppContext from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import useAxiosFunction from '../hooks/useAxiosFunction';
import { useCookies } from 'react-cookie';
import Modal from './Modal';
import EcoModal from './Modal';
import Modalstore from './ModalRegStore';
import { useEffect } from 'react';
import axios from '../apis/admin-rest';
import { MdOutlineStorefront } from 'react-icons/md';
import { IoExitOutline } from 'react-icons/io5';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { login, logout, loggedIn, setFormValues, authError } = useAuth();
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  const [profileActive, setProfileActive] = React.useState(null);
  const { setShowCatalog, showCatalog, setOpen, setModalData, setOpenModal, setProductsLIst } =
    React.useContext(AppContext);

  const toggleProfile = () => {
    setProfileActive(!profileActive);
  };
  const showToast = (type, text) => {
    if (type === 'error') {
      toast.error(text ? text : error, {
        toastId: 'error',
      });
    } else if (type === 'success') {
      toast.success(text ? text : response, {
        toastId: 'success',
      });
    }
  };

  const handleLogout = () => {
    logout();
    showToast('success', 'You have logged out');
    // setCookie('token', response.token);
    removeCookie('token');
  };

  const openCart = () => {
    setOpenModal(true);
    setModalData({
      inputs: [{ email: 'Email', password: 'Password', repeat_password: 'Confirm password', city: 'City' }],

      button: true,
    });
  };

  useEffect(() => {
    // axiosFetch({
    //   axiosInstance: axios,
    //   auth: '',
    //   method: 'GET',
    //   url: `/api/v1/products`,
    //   requestConfig: {},
    // });

    axios
      .get('https://geoeco-t7js76po3a-uc.a.run.app/api/v1/products')
      .then((res) => {
        // console.log(res);

        setProductsLIst(res.data.data.data);
      })
      .catch((err) => { });
  }, []);

  return (
    <DivBoxHeaderSC>
      <DivHeaderSC>
        <LinkLogoSC to="/">
          <DivBoxLogoSC></DivBoxLogoSC>
        </LinkLogoSC>
        <DivCatalogAndSearchBoxSC>
          <DivBoxButtonAndInputSC>
            <ButtonCustomSC className="ButtonCustom" onClick={() => setShowCatalog(!showCatalog)} primary={true}>
              <BoxContentButton>
                <UilListUl
                  size="40"
                // color="#61DAFB"
                />

                <SpanTextCatalogSC>Catalog</SpanTextCatalogSC>
              </BoxContentButton>
            </ButtonCustomSC>

            <DivInputBoxCS>
              <InputSC
                // value={lastName}
                // onChange={onChange(getLastName)}
                type="text"
                id={'search'}
                placeholder={'I search...'}
              />
              <DivIconBoxInput>
                <UilSearch size="25" color="rgba(37, 37, 37, 0.7)" />
              </DivIconBoxInput>
            </DivInputBoxCS>
          </DivBoxButtonAndInputSC>
        </DivCatalogAndSearchBoxSC>
        {cookies['token'] !== undefined ? (
          <div class={profileActive ? 'navigation active' : 'navigation'}>
            <div class={profileActive ? 'user-box active' : 'user-box'}>
              <div class={profileActive ? 'image-box active' : 'image-box'}>
                <img src="https://i.pravatar.cc/150?img=49" alt="avatar" />
              </div>

              <p class="username">
                Jenifer Lopez
                <LinkProfileSC to="/personaldata">My profile</LinkProfileSC>
              </p>
            </div>

            <div class="profileMenu-toggle" onClick={toggleProfile}></div>

            <ul class="profileMenu">
              {/* <li>
              <LinkProfileBoxSC to="#">
                <GoPackage />
                Orders
              </LinkProfileBoxSC>
            </li> */}
              <li>
                <LinkProfileBoxSC to="/map-binding" onClick={toggleProfile}>
                  <GoCreditCard />
                  My cards
                </LinkProfileBoxSC>
              </li>

              {/* <li>
              <LinkProfileBoxSC to="#">Balance and transaction history</LinkProfileBoxSC>
            </li> */}
              <li>
                <LinkProfileBoxSC to="/vendorprofile" onClick={toggleProfile}>
                  <MdOutlineStorefront />
                  My store
                </LinkProfileBoxSC>
              </li>
              <li class="logout">
                <LinkProfileBoxSC to="/" onClick={handleLogout}>
                  <IoExitOutline />
                  Log out
                </LinkProfileBoxSC>
              </li>
              <DivMadeByBoxSC>
                <a href="https://www.cyberzenlabs.com/">
                  <DivMadeByLogoSC />
                </a>
                <GridTextMadeBySC>
                  <PTextMadeBySC>made by</PTextMadeBySC>
                  <PTextCompanySC>Cyberzen Labs</PTextCompanySC>
                </GridTextMadeBySC>
              </DivMadeByBoxSC>
            </ul>
          </div>
        ) : null}
        <LinkLogoAdaptiveSC to="/">
          <DivBoxLogoSC></DivBoxLogoSC>
          <DivBoxLogoMobileSC></DivBoxLogoMobileSC>
        </LinkLogoAdaptiveSC>

        <DivBoxIconHeaderSC>
          <DivBoxIconSC>
            <DivBoxButtonCreateStoreSC to="#" onClick={openCart}>
              Create store
            </DivBoxButtonCreateStoreSC>
            <LinkIconAdaptiveSC to="#" onClick={openCart}>
              <DivBoxIconEndSC>
                <UilSearch size="35" color="rgba(37, 37, 37, 0.8)" />
              </DivBoxIconEndSC>

              <SpanEndHeaderSC>Search</SpanEndHeaderSC>
            </LinkIconAdaptiveSC>
            <LinkIconAdaptiveSC to="/store/:id">
              <DivBoxIconEndSC>
                <UilStore size="35" color="rgba(37, 37, 37, 0.8)" />
              </DivBoxIconEndSC>

              <SpanEndHeaderSC>Store</SpanEndHeaderSC>
            </LinkIconAdaptiveSC>
            {cookies['token'] === undefined ? (
              <LinkIconSC to="/signin">
                <DivBoxIconEndSC>
                  <UilUser size="35" color="rgba(37, 37, 37, 0.8)" />
                </DivBoxIconEndSC>

                <SpanEndHeaderSC>Sign in</SpanEndHeaderSC>
              </LinkIconSC>
            ) : null}
            <LinkIconHideSC to="/cart">
              <DivBoxIconEndSC>
                <UilShoppingCart size="35" color="rgba(37, 37, 37, 0.8)" />
              </DivBoxIconEndSC>

              <SpanEndHeaderSC>Cart</SpanEndHeaderSC>
            </LinkIconHideSC>
          </DivBoxIconSC>
        </DivBoxIconHeaderSC>
      </DivHeaderSC>
    </DivBoxHeaderSC>
  );
};

export default ResponsiveAppBar;
