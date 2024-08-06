import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TradeMain, TradeBrokerMain } from "./components/trade";
import AlarmHistory from "./components/common/header/AlarmHistory";
import CustomerMain from "./components/main/CustomerMain.jsx";
import AxiosInstanceTest from './components/common/AxiosInstanceTest';
import PrivateRoute from './components/common/PrivateRoute';
import SocialLoading from './components/login_signup/SocialLoading';

import {
	LoginChoice,
	Layout,
	Setting,
	Main,
	TradeView,
	Cart,
} from "./pages";

import {
	MainSetting,
	UserInfoSetting,
	PasswordChange,
} from "./components/setting";

import {
	SignUpInfo,
} from "./components/login_signup";

function App() {
  return (
    <>
        <div className="flex justify-center items-center bg-gray-100 jsu">
          <BrowserRouter>
            <Routes>
              {/* 공개된 라우트 */}
              <Route path="/login" element={<LoginChoice />} />
              <Route path="/loading" element={<SocialLoading />} />
              <Route path="/signup" element={<SignUpInfo />}/>

              {/* 보호된 라우트 */}
              <Route element={<PrivateRoute />}>
                <Route element={<Layout />}>
                  <Route path="/setting" element={<Setting />}>
                    <Route path="" element={<MainSetting />} />
                    <Route path="users" element={<UserInfoSetting />} />
                    <Route path="password" element={<PasswordChange />} />
                  </Route>
                  <Route path="/main" element={<CustomerMain />}/>

                  <Route path="/trades" element={<TradeView />}>
                    <Route path="" element={<TradeMain />} />
                    <Route path="broker/:id" element={<TradeBrokerMain />} />
                  </Route>

                  <Route path="/carts" element={<Cart />} />
                  <Route path="/alarm-history" element={<AlarmHistory />} />
                </Route>
              </Route>

              {/* 테스트 라우트 - 로그인 상태와 관계없이 접근 가능 */}
              <Route path="test" element={<AxiosInstanceTest />} />
            </Routes>
          </BrowserRouter>
      </div>
      <PWABadge />
    </>
  )
}

export default App
